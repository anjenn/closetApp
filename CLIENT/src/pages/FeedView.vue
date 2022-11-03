<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <div class="row justify-evenly">
        <postView :postdata="postdata" :index="0"/>
      </div>
      <div class="row justify-between" style="width: 12rem">
        <q-btn
          push
          class="btn-bottom"
          size="xl"
          color="pink-3"
          round
          icon="refresh"
        />
        <q-btn
          push
          class="btn-bottom"
          size="xl"
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
      postdata: { // to be sent as a parameter
        userID: 12345,
        tag: '12345',
        photos: '12345',
        createdAt: '12345',
        updatedAt: '12345',
        id: '12345'
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
