import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { OrderAnItemService } from '../service/order-an-item.service';
import { IOrderAnItem } from '../order-an-item.model';
import { OrderAnItemFormService } from './order-an-item-form.service';

import { OrderAnItemUpdateComponent } from './order-an-item-update.component';

describe('OrderAnItem Management Update Component', () => {
  let comp: OrderAnItemUpdateComponent;
  let fixture: ComponentFixture<OrderAnItemUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let orderAnItemFormService: OrderAnItemFormService;
  let orderAnItemService: OrderAnItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, OrderAnItemUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(OrderAnItemUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(OrderAnItemUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    orderAnItemFormService = TestBed.inject(OrderAnItemFormService);
    orderAnItemService = TestBed.inject(OrderAnItemService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const orderAnItem: IOrderAnItem = { id: 456 };

      activatedRoute.data = of({ orderAnItem });
      comp.ngOnInit();

      expect(comp.orderAnItem).toEqual(orderAnItem);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOrderAnItem>>();
      const orderAnItem = { id: 123 };
      jest.spyOn(orderAnItemFormService, 'getOrderAnItem').mockReturnValue(orderAnItem);
      jest.spyOn(orderAnItemService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ orderAnItem });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: orderAnItem }));
      saveSubject.complete();

      // THEN
      expect(orderAnItemFormService.getOrderAnItem).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(orderAnItemService.update).toHaveBeenCalledWith(expect.objectContaining(orderAnItem));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOrderAnItem>>();
      const orderAnItem = { id: 123 };
      jest.spyOn(orderAnItemFormService, 'getOrderAnItem').mockReturnValue({ id: null });
      jest.spyOn(orderAnItemService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ orderAnItem: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: orderAnItem }));
      saveSubject.complete();

      // THEN
      expect(orderAnItemFormService.getOrderAnItem).toHaveBeenCalled();
      expect(orderAnItemService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOrderAnItem>>();
      const orderAnItem = { id: 123 };
      jest.spyOn(orderAnItemService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ orderAnItem });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(orderAnItemService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
