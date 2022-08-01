<template>
<div>
    <StartCard/>    
    <SignUp/>
</div>
</template>

<script>
import SignUp from '../components/SignUp.vue'
import StartCard from '../components/Start.vue'


export default {
    components:{
        SignUp,
        StartCard
    }
}
</script>