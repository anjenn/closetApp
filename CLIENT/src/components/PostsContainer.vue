<template>
    <div class="row justify-evenly">
        <postView 
            v-for="post in posts"
            :key="post.id"
            :data="post"
        />
    </div>  
</template>

<script>
import { defineComponent } from "vue";
import Tags from "src/utils/Tags";
import postView from "/src/components/PostView"

export default defineComponent({
    name: "PostsContainer",
    components: {
        postView,
    },
    async setup () {
        function retrieveTags(){
        const temp = Tags.loadTags("currTags");
        var result = null;
        if (!temp){
            result = Tags.fetchTagsArray();
            return result.join(',');
        }
        else{
            result = temp;
            return result.join(',');
        }
        }
        var tagsStr = retrieveTags();
        const url = (
        'http://localhost:3000/api/FeedView?tags=' + tagsStr
        );
        const posts = await fetch(url)
        .then(res => res.json())
        // .then(data => {console.log(data)})
        .catch(error => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error)
        })
        return {
        posts
        }
    },
    data() {
        return {
            sth: [1, 2, 3, 4, 5]
        };
    },
    methods: {
        randomiseAndCut(arr){
            console.log(arr);
            let currentIndex = arr.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
            }
            arr = arr.slice(0, 9);
            return arr;
        }
    }
});
</script>
    
<style scoped>

</style>
