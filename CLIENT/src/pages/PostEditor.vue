<template>
  <q-page class="flex flex-center" style="background-color: #fff0f5">
    <q-card
      dark
      bordered
      class="bg-white editor-card shadow-10"
      style="font-family: 'fredoka one'"
    >
      <q-dialog class="question-modal q-pa-md" v-model="dialog" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span>Are you sure you want to delete the post?</span>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="pink-4" v-close-popup />
            <q-btn flat label="Delete" color="pink-4" v-close-popup @click="deletePost" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-card-section class="card-contents">

        <div class="post-contents">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="pink-4"
            indicator-color="pink-4"
            align="justify"
            narrow-indicator
          >
            <q-tab v-for="i in 4" :key="i" :name="i" :label="`${numbers[i-1]}`" />
          </q-tabs>
          <q-tab-panels keep-alive v-model="tab" animated>
            <q-tab-panel 
              v-for="i in 4"
              :key="i" :name="i"
              class="panel-container"
            >
              <div class="panel-left">
                <div
                  class="q-img-wrapper"
                  :style="`width: 20rem; height: 20rem; overflow:hidden;
                            filter: brightness(${1+(postData.photos[i-1].imageEdits.brightness)/10})`"
                >
                  <q-img
                    :src="image[i-1]"
                    :style="`transform: scale(${1+(postData.photos[i-1].imageEdits.imageScale)/10});
                              filter: saturate(${1+(postData.photos[i-1].imageEdits.saturation)/7});        
                    `"
                  />
                </div>
                <q-input
                  v-model="postData.photos[i-1].url"
                  placeholder="Enter image URL"
                  borderless
                  style="margin-left: 0.7rem;"
                  color="grey-7"
                  dense
                >
                  <template v-slot:append>
                    <q-btn
                      round dense flat
                      icon="add"
                      @click="updatePhoto(i)"
                      />
                  </template>
                </q-input>
              </div>  
              <q-separator color="grey-4" vertical inset />
              <div class="panel-right">
                <div class="photo-edits">
                  <span class="slider-text"> Brightness </span>
                  <q-slider
                    class="sliders"
                    v-model="postData.photos[i-1].imageEdits.brightness"
                    color="pink-3"
                    marker-labels
                    :min="-2"
                    :step="1"
                    :max="2"
                  >
                    <template v-slot:marker-label-group="scope">
                      <div
                        v-for="marker in scope.markerList"
                        :key="marker.index"
                        :class="[
                          `text-pink-${3 + Math.ceil(marker.value / 2)}`,
                          marker.classes,
                        ]"
                        :style="marker.style"
                        @click="model = marker.value"
                      >
                        {{ marker.value }}
                      </div>
                    </template>
                  </q-slider>
                  <span class="slider-text"> Image-Scale </span>
                  <q-slider
                    class="sliders"
                    v-model="postData.photos[i-1].imageEdits.imageScale"
                    color="pink-3"
                    marker-labels
                    :min="0"
                    :step="1"
                    :max="4"
                  >
                    <template v-slot:marker-label-group="scope">
                      <div
                        v-for="marker in scope.markerList"
                        :key="marker.index"
                        :class="[
                          `text-pink-${2 + Math.ceil(marker.value / 2)}`,
                          marker.classes,
                        ]"
                        :style="marker.style"
                        @click="model = marker.value"
                      >
                        {{ marker.value }}
                      </div>
                    </template>
                  </q-slider>
                  <span class="slider-text"> Saturation </span>
                  <q-slider
                    class="sliders"
                    v-model="postData.photos[i-1].imageEdits.saturation"
                    color="pink-3"
                    marker-labels
                    :min="-2"
                    :step="1"
                    :max="2"
                  >
                    <template v-slot:marker-label-group="scope">
                      <div
                        v-for="marker in scope.markerList"
                        :key="marker.index"
                        :class="[
                          `text-pink-${3 + Math.ceil(marker.value / 2)}`,
                          marker.classes,
                        ]"
                        :style="marker.style"
                        @click="model = marker.value"
                      >
                        {{ marker.value }}
                      </div>
                    </template>
                  </q-slider>
                </div>
                <q-select
                  clearable
                  color="pink-4"
                  bg-color="grey-4"
                  standout
                  v-model="postData.tag"
                  label="Select a tag"
                  :options="options"
                />
                <div
                    style="display:flex; justify-content: space-between; margin-top: 0.5rem;"
                >
                  <q-btn
                    label="save"
                    color="pink-4"
                    style="width: 45%;"
                    @click="savePost"
                  />
                  <q-btn
                    label="delete"
                    color="pink-4"
                    style="width: 45%;"
                    @click="dialog = true"
                  />
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { Notify } from 'quasar'
import postDataMethods from "app/api/postDataMethods";
import { defineComponent } from "vue";
import { ref } from "vue";
import Tags from "../utils/Tags";
import placeholder from "/public/placeholder.svg";

export default defineComponent({
  name: "PostEditor",
  data() {
    return {
      dialog: ref(false),
      image: [placeholder, placeholder, placeholder, placeholder],
      options: [ ...Tags.fetchTags() ],
      numbers: ['first', 'second', 'third', 'fourth'],
      tab: ref(1),
      postData: {
        userID: ref(null),
        tag: ref(null),
        photos: [
          {
            order: 1,
            url: ref(null),
            imageEdits: {
              brightness: 0,
              imageScale: 0,
              saturation: 0,
            },
          },
          {
            order: 2,
            url: ref(null),
            imageEdits: {
              brightness: 0,
              imageScale: 0,
              saturation: 0,
            },
          },
          {
            order: 3,
            url: ref(null),
            imageEdits: {
              brightness: 0,
              imageScale: 0,
              saturation: 0,
            },
          },
          {
            order: 4,
            url: ref(null),
            imageEdits: {
              brightness: 0,
              imageScale: 0,
              saturation: 0,
            },
          }
        ],
        id: ref(null)
      }
    };
  },
  methods: {
    updatePhoto(i){
      this.image[i-1] = this.postData.photos[i-1].url;
    },
    savePost(){

    },
    deletePost(){
      if(this.postData.id == null){
        Notify.create({
                message: 'Current post data was discarded',
                color: 'pink-5',
                icon: 'info',
                textColor: 'white',
                timeout: 2000,
                progress: true,
                position: 'bottom-right',
                actions: [
                  { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                ]
        })
        this.$router.push("/FeedView");
      }
      else{
        Notify.create({
                message: `Post was just deleted (Post ID: ${this.postData.id})`,
                color: 'pink-5',
                icon: 'info',
                textColor: 'white',
                timeout: 2000,
                progress: true,
                position: 'bottom-right',
                actions: [
                  { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                ]
        })
        this.$router.push("/FeedView");
              // to be implemented, when there is post id.
      //postDataMethods.deletePost(postData.id);
      }
    }
  },
});
</script>

<style scoped>
.question-modal {
  position: absolute;
  width: 20rem;
  height: 10rem;
  z-index: 2;
  background-color: white;
}
.editor-card {
  position:relative;
  border: 0.5rem solid #f06292;
  min-width: 47rem;
  min-height: 32rem;
  height: 45vh;
  width: 42vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-contents {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.slider-text {
  color: grey;
}
.sliders {
  margin-bottom: 0.5rem;
}

.panel-container {
  display: flex;
  gap: 1.5rem;
  justify-content: space-evenly;
}
.panel-left {
  display:flex;
  flex-direction:column;
  gap:1rem;

}
.panel-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
