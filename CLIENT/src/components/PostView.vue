// q-col full width: 12, write q-col-xs if spacing needed 
<template>
  <div class="container q-px-md q-py-lg" wrap>
    <q-card class="post-card q-pa-lg">
      <q-dialog class="sharing-modal q-pa-xl" v-model="dialog" persistent>
        <q-card>
          <q-card-section class="flex flex-center" style="flex-direction:column;">
            <span style="font-family: 'fredoka one'">Here are the links!</span>
              <ul
                  v-for="item in post.photos"
                  v-bind:key="item.order"
              ><li>{{item.url}}</li></ul>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Close" color="pink-4" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="collage row">
        <div
            v-for="item in post.photos"
            v-bind:key="item.order"
            class="col-6"
        >
            <div :style="`overflow:hidden;
              filter: brightness(${1+(item.imageEdits.brightness)/10})`">
              <q-img
              :src="item.url"
              :ratio="1"
              spinner-color="white"
              spinner-size="0.3rem"
              :style="`${styles[item.order]};
                transform: scale(${1+(item.imageEdits.imageScale)/10});
                filter: saturate(${1+(item.imageEdits.saturation)/3});`"
              />
            </div>
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
          v-on:click="redirectToEdit(post.id)"
        />
        <q-btn
          flat
          unelevated
          dense
          color="grey-6"
          :ripple="false"
          icon="share"
          @click="dialog = true"
        />
      </div>
      <span style="background-color:pink">  # placeholder</span>
    </q-card>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import placeholder from "/public/placeholder.svg";
import { ref } from "vue";

export default defineComponent({
  props: ['data'],
  name: "PostView",
  data() {
    return {
      dialog: ref(false),
      currUser: this.curruser,
      heartBorder: true,
      image: placeholder,
      styles: ["border-top-left-radius: 15px", "border-top-right-radius: 15px",
                "border-bottom-left-radius: 15px", "border-bottom-right-radius: 15px"],
      post: this.data //userID, tag, photos: {order, url, imageEdits, createdAt, updatedAt, id }, 
    };
  },
  methods: {
    onHeartClick() {
      this.heartBorder == true
        ? (this.heartBorder = false)
        : (this.heartBorder = true);
    },
    redirectToEdit(ID) {
      this.$router.push({ name: "Post Editor w ID", params: {postID: ID} })
    }
  },
});
</script>

<style scoped>
.post-card {
  position: relative;
  height: 27rem;
  width: 24rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* align items in Main Axis */
}

.sharing-modal {
  position: absolute;
  width: 10rem;
  height: 10rem;
  overflow: scroll;
  z-index: 2;
  background-color: white;
}
</style>
