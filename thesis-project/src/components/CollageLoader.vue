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
      <q-btn
        class="button"
        flat
        unelevated
        dense
        color="grey-6"
        :ripple="false"
        icon="add"
      />
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
      <q-btn
        class="button"
        flat
        unelevated
        dense
        color="grey-6"
        :ripple="false"
        icon="add"
      />
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
      <q-btn
        class="button"
        flat
        unelevated
        dense
        color="grey-6"
        :ripple="false"
        icon="add"
      />
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
      <q-btn
        class="button"
        flat
        unelevated
        dense
        color="grey-6"
        :ripple="false"
        icon="add"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import placeholder from "/public/placeholder.png";

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
  bottom: 0;
  right: 0;
  width: 1rem;
  z-index: 1;
}
</style>
