<template>
    <div v-if="!isConnected" class="card my-3">
        <h2 class="card-header">S'inscrire</h2>
        <div class="card-body">
            <form action="/" @submit.prevent="signUp()">
                <div class="mb-3">
                    <label for="Identifiant" class="form-label">Identifiant</label>
                    <input type="email" v-model="user.email" class="form-control" placeholder="Utiliser votre adresse mail" id="identifiant" aria-describedby="Votre identifiant">
                <!-- <div id="emailAlerte" class="form-text">votre email n'est pas valide</div> -->
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" v-model="user.password" class="form-control" id="Password" placeholder="Minimum 4 caractères">
                </div>
                <div class=" d-grid gap-2 d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">S'inscrire</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Sign-Up',
  data () {
    return {
        user: { email: "", password:""},
       // isConnected: bolean = "false"

    }
  },
  
  methods: {
    /**
     * envoie une requête de connexion à l'API avec nom 
     * user et password fourni dans le formulaire
     */
    signUp() {
        
        axios.post ("http://localhost:3000/api/auth/signup", this.user)
        .then ((resp) => {
            console.log(resp);
            //isConnected = true;
        })
        .catch((err)=> {
            console.error(err);
            alert ('le serveur ne répond pas');
        });
    }
  }
}
</script>