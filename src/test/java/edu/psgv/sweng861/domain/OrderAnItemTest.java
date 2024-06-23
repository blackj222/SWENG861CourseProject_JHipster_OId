package edu.psgv.sweng861.domain;

import static edu.psgv.sweng861.domain.OrderAnItemTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import edu.psgv.sweng861.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class OrderAnItemTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(OrderAnItem.class);
        OrderAnItem orderAnItem1 = getOrderAnItemSample1();
        OrderAnItem orderAnItem2 = new OrderAnItem();
        assertThat(orderAnItem1).isNotEqualTo(orderAnItem2);

        orderAnItem2.setId(orderAnItem1.getId());
        assertThat(orderAnItem1).isEqualTo(orderAnItem2);

        orderAnItem2 = getOrderAnItemSample2();
        assertThat(orderAnItem1).isNotEqualTo(orderAnItem2);
    }
}
