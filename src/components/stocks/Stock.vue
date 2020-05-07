<template>
  <div class="col-md-4 col-xs-6">
    <div class="card border-success mb-3">
      <div class="card-header" style="backgroundColor:#ADF6B0;">
        <h3 class="">
          {{ stock.name }}
          <i style="font-size:0.9rem;">(Price : {{ stock.price }})</i>
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
            class="btn btn-success float-right"
            @click="buyStock"
            :disabled="
              insufficientFunds || quantity <= 0 || Number.isInteger(quantity)
            "
          >
            {{ insufficientFunds ? "Insufficient" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
