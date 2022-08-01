<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <q-btn push color="pink-3" round icon="refresh" />
    <div class="row">
      <postView />
      <postView />
      <postView />
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

<style scoped></style>
