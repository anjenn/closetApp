const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Initialisation page
      {
        path: "",
        component: () => import("pages/InitialiseTags.vue"),
      },
      // Post page
      { path: "/FeedView", component: () => import("pages/FeedView.vue") },
      { path: "/LogIn", component: () => import("pages/LogIn.vue") },
      { path: "/MyPage", component: () => import("pages/MyPage.vue") },
      { path: "/PostEditor", component: () => import("pages/PostEditor.vue") },
      { path: "/SignUp", component: () => import("pages/SignUp.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
