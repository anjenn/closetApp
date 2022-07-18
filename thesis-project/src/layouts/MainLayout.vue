<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-pink-7">
        <q-toolbar-title
          class="toolBar"
          style="font-family: 'Neonderthaw'; font-weight: 700"
        >
          <span style="pointer-events: none">🤍 Closet Collage 🤍</span>
          <div class="toolbar-buttons">
            <router-link
              :to="{ path: '/FeedView' }"
              style="text-decoration: none"
            >
              <q-btn flat round color="white" icon="home">
                <q-tooltip> Feed </q-tooltip>
              </q-btn>
            </router-link>
            <router-link
              :to="{ path: '/MyPage' }"
              style="text-decoration: none"
            >
              <q-btn flat round color="white" icon="account_circle">
                <q-tooltip> MyPage </q-tooltip>
              </q-btn>
            </router-link>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <Navigation
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
import Navigation from "components/Navigation.vue";

const linksList = [
  {
    title: "FeedView",
    caption: ".",
    icon: "school",
    link: "/FeedView",
  },
  {
    title: "LogIn",
    caption: ".",
    icon: "code",
    link: "/LogIn",
  },
  {
    title: "MyPage",
    caption: ".",
    icon: "chat",
    link: "/MyPage",
  },
  {
    title: "PostEditor",
    caption: ".",
    icon: "record_voice_over",
    link: "/PostEditor",
  },
  {
    title: "SignUp",
    caption: ".",
    icon: "rss_feed",
    link: "/SignUp",
  },
  {
    title: "Main",
    caption: ".",
    icon: "public",
    link: "/",
    // href = link
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    Navigation,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.toolBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toolbar-buttons {
  display: flex;
  gap: 0.5rem;
}
</style>
