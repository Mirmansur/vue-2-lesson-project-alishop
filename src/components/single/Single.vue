<template>
  <div class="max-w-4xl mx-auto p-6">
    <div v-if="isLoading" class="text-center">
      <p class="text-xl text-gray-700">Loading...</p>
    </div>

    <div
      v-if="movies && Object.keys(movies).length"
      class="flex justify-center"
    >
      <div
        class="bg-white shadow-lg rounded-lg overflow-hidden flex w-full p-8"
      >
        <div class="flex flex-col space-y-2 w-1/4">
          <div class="flex flex-col space-y-2">
            <img
              v-for="(img, index) in movies.imagesUrl"
              :key="index"
              :src="img"
              alt="Product Thumbnail"
              class="w-16 h-16 object-cover border border-gray-200 rounded cursor-pointer hover:border-yellow-600 transition"
            />
          </div>
        </div>

        <div class="flex-grow ml-6">
          <img
            v-if="movies.imagesUrl && movies.imagesUrl.length"
            :src="movies.imagesUrl[0]"
            alt="Main Product Image"
            class="w-full object-cover rounded-lg"
          />
        </div>

        <div class="flex flex-col justify-between p-6 w-1/2">
          <div>
            <h2 class="text-3xl font-bold mb-2 text-gray-800">
              {{ movies.category.name }}
            </h2>
            <div class="flex items-center space-x-2 mb-4">
              <p class="text-lg text-gray-600">Цена:</p>
              <span class="text-gray-800 font-bold text-2xl">
                {{ movies.price }} сум
              </span>
            </div>

            <p class="text-gray-500 mb-4">Описание: {{ movies.description }}</p>

            <div class="text-gray-500 mb-4">
              <p class="text-lg">В рассрочку:</p>
              <p class="text-xl text-green-600 font-bold">1 451 042 сум/мес.</p>
              <p class="text-xl font-bold text-gray-700 mt-2">
                Цена: 19 900 000 сум
              </p>

              <div class="flex space-x-2 mt-4">
                <button
                  v-for="months in [3, 6, 12, 18, 24]"
                  :key="months"
                  :class="{
                    'bg-yellow-600 text-black': selectedMonth === months,
                    'border border-gray-300 text-gray-600 hover:bg-gray-200':
                      selectedMonth !== months,
                  }"
                  @click="selectedMonth = months"
                  class="py-1 px-4 rounded transition font-semibold"
                >
                  {{ months }} мес.
                </button>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <button
              class="bg-yellow-600 text-black font-semibold py-2 px-6 rounded w-full"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center mt-6">
      <p class="text-xl text-gray-500">No movies found.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      selectedMonth: 24,
      isLoading: false,
      movies: {
        imagesUrl: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
        category: { name: "Смартфон Apple iPhone 15 Pro Max 256 ГБ" },
        price: "19 900 000",
        description:
          "Этот смартфон обладает мощными характеристиками и стильным дизайном.",
      },
    };
  },
  setup() {
    const movies = ref({});
    const isLoading = ref(true);
    const route = useRoute();
    const _id = route.params.id;

    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://nextstoreuz-api.onrender.com/api/product/${_id}`
        );
        console.log(data);
        movies.value = data;
        isLoading.value = false;
      } catch (error) {
        console.log(error.message);
        isLoading.value = false;
      }
    };

    onMounted(() => {
      if (_id) {
        fetchMovie();
      } else {
        console.error("No movie ID found in route params.");
      }
    });

    return {
      movies,
      isLoading,
    };
  },
};
</script>
