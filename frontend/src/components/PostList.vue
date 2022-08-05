<template>
    <div method="get"  class="card my§3">
        <div class="card-header"><h2>Discussion</h2></div>
        <div  class="card-body"><PostItem v-for="post in posts" :key="post._id" :post="post" /></div>
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
   
}
</script>