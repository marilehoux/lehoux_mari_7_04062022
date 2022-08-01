<template>
    <div class="card my-3">
        <h2 class="card-header">Accueil</h2>
        <div class="card-body">
                <div class=" input-group d-grid gap-2 d-flex justify-content-center">
                  <router-link :to="{path: '/sign-up'}" custom v-slot="{navigate, href}">
                    <a :href="href" @click="navigate" class="btn btn-secondary">Créer un compte</a>
                  </router-link>
                  <router-link :to="{path: '/sign-in'}" custom v-slot="{navigate, href}">
                    <a :href="href" @click="navigate" class="btn btn-primary">Se connecter</a>
                  </router-link>
                </div>
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
  name: 'start-card',
  props: {
    msg: String
  }
}
</script>
