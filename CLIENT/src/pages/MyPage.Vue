<template>
    <q-page class="container flex flex-center" padding style="background-color: #fff0f5">
        <div style="display:flex; flex-direction:column; align-items:center">
            <q-img
                elevated
                :src="image3"
                class="user-profile"
                style="height: 8rem; width: 8rem; border-radius: 50%"
            />
            <span style="font-family: 'fredoka one'">{{this.user.userName}}</span>
            <q-btn
              push
              color="white"
              text-color="pink 4"
              label="Delete Account"
              class="btn"
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
  import { defineComponent } from "vue";
  import { ref } from "vue";
  import postViewMp from "/src/components/PostViewMp";
  import UserTemp from "src/utils/UserTemp";
  import butter1 from "/public/butter_p1.svg";
  import butter2 from "/public/butter_p2.svg";
  import butter3 from "/public/butter_p3.svg";
  
  export default defineComponent({
    name: "MyPage",
    created() {
      const user = UserTemp.loadUserData("currUser");
      this.user = user;
      console.log(this.userID);
    },
    data() {
      return {
        user: ref(null),
        image1: butter1,
        image2: butter2,
        image3: butter3
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
  