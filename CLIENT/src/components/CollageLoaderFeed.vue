<template>
  <div class="container q-gutter-sm row">
    <div class="container-sub">
      <q-img
        class="image"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
        style="border-top-left-radius: 15px"
      >
      </q-img>
    </div>
    <div class="container-sub">
      <q-img
        class="image"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
        style="border-top-right-radius: 15px"
      >
      </q-img>
    </div>
    <div class="container-sub">
      <q-img
        class="image"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
        style="border-bottom-left-radius: 15px"
      >
      </q-img>
    </div>
    <div class="container-sub">
      <q-img
        class="image"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
        style="border-bottom-right-radius: 15px"
      >
      </q-img>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import placeholder from "/public/placeholder.svg";

export default defineComponent({
  name: "CollageLoader",
  data() {
    return {
      image: placeholder,
      isBtnClicked: {
        first: false,
        second: false,
        third: false,
        fourth: false,
      },
      isClicked: true,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 1rem;
}
.container-sub {
  position: relative;
  width: 8rem;
  height: 5rem;
  margin: auto 0;
}
.image {
  position: absolute;
  left: 50%;
  margin-top: -2.5rem;
  margin-left: -3.5rem;
  top: 50%;
  object-fit: contain;
}
.button {
  position: absolute;
  left: 50%;
  margin-left: -0.5rem;
  top: 50%;
  width: 1rem;
  z-index: 1;
}
</style>
