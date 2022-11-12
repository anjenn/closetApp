<template>
  <router-link :to="{ path: link }">
    <q-item clickable tag="a" target="_blank">
      <q-item-section avatar>
        <q-icon color="white" :name="icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },
  },
});
</script>

<style scoped>
a, a:hover, a:visited, a:active{
  color: white;
  text-decoration: none;
  font-family: monospace;
  font-size: 1rem;
}
</style>