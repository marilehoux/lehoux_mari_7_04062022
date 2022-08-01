<template>
<div>
    <StartCard v-if="!user"/>
    <div v-else class="my-3">
        <PostSend :user="user" />
        <PostList/>
    </div>
</div>
</template>

<script>
import StartCard from '../components/Start.vue'
import PostSend from '../components/PostSend.vue'
import PostList from '../components/PostList.vue'


export default {
    name: 'HomeCard',

    components:{
        StartCard,
        PostSend,
        PostList
    },

    props: {
        user: Object
    }
}
</script>
