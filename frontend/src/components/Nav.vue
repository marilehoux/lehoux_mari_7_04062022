<template>
<div class="container">

  <nav class="navbar d-flex justify-content-center">
      <img  class="row img-thumbnail img-fluid rounded w-50"  src="../assets/logogroupo.png" alt="">
      <h1 class="row py-2">Bienvenue sur votre réseau social!</h1>
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="navbar" href="#"> Déconnexion</a>
            </li>
          </ul>
        </div> -->
  </nav>
</div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    msg: String
  }
}
</script>
