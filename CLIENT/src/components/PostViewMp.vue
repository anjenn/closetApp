/// q-col full width: 12, write q-col-xs if spacing needed 
<template>
  <div class="container" wrap>
    <q-card class="post-card" flat>
      <q-card-section>
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
                    <div
                      class="absolute-full flex flex-center bg-negative text-white"
                    >
                      Cannot load image
                    </div>
                  </template>
                </q-img>
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
            :icon="this.heartBorder ? 'favorite_border' : 'favorite'"
            @click="onHeartClick"
          />
          <q-btn
            flat
            unelevated
            dense
            color="grey-6"
            :ripple="false"
            icon="edit"
            @click="redirectToEdit(post.id)"
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
          <q-btn
            flat
            unelevated
            dense
            color="grey-6"
            :ripple="false"
            icon="loupe"
            @click="dialog = true"
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

export default defineComponent({
  props: ['data'],
  created: function() {

  },
  name: "PostView",
  data() {
    return {
      currUser: ref(null),
      heartBorder: true,
      image: placeholder,
      post: this.data
    };
  },
  methods: {
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
.buttons{
  display:none
}
.collage:hover .buttons{
  display:block
}
</style>