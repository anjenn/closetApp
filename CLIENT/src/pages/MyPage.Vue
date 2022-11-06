<template>
    <q-page class="container flex flex-center" padding style="background-color: #fff0f5">
        <div style="display:flex; flex-direction:column; align-items:center">
            <q-img
                elevated
                :src="image3"
                class="user-profile"
                style="height: 8rem; width: 8rem; border-radius: 50%"
            />
            <span style="font-family: 'fredoka one'">{{this.userNameDisp}}</span>
            <q-btn
              push
              color="white"
              text-color="pink 4"
              label="Delete Account"
              class="btn"
              @click="deleteUser"
            />
            <q-btn
              push
              color="white"
              text-color="pink 4"
              label="Log Out"
              class="btn"
              @click="logOut"
            />
        </div>
        <q-card class="cardView">
        <q-tabs
            v-model="tab"
            dense
            class="text-grey-7"
            active-color="bg-pink-4 shadow-10"
            style="font-family: 'fredoka one'"
            indicator-color="pink-4"
            align="justify"
            narrow-indicator
        >
            <q-tab name="myPosts" label="My Posts" />
            <q-tab name="savedPosts" label="Saved" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="myPosts">
            <div class="row posts wrap justify-around">
                <postViewMp />
                <postViewMp />
                <postViewMp />
                <postViewMp />
                <postViewMp />
                <postViewMp />
            </div>
            </q-tab-panel>
            <q-tab-panel name="savedPosts">
            <div class="row posts wrap justify-around">
                <postViewMp />
                <postViewMp />
                <postViewMp />
                <postViewMp />
                <postViewMp />
                <postViewMp />
            </div>
            </q-tab-panel>
        </q-tab-panels>
        </q-card>
    </q-page>
  </template>
  
  <script>
  import { Notify } from 'quasar'
  import { defineComponent } from "vue";
  import { ref } from "vue";
  import userDataMethods from "app/api/userDataMethods";
  import postViewMp from "/src/components/PostViewMp";
  import Tags from "src/utils/Tags";
  import UserTemp from "src/utils/UserTemp";
  import butter1 from "/public/butter_p1.svg";
  import butter2 from "/public/butter_p2.svg";
  import butter3 from "/public/butter_p3.svg";
  
  export default defineComponent({
    name: "MyPage",
    created() {
      const user = UserTemp.loadUserData("currUser");
      this.user = user;
      this.user.userName? this.userNameDisp = this.user.userName : this.userNameDisp = "NULL";
      console.log(this.userID);

      /*
        userDataMethods.updateUserInfo(this.currUser.id, this.currUser)
        .then(response => {
          this.currUser = response.data
          console.log(this.currUser);
          UserTemp.saveUserData(this.currUser, "currUser");
        })
        .catch(e => {
          console.log(e);
        });
        // load saved posts info before elements are rendered
      */



    },
    data() {
      return {
        user: ref(null),
        image1: butter1,
        image2: butter2,
        image3: butter3,
        userNameDisp: ref(null)
      };
    },
    components: {
      postViewMp,
    },
    setup() {
      return {
        tab: ref("myPosts"),
      };
    },
    methods: {
      logOut(){
        Tags.deleteTags("tags");
        UserTemp.deleteUserData("currUser");
        this.$router.push("/FeedView");
      },
      deleteUser(){
        this.logOut();
        userDataMethods.deleteUserInfo(this.user.id)
        .then(response => {
            console.log(response.data);
            Notify.create({
              message: `Your account was deleted successfully (user ID: ${this.user.id})`,
              color: 'pink-5',
              icon: 'info',
              textColor: 'white',
              timeout: 2000,
              progress: true,
              position: 'bottom-right',
              actions: [
                { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
              ]
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  });
  </script>
  
  <style scoped>
  .container {
    flex-direction: column;

  }
  .user-profile {
    margin-top: 5rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  .cardView {
    margin: 5rem 4.5rem;
  }
  .container-sub {
    margin: 10vh 7vw;
    flex-direction: column;
    align-items: center;
  }
  </style>
  