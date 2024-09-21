const state = {
  count: 0,
};

const mutations = {
  INCREMENT(state) {
    state.count += 1;
  },
  DECREMENT(state) {
    if (state.count > 0) {
      state.count -= 1;
    }
  },
  RESET(state) {
    state.count = 0;
  },
};

const actions = {
  increment({ commit }) {
    commit("INCREMENT");
  },
  decrement({ commit }) {
    commit("DECREMENT");
  },
  reset({ commit }) {
    commit("RESET");
  },
};

const getters = {
  currentCount: (state) => state.count,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
