// fredoka one, concert one, 'Neucha'
<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container">
      <q-card
        dark
        bordered
        class="bg-pink-4 my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section>
          <div class="text-h6">Tell me what you like!</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-px-lg">
          <q-select
            rounded
            clearable
            multiple
            standout
            color="grey-5"
            bg-color="white"
            v-model="selected"
            style="width: 100%"
            hide-selected
            :options="options"
          />
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
        />
        <q-btn
          push
          color="white"
          text-color="pink 4"
          label="save"
          class="btn"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",
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
});
</script>

<style scoped>
.my-card {
  min-width: 0.7rem;
  width: 60vw;
  height: 50vh;
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
