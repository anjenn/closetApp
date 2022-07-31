<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="bg-pink-4 my-card shadow-10"
          style="font-family: 'fredoka one'"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="myPosts" label="My Posts" />
          <q-tab name="savedPosts" label="Saved" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="myPosts">
            <div class="text-h6">My Posts</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="savedPosts">
            <div class="text-h6">Saved Posts</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "MyPage",
  setup() {
    return {
      tab: ref("myPosts"),
    };
  },
});
</script>

<style scoped>
.my-card {
  min-width: 0.7rem;
  min-height: 0.5rem;
  border-style: dashed;
  border-color: white;
  border-width: 0.15rem;
  border-radius: 10px;
  width: 60vw;
}
</style>
