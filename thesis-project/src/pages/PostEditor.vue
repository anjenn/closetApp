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
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab v-for="i in maxPage" :key="i" :name="i" :label="i" />
            <q-btn :v-model="maxPage" @click="increasePgNum">+</q-btn>
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-for="i in maxPage" :key="i" :name="i">
              <PhotoLoader />
            </q-tab-panel>
          </q-tab-panels>
          <q-input v-model="postTitle"> </q-input>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import collageLoader from "src/components/CollageLoader.vue";

export default defineComponent({
  name: "PostEditor",
  data() {
    return {
      maxPage: 1,
      tab: ref("1"),
    };
  },
  setup() {
    const url = ref(null);
    return {
      url,
      current: ref(1),
    };
  },
  methods: {
    increasePgNum() {
      if (this.maxPage <= 3) {
        this.maxPage++;
      }
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
.pagination {
  display: flex;
  align-items: center;
}
.page-btn {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
