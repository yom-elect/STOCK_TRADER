import stocks from "./../../data/stocks";
import * as types from "./../constants";

const state = {
  stocks: []
};

const mutations = {
  [types.SET_STOCKS]: (state, stocks) => {
    state.stocks = stocks;
  },
  [types.RND_STOCKS]: state => {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit(types.BUY_STOCKS, order);
  },
  initStocks: ({ commit }) => {
    commit(types.SET_STOCKS, stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit(types.RND_STOCKS);
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
