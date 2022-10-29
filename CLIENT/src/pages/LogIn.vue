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
import userDataMethods from "app/api/userDataMethods";
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
      userData: ref(null),
      user: ref(null),
      revealPwd: ref(false),
      btnLoading: ref(null)
    }
  },
  computed: {
    retrieveUserData(userName) {
        return new Promise(userDataMethods.getUserInfo(userName).then(response => {
          this.userData = response.data;
          console.log('test 1');
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });
    }
  },
  methods: {
    async onSubmit(){
      // this.btnLoading = true;
      // const id = this.input.userName;
      // const pw = this.input.passWord;
      const id = "JeongHyun";
      const pw = "fslfjdkjflsk";
      await this.retrieveUserData(id);
      while(this.userData == null){

      }
      console.log('test 2');
      console.log(this.userData);
      this.userData.forEach(function (arrayItem){
        console.log('test 3');
        console.log(arrayItem);
      })
      

      
      
      for (const curr of this.userData) {
        console.log('test 2');
        console.log(curr);
        if (curr.userName == id && curr.passWord == pw){
          console.log(curr.userName, curr.passWord);
          this.user.firstName = curr.firstName;
          this.user.lastName = curr.lastName;
          this.user.passWord = curr.passWord;
          this.user.savedPosts = curr.passWord;
          this.user.id = curr.id;
          console.log(this.user);
        }
      }
      // setTimeout(() => {
      //     this.btnLoading = false
      //     // redirection
          
      //   }, 1000)
    },
    redirectToSignUp(){
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
