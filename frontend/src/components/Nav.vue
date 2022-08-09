<template>
<div class="card mt-3">

  <div class="card-body justify-content-center">
      <img  class="img-thumbnail img-fluid rounded w-100"  src="../assets/logogroupo.png" alt="">
      <h1 class="py-2 text-center">Bienvenue sur votre réseau social!</h1>
      
  </div>
</div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    user : Object
  }
}
</script>