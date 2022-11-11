<template>
    <div class="row justify-evenly">
        <template v-if="postType == 'users'">
            <postViewMp
                v-for="post in userPosts"
                :key="post.id"
                :data="post"
            />
        </template>
        <template v-else-if="postType=='saved'">
            <postViewMp
                v-for="post in savedPosts"
                :key="post.id"
                :data="post"
            />
        </template>
    </div>  
</template>

<script>
import { defineComponent, ref } from "vue";
import postViewMp from "/src/components/PostViewMp"
import UserTemp from "src/utils/UserTemp";

export default defineComponent({
    name: "PostsContainer",
    props: ['postType'],
    components: {
        postViewMp,
    },
    async setup () {
        const currUser = UserTemp.loadUserData("currUser");
        function retrieveSavedIDs(){
            const temp = currUser.savedPosts;
            var result = null;
            if (!temp){
                result = Tags.fetchTagsArray();
                return result.join(',');
            }
            else{
                result = temp;
                return result.join(',');
            }
        };
        const tempIDArr = retrieveSavedIDs(currUser.savedPosts);
        console.log(`tempIDArr:${tempIDArr}`);
        const url = (
            "http://localhost:3000/api/MyPage/" + currUser.id
        );
        let allPosts = await fetch(url)
        .then(res => res.json())
        //.then(data => {console.log(data)})
        .catch(error => {
            console.log(error)
        })
        const userPosts = allPosts.filter(post => post.userID == currUser.id);
        const savedPosts = allPosts.filter(post => tempIDArr.includes(post.id));
        return {
            userPosts,
            savedPosts
        }
    },
    data() {
        return {
        }
    },
    methods: {

    }
});
</script>
    
<style scoped>

</style>
