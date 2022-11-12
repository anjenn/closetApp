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
            <q-tab name="userPosts" label="My Posts" />
            <q-tab name="savedPosts" label="Saved" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="userPosts" class="panel flex flex-center">
              <div class="row posts wrap justify-around">
                <Suspense>
                  <template #default>
                    <postsContainerMp v-if="renderComp.user" post-type="users" :pg-num="pagination.userPosts" />
                  </template>
                  <template #fallback>
                    <span>Loading...</span>
                  </template>
                </Suspense>
              </div>
              <q-pagination
                  v-model="pagination.userPosts"
                  :max="maxPg.userPosts"
                  direction-links
                  flat
                  color="grey"
                  active-color="pink-4"
                  @update:model-value="renderUser"
              />
            </q-tab-panel>
            <q-tab-panel name="savedPosts" class="panel flex flex-center">
              <div class="row posts wrap justify-around">
                <Suspense>
                  <template #default>
                    <postsContainerMp v-if="renderComp.saved" post-type="saved" :pg-num="pagination.savedPosts" />
                  </template>
                  <template #fallback>
                    <span>Loading...</span>
                  </template>
                </Suspense>
              </div>
              <q-pagination
                  v-model="pagination.savedPosts"
                  :max="maxPg.savedPosts"
                  direction-links
                  flat
                  color="grey"
                  active-color="pink-4"
                  @update:model-value="renderSaved"
              />
            </q-tab-panel>
        </q-tab-panels>
        </q-card>
        <div class="buttons flex q-px-md q-gutter-sm" style="gap:1rem;">
          <q-btn
            color="white"
            outline 
            text-color="pink 4"
            label="Delete Acc"
            class="btn"
            @click="deleteAcc"
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
  import { Notify, useQuasar } from 'quasar'
  import { defineComponent, ref, nextTick } from "vue";
  import userDataMethods from "app/api/userDataMethods";
  import postDataMethods from 'app/api/postDataMethods';
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
        tab: ref("userPosts")
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
      // pagination setup
      postDataMethods.getAllPostsMp(this.currUser.id)
        .then(response => {
          const tempPosts= response.data;
          const tempUserPosts = tempPosts.filter(post => post.userID == this.currUser.id);
          const tempSavedPosts = tempPosts.filter(post => this.currUser.savedPosts.includes(post.id));
          const userPostsNum = tempUserPosts.length;
          const savedPostsNum = tempSavedPosts.length;
          this.maxPg.userPosts = Math.ceil(userPostsNum/12);
          this.maxPg.savedPosts = Math.ceil(savedPostsNum/12);
          //console.log(userPostsNum, savedPostsNum, this.maxPg.userPosts, this.maxPg.savedPosts);
        })
        .catch(e => {
          console.log(e);
        });
    },
    data() {
      return {
        currUser: {},
        profileImages:{
          image1: butter1,
          image2: butter2,
          image3: butter3,
        },      
        userNameDisp: ref(null),
        renderComp: {
          user: ref(true),
          saved: ref(true)
        },
        pagination:{
          userPosts: ref(1),
          savedPosts: ref(1)
        },
        maxPg: {
          userPosts: ref(null),
          savedPosts: ref(null)
        }
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
      deleteAcc(){
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
      },
      async renderSaved(val){
        //console.log(`check if model value ${val}`); // this returns current pgNum
        this.renderComp.saved = false;
        await nextTick();
        this.renderComp.saved = true;
      },
      async renderUser(val){
        //console.log(`check if model value ${val}`); // this returns current pgNum
        this.renderComp.user = false;
        await nextTick();
        this.renderComp.user = true;
      },
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
    width: 11rem;
    font-family: fredoka one;
  }
  .panel{
    flex-direction: column;
  }
  </style>
  