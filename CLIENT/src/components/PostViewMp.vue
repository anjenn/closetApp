/// q-col full width: 12, write q-col-xs if spacing needed 
<template>
  <div class="container q-px-md q-py-lg" wrap>
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
              placeholder-src=image
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

  </div>
</template>

<script>
import { defineComponent } from "vue";
import placeholder from "/public/placeholder.svg";
import UserTemp from "src/utils/UserTemp";
import { ref } from "vue";

export default defineComponent({
  created: function() {
    if(UserTemp.checkIfSaved == true){
      console.log('user is logged in');
      this.currUser = UserTemp.loadUserData("currUser");
    }
    console.log(this.postdata);
  },
  name: "PostView",
  data() {
    return {
      currUser: ref(null),
      heartBorder: true,
      image: placeholder,
      images: []
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