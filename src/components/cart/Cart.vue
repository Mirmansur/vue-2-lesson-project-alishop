<template>
  <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold mb-8">Savat</h1>

    <div v-if="cartProducts.length === 0" class="text-lg text-gray-500">
      Savatingiz hozirda bo'sh.
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 space-y-8">
        <div
          v-for="product in cartProducts"
          :key="product.id"
          class="bg-white shadow-md rounded-lg p-6 flex space-x-4"
        >
          <img
            :src="product.imagesUrl[0] || '/fallback-image.jpg'"
            alt="Product Image"
            class="w-28 h-28 object-cover"
          />
          <div class="flex-grow">
            <h2 class="text-lg font-semibold mb-1">{{ product.name }}</h2>
            <p class="text-sm text-gray-600 mb-1">
              Narx: {{ product.price }} so'm
            </p>
            <p class="text-sm text-gray-600 mb-1">
              Sotuvchi: {{ product.brand }}
            </p>
            <p class="text-sm text-gray-600 mb-1">
              Yetkazib berish: Tashkent bo'ylab 24 soat ichida
            </p>

            <div class="mt-4 flex items-center space-x-2">
              <button
                @click="decrementQuantity(product)"
                class="bg-gray-200 text-gray-600 px-2 py-1 rounded"
              >
                -
              </button>
              <span>{{ product.quantity }}</span>
              <button
                @click="incrementQuantity(product)"
                class="bg-gray-200 text-gray-600 px-2 py-1 rounded"
              >
                +
              </button>
            </div>

            <button
              @click="removeProduct(product.id)"
              class="mt-4 text-red-600 text-sm flex items-center space-x-1"
            >
              <i class="pi pi-trash"></i>
              <span>O'chirish</span>
            </button>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 shadow-md rounded-lg p-6 space-y-4">
        <h3 class="text-lg font-semibold">Jami</h3>
        <div class="text-sm text-gray-600 flex justify-between">
          <span>Tovarlar soni</span>
          <span>{{ cartProducts.length }} dona</span>
        </div>
        <div class="text-sm text-gray-600 flex justify-between">
          <span>Yetkazib berish</span>
          <span class="text-green-600">Bepul</span>
        </div>
        <div class="text-lg font-bold flex justify-between">
          <span>Jami</span>
          <span>{{ totalPrice }} so'm</span>
        </div>

        <button
          class="w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md"
        >
          Muddati to'lovga olish
        </button>
        <button
          class="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg shadow-md"
        >
          Karta orqali sotib olish
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartPage",
  computed: {
    ...mapGetters("cart", ["cartProducts"]),
    totalPrice() {
      return this.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
  methods: {
    ...mapActions("cart", ["removeFromCart"]),
    removeProduct(productId) {
      this.removeFromCart(productId);
    },
    incrementQuantity(product) {
      product.quantity++;
    },
    decrementQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
