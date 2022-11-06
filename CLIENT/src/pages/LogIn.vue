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
          <q-form @submit="onSubmit" class="q-gutter-md">
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
              v-model="input.password"
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
              @update:model-value="
                this.revealPwd
                  ? (this.revealPwd = true)
                  : (this.revealPwd = false)
              "
            />
            <q-btn
              push
              color="white"
              text-color="pink 4"
              label="Log In"
              type="submit"
              class="btn"
              :loading="btnLoading"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
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
              style="text-shadow: 0 0 7px white"
              @click="redirectToSignUp"
            />
          </span>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import userDataMethods from "app/api/userDataMethods";
import { defineComponent } from "vue";
import { ref } from "vue";
import UserTemp from "src/utils/UserTemp";
import Tags from "src/utils/Tags";

export default defineComponent({
  name: "LogIn",
  created() {
    Tags.deleteTags("currTags");
    UserTemp.deleteUserData("currUser");
  },
  data() {
    return {
      input: {
        userName: ref(null),
        password: ref(null),
      },
      userData: [],
      currUser: ref(null), // to be used as a container for retrieved data
      revealPwd: ref(false),
      btnLoading: ref(null),
    };
  },
  methods: {
    onSubmit() {
      this.btnLoading = true;
      const id = this.input.userName;
      const pw = this.input.password;
      userDataMethods
        .getUserInfo(id)
        .then((response) => {
          this.userData = response.data;
          for (const curr of this.userData) {
            if (curr.userName == id && curr.password == pw) {
              this.currUser = curr;
            }
          }
          if (this.currUser == null) {
            setTimeout(() => {
              this.btnLoading = false;
              console.log("Invalid User");
              Notify.create({
                message: "Invalid User",
                color: "pink-5",
                icon: "warning",
                textColor: "white",
                timeout: 2000,
                progress: true,
                position: "bottom-right",
                actions: [
                  {
                    label: "Dismiss",
                    color: "white",
                    handler: () => {
                      /* ... */
                    },
                  },
                ],
              });
            }, 500);
          } else {
            setTimeout(() => {
              this.btnLoading = false;
              UserTemp.saveUserData(this.currUser, "currUser");
              this.$router.push("/FeedView");
            }, 500);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    redirectToSignUp() {
      this.$router.push("/SignUp");
    },
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
