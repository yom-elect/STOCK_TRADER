<template>
  <div class="col-md-4 col-xs-6">
    <div class="card border-success mb-3">
      <div class="card-header" style="backgroundColor:#ADF6B0;">
        <h3>
          {{ stock.name }}
          <i style="font-size:0.9rem;"
            >(Price : {{ stock.price }} | Quantity : {{ stock.quantity }} )</i
          >
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left mr-3">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
          />
        </div>
        <div class="float-right ml-3">
          <button
            class="btn btn-success"
            @click="stockSale"
            :disabled="
              insufficientQuantity ||
                quantity <= 0 ||
                Number.isInteger(quantity)
            "
          >
            {{ insufficientQuantity ? "Not-enough" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    stockSale() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
      this.quantity = 0;
    }
  }
};
</script>
