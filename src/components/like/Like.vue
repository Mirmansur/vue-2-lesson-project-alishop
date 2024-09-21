<template>
  <div class="container mx-auto p-10">
    <div v-if="wishlistItems.length === 0" class="text-gray-600 text-center">
      <p class="text-lg">Your wishlist is empty.</p>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
    >
      <div
        v-for="item in wishlistItems"
        :key="item.id"
        class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105"
      >
        <RouterLink :to="`/single/${item.id}`">
          <img
            :src="item.imagesUrl[0]"
            alt="Item Image"
            class="w-full h-48 object-contain transition duration-300 hover:scale-110"
          />
        </RouterLink>
        <div class="p-4 flex flex-col flex-grow">
          <h2 class="text-lg font-semibold text-gray-800">{{ item.name }}</h2>
          <p class="text-gray-600 mb-2">Brand: {{ item.brand }}</p>
          <p class="text-lg font-bold mb-4 text-gray-900">
            Price: ${{ item.price }}
          </p>

          <button
            @click="removeFromWishlist(item)"
            class="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg shadow-md text-sm w-full flex items-center gap-2 justify-center transition duration-200"
          >
            <i class="pi pi-trash text-2xl"></i>
            <p class="font-semibold">Remove from Wishlist</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("wishlist", ["wishlistItems"]),
  },
  methods: {
    ...mapActions("wishlist", ["toggleHeart"]),
    removeFromWishlist(item) {
      this.toggleHeart(item);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
button:hover {
  transform: translateY(-2px);
}
</style>
