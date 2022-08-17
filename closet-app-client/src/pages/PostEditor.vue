<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container main">
      <q-card
        dark
        bordered
        class="bg-white my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section class="container-sub">
          <div class="post-contents">
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
                hi
              </q-tab-panel>
            </q-tab-panels>
          </div>
          <div class="post-options">
            <div class="photo-edits">
              <span> Model: {{ greenModel }} (0 to 5, step 1) </span>
              <q-slider
                v-model="greenModel"
                color="green"
                :min="0"
                :step="1"
                :max="5"
              />
              <span> Model: {{ greenModel }} (0 to 5, step 1) </span>
              <q-slider
                v-model="greenModel"
                color="green"
                :min="0"
                :step="1"
                :max="5"
              />
              <span> Model: {{ greenModel }} (0 to 5, step 1) </span>
              <q-slider
                v-model="greenModel"
                color="green"
                :min="0"
                :step="1"
                :max="5"
              />
            </div>
            <q-select
              rounded
              clearable
              multiple
              standout
              color="grey-6"
              bg-color="white"
              v-model="selected"
              style="width: 100%"
              hide-selected
              :options="options"
            />
            <q-btn>Save</q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Tags from "../utils/Tags";

export default defineComponent({
  name: "PostEditor",
  data() {
    return {
      maxPage: 1,
      tab: ref("1"),
    };
  },
  computed: {
    returnSelection() {
      return this.selected;
      // return JSON.stringify(this.selected);
    },
  },
  methods: {
    increasePgNum() {
      if (this.maxPage <= 3) {
        this.maxPage++;
      }
    },
  },
});
</script>

<style scoped>
.my-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5rem solid #f06292;
  height: 50vh;
  width: 50vw;
}
.pagination {
  display: flex;
  align-items: center;
}
.page-btn {
  width: 0.3rem;
  height: 0.3rem;
}
.container-sub {
  display: flex;
}
.btn-tags {
  margin-top: 1rem;
}
.btn-tag {
  font-family: Neucha;
  text-transform: lowercase;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0.25rem;
}
</style>
