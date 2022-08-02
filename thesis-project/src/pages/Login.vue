// Implement login, or make it totally anonymous
//https://quasar.dev/vue-components/form
<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container main">
      <q-card
        dark
        bordered
        class="bg-pink-3 my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section class="container sub">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              class="inputBox--1"
              label="ID *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-input
              filled
              v-model="pwd"
              class="inputBox--2"
              label="Password *"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Please type something',
                (val) =>
                  (val.length > 5 && val.length < 13) ||
                  'Password should be longer than 6 characters',
              ]"
            />
            <q-toggle v-model="accept" label="Reveal password" />
            <q-btn
              push
              color="white"
              text-color="pink 4"
              label="LogIn"
              type="submit"
              class="btn"
              v-on:click="redirectTo"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "LogIn",
  setup() {
    const $q = useQuasar();
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>

<style scoped>
.my-card {
  min-width: 0.7rem;
  min-height: 0.5rem;
  width: 60vw;
  border-radius: 10px;
}
.container.sub {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  margin-top: 1.3rem;
  font-family: fredoka one;
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 3rem;
  font-size: 1.15rem;
}
.inputBox--1 {
  background-color: white;
  margin-top: 2rem;
  height: 3rem;
  border-radius: 5px;
}
.inputBox--2 {
  background-color: white;
  margin-top: 1.3rem;
  height: 3rem;
  border-radius: 5px;
}
</style>
