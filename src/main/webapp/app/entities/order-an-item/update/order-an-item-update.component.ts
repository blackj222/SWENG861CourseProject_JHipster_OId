import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IOrderAnItem } from '../order-an-item.model';
import { OrderAnItemService } from '../service/order-an-item.service';
import { OrderAnItemFormService, OrderAnItemFormGroup } from './order-an-item-form.service';

@Component({
  standalone: true,
  selector: 'jhi-order-an-item-update',
  templateUrl: './order-an-item-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class OrderAnItemUpdateComponent implements OnInit {
  isSaving = false;
  orderAnItem: IOrderAnItem | null = null;

  protected orderAnItemService = inject(OrderAnItemService);
  protected orderAnItemFormService = inject(OrderAnItemFormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: OrderAnItemFormGroup = this.orderAnItemFormService.createOrderAnItemFormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ orderAnItem }) => {
      this.orderAnItem = orderAnItem;
      if (orderAnItem) {
        this.updateForm(orderAnItem);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const orderAnItem = this.orderAnItemFormService.getOrderAnItem(this.editForm);
    if (orderAnItem.id !== null) {
      this.subscribeToSaveResponse(this.orderAnItemService.update(orderAnItem));
    } else {
      this.subscribeToSaveResponse(this.orderAnItemService.create(orderAnItem));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrderAnItem>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(orderAnItem: IOrderAnItem): void {
    this.orderAnItem = orderAnItem;
    this.orderAnItemFormService.resetForm(this.editForm, orderAnItem);
  }
}
