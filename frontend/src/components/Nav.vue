<template>
<div class="card">

  <div class="card-body justify-content-center">
      <img  class="img-thumbnail img-fluid rounded w-100"  src="../assets/logogroupo.png" alt="">
      <h1 class="py-2 text-center">Bienvenue sur votre réseau social!</h1>
      <button class="btn btn-sm btn-outline-secondary">Se déconnecter</button>
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
  </div>
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