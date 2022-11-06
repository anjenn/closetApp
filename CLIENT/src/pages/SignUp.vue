<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <div class="container main">
      <q-card
        dark
        bordered
        class="bg-pink-3 my-card shadow-10"
        style="font-family: 'fredoka one'"
      >
        <q-card-section>
          <div class="text-h5" style="text-align: center">
            Create Your Account!
          </div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          <q-form
            class="container q-gutter-sm sub flex flex-center"
            @submit="onSubmit"
          >
            <template class="names row justify-around items-start">
              <q-input
                ref="firstNameRef"
                rounded
                standout="bg-white text-pink-4"
                dense
                v-model="user.firstName"
                style="width: 40%"
                label="First Name *"
                :rules="[(val) => val.length >= 2 || 'Use min. 2 characters']"
              />
              <q-input
                ref="lastNameRef"
                rounded
                standout="bg-white text-pink-4"
                dense
                v-model="user.lastName"
                style="width: 40%"
                label="Last Name *"
                :rules="[(val) => val.length >= 2 || 'Use min. 2 characters']"
              />
            </template>
            <q-input
              ref="userNameRef"
              rounded
              standout="bg-white text-pink-4"
              dense
              v-model="user.userName"
              style="width: 90%"
              label="User ID *"
              :rules="[(val) => val.length >= 2 || 'Use min. 2 characters']"
            />
            <q-input
              ref="passwordRef"
              rounded
              standout="bg-white text-pink-4"
              dense
              type="password"
              v-model="user.password"
              style="width: 90%"
              label="Password *"
              :rules="[
                (val) =>
                  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val) ||
                  'Use min. 8 characters including number and alphabet',
              ]"
            />
            <q-btn
              push
              rounded
              outline
              unelevated
              color="white"
              text-color="white"
              style="width: 90%; margin-bottom: 0.5rem"
              label="Next ➜"
              :loading="btnLoading"
              type="submit"
            >
              <template v-slot:loading> Loading... </template>
            </q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import userDataMethods from "app/api/userDataMethods";
import UserTemp from "src/utils/UserTemp";
import { defineComponent } from "vue";
import { ref } from "vue";
import Tags from "src/utils/Tags";

export default defineComponent({
  name: "SignUp",
  created() {
    // log out
    Tags.deleteTags("currTags");
    UserTemp.deleteUserData("currUser");
  },
  data() {
    return {
      user: {
        firstName: ref(null),
        lastName: ref(null),
        userName: ref(null),
        password: ref(null),
      },
      firstNameRef: ref(null),
      lastNameRef: ref(null),
      userNameRef: ref(null),
      passwordRef: ref(null),
      btnLoading: ref(null),
    };
  },
  computed: {
    returnUser() {
      return this.user;
    },
  },
  methods: {
    onSubmit() {
      this.btnLoading = true;
      var data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userName: this.user.userName,
        password: this.user.password,
        savedPosts: "null",
      };
      userDataMethods
        .createUser(data)
        .then((response) => {
          this.user.firstName = response.data.firstName;
        })
        .catch((e) => {
          console.log(e);
        });
      setTimeout(() => {
        this.btnLoading = false;
        // redirection
        this.$router.push("/LogIn");
      }, 1700);
    },
    saveTempUserData() {
      UserTemp.saveUserData(this.returnUser, "CurrentUser");
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
</style>
