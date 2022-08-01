<template>
    <div class="my-3">
        <PostSend/>
        <PostList/>
    </div>
</template>

<script>
import PostSend from'../components/PostSend.vue'
import PostList from'../components/PostList.vue'


export default {
    name: 'PostBoard',
    components:{
        PostSend,
        PostList
    }
}
</script>