<template>
  <q-page class="container flex flex-center" style="background-color: #fff0f5">
    <div class="row">
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
});
</script>

<style scoped>
.btn-bottom {
  margin-top: 3rem;
}
</style>
