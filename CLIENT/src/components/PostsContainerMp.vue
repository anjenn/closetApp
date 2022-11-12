<template>
    <div v-if="postType == 'user'">
        <div class="q-pa-sm flex flex-center">
            <div class ="row justify-evenly collage-container">
                <postViewMp
                    v-for="post in userPosts"
                    :key="post.id"
                    :data="post"
                    :post-type="postType"
                    @on-x-click="onXClick"
                />
            </div>
        </div>
    </div>
    <div v-else-if="postType=='saved'">
        <div class="q-pa-sm flex flex-center">
            <div class = "row justify-evenly collage-container">
                <postViewMp
                    v-for="post in savedPosts"
                    :key="post.id"
                    :data="post"
                    :post-type="postType"
                    @on-x-click="onXClick"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import postViewMp from "/src/components/PostViewMp"
import UserTemp from "src/utils/UserTemp";

export default defineComponent({
    name: "PostsContainer",
    props: ['postType', 'pgNum'],
    components: {
        postViewMp,
    },
    async setup (props) {
        const currUser = UserTemp.loadUserData("currUser");
        const url = (
            "http://localhost:3000/api/MyPage/" + currUser.id
        );
        const allPosts = await fetch(url)
        .then(res => res.json())
        //.then(data => {console.log(data)})
        .catch(error => {
            console.log(error)
        })
        var userPosts = allPosts.filter(post => post.userID == currUser.id);
        var savedPosts = allPosts.filter(post => currUser.savedPosts.includes(post.id));

        function postsTrimmer (pgNum, posts) {
            // console.log(`pgNum: ${pgNum}, calc: ${0+((pgNum-1)*12)}`);
            return posts.slice(0+((pgNum-1)*12), 12+((pgNum-1)*12));
        };
        // no need to specify which pgNum it belongs to because it will only render one gallery with matching post type
        userPosts = postsTrimmer(props.pgNum, userPosts);
        savedPosts = postsTrimmer(props.pgNum, savedPosts);
        return {
            userPosts,
            savedPosts
        }
    },
    data() {
        return {
            pagination:{
                myPosts: ref(1),
                likedPosts: ref(1),
                shouldRefresh: 0
            },
        }
    },
    methods: {
        onXClick(value){
            this.$emit("on-x-click", value);
        }
    }
});
</script>
    
<style scoped>
</style>
