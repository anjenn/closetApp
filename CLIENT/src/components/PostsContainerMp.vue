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
        const url = (
            "http://localhost:3000/api/MyPage/" + currUser.id
        );
        let allPosts = await fetch(url)
        .then(res => res.json())
        //.then(data => {console.log(data)})
        .catch(error => {
        // enter your logic for when there is an error (ex. error toast)
            console.log(error)
        })
        return {

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
