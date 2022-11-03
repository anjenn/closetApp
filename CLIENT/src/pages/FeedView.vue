<!-- <postView :postdata="postdata" :index="0"/> -->

<!-- <postView 
v-for item in posts
/> -->

<template>
  <q-page padding class="container" style="background-color: #fff0f5">
    <div class="container-sub flex">
      <div class="row justify-evenly">

        <postView :postdata="postdata" :index="0"/>
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
          v-on:click="redirectPostEditor"
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
    this.retrieveTags();
    this.retrievePosts();
  },
  components: {
    postView,
  },
  data() {
    return {
      postdata: { // to be sent as a parameter
        userID: 12345,
        tag: '12345',
        photos: '12345',
        createdAt: '12345',
        updatedAt: '12345',
        id: '12345'
      },
      tags: ref(null),
      posts: []
    };
  },
  methods: {
    randomNumGen() {},
    redirectPostEditor() {
      this.$router.push("/PostEditor");
    },
    retrieveTags(){
      const temp = Tags.loadTags("tags");
      if (!temp){
        console.log('tags empty');
        this.tags = Tags.fetchTagsArray();
        console.log(this.tags);
      }
      else{
        console.log('tags non empty');
        this.tags = temp;
        console.log(this.tags);
      }
    },
    retrievePosts(){
      postDataMethods.getAllPosts(this.tags)
      .then(response => {
          this.posts = response.data;
          // console.log(this.posts);
      })
      .catch(e => {
        console.log(e);
      });
    },
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
