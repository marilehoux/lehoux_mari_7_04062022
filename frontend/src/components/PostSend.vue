<template>
    <div class="card my-3">
        <h2 v-if="!edit" class="card-header">Participer</h2>
        <div class="card-body">
            <form method="post" id="form-post" enctype="multipart/form-data" @submit.prevent="createPost()">
                <div class="mb-3">
                    <label for="newPost" class="form-label">Quoi de neuf aujourd'hui?</label>
                    <textarea v-model="post.content" class="form-control" name="content" id="newPost" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Ajouter une image</label>
                    <input class="form-control" type="file" accept=".png,.jpeg,.jpg" name="image" id="newImage">
                </div>  
                <div class=" d-grid gap-2 d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary"><template v-if="edit">Modifier</template><template v-else>Partager</template></button>
                    <button v-if="edit" class="btn btn-secondary" @click.prevent="$emit('cancel')">Annuler</button>
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
    user: Object,
    edit: Boolean, 
    postModif: Object
  },

  data () {
    return {

        post: { 
            content: '',
            imageUrl: '',
        }
    }
  },

  methods : {

    createPost() {
        let form = document.getElementById('form-post');
        let data = new FormData(form);

            if(this.edit) {
                let url = 'http://localhost:3000/api/post/'+this.post._id;
                axios.put(url, this.post, {
                    headers: {
                        'Authorization': 'Bearer '+this.user.token
                    }
                })
                .then(() => {
                    this.$emit ('post-modified', JSON.parse( JSON.stringify(this.post)));
                    this.post.content = '';
                })
                .catch((error) => {
                    alert(error);
                    console.error(error);
                });
            }
            else {
                let url = 'http://localhost:3000/api/post/'
                axios.post(url, data, {
                    headers: {
                        'Authorization': 'Bearer '+this.user.token
                    }
                })
                .then((resp) => {
                    this.$emit ('post-created', resp.data.post);
                    this.post.content = '';
                })
                .catch((error) => {
                    alert(error);
                    console.error(error);
                });
            }
        }
    },

  

  mounted () {
    if(this.edit) {
        this.post = JSON.parse(JSON.stringify(this.postModif));
    }
  }
}
</script>