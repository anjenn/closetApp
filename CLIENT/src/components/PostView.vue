// q-col full width: 12, write q-col-xs if spacing needed 
<template>
  <div class="container q-px-md q-py-lg" wrap>
    <q-card class="post-card q-pa-lg">
      <div class="collage row">
        <div
            v-for="item in images"
            v-bind:key="item.index"
            class="col-6"
        >
            <q-img
              :src="item.url"
              :ratio="1"
              spinner-color="white"
              spinner-size="0.3rem"
              :style="`${item.style}`"
              />
        </div>
      </div>
      <div class="buttons">
        <q-btn
          v-model="this.heartBorder"
          flat
          unelevated
          dense
          color="grey-6"
          :ripple="false"
          :icon="this.heartBorder ? 'favorite' : 'favorite_border'"
          @click="onHeartClick"
        />
        <q-btn
          flat
          unelevated
          dense
          color="grey-6"
          :ripple="false"
          icon="edit"
          v-on:click="redirectToEdit"
        />
        <q-btn
          flat
          unelevated
          dense
          color="grey-6"
          :ripple="false"
          icon="share"
        />
      </div>
      <span style="background-color:pink">  # placeholder</span>
    </q-card>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import placeholder from "/public/placeholder.svg";
import Tags from "src/utils/Tags";

export default defineComponent({
  props: ['curruser'],
  name: "PostView",
  async setup() {
    function retrieveTags(){
      const temp = Tags.loadTags("tags");
      var result = null;
      if (!temp){
        result = Tags.fetchTagsArray();
        return result.join(',');
      }
      else{
        result = temp;
        return result.join(',');
      }
    }
    var tagsStr = retrieveTags();
    const url = (
      'http://localhost:3000/api/FeedView?tags=' + tagsStr
    );
    const posts = await fetch(url)
    .then(res => res.json())
    .then(data => {
    // enter you logic when the fetch is successful
      //console.log(data)
    })
    .catch(error => {
      // enter your logic for when there is an error (ex. error toast)
    console.log(error)
    })
    return {
      posts
    }
  },
  data() {
    return {
      // tags: [],
      currUser: this.curruser,
      heartBorder: true,
      image: placeholder,
      images: [
        {
          url: placeholder,
          index: 1,
          style: "border-top-left-radius: 15px"
        },
        {
          url: placeholder,
          index: 2,
          style: "border-top-right-radius: 15px"
        },
        {
          url: placeholder,
          index: 3,
          style: "border-bottom-left-radius: 15px"
        },
        {
          url: placeholder,
          index: 4,
          style: "border-bottom-right-radius: 15px"
        },
      ]
    };
  },
  methods: {
    onHeartClick() {
      this.heartBorder == true
        ? (this.heartBorder = false)
        : (this.heartBorder = true);
    },
    redirectToEdit() {
      this.$router.push({ name: "Post Editor w ID", params: {postID: this.postId} })
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
.post-card {
  height: 27rem;
  width: 24rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* align items in Main Axis */
}
</style>
