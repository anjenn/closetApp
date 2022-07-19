<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container main">
      <q-card
        dark
        bordered
        class="bg-white my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section class="container sub">
          <div>hi</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PostEditor",
});
</script>

<style scoped>
.my-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5rem solid #f06292;
  max-width: 50rem;
  height: 10rem;
  width: 60vw;
}
</style>
