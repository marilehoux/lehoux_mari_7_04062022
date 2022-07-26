<template>
  


<div class="container">
  <NavBar/>
  <div id="beforeConnected">
    <StartCard/>
    <br>
    <ConnectCard/>
    <br>
    <SignUp/>
  </div>
  <div id="afterConnected">
    <PostSend/>
  </div>
  <FooterNav/>
</div>



</template>

<script>
import FooterNav from './components/Footer.vue'
import NavBar from './components/Nav.vue'
import ConnectCard from './components/Connect.vue'
import SignUp from './components/SignUp.vue'
import StartCard from './components/Start.vue'
import PostSend from'./components/PostSend.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    FooterNav,
    ConnectCard,
    SignUp,
    StartCard,
    PostSend
  }
}

</script>

<style>


</style>
