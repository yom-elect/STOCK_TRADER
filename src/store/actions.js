import Vue from "vue";
import * as types from "./constants";

export const loadData = ({ commit }) => {
  Vue.http
    .get("url")
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit(types.SET_STOCKS, stocks);
        commit(types.SET_PORTFOLIO, portfolio);
      }
    });
};
