<template>
    <q-page class="flex flex-center" padding style="background-color: #fff0f5">
        <div style="display:flex; flex-direction:column; align-items:center">
            <q-img
                elevated
                :src="image"
                class="user-profile"
                style="height: 8rem; width: 8rem; border-radius: 50%"
            />
            <span>user Name</span>
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
                <postView />
                <postView />
                <postView />
                <postView />
                <postView />
                <postView />
            </div>
            </q-tab-panel>
            <q-tab-panel name="savedPosts">
            <div class="row posts wrap justify-around">
                <postView />
                <postView />
                <postView />
                <postView />
                <postView />
                <postView />
            </div>
            </q-tab-panel>
        </q-tab-panels>
        </q-card>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { ref } from "vue";
  import postView from "/src/components/PostView";
  import placeholder from "/public/placeholder.svg";
  
  export default defineComponent({
    name: "MyPage",
    data() {
      return {
        image: placeholder,
      };
    },
    components: {
      postView,
    },
    setup() {
      return {
        tab: ref("myPosts"),
      };
    },
  });
  </script>
  
  <style scoped>
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
  