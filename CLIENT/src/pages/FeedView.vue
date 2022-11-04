<!-- <postView :postdata="postdata" :index="0"/> -->
<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <Suspense>
      <template #default>
        <postsContainer />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
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
          v-on:click="redirectToPostEditor"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import postsContainer from "/src/components/PostsContainer"

export default defineComponent({
  name: "FeedView",
  components: {
    postsContainer,
  },
  data() {
    return {
      tags: ref(null)
    };
  },
  methods: {
    redirectToPostEditor() {
      this.$router.push("/PostEditor");
    }
  },
});
</script>

<style scoped>
.btn-bottom {
  margin-top: 3rem;
}
.container-sub {
  margin: 10vh 7vw;
  flex-direction: column;
  align-items: center;
  }
</style>
