const state = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const getters = {
  wishlistItems: (state) => state.wishlistItems,
};

const actions = {
  toggleHeart({ commit }, product) {
    commit("TOGGLE_HEART", product);
  },
};

const mutations = {
  TOGGLE_HEART(state, product) {
    const index = state.wishlistItems.findIndex(
      (item) => item.id === product.id
    );
    if (index === -1) {
      state.wishlistItems.push(product);
    } else {
      state.wishlistItems.splice(index, 1);
    }
    localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
