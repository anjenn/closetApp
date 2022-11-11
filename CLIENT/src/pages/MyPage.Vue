<template>
    <q-page class="container flex flex-center" padding style="background-color: #fff0f5">
        <div class="profile-section q-pa-md q-gutter-sm" style="display:flex; flex-direction:column; align-items:center">
            <q-img
                elevated
                :src="profileImages.image3"
                class="user-profile"
                style="height: 8rem; width: 8rem; border-radius: 50%"
            />
            <span style="font-family: 'fredoka one'">{{this.userNameDisp}}</span>
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
              <Suspense>
                <template #default>
                  <postsContainerMp v-if="renderComp" />
                </template>
                <template #fallback>
                  <span>Loading...</span>
                </template>
              </Suspense>
            </div>
            <div class="q-pa-lg flex flex-center">
              <q-pagination
                v-model="pagination.myPosts"
                max="5"
                direction-links
                flat
                color="grey"
                active-color="pink-4"
              />
            </div>
            </q-tab-panel>
            <q-tab-panel name="savedPosts">
            <div class="q-pa-lg flex flex-center">
              <div class="row posts wrap justify-around">
                <Suspense>
                  <template #default>
                    <postsContainerMp v-if="renderComp" />
                  </template>
                  <template #fallback>
                    <span>Loading...</span>
                  </template>
                </Suspense>
              </div>
            </div>
            <q-pagination
              v-model="pagination.likedPosts"
              max="5"
              direction-links
              flat
              color="grey"
              active-color="pink-4"
            />
            </q-tab-panel>
        </q-tab-panels>
        </q-card>
        <div class="buttons flex q-px-md q-gutter-sm" style="gap:1rem;">
          <q-btn
            color="white"
            outline 
            text-color="pink 4"
            label="Deactivate"
            class="btn"
            @click="deactivate"
          />
          <q-btn
            color="white"
            outline 
            text-color="pink 4"
            label="Sign Out"
            class="btn"
            @click="signOut"
          />
        </div>
    </q-page>
  </template>
  
  <script>
  import { Notify } from 'quasar'
  import { defineComponent } from "vue";
  import { ref } from "vue";
  import userDataMethods from "app/api/userDataMethods";
  import postsContainerMp from 'src/components/PostsContainerMp.vue';

  import Tags from "src/utils/Tags";
  import UserTemp from "src/utils/UserTemp";
  import butter1 from "/public/butter_p1.svg";
  import butter2 from "/public/butter_p2.svg";
  import butter3 from "/public/butter_p3.svg";
  
  export default defineComponent({
    name: "MyPage",
    setup(){
      return{
        tab: ref("myPosts"),
      }
    },
    created () {
      // retrieving user data to the component
      // updating user info from the temp cached data on the db
      // getting rid of null data on the db
      this.currUser = UserTemp.loadUserData("currUser");
      this.currUser.savedPosts = this.currUser.savedPosts.filter(item => item !== "null")
      userDataMethods.updateUserInfo(this.currUser.id, this.currUser)
        .then(response => {
          console.log(response.data);
          UserTemp.saveUserData(this.currUser, "currUser");
          this.currUser.userName? this.userNameDisp = this.currUser.userName : this.$router.push("/LogIn");
        })
        .catch(e => {
          console.log(e);
        });
    },
    data() {
      return {
        currUser: {},
        pagination:{
          myPosts: ref(1),
          likedPosts: ref(1)
        },
        profileImages:{
          image1: butter1,
          image2: butter2,
          image3: butter3,
        },      
        userNameDisp: ref(null),
        renderComp: ref(true)
      };
    },
    components: {
      postsContainerMp,
    },
    methods: {
      signOut(){
        Tags.deleteTags("currTags");
        UserTemp.deleteUserData("currUser");
        this.$router.push("/FeedView");
      },
      deactivate(){
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
  .btn {
    width: 9rem;
    font-family: fredoka one;
  }
  </style>
  