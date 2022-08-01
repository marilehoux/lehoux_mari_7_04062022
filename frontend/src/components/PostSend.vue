<template>
    <div class="card my-3">
        <h2 class="card-header">Participer</h2>
        <div class="card-body">
            <form method="post" @submit.prevent="createPost()">
                <div class="mb-3">
                    <label for="newPost" class="form-label">Quoi de neuf aujourd'hui?</label>
                    <textarea v-model="post.content" class="form-control" id="newPost" rows="3"></textarea>
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
import axios from 'axios';

export default {
  name: 'Post-Send',

  props: {
    user: Object
  },

  data () {
    return {
        post: { 
            content: ''
        }
    }
  },

  methods : {
    createPost() {
        axios.post('http://localhost:3000/api/post/', this.post, {
            headers: {
                'Authorization': 'Bearer '+this.user.token
            }
        })
        .then((resp) => {
            console.log(resp);
            this.post.content = '';
        })
        .catch((error) => {
            alert(error);
            console.error(error);
        });
    }
  }
}
</script>