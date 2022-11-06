<template>
    <div class="row justify-evenly">
        <postViewMp
            v-for="post in posts"
            :key="post.id"
            :data="post"
        />
    </div>  
</template>

<script>
import { defineComponent, ref } from "vue";
import postViewMp from "/src/components/PostViewMp"
import UserTemp from "src/utils/UserTemp";
import postDataMethods from "app/api/postDataMethods";

export default defineComponent({
    name: "PostsContainer",
    components: {
        postViewMp,
    },
    async setup () {
        let currUser = UserTemp.loadUserData("currUser");
        let tempIDArr = retrieveSavedIDs(currUser.savedPosts);
        // let userPosts = ref(null);
        // let likedPosts = ref(null);
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
        const responses = async () => {
            try {
            const res = await Promise.all([
                axios.get("http://localhost:3000/api/FeedView"+currUser.id),
                axios.get("http://localhost:3000/api/FeedView"+currUser.id+"?postIDs="+tempIDArr)
            ]);
            const data = res.map((res) => res.data);
            console.log(data.flat());
            } catch {
            throw Error("Promise failed");
            }
        };
        console.log(responses());
        return {
            currUser,
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
