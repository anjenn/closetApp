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
          <div class="text-h5" style="text-align: center">Create Your Account!</div>
          <div class="names row justify-around items-start">
            <q-input
              rounded
              standout="bg-white text-pink-4"
              dense
              v-model="user.firstName"
              style="width: 45%"
              label="First Name"
            />
            <q-input
              rounded
              standout="bg-white text-pink-4"
              dense
              v-model="user.lastName"
              style="width: 45%"
              label="Last Name"
            />
          </div>
          <q-input
            rounded
            standout="bg-white text-pink-4"
            dense
            v-model="user.userName"
            style="width: 90%"
            label="User Name"
          />
          <q-input
            rounded
            standout="bg-white text-pink-4"
            dense
            type="password"
            v-model="user.passWord"
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
            label="Next ➜"
            v-on:click="createUser"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import userDataMethods from "app/api/userDataMethods";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "SignUp",
  data() {
    return {
      user: {
        firstName: ref(null),
        lastName: ref(null),
        userName: ref(null),
        passWord: ref(null),
      }
    };
  },
  mounted: {
    resetFields() {
      this.firstName = null,
      this.lastName = null,
      this.userName = null,
      this.passWord = null
    },
    resetLocalStorage() {
      
    }
    // reset the fields
    // reset local storage data (add user data to local storage)
  },
  methods: {
    createUser() {
      var data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userName: this.user.userName,
        passWord: this.user.password,
        savedPosts: "null"
      };
      userDataMethods.createUser(data).then(response => {
          this.user.firstName = response.data.firstName;
        })
        .catch(e => {
          console.log(e);
        });
        this.redirecTo();
    },
    redirecTo(){
      this.$router.push("/LogIn");
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
</style>
