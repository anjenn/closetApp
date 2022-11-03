<!-- <postView :postdata="postdata" :index="0"/> -->
<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <div class="row justify-evenly">
        <postView 
          v-for="post in posts"
          :postData="post"
          :key="post.id"
        />
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
import postDataMethods from "app/api/postDataMethods";
import { defineComponent } from "vue";
import Tags from "../utils/Tags";

export default defineComponent({
  name: "FeedView",
  created() {
    this.retrievePosts();
  },
  components: {
    postView,
  },
  data() {
    return {
      // postdata: { // to be sent as a parameter
      //   userID: 12345,
      //   tag: '12345',
      //   photos: '12345',
      //   createdAt: '12345',
      //   updatedAt: '12345',
      //   id: '12345'
      // },
      tags: ref(null),
      posts: []
    };
  },
  methods: {
    redirectToPostEditor() {
      this.$router.push("/PostEditor");
    },
    retrieveTags(){
      const temp = Tags.loadTags("tags");
      if (!temp){
        this.tags = Tags.fetchTagsArray();
      }
      else{
        this.tags = temp;
      }
    },
    retrievePosts(){
      this.retrieveTags();
      postDataMethods.getAllPosts('girly')
      .then(response => {
          let temp = response.data;
          console.log(temp);
          this.posts = this.randomiseAndCut(temp);
          console.log(this.posts);
      })
      .catch(e => {
        console.log(e);
      });
    },
    randomiseAndCut(arr){
      let currentIndex = arr.length, randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [
          arr[randomIndex], arr[currentIndex]];
      }
      arr = arr.slice(0, 9);
      return arr;
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
