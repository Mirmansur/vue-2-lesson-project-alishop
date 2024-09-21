// store/modules/cart.js
import { saveToLocalStorage } from "../../components/helper/saveToLS";

const state = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

const mutations = {
  ADD_TO_CART(state, product) {
    const productIndex = state.products.findIndex((p) => p.id === product.id);
    if (productIndex === -1) {
      state.products.push(product);
    }
    saveToLocalStorage("cart", state.products);
  },

  REMOVE_FROM_CART(state, productId) {
    state.products = state.products.filter(
      (product) => product.id !== productId
    );
    saveToLocalStorage("cart", state.products);
  },

  DELETE_PRODUCT(state, productId) {
    state.products = state.products.filter(
      (product) => product.id !== productId
    );
    saveToLocalStorage("cart", state.products);
  },
};

const actions = {
  addToCart({ commit }, product) {
    commit("ADD_TO_CART", product);
  },

  removeFromCart({ commit }, productId) {
    commit("REMOVE_FROM_CART", productId);
  },

  deleteProduct({ commit }, productId) {
    commit("DELETE_PRODUCT", productId);
  },
};

const getters = {
  cartProducts: (state) => state.products,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
