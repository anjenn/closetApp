<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <div class="row justify-evenly">
        <postView />
        <postView />
        <postView />
        <postView />
        <postView />
        <postView />
      </div>
      <div class="row justify-between" style="width: 9rem">
        <q-btn
          push
          class="btn-bottom"
          size="lg"
          color="pink-3"
          round
          icon="refresh"
        />
        <q-btn
          push
          class="btn-bottom"
          size="lg"
          color="pink-3"
          round
          icon="add"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import postView from "/src/components/PostView";
import { defineComponent } from "vue";
export default defineComponent({
  name: "FeedView",
  components: {
    postView,
  },
  data() {
    return {
      random: null,
    };
  },
  methods: {
    randomNumGen() {},
  },
});
</script>

<style scoped>
.container-sub {
  margin: 5vh auto;
  flex-direction: column;
  align-items: center;
}
.btn-bottom {
  margin-top: 3rem;
}
</style>
