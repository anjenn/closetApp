<template>
  <div class="container q-px-md q-py-lg" wrap>
    <q-card class="post-card outer">
      <q-card class="post-card wrap">
        <div class="profile">
          <q-img
            :src="image"
            style="height: 2.5rem; max-width: 2.5rem; border-radius: 50%"
          />
          <span style="margin-left: 1rem; font-size: 1rem">User ID</span>
        </div>
        <div class="collage">
          <div class="collage-row">
            <q-img
              class="image"
              :src="image"
              spinner-color="white"
              spinner-size="0.3rem"
              style="border-top-left-radius: 15px"
            >
            </q-img>
            <q-img
              class="image"
              :src="image"
              spinner-color="white"
              spinner-size="0.3rem"
              style="border-top-right-radius: 15px"
            >
            </q-img>
          </div>
          <div class="collage-row">
            <q-img
              class="image"
              :src="image"
              spinner-color="white"
              spinner-size="0.3rem"
              style="border-bottom-left-radius: 15px"
            >
            </q-img>
            <q-img
              class="image"
              :src="image"
              spinner-color="white"
              spinner-size="0.3rem"
              style="border-bottom-right-radius: 15px"
            >
            </q-img>
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
        <div class="btn-tags">
          <q-btn
            disable
            rounded
            unelevated
            dense
            size="0.8rem"
            padding="0rem 0.3rem"
            class="btn-tag"
            label="tag1"
          />
          <q-btn
            disable
            rounded
            unelevated
            dense
            size="0.8rem"
            padding="0rem 0.3rem"
            class="btn-tag"
            label="tag2"
          />
          <q-btn
            disable
            rounded
            unelevated
            dense
            size="0.8rem"
            padding="0rem 0.3rem"
            class="btn-tag"
            label="tag3"
          />
        </div>
      </q-card>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import placeholder from "/public/placeholder.svg";

export default defineComponent({
  name: "PostView",
  data() {
    return {
      heartBorder: true,
      image: placeholder,
      tags: {
        text: "cute",
        text: "preppy",
        text: "modern",
      },
    };
  },
  methods: {
    onHeartClick() {
      this.heartBorder == true
        ? (this.heartBorder = false)
        : (this.heartBorder = true);
    },
    redirectToEdit() {
      this.$router.push("/PostEditor");
    },
  },
});
</script>

<style scoped>
.post-card {
  height: 20rem;
  width: 16rem;
  border-radius: 15px;
}
.post-card.outer {
  display: flex;
  justify-content: center;
  height: 23rem;
  width: 18rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
}
.buttons {
  margin-top: 3rem;
}
.btn-tags {
  margin: 0.1rem auto;
}
.btn-tag {
  font-family: Neucha;
  text-transform: lowercase;
  background-color: #e6e6fa;
  margin: 0.25rem;
}

.collage {
  display: flex;
  margin-top: 1rem;
}
.collage-row {
  position: relative;
  width: 8rem;
  height: 5rem;
  margin: auto 0;
}
.image {
  position: absolute;
  left: 50%;
  margin-top: -2.5rem;
  margin-left: -3.5rem;
  top: 50%;
  object-fit: contain;
}

</style>
