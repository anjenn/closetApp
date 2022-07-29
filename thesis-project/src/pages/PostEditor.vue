<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container main">
      <q-card
        dark
        bordered
        class="bg-white my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section class="container sub">
          <li v-for="i in maxPage" :key="i">
            <q-btn>i</q-btn>
            <PhotoLoader />
            <PhotoLoader />
            <PhotoLoader />
            <PhotoLoader />
          </li>
          <q-btn @click="increasePgNum"></q-btn>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import PhotoLoader from "src/components/PhotoLoader.vue";

export default defineComponent({
  name: "PostEditor",
  setup() {
    const url = ref(null);
    return {
      url,
      current: ref(1),
      maxPage: 1,
    };
  },
  methods: {
    increasePgNum() {
      this.maxPage++;
    },
  },
  components: { PhotoLoader, PhotoLoader },
});
</script>

<style scoped>
.my-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5rem solid #f06292;
  max-width: 50rem;
  height: 10rem;
  width: 60vw;
}
</style>
