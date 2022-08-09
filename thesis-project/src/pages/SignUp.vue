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
          <div class="text-h6" style="text-align: center">Sign Up</div>
          <div class="names q-gutter-md row items-start">
            <q-input rounded outlined dense v-model="text" label="First Name" />
            <q-input rounded outlined dense v-model="text" label="Last Name" />
          </div>

          <q-input rounded outlined dense v-model="text" label="Email" />
          <q-input rounded outlined dense v-model="text" label="Password" />

          <q-input
            rounded
            outlined
            dense
            v-model="text"
            label="Rounded outlined"
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
