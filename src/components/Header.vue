<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <router-link to="/portfolio" activeClass="active" tag="li"
          ><a class="nav-link">Portfolio</a></router-link
        >
        <router-link to="/stocks" activeClass="active" tag="li"
          ><a class="nav-link"> Stocks</a></router-link
        >
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a @click="endDay" class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown" @click="dropDownToggler">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div
            class="dropdown-menu"
            :class="{ show: isDropdownOpen }"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#" @click="saveData">Save</a>
            <a class="dropdown-item" href="#" @click="loadData">Load</a>
          </div>
        </li>
      </ul>
    </div>
    <strong class="nav-item float-right ">Funds: {{ funds | currency }}</strong>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({ randomizeStocks: "randomizeStocks", getData: "loadData" }),
    endDay() {
      this.randomizeStocks();
    },
    dropDownToggler() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("url", data);
    },
    loadData() {
      this.getData();
    }
  }
};
</script>
