<template>
  <div class="container row wrap">
    <photoLoader />
    <photoLoader />
    <photoLoader />
    <photoLoader />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import photoLoader from "/src/components/PhotoLoader";

export default defineComponent({
  name: "CollageLoader",
  components: {
    photoLoader,
  },
  data() {
    return {
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

<style scoped></style>
