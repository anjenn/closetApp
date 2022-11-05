// q-col full width: 12, write q-col-xs if spacing needed 
<template>
  <div class="container q-px-md q-py-lg" wrap>
    <q-card class="post-card q-pa-lg">
      <q-dialog v-model="dialog" persistent>
        <q-card class="sharing-modal">
          <q-card-section class="flex flex-center" style="flex-direction:column;">
            <span style="font-family: 'fredoka one'; margin-bottom:1rem;">Here are the links!</span>
              <q-list class="rounded-borders" dense bordered padding>
                <q-item
                    clickable v-ripple
                    v-for="item in post.photos"
                    v-bind:key="item.order"
                ><q-item-section>{{item.url}}</q-item-section>
                </q-item>
              </q-list>
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
            filter: saturate(${1+(item.imageEdits.saturation)/10})`">
              <q-img
              :src="item.url"
              :ratio="1"
              spinner-color="white"
              spinner-size="0.3rem"
              placeholder-src="image"
              :style="`${styles[item.order]};
              filter: brightness(${1+(item.imageEdits.brightness)/10}) contrast(${1+(item.imageEdits.contrast)/10});`"
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
      <span style="background-color:pink">#{{this.post.tag}}</span>
    </q-card>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import placeholder from "/public/placeholder.svg";
import { ref } from "vue";
import PostTemp from "src/utils/PostTemp";
import UserTemp from "src/utils/UserTemp";
import { Notify } from 'quasar'


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
      post: this.data //userID, tag, photos: {order, url, imageEdits}, createdAt, updatedAt, id }, 
    };
  },
  methods: {
    compareUser(){
      const temp = UserTemp.loadUserData("currUser");
      // console.log(temp.id, this.post.userID);
      if(!temp){
        return false
      }
      else if(temp.id === this.post.userID){
        return true
      }
      else{
        return false
      }
    },
    onHeartClick() {
      this.heartBorder == true
        ? (this.heartBorder = false)
        : (this.heartBorder = true);
    },
    redirectToEdit(ID) {
      if(this.compareUser()){
        PostTemp.savePostData(this.post, "currPost");
        this.$router.push({ name: "Post Editor w ID", params: {postID: ID} })
      }
      else{
        Notify.create({
                message: `No permission to modify the post`,
                color: 'pink-5',
                icon: 'warning',
                textColor: 'white',
                timeout: 2000,
                progress: true,
                position: 'bottom-right',
                actions: [
                  { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                ]
        })
      }
    }
  },
});
</script>

<style scoped>
.post-card {
  position: relative;
  height: 28rem;
  width: 24rem;
  border-radius: 15px;
  display: flex;
  gap:0.5rem;
  flex-direction: column;
  justify-content: space-between; /* align items in Main Axis */
}
.sharing-modal {
  width:25rem;
}
</style>
