<template>
<div>
    <ul class="list-group">
        <li  class="list-group-item mb-3">
          <div v-if=!edit>
            <div class="lead text-primary">{{post.userId.email}}</div>
            <p> {{post.content}}</p>
            <div v-if="post.imageUrl"><img :src="post.imageUrl" class="img-fluid" alt="image postée"></div>
            <button class="btn btn-outline-primary" ><i class="bi bi-star-fill me-2"></i><span class="badge bg-primary">12</span></button>          
             <div v-if="user.userId == post.userId._id || user.level == 1 || post.userId == user.userId" class=" btn-group gap-2 d-flex justify-content-between my-1 border">
                <button @click.prevent="edit = true"  class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil me-2"></i>Modifier</button>
                <button @click.prevent="deletePost()" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash me-2"></i>Supprimer</button>
            </div> 
          </div>
          <div v-else>
            <PostSend :edit='edit' :user='user' :postModif='post' @post-modified="modifyPost" @cancel="edit = false" />
          </div>

        </li>
    </ul>

</div>
</template>
<script>
import PostSend from './PostSend.vue'
import axios from 'axios';

export default {
  name: 'Post-Item',

  data() {
    return {
        edit: false
    }
  },

  components: {
    PostSend
  },

  props: {
    post: Object,
    user: Object
  },

  methods: {
    modifyPost(post) {
        this.$emit('post-modified', post);
        this.edit = false;
    },

    deletePost() {
        let confirm = window.confirm('Souhaitez-vous supprimer ce post ?');

        if (confirm) {
            axios.delete('http://localhost:3000/api/post/'+this.post._id, {
                headers: {
                    'Authorization': 'Bearer '+this.user.token
                }
            })
            .then(()=>{
                this.$emit('post-deleted', this.post);
            })
            .catch((error)=>{
                alert(error);
                console.error(error);
            });
        }
    }


  }

} 
  </script>