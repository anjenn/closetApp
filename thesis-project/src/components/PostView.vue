<template>
  <div class="container q-pa-md" wrap>
    <q-card class="post-card outer">
      <q-card class="post-card wrap">
        <div class="col"><collageLoader /></div>
        <div class="buttons">
          <q-btn
            v-model="this.heartBorder"
            flat
            unelevated
            dense
            color="grey-6"
            :ripple="false"
            :icon="this.heartBorder ? 'favorite' : 'favorite_border'"
            @click="onHeartClick"
          />
          <q-btn
            flat
            unelevated
            dense
            color="grey-6"
            :ripple="false"
            icon="edit"
          />
          <q-btn
            flat
            unelevated
            dense
            color="grey-6"
            :ripple="false"
            icon="share"
          />
        </div>
      </q-card>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import collageLoader from "/src/components/CollageLoader";

import { ref } from "vue";

export default defineComponent({
  name: "PostView",
  components: {
    collageLoader,
  },
  data() {
    return {
      heartBorder: true,
    };
  },
  methods: {
    onHeartClick() {
      this.heartBorder == true
        ? (this.heartBorder = false)
        : (this.heartBorder = true);
    },
  },
});
</script>

<style scoped>
.post-card {
  height: 20rem;
  width: 16rem;
  border-radius: 15px;
}
.post-card.outer {
  height: 23rem;
  width: 17rem;
  display: flex;
  align-items: center;
  border: 0.5rem solid;
  border-radius: 20px;
}
.buttons {
  margin-top: 10.5rem;
  margin-left: 0.5rem;
}
</style>
