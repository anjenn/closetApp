<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-pink-4">
        <q-toolbar-title
          class="toolBar"
        >
          <q-img src="../../public/collageit.svg" style="height: 2rem; width: 11rem; object-fit: contain;"/>
          <div class="toolbar-btns">
            <router-link
              :to="{ path: '/FeedView' }"
              style="text-decoration: none"
            >
              <q-btn flat round color="white" icon="home">
                <q-tooltip> Feed </q-tooltip>
              </q-btn>
            </router-link>
            <q-btn flat round color="white" icon="account_circle" @click="redirectToMyPage">
              <q-tooltip> My Page </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="white"
              icon="navigation"
              @click="toggleNav"
            >
              <q-tooltip> Navigation </q-tooltip>
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
              <q-tooltip> Filter </q-tooltip>
              <template v-slot:prepend>
                <q-icon name="tune" color="white" />
              </template>
            </q-select>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      style="width: 150px"
      show-if-above
      bordered
    >
      <span wrap style="font-size: 2rem; font-family: fredoka one"
        >NAVIGATION FOR DEVELOPMENTAL PURPOSE! DELETE LATER!</span
      >
      <q-list>
        <navigation
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
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
    title: "FeedView",
    caption: ".",
    link: "/FeedView",
  },
  {
    title: "LogIn",
    caption: ".",
    link: "/LogIn",
  },
  {
    title: "MyPage",
    caption: ".",
    link: "/MyPage",
  },
  {
    title: "PostEditor",
    caption: ".",
    link: "/PostEditor",
  },
  {
    title: "SignUp",
    caption: ".",
    link: "/SignUp",
  },
  {
    title: "Main",
    caption: ".",
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
    this.selected = Tags.loadTags("currTags")
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
      options: [...Tags.fetchTagsArray()],
    };
  },
  methods: {
    toggleNav() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    redirectToMyPage() {
      const user = UserTemp.loadUserData("currUser");
      if(!user.id){
        this.$router.push("/LogIn");
      }
      else{
        this.$router.push("/MyPage");
      }
    },
    saveSelection(){
      Tags.saveTags(this.selected, "currTags");
    }
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
</style>
