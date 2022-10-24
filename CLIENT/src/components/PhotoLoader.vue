<template>
  <div class="container">
    <q-img
      class="image"
      :src="image"
      spinner-color="white"
      spinner-size="0.3rem"
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
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import placeholder from "/public/placeholder.png";

export default defineComponent({
  name: "PhotoLoader",
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
  methods: {
    clickBtn() {
      this.isClicked = true;
    },
  },
});
</script>

<style scoped>
.container {
  position: relative;
}
.image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1rem;
}
.button {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1rem;
  z-index: 1;
}
</style>
