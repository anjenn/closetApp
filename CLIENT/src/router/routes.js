const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Initialisation page
      {
        path: "/",
        // path: "/Initialisation",
        component: () => import("pages/InitialiseTags.vue"),
      },
      // Post page
      {
        path: "/FeedView",
        name: "Feed View",
        component: () => import("pages/FeedView.vue"),
      },
      {
        path: "/LogIn",
        name: "Log In",
        component: () => import("pages/LogIn.vue"),
      },
      {
        path: "/MyPage",
        name: "My Page",
        component: () => import("pages/MyPage.vue"),
      },
      {
        path: "/PostEditor",
        name: "Post Editor",
        component: () => import("pages/PostEditor.vue"),
      },
      {
        path: "/PostEditor/:postID",
        name: "Post Editor w ID",
        props: true,
        component: () => import("pages/PostEditor.vue"),
      },
      {
        path: "/SignUp",
        name: "Sign Up",
        component: () => import("pages/SignUp.vue"),
      },
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
