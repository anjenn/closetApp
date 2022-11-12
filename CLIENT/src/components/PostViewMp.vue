<template>
  <div class="container" wrap>
    <q-dialog v-model="dialogs.share" persistent>
      <q-card class="sharing-modal">
        <q-card-section
          class="flex flex-center"
          style="flex-direction: column"
        >
          <span class="mainFont" style="margin-bottom: 1rem">
            Here are the links!</span>
          <q-list class="rounded-borders" dense bordered padding>
            <q-item
              clickable
              v-ripple
              v-for="item in post.photos"
              v-bind:key="item.order"
              ><q-item-section>{{ item.url }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="pink-4" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialogs.magnify" persistent>
      <q-card class="magnifying-modal">
        <q-card-section
          class="flex flex-center"
          style="flex-direction: column"
        >
        <div class="collage row" style="border: 0.1rem solid 	#E0E0E0;">
          <div
              v-for="item in post.photos"
              v-bind:key="item.order"
              class="col-6"
          >
              <div :style="`overflow:hidden;
              filter: saturate(${1+(item.imageEdits.saturation)/10})`" class="flex flex-center">
                <q-img
                  :src="item.url"
                  :ratio="1"
                  spinner-color="white"
                  spinner-size="0.3rem"
                  placeholder-src="image"
                  :style="`filter: brightness(${1+(item.imageEdits.brightness)/10}) contrast(${1+(item.imageEdits.contrast)/10});
                  width:13rem; height:13rem;`"
                >
                  <template v-slot:error>
                    <span
                      class="mainFont absolute-full flex flex-center bg-pink-4 text-white text-h6"
                    >
                      Cannot load image :(
                    </span>
                  </template>
                </q-img>
              </div>
          </div>
        </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="pink-4" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-card class="post-card" flat>
      <q-card-section class="collage-btn-cont">
        <div class="collage row" style="border: 0.1rem solid 	#E0E0E0;">
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
                  :style="`filter: brightness(${1+(item.imageEdits.brightness)/10}) contrast(${1+(item.imageEdits.contrast)/10});`"
                >
                  <template v-slot:error>
                    <div class="absolute-full flex flex-center bg-pink-4 text-white text-h7">
                      Cannot load image :(
                    </div>
                  </template>
                </q-img>
              </div>
          </div>
        </div>
        <div class="buttons-hide" style="backdrop-filter: blur(1px);">
          <q-btn
            v-if="postType=='user'"
            flat
            unelevated
            dense
            color="white"
            style="text-shadow: 0 0 5px #b5123f	;"
            :ripple="false"
            icon="edit"
            @click="redirectToEdit(post.id)"
          />
          <q-btn
            flat
            unelevated
            dense
            color="white"
            style="text-shadow: 0 0 5px #b5123f	;"
            :ripple="false"
            icon="share"
            @click="dialogs.share = true"
          />
          <q-btn
            flat
            unelevated
            dense
            color="white"
            style="text-shadow: 0 0 5px #b5123f	;"
            :ripple="false"
            icon="loupe"
            @click="dialogs.magnify = true"
          />
          <q-btn
            v-if="postType=='saved'"
            v-model="this.heartBorder"
            flat
            unelevated
            dense
            color="white"
            style="text-shadow: 0 0 5px #b5123f;"
            :ripple="false"
            icon="close"
            @click="onXClick"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import placeholder from "/public/placeholder.svg";
import { ref } from "vue";
import UserTemp from "src/utils/UserTemp";
import userDataMethods from "app/api/userDataMethods";
import PostTemp from "src/utils/PostTemp";

export default defineComponent({
  props: ['data', 'postType'],
  created: function() {
  },
  name: "PostView",
  data() {
    return {
      currUser: ref(null),
      heartBorder: true,
      image: placeholder,
      post: this.data,
      dialogs: {
        share: ref(false),
        magnify: ref(false)
      }
    };
  },
  methods: {
    onXClick(){
      this.currUser = UserTemp.loadUserData("currUser");
      this.currUser.savedPosts = this.currUser.savedPosts.filter(item => item !== this.post.id)
      userDataMethods.updateUserInfo(this.currUser.id, this.currUser)
        .then(response => {
          console.log(response.data);
          UserTemp.saveUserData(this.currUser, "currUser");
          this.$emit("on-x-click", true);
        })
        .catch(e => {
          console.log(e);
        });
    },
    redirectToEdit(ID) {
      PostTemp.savePostData(this.post, "currPost");
      this.$router.push({ name: "Post Editor w ID", params: { postID: ID } });
    },
  },
});
</script>

<style scoped>
.post-card {
  height: 17rem;
  width: 17rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* align items in Main Axis */
}
.collage-btn-cont .buttons-hide{
  visibility: hidden;
  position:absolute;
  bottom:7%;
  left:7%;
}
.collage-btn-cont:hover .buttons-hide {
  visibility: visible;
}
.collage-btn-cont{
  position:relative;
}
.sharing-modal {
  width: 25rem;
}
.magnifying-modal{
  width: 28rem;
}
</style>