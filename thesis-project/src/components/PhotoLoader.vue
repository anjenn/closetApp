<template>
  <div class="container row wrap">
    <div class="col-2 container-img-btn">
      <q-img
        class="placeHolder"
        :src="image"
        spinner-color="white"
        spinner-size="0.3rem"
      >
        <q-btn class="plus-btn" @click="clickBtn"> + </q-btn>
      </q-img>
    </div>
    </div>
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
.container-img-btn {
  display: flex;
  position: relative;
}
.placeHolder {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}
.plus-btn {
  position: absolute;
  top: 0;
  left: 0;
  margin: auto auto;
  z-index: 1;
}
</style>
