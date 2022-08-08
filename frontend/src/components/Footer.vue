<template>
  <div class="footer">
    <p class="text-center">P7 Openclassrooms - Mari Lehoux</p>
    <ul class="nav d-flex justify-content-center align-items-center">
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/mari-lehoux" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://marilehoux.github.io" target="_blank" rel="noopener"><i class="bi bi-github"></i></a>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'footer-nav',
  props: {
    msg: String
  }
}

</script>
