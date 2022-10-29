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
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="input.userName"
              class="input-1"
              label="User ID *"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-input
              filled
              v-model="input.passWord"
              class="input-2"
              label="Password *"
              :type="revealPwd ? 'text' : 'password'"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Please type something',
              ]"
            />
            <q-toggle
              v-model="revealPwd"
              label="Reveal password"
              color="pink"
              keep-color
              @update:model-value="(this.revealPwd) ? (this.revealPwd = true) : (this.revealPwd = false)"
              />
            <q-btn
              push
              color="white"
              text-color="pink 4"
              label="Log In"
              type="submit"
              class="btn"
            />
          </q-form>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="container sub">
          <span style="margin: auto">
            Have no account?
            <q-btn
              push
              flat
              text-color="pink 4"
              label="Sign Up"
              style="text-shadow: 0 0 7px white;"
              v-on:click="redirectToSignUp"
            />
          </span>
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
  data() {
    return {
      input: {
        userName: ref(null),
        passWord: ref(null)
      },
      revealPwd: ref(false)
    }
  },
  methods: {
    onSubmit(){
      alert('trying to login');
    },
    redirectToSignUp() {
      this.$router.push("/SignUp");
    }
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
  font-family: fredoka one;
  margin-top: 1.5rem;
  height: 2rem;
  font-size: 1.15rem;
}
.input-1 {
  background-color: white;
  margin-top: 2rem;
  height: 3rem;
  border-radius: 5px;
}
.input-2 {
  background-color: white;
  margin-top: 1.3rem;
  height: 3rem;
  border-radius: 5px;
}
</style>
