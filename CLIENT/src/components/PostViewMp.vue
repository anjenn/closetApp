/// q-col full width: 12, write q-col-xs if spacing needed 
<template>
  <div class="container" wrap>
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
                      Cannot load image
                    </div>
                  </template>
                </q-img>
              </div>
          </div>
        </div>
        <div class="buttons-hide" style="backdrop-filter: blur(1px);">
          <q-btn
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
            @click="dialog = true"
          />
          <q-btn
            flat
            unelevated
            dense
            color="white"
            style="text-shadow: 0 0 5px #b5123f	;"
            :ripple="false"
            icon="loupe"
            @click="dialog = true"
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
    }
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
</style>