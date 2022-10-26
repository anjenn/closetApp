<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container">
      <q-card
        dark
        class="bg-pink-3 my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section>
          <div class="text-h6" style="text-align: center">
            Tell me what you like!
          </div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-px-lg">
          <q-select
            rounded
            clearable
            multiple
            standout
            color="pink-4"
            bg-color="white"
            v-model="selected"
            style="width: 100%"
            hide-selected
            :options="options"
          >
          </q-select>
          <div class="btn-tags">
            <q-btn
              v-for="(item, index) in selected"
              disable
              rounded
              unelevated
              dense
              size="1rem"
              padding="0rem 0.3rem"
              class="btn-tag"
              :label="item"
              :key="index"
            />
          </div>
        </q-card-section>
      </q-card>
      <div class="buttons">
        <q-btn
          push
          color="white"
          text-color="pink 4"
          label="Skip"
          class="btn"
          v-on:click="redirectTo"
        />
        <q-btn
          push
          color="white"
          text-color="pink 4"
          label="save"
          class="btn"
          :value="selected"
          v-on:click="saveSelection"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Tags from "../utils/Tags";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      selectorModel: ref(null),
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
    };
  },
  computed: {
    returnSelection() {
      return this.selected;
      // return JSON.stringify(this.selected);
    },
  },
  methods: {
    redirectTo() {
      this.$router.push("/FeedView");
    },
    saveSelection() {
      if (this.returnSelection == null) {
        alert("Select something");
      } else {
        Tags.saveTags(this.returnSelection, "tags");
        Tags.loadTags("tags");
        this.redirectTo();
      }
    },
  },
});
</script>

<style scoped>
.my-card {
  min-width: 0.7rem;
  min-height: 0.5rem;
  width: 60vw;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttons {
  display: flex;
  gap: 1rem;
}
.btn {
  margin-top: 2rem;
  width: 5rem;
  font-family: fredoka one;
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
