<template>
  


<div class="container">
  <NavBar/>
  <router-view @auth-change="authChange" :user="user" />
  <FooterNav/>
</div>



</template>

<script>
import FooterNav from './components/Footer.vue'
import NavBar from './components/Nav.vue'



export default {
  name: 'App',

  data () {
    return {
      user: null
    }
  },

  components: {
    NavBar,
    FooterNav
  },

  methods: {
    /**
     * affecte l'utilisateur nouvellement chargé au niveau de user stocké dans data
     * redirige l'utilisateur sur la route racine (/)
     * @param {Object} user     l'utilisateur nouvellement chargé en sessionStorage
     */
    authChange(user) {
      this.user = user;
      this.$router.push ('/');
    }
  },

  mounted () {
    /**
     * lire les informations utilisateur stockées dans le session storage
     * si on trouve une session on l'affecte à la vairaible user de data
     * via fonction authChange
     */
    const userId = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("userEmail");
    const level = sessionStorage.getItem("userLevel");
    const token = sessionStorage.getItem("sessionToken");

    if (token) {
      this.authChange ( { userId, email, level, token } );
    }

  }
}

</script>

<style>


</style>
