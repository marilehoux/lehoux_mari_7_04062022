<template>
    <div class="card my§3">
        <div class="card-header"><h2>Discussion</h2></div>
        <div class="card-body"><PostItem/></div>
    </div>
</template>

<script>
import PostItem from'../components/PostItem.vue'

export default {
    components:{
        PostItem
    }
}
</script>