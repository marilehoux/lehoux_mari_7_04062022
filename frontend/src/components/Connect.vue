<template>
    <div class="card">
        <h2 class="card-header">Connexion</h2>
        <div class="card-body">
            <form action="/" @submit.prevent="signIn()">
                <div class="mb-3">
                    <label for="Identifiant" class="form-label">Identifiant</label>
                    <input type="email" v-model="user.email" class="form-control" placeholder="Utiliser votre adresse mail" id="identifiant" aria-describedby="Votre identifiant">
                    <!-- <div id="emailAlerte" class="form-text">votre email n'est pas valide</div> -->
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" v-model="user.password" class="form-control" id="Password" placeholder="Minimum 4 caractères">
                </div>
                <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <div class="d-grid gap-2 d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">Se connecter</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Sign-In',
  data () {
    return {
        user: {email: "", password:""}
    }
  },
  

  methods: {  
    /**
     * envoie une requête de connexion à l'API avec nom 
     * user et password fourni dans le formulaire
     * enregistre dans le sessionStorage les informations reçues de l'API
     */
    signIn() {
        axios.post ("http://localhost:3000/api/auth/login", this.user)
        .then ((resp) => {
            sessionStorage.setItem( 'userId', resp.data.userId);
            sessionStorage.setItem( 'userEmail', resp.data.email);
            sessionStorage.setItem( 'userLevel', resp.data.level);
            sessionStorage.setItem ('sessionToken', resp.data.token);
            this.$emit ('auth-change', resp.data); 

        })
        .catch((err)=> {
            console.error(err);
            alert ('le serveur ne répond pas');
        });
    }
  }
}
</script>
