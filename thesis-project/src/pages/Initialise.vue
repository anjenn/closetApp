// fredoka one, concert one, 'Slabo 27px'
<template>
  <q-page class="flex flex-center">
    <div class="container">
      <q-card
        dark
        bordered
        class="bg-pink-4 my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section>
          <div class="text-h6">Tell me what you like!</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div class="tags" v-for="item in items" :key="item.name">
            <q-btn color="white" text-color="grey-7" class="btn-tag"
              >{{ item.name }}
            </q-btn>
          </div>

          <q-select
            filled
            v-model="model"
            multiple
            :options="items"
            counter
            hint="With counter"
            style="width: 250px"
          />
        </q-card-section>
      </q-card>
      <q-btn
        push
        color="white"
        text-color="pink 4"
        label="Skip & randomise"
        class="btn-random"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      items: [
        { name: "feminine" },
        { name: "preppy" },
        { name: "casual" },
        { name: "formal" },
        { name: "semi-formal" },
        { name: "monotone" },
      ],
    };
  },
});
</script>

<style scoped>
.my-card {
  width: 50vw;
  height: 50vh;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-random {
  width: 10rem;
  margin-top: 2rem;
}
</style>
