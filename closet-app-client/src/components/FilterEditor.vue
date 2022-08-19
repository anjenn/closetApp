<template>
  <div class="container">
    <q-card style="width: 5rem">
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
      <q-select
        clearable
        flat
        multiple
        color="grey-4"
        v-model="selected"
        style="width: 100%"
        hide-selected
        :options="options"
      />
      <q-btn>Save & Reload</q-btn>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "FilterEditor",
  data() {
    return {
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
});
</script>

<style scoped>
.btn-tag {
  font-family: fredoka one;
  text-transform: lowercase;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0.25rem;
}
</style>
