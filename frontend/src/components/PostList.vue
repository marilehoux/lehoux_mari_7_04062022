<template>
    <div method="get"  class="card my§3">
        <div class="card-header"><h2>Discussion</h2></div>
        <div  class="card-body">
            <PostItem :user="user" v-for="post in posts" :key="post._id" 
            :post="post" 
            @post-modified="modifyPost" 
            @post-deleted="deletePost"
            @post-liked="likePost" />
        </div>
    </div>
</template>

<script>
import PostItem from'../components/PostItem.vue'


export default {
    components:{
        PostItem
    },

    props: {
        user: Object,
        posts: Array,
    },
    methods: {
        modifyPost(post){
            this.$emit('post-modified', post);
        },
        deletePost(post){
            this.$emit('post-deleted', post);
        },
        likePost(post){
            this.$emit('post-liked', post);
        },

    }
   
}
</script>