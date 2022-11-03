<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <div class="row justify-evenly">
        <postView :postData="postData" :index="0"/>
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
import { ref } from "vue";
import postView from "/src/components/PostView";
import { defineComponent } from "vue";
export default defineComponent({
  name: "FeedView",
  components: {
    postView,
  },
  data() {
    return {
      postData: {
        userID: 12345,
        tag: ref(null),
        photos: ref(null),
        createdAt: ref(null),
        updatedAt: ref(null),
        id: ref(null)
      }
    };
  },
  methods: {
    randomNumGen() {},
    redirectPostEditor() {
      this.$router.push("/PostEditor");
    },
  },
});
</script>

<style scoped>
.container-sub {
  margin: 10vh 7vw;
  flex-direction: column;
  align-items: center;
}
.btn-bottom {
  margin-top: 3rem;
}
</style>
