import { createStore } from "vuex";
import cart from "../slice/cartSlice.js";
import counter from "../slice/countSlice";
import wishlist from "../slice/likeSlice";

const store = createStore({
  modules: {
    cart,
    counter,
    wishlist,
  },
});

export default store;
