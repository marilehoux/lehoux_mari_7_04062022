<template>
<div>
    <StartCard/>
    <Connect @auth-change="authChange"/>
</div>
</template>

<script>
import Connect from '../components/Connect.vue'
import StartCard from '../components/Start.vue'


export default {
    components:{
        Connect,
        StartCard
    },

    methods: {
        authChange(user) {
            this.$emit ('auth-change', user);
        }
    }
}
</script>
