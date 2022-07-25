<template>
  


<div class="container">
  <NavBar/>
  <ConnectCard/>
  <SignUp/>
  <FooterNav/>

</div>


</template>

<script>
import FooterNav from './components/Footer.vue'
import NavBar from './components/Nav.vue'
import ConnectCard from './components/Connect.vue'
import SignUp from './components/SignUp.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    FooterNav,
    ConnectCard,
    SignUp
  }
}

</script>

<style>

</style>
