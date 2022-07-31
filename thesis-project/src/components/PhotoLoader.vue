<template>
  <div class="container row" style="no-wrap">
    <div>
      <q-btn
        @click="loadEditor(isBtnClicked.first)"
        v-model="isBtnClicked.first"
      >
        +
      </q-btn>
      <q-img v-if="`isBtnClicked.${order}`" />
      <div v-if="`isBtnClicked.${order}`"></div>
    </div>
    <div></div>
  </div>
  <div class="container row" style="no-wrap">
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

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
  data() {
    return {
      isBtnClicked: {
        first: false,
        second: false,
        third: false,
        fourth: false,
      },
    };
  },
  method: {
    clickBtn(order) {
      this.isBtnClicked[`${order}`] = true;
    },
  },
});
</script>

<style scoped></style>
