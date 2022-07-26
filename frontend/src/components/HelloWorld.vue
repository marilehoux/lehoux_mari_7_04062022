<template>
<div class="hello">
<div class="card col">
<h1>{{ msg }}</h1>
<button class="btn btn-outline-primary">connexion</button>

</div>

<ul class="list-item-group bg-light">
<li class="list-item">développé par Mari Lehoux</li>

<li class="list-item"><a href="https://www.linkedin.com/in/mari-lehoux/" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i></a></li>
<li><a href="https://marilehoux.github.io" target="_blank" rel="noopener"><i class="bi bi-github"></i></a></li>
</ul>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
