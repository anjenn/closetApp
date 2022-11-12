<!-- <postView :postdata="postdata" :index="0"/> -->
<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <Suspense>
        <template #default>
          <postsContainer v-if="renderComp" @on-refVal-change="refreshPosts" />
        </template>
        <template #fallback>
          <span>Loading...</span>
        </template>
      </Suspense>
      <div class="row justify-between" style="width: 12rem">
        <q-btn
          push
          class="btn-bottom"
          size="xl"
          color="pink-3"
          round
          icon="refresh"
          @click="refreshPosts"
        />
        <q-btn
          push
          class="btn-bottom"
          size="xl"
          color="pink-3"
          round
          icon="add"
          @click="redirectToPostEditor"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { nextTick, ref, defineComponent } from "vue";
import postsContainer from "/src/components/PostsContainer";
import PostTemp from "src/utils/PostTemp";
import UserTemp from "src/utils/UserTemp";
import { Notify } from "quasar";

export default defineComponent({
  name: "FeedView",
  components: {
    postsContainer,
  },
  data() {
    return {
      tags: ref(null),
      renderComp: ref(true),
      currUser: ref(null)
    };
  },
  methods: {
    redirectToPostEditor() {
      this.currUser = UserTemp.loadUserData("currUser");
      if(!this.currUser.id){
        Notify.create({
          message: `You must log in first to create a post`,
          color: "pink-5",
          icon: "info",
          textColor: "white",
          timeout: 2000,
          progress: true,
          position: "bottom-right",
          actions: [
            {
              label: "Dismiss",
              color: "white",
              handler: () => {
                /* ... */
              },
            },
          ],
        });
        this.$router.push("/LogIn");
      }
      else {
        PostTemp.deletePostData("currPost");
        this.$router.push("/PostEditor");
      }
    },
    async refreshPosts() {
      this.renderComp = false;
      await nextTick();
      this.renderComp = true;
    },
  },
});
</script>

<style scoped>
.btn-bottom {
  margin-top: 3rem;
}
.container-sub {
  margin: 10vh 7vw;
  flex-direction: column;
  align-items: center;
}
</style>
