<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <q-card
      dark
      bordered
      class="bg-white editor-card shadow-10"
      style="font-family: 'fredoka one'"
    >
      <q-card-section class="card-contents">
        <div class="post-contents">
          <q-tabs
            v-model="tab"
            style="width: 98%"
            dense
            class="text-grey"
            active-color="pink-4"
            indicator-color="pink-4"
            align="justify"
            narrow-indicator
          >
            <q-tab v-for="i in maxPage" :key="i" :name="i" :label="i" />
            <q-btn
              class="page-btn"
              flat
              :v-model="maxPage"
              @click="increasePgNum"
              color="pink-4"
              icon="add_box"
            ></q-btn>
          </q-tabs>
          <q-tab-panels keep-alive v-model="tab" animated>
            <q-tab-panel v-for="i in maxPage" :key="i" :name="i">
              <q-img :src="image" style="width: 20rem; height: 20rem" />
            </q-tab-panel>
          </q-tab-panels>
        </div>
        <q-separator color="grey-4" vertical inset />
        <div class="post-options" style="margin: 0 1.5rem">
          <div class="photo-edits">
            <span class="slider-text"> Brightness </span>
            <q-slider
              v-model="imageEdits.brightness"
              color="pink-3"
              marker-labels
              :min="1"
              :step="1"
              :max="5"
            >
              <template v-slot:marker-label-group="scope">
                <div
                  v-for="marker in scope.markerList"
                  :key="marker.index"
                  :class="[
                    `text-pink-${2 + Math.ceil(marker.value / 2)}`,
                    marker.classes,
                  ]"
                  :style="marker.style"
                  @click="model = marker.value"
                >
                  {{ marker.value }}
                </div>
              </template>
            </q-slider>
            <span class="slider-text"> Image-Scale </span>
            <q-slider
              v-model="imageEdits.imageScale"
              color="pink-3"
              marker-labels
              :min="1"
              :step="1"
              :max="5"
            >
              <template v-slot:marker-label-group="scope">
                <div
                  v-for="marker in scope.markerList"
                  :key="marker.index"
                  :class="[
                    `text-pink-${2 + Math.ceil(marker.value / 2)}`,
                    marker.classes,
                  ]"
                  :style="marker.style"
                  @click="model = marker.value"
                >
                  {{ marker.value }}
                </div>
              </template>
            </q-slider>
            <span class="slider-text"> Filter </span>
            <q-slider
              v-model="imageEdits.filter"
              color="pink-3"
              marker-labels
              :min="1"
              :step="1"
              :max="5"
            >
              <template v-slot:marker-label-group="scope">
                <div
                  v-for="marker in scope.markerList"
                  :key="marker.index"
                  :class="[
                    `text-pink-${2 + Math.ceil(marker.value / 2)}`,
                    marker.classes,
                  ]"
                  :style="marker.style"
                  @click="model = marker.value"
                >
                  {{ marker.value }}
                </div>
              </template>
            </q-slider>
          </div>
          <q-select
            rounded
            clearable
            multiple
            outlined
            color="pink-4"
            bg-color="white"
            v-model="selected"
            style="width: 100%; font-size: 0.8rem"
            max-values="5"
            stack-label
            label="Select tags up to 5"
            autofocus
            :options="options"
          />
          <div class="saveDeleteBtns"
              style="display:flex; justify-content: space-evenly;"
          >
            <q-btn
            label="save"
            color="pink-4"
            style="width: 40%; margin-top: 1rem;"
            />
            <q-btn
              label="delete"
              color="pink-4"
              style="width: 40%; margin-top: 1rem;"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Tags from "../utils/Tags";
import placeholder from "/public/placeholder.png";

export default defineComponent({
  name: "PostEditor",
  data() {
    return {
      image: placeholder,
      selected: ref(null),
      options: [
        "feminine",
        "preppy",
        "girly",
        "vintage",
        "bohemian",
        "chic",
        "sexy",
        "casual",
        "formal",
        "punk",
        "rocker",
        "tomboy",
        "gothic",
        "sporty",
        "ethnic",
      ],
      imageEdits: {
        brightness: 3,
        imageScale: 5,
        filter: 2,
      },
      maxPage: 1,
      tab: ref(1),
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
.editor-card {
  border: 0.5rem solid #f06292;
  min-width: 45rem;
  min-height: 25rem;
  height: 62vh;
  width: 50vw;
  display: flex;
  justify-content: center;
}
.card-contents {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.page-btn {
  width: 0.5rem;
  height: 0.5rem;
}
.slider-text {
  color: grey;
}
.post-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>