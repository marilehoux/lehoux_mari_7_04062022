<template>
    <div class="card">
        <h2 class="card-header">Participer</h2>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="newPost" class="form-label">Quoi de neuf aujourd'hui?</label>
                    <textarea class="form-control" id="newPost" rows="3"></textarea>
                </div>
                <div class="input-group">
                    <span class="display-6"><i class="bi bi-card-image"></i></span>
                </div>
                <div class=" d-grid gap-2 d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">Partager</button>
                </div>
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
  name: 'Post-Send',
  props: {
    msg: String
  }
}
</script>