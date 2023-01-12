<template>
  <q-layout view="hhh lpR lFf">
    <q-header elevated>
      <q-toolbar class="bg-pink-4">
        <q-toolbar-title
          class="toolBar"
        >
          <q-img src="../../public/collageit.svg" style="height: 2rem; width: 11rem; object-fit: contain;"/>
          <div class="toolbar-btns">
            <q-btn flat round color="white" icon="home" @click="redirectToFeedView">
              <q-tooltip class="mainFont"> Feed </q-tooltip>
            </q-btn>
            <q-btn flat round color="white" icon="account_circle" @click="redirectToMyPage">
              <q-tooltip class="mainFont"> My Page </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="white"
              icon="navigation"
              @click="toggleNav"
            >
              <q-tooltip class="mainFont"> Navigation </q-tooltip>
            </q-btn>
            <q-select
              behavior="dialog"
              options-dense
              borderless
              dense
              multiple
              label-color="white"
              color="pink-4"
              autofocus
              v-model="selected"
              hide-selected
              hide-dropdown-icon
              @popup-hide="saveSelection"
              :options="options"
            >
              <q-tooltip class="mainFont"> Filter </q-tooltip>
              <template v-slot:prepend>
                <q-icon name="tune" color="white" @click="returnSelection" />
              </template>
            </q-select>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="200"
      :breakpoint="700"
      class="bg-pink-3 text-white q-py-sm"
    >
      <span style="font-size:1.2rem; text-align: center;">
        ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</span>
      <q-list separator>
        <navigation
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <p id="warning">
        <b>Warning: </b> redirection to My Page, Log In, and Sign Up pages automatically signs you out from this application
      </p>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import navigation from "components/Navigation.vue";
import Tags from "src/utils/Tags";
import UserTemp from "src/utils/UserTemp";

const linksList = [
  {
    title: "Feed",
    icon: "home",
    link: "/FeedView",
  },
  {
    title: "Log In",
    icon: "key",
    link: "/LogIn",
  },
  {
    title: "My Page",
    icon: "face_3",
    link: "/MyPage",
  },
  {
    title: "New Post",
    icon: "add_circle",
    link: "/PostEditor",
  },
  {
    title: "Sign Up",
    icon: "account_circle",
    link: "/SignUp",
  },
  {
    title: "Initial Pg",
    icon: "sell",
    link: "/",
    // href = link
  },
];

export default defineComponent({
  name: "MainLayout",
  components: {
    navigation
  },
  created(){
    this.selected = Tags.loadTags("currTags");
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    };
  },
  data() {
    return {
      selected: ref(null),
      currUser: ref(null),
      options: [...Tags.fetchTagsArray()],
    };
  },
  methods: {
    toggleNav() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    redirectToMyPage() {
      this.currUser = UserTemp.loadUserData("currUser");
      if(!this.currUser.id){
        this.$router.push("/LogIn");
      }
      else{
        this.$router.push({ name: "My Page", params: {userID: this.currUser.id} })
      }
    },
    redirectToFeedView(){
      this.$router.push("/FeedView");
    },
    saveSelection(){
      Tags.saveTags(this.selected, "currTags");
    },
    returnSelection() {
      this.selected = Tags.loadTags("currTags");
    },
  },
});
</script>

<style scoped>
.toolBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toolbar-btns {
  display: flex;
  gap: 0.5rem;
}
.filter-btn {
  position: relative;
}
#warning {
  position: fixed;
  bottom: 0;
  font-style: italic;
  font-size:0.7rem;
  text-align: center;
  padding: 0.5rem 0.5rem;
}
</style>
