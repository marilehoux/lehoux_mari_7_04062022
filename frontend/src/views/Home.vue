<template>
<div>
    <StartCard v-if="!user"/>
    <div v-else class="my-3">
        <PostSend :user="user" :posts="posts" @post-created="addPostToCollection" />
        <PostList :user="user" :posts="posts" @post-modified="refreshPost" @post-deleted="removePost" />
    </div>
</div>
</template>

<script>
import axios from 'axios'
import StartCard from '../components/Start.vue'
import PostSend from '../components/PostSend.vue'
import PostList from '../components/PostList.vue'


export default {
    name: 'HomeCard',

    components:{
        StartCard,
        PostSend,
        PostList
    },

    props: {
        user: Object
    },

    data () {
        return {
            posts: []

        }
    },

    watch: {
        /**
         * recharge la listes des posts lorsqu'un utilisateur se connecte,
         * vide la liste lorsque l'utilisateur est déconnecté.
         * @param {Object} value        le nouvel état de la variable utilisateur
         */
        user (value) {
            this.initPostList(value);
        }
    },


    methods: {
        /**
         * requête à l'api afin de récupérer la liste des posts et de les enregistrer
         * dans la collection posts de data
         */
        getAllPost() {
            axios.get('http://localhost:3000/api/post/', {
                headers: {
                    'Authorization': 'Bearer '+this.user.token
                }
            })
            .then((resp) => {
                this.posts = resp.data;
            })
            .catch((error) => {
                alert(error);
                console.error(error);
            });
        },

        initPostList (user) {
            user = typeof user === "undefined" ? this.user : user;
            if (user) this.getAllPost ();
            else this.posts = [];
        },

        addPostToCollection(post) {
            this.posts.unshift(post);
        },

        /**
         * rafraîchit les informations d'un post déjà chargé au niveau de data.post
         * On parcourt l'ensemble des clés contenues
         * dans le post passé en paramètre afin
         * d'affecter les valeurs sur l'élément contenu dans data.post
         * 
         * @param {Object}  post les infomations du post à actualiser
         */
        refreshPost(post) {
            let found = this.posts.find(e => e._id === post._id);
            if (found) {
                for (const key in post){
                    found[key] = post[key];
                }
            }
        },

        removePost(post){
            let index = this.posts.findIndex(e => e._id === post._id);
            if (index !== false){
                this.posts.splice(index , 1)
            }
        }
    },


    mounted () {
        this.initPostList();
    }
}
</script>
