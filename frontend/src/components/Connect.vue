<template>
    <div class="card">
        <h2 class="card-header">Connexion</h2>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="Identifiant" class="form-label">Identifiant</label>
                    <input type="email" class="form-control" placeholder="Utiliser votre adresse mail" id="identifiant" aria-describedby="Votre identifiant">
                <div id="emailAlerte" class="form-text">votre email n'est pas valide</div>
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password" placeholder="Minimum 4 caractères">
                </div>
                <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <button type="submit" class="btn btn-primary justify-content-end">Se connecter</button>
            </form>
        </div>
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
export default {
  name: 'connect-card',
  props: {
    msg: String
  }
}
</script>
