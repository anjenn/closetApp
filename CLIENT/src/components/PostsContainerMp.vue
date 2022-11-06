<template>
    <div class="row justify-evenly">
        <postViewMp
            v-for="post in posts"
            :key="post.id"
            :data="post"
            @on-heart-click="onHeartClick"
        />
    </div>  
</template>

<script>
import { defineComponent } from "vue";
import postViewMp from "/src/components/PostViewMp"
import UserTemp from "src/utils/UserTemp";
import postDataMethods from "app/api/postDataMethods";

export default defineComponent({
    name: "PostsContainer",
    components: {
        postViewMp,
    },
    async setup () {
        postDataMethods.getUserPosts()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    data() {
        return {
            shouldRefresh: 0,
            posts: []
        }
    },
    methods: {
        onHeartClick(value){
            this.shouldRefresh +=value;
            if(this.shouldRefresh){this.$emit('on-refVal-change', 1);}
        }
    }
});
</script>
    
<style scoped>

</style>
