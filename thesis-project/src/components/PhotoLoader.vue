<template>
  <div class="container row" style="no-wrap">
    <div>
      <q-btn class="plus-btn" @click="clickBtn"> + </q-btn>
      <q-img class="placeHolder" v-if="isClicked" :src="image" />
    </div>
  </div>
  <div class="container row" style="no-wrap">
    <div></div>
    <div></div>
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
    // clickBtnn(order) {
    //   this.isBtnClicked[`${order}`] = true;

    //   //
    //   // <q-img v-if="`isBtnClicked.first`" />
    //   //
    //   // <div v-if="`isBtnClicked.first`"></div>
    // },
    clickBtn() {
      this.isClicked = true;
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.plus-btn {
  position: relative;
}
.placeHolder {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  border-radius: 15px;
}
</style>
