<template>
  <div class="container q-pa-sm" wrap>
    <q-card class="post-card">
      <photoLoader />

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
      <q-btn flat unelevated dense color="grey-6" :ripple="false" icon="edit" />
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import photoLoader from "/src/components/PhotoLoader";

import { ref } from "vue";

export default defineComponent({
  name: "PostView",
  components: {
    photoLoader,
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
  height: 30vh;
  width: 25vw;
  border-radius: 15px;
}
</style>
