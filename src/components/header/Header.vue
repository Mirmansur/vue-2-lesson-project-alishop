<template>
  <div class="sticky top-0 left-0 p-4 z-10 w-full bg-white shadow-md">
    <div class="container flex items-center justify-around">
      <RouterLink to="/">
        <h1 class="text-3xl font-bold">RM</h1>
      </RouterLink>
      <button class="p-3 bg-yellow-600 rounded-md flex items-center gap-3">
        <i class="pi pi-align-justify"></i>
        <p>Tovarlar katalogi</p>
      </button>
      <form action="" class="flex border rounded-md">
        <input
          type="text"
          placeholder="Qidirsh..."
          class="p-3 rounded-md focus:outline-none w-96"
        />
        <button
          type="submit"
          class="p-3 bg-yellow-600 rounded-r-md flex items-center gap-3"
        >
          <i class="pi pi-search"></i>
        </button>
      </form>
      <div class="flex items-center gap-10">
        <RouterLink to="/like">
          <div class="relative">
            <div class="absolute -top-2 left-11">
              <span
                class="bg-red-500 text-white rounded-full text-xs p-1 px-2 text-center shadow-md font-bold"
              >
                {{ wishlistItems.length }}
              </span>
            </div>
            <button class="flex flex-col items-center">
              <i
                class="pi pi-heart text-2xl transition-[0.4s] hover:text-yellow-600"
              ></i>
              <p class="text-sm font-medium">Saralanganlar</p>
            </button>
          </div>
        </RouterLink>
        <RouterLink to="/cart">
          <div class="relative">
            <div class="absolute -top-2 left-4">
              <span
                class="bg-red-500 text-white rounded-full text-xs p-1 px-2 text-center shadow-md font-bold"
              >
                {{ cartProducts.length }}
              </span>
            </div>
            <button class="flex flex-col items-center">
              <i
                class="pi pi-shopping-cart text-2xl transition-[0.4s] hover:text-yellow-600"
              ></i>
              <p class="text-sm font-medium">Savat</p>
            </button>
          </div>
        </RouterLink>
        <button
          class="p-3 bg-yellow-600 text-black font-medium rounded-md"
          @click="visible = true"
        >
          Kirish
        </button>
        <select
          class="border border-gray-300 rounded-lg bg-white text-gray-700 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      header="RM"
      :style="{ width: '30rem' }"
      class="p-4"
    >
      <div class="text-center mb-6">
        <h2 class="text-xl font-semibold">Send Your Information</h2>
      </div>
      <form class="space-y-6">
        <div class="flex flex-col gap-2">
          <label for="number" class="font-medium">Number</label>
          <InputText
            id="number"
            class="p-2 border rounded-md w-full"
            autocomplete="off"
            placeholder="+998"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="font-medium">Email</label>
          <InputText
            id="email"
            class="p-2 border rounded-md w-full"
            autocomplete="off"
            placeholder="Your Email"
          />
        </div>
        <div class="flex justify-end gap-4 mt-6">
          <Button
            type="button"
            label="Cancel"
            severity="secondary"
            class="p-button-text"
            @click="visible = false"
          ></Button>
          <Button type="button" label="Save" @click="save"></Button>
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", ["cartProducts"]),
    ...mapGetters("wishlist", ["wishlistItems"]),
    cartTotalPrice() {
      return this.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
    wishlistTotalPrice() {
      return this.wishlistItems.reduce((total, item) => {
        return total + item.price;
      }, 0);
    },
  },
  components: {
    Dialog,
    InputText,
    Button,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    save() {
      this.visible = false;
    },
  },
};
</script>

<style>
.p-dialog {
  border-radius: 8px;
  box-shadow: none;
}

.p-dialog-header {
  background-color: #f9f9f9;
  border-bottom: 1px solid #e1e1e1;
}

.p-button {
  border-radius: 4px;
}
</style>
