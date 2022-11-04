<!-- <postView :postdata="postdata" :index="0"/> -->
<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <div class="row justify-evenly">
        <Suspense>
          <template #default>
            <postView 
              v-for="n in 9"
              :key="n"
            />
          </template>
          <template #fallback>
            <span>Loading...</span>
          </template>
        </Suspense>
      </div>
      <div class="row justify-between" style="width: 12rem">
        <q-btn
          push
          class="btn-bottom"
          size="xl"
          color="pink-3"
          round
          icon="refresh"
        />
        <q-btn
          push
          class="btn-bottom"
          size="xl"
          color="pink-3"
          round
          icon="add"
          v-on:click="redirectToPostEditor"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import postView from "/src/components/PostView";
import { defineComponent } from "vue";
import UserTemp from "src/utils/UserTemp";

export default defineComponent({
  // created: function() {
  //   if(UserTemp.checkIfSaved == true){
  //     this.currUser = UserTemp.loadUserData("currUser");
  //   }
  //   console.log(this.currUser);
  // },
  name: "FeedView",
  components: {
    postView,
  },
  data() {
    return {
      tags: ref(null)
    };
  },
  methods: {
    redirectToPostEditor() {
      this.$router.push("/PostEditor");
    }
  },
});
</script>

<style scoped>
.container-sub {
  margin: 10vh 7vw;
  flex-direction: column;
  align-items: center;
}
.btn-bottom {
  margin-top: 3rem;
}
</style>
