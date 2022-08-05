<template>
<div>
    <ul class="list-group">
        <li  class="list-group-item">
            <a class="btn btn-outline-primary"><i class="bi bi-star-fill me-2"></i><span class="badge bg-primary">12</span></a>
            <div><img src="" class="img-fluid" alt="..."></div>
            <p> {{post.content}} </p>
             <div class=" btn-group gap-2 d-flex justify-content-between my-1">
                <a class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil me-2"></i>Modifier</a>
                <a class="btn btn-sm btn-outline-danger"><i class="bi bi-trash me-2"></i>Supprimer</a>
            </div>
        </li>
    </ul>

</div>
</template>
<script>
//import axios from 'axios';

export default {
  name: 'Post-Item',

  props: {
    post: Object
  }


} 
  </script>