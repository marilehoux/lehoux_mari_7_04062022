<template>
    <div class="card">
        <h2 class="card-header">Accueil</h2>
        <div class="card-body">
           
                <div class=" input-group d-grid gap-2 d-flex justify-content-center">
                    <button type="submit" class="btn btn-secondary">Créer un compte</button>
                    <button type="submit" class="btn btn-primary">Se connecter</button>

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
