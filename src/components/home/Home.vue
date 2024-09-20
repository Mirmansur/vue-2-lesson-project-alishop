<template>
  <div class="container mx-auto p-10 mb-40">
    <div v-if="isloading" class="text-center text-gray-600">
      <p class="text-lg">Loading...</p>
    </div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
      >
        <RouterLink :to="`/single/${_id}`">
          <img
            :src="movie?.imagesUrl[0]"
            alt="Movie Image"
            class="w-full h-48 object-contain"
          />
        </RouterLink>
        <div class="p-4 flex flex-col flex-grow">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold">{{ movie.name }}</h2>
            <button
              @click="toggleLike(movie)"
              class="text-red-500 hover:text-red-700 transition"
            >
              <i
                :class="{
                  'pi pi-heart': !movie.liked,
                  'pi pi-heart-fill': movie.liked,
                }"
                class="text-2xl"
              ></i>
            </button>
          </div>
          <p class="text-gray-700 mb-1">Brand: {{ movie.brand }}</p>
          <p class="text-gray-600 mb-2 line-clamp-3 flex-grow">
            {{ movie.description }}
          </p>
          <p class="text-lg font-bold mb-4">Price: ${{ movie.price }}</p>
          <div class="flex gap-2 mt-auto">
            <button
              @click="addToCart(movie)"
              class="bg-yellow-600 text-black p-3 rounded-lg shadow-md text-sm w-full flex items-center gap-2 justify-center"
            >
              <i class="pi pi-shopping-cart text-2xl"></i>
              <p class="font-semibold">Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const movies = ref([]);
    const isloading = ref(true);

    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          "https://nextstoreuz-api.onrender.com/api/product/all"
        );
        const newArr = data?.map((item) => ({
          id: item._id,
          name: item.title,
          brand: item.brand,
          description: item.description,
          price: item.price,
          imagesUrl: item.imagesUrl,
          liked: false, // Added liked property
        }));
        movies.value = newArr;
        isloading.value = false;
      } catch (error) {
        console.log(error.message);
        isloading.value = false;
      }
    };

    const toggleLike = (movie) => {
      movie.liked = !movie.liked;
    };

    onMounted(() => {
      fetchMovie();
    });

    return {
      movies,
      isloading,
      toggleLike,
    };
  },
};
</script>

<style></style>
