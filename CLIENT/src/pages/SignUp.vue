<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container main">
      <q-card
        dark
        bordered
        class="bg-pink-3 my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section class="container q-gutter-md sub flex flex-center">
          <div class="text-h6" style="text-align: center">Sign Up</div>
          <div class="names row justify-around items-start">
            <q-input
              rounded
              standout="bg-white text-pink-4"
              dense
              v-model="text"
              style="width: 45%"
              label="First Name"
            />
            <q-input
              rounded
              standout="bg-white text-pink-4"
              dense
              v-model="text"
              style="width: 45%"
              label="Last Name"
            />
          </div>

          <q-input
            rounded
            standout="bg-white text-pink-4"
            dense
            v-model="text"
            style="width: 90%"
            label="Email"
          />
          <q-input
            rounded
            standout="bg-white text-pink-4"
            dense
            v-model="text"
            style="width: 90%"
            label="Password"
          />
          <q-btn
            push
            rounded
            outline
            unelevated
            color="white"
            text-color="white"
            style="width: 90%"
            label="Send"
            v-on:click="redirectToSignUp"
          />
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
  name: "SignUp",
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
  max-width: 25rem;
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
