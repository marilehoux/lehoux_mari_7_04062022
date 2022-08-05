<template>
<div>
    <StartCard v-if="!user"/>
    <div v-else class="my-3">
        <PostSend :user="user" :posts="posts" @post-created="addPostToCollection" />
        <PostList :user="user" :posts="posts" />
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
         * recharge la listes des pposts lorsqu'un utilisateur se connecte,
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
        }
    },


    mounted () {
        this.initPostList();
    }
}
</script>
