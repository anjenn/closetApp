<template>
  <div>
    <span>PLACEHOLDER</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import PhotoLoader from "src/components/PhotoLoader.vue";

export default defineComponent({
  name: "PhotoLoader",
  setup() {
    const url = ref(null);
    return {
      url,
      current: ref(1),
      maxPage: 1,
    };
  },
});
</script>

<style scoped></style>
