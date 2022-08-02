<template>
  <div class="container row" style="no-wrap">
    <div class="col container-img-btn">
      <q-img
        class="placeHolder"
        v-if="isClicked"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
      >
        <q-btn class="plus-btn" @click="clickBtn"> + </q-btn>
      </q-img>
    </div>
    <div div class="col container-img-btn">
      <q-img
        class="placeHolder"
        v-if="isClicked"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
      >
        <q-btn class="plus-btn" @click="clickBtn"> + </q-btn>
      </q-img>
    </div>
  </div>
  <div class="container row" style="no-wrap">
    <div>
      <q-btn class="plus-btn" @click="clickBtn"> + </q-btn>
      <q-img
        class="placeHolder"
        v-if="isClicked"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
      >
      </q-img>
    </div>
    <div>
      <q-btn class="plus-btn" @click="clickBtn"> + </q-btn>
      <q-img
        class="placeHolder"
        v-if="isClicked"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
      >
      </q-img>
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
.container-img-btn {
  display: flex;
  position: relative;
  justify-content: center;
}
.placeHolder {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 40%;
  border-radius: 15px;
  margin: auto auto;
}
.plus-btn {
  position: absolute;
  margin: auto auto;
  z-index: 1;
}
</style>
