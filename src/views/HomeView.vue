<template>
  <!-- container -->
  <div
    id="app"
    class="grid grid-cols-1 md:grid-cols-[70%_30%]"
    style="font-family: 'Lora', 'serif'"
  >
    <!-- left side -->
    <div class="pt-10 pb-6 mx-10">
      <!-- quote -->
      <h1 id="date" class="text-xl font-bold">{{ currentDate }}</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div id="quote" class="text-center mt-4" v-if="info">
          {{ info.quotes[random].quote }}
        </div>
        <div id="author" class="text-center" v-if="info">
          {{ info.quotes[random].author }}
        </div>
        <div class="flex justify-center items-center mt-2">
          <button
            id="getNewQuote"
            class="bg-slate-700 text-white px-2 py-1 border rounded-md"
            @click="getRandom"
          >
            Get New Quote
          </button>
        </div>
      </div>
      <!-- quote -->

      <!-- todo -->
      <div>
        <h1 class="text-3xl md:text-4xl font-bold my-4">To Do</h1>

        <div>
          <ol>
            <li
              class="bg-slate-200 text-xl md:text-xl border shadow-xl rounded-lg px-6 py-6 mb-6"
              v-for="items in todoItems"
              :key="items"
            >
              {{ items }} {{ todoTime }}
              <button id="delete" @click="deleteTodo" class="float-right">
                <span class="text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
              </button>
            </li>
          </ol>
        </div>

        <div>
          <input
            id="todoItems"
            type="text"
            placeholder="Add todo"
            v-model="todoText"
            class="border border-black rounded-md px-2 py-1 w-40 md:w-auto"
          />
          <input
            id="todoTime"
            type="time"
            v-model="todoTime"
            class="border border-black rounded-md px-2 py-1 ml-4 w-14 md:w-auto"
          />
          <button
            @click="addTodo"
            class="border rounded-lg ml-4 px-2 py-1 bg-slate-700 text-white"
          >
            Add
          </button>
        </div>
      </div>
      <!-- todo -->
    </div>
    <!-- left side -->

    <!-- right side -->
    <div
      class="w-screen object-fill h-40 md:h-screen flex justify-center items-center ml-0 md:ml-10"
    >
      <img class="h-40 md:h-screen w-screen object-cover" :src="picture" />
    </div>
    <!-- right side -->
  </div>
  <!-- end container -->
</template>

<script>
export default {
  data() {
    return {
      info: null,
      random: null,
      picture: null,
      currentDate: null,
      todoItems: [],
      todoText: "",
      todoTime: "",
    };
  },
  methods: {
    getRandom() {
      axios.get("https://dummyjson.com/quotes").then((response) => {
        this.info = response.data;
        this.random = Math.floor(Math.random() * this.info.quotes.length);
        axios.get("https://source.unsplash.com/random").then((response) => {
          this.picture = response.request.responseURL;
        });
      });
    },
    getDate() {
      var currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      this.currentDate = currentDate;
    },
    addTodo() {
      if (this.todoText.trim().length > 0) {
        if (!Array.isArray(this.todoItems)) {
          this.todoItems = [];
        }
        this.todoItems.push(this.todoText.trim() + " " + this.todoTime);
        this.todoText = "";
        this.todoTime = "";
      }
    },

    deleteTodo() {
      this.todoItems.splice(this.todoItems.indexOf(this.todoText), 1);
    },
  },
  mounted() {
    this.getRandom();
    this.getDate();
    this.addTodo();
    if (localStorage.getItem("todoItems")) {
      try {
        this.todoItems = JSON.parse(localStorage.getItem("todoItems"));
      } catch (e) {
        localStorage.removeItem("todoItems");
      }
    }
    if (localStorage.getItem("todoTime")) {
      try {
        this.todoTime = JSON.parse(localStorage.getItem("todoTime"));
      } catch (e) {
        localStorage.removeItem("todoTime");
      }
    }
  },
  watch: {
    todoItems: {
      handler: function () {
        localStorage.setItem("todoItems", JSON.stringify(this.todoItems));
        localStorage.setItem("todoTime", JSON.stringify(this.todoTime));
      },
      deep: true,
    },
  },
};
</script>
