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
          v-on:click="redirectPostEditor"
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
      postId: '6357ec9a4f47830e941ed0a6'
    };
  },
  methods: {
    randomNumGen() {},
    redirectPostEditor() {
      // this.$router.push("/PostEditor");
      this.$router.push({ name: "Post Editor w ID", params: {postID: this.postId} })
    },
  },
});
</script>

<style scoped>
.container-sub {
  margin: 10vh 15vw;
  flex-direction: column;
  align-items: center;
}
.btn-bottom {
  margin-top: 3rem;
}
</style>
