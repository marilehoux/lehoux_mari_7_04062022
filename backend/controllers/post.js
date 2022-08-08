const Post = require('../models/post');
const fs = require('fs'); 
const User = require('../models/user');
const { query } = require('express');

// pour afficher tous les post
exports.getAllPost = (req, res, next) => {
	Post.find().populate('userId', ['email']).sort({_id:-1})
	.then(
		(posts) => {
			
			// for (let post of posts) {
			// 	console.log(post.userId);
			// 	let 
			// }
			// boucle tous les posts pour récuperer id User
			// et regarder dans la base de données pour récuperre pseudo (post.name par ex) 
			res.status(200).json(posts);
		}
		)
		.catch(
			(error) => {
				res.status(400).json({
					error: error
				});
			}
			);
		};
		
		//pour créer un post enregistre l'image si elle existe
exports.createPost = (req, res, next) => {
	const postObject = req.body;
	delete postObject._id;
	const post = new Post({
		...postObject, 
		userId: req.auth.userId,
		imageUrl: req.file
		? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
	});
	post.save()
	.then((post) => res.status(201).json({ message: 'Post enregistré!', post}))

	.catch(error => res.status(400).json({error}));
};
		
		//pour récupérer un post
		// exports.getOnePost = (req, res, next) => {
		// 	Post.findOne({
		// 		_id: req.params.id
		// 	}).then(
		// 		(post) => {
		// 			res.status(200).json(post);
		// 		}
		// 		).catch(
		// 			(error) => {
		// 				res.status(404).json({error: error});
		// 			}
		// 			);
		// 		};
				
		//pour modifier un post
exports.modifyPost = (req, res, next) => {
	// récupère le Post, gère s'il existe ou non
	const postObject =req.file? {
		...JSON.parse(req.body.post),
		imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
	} : req.body;
	console.log(postObject);
	
	delete postObject._userId;
	Post.findOne({_id: req.params.id})
	.then((post) => {
		User.findOne({_id:req.auth.userId})
		.then ((user) => {
			if (post.userId == req.auth.userId || user.level == 1) {
				Post.updateOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
				.then(() => res.status(200).json({message : 'votre post est  modifié!', post}))
				.catch(error => res.status(401).json({ error }));
			}
			else {  
				res.status(401).json({ message :'Vous ne pouvez pas modifier ce post'});
			} 
		})
		.catch ((error) => {
			res.status(400).json({ error });
		})
		
	})
	.catch((error) => {
		res.status(400).json({ error });
	});
};
		
exports.deletePost = (req, res, next) => {
	// récupère le Post, gère s'il existe ou non
	const postObject =req.file? {
		...JSON.parse(req.body.post),
		imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
	} : {...req.body};
	
	delete postObject._userId;
	
	Post.findOne({_id: req.params.id})
	.then((post) => {
		//User.findOne({_id:req.auth.userId})
		//.then ((user) => {
			
			if (post.userId == req.auth.userId || req.auth.userLevel >= 1) {
				Post.deleteOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
				.then(() => res.status(200).json({message : 'votre post est supprimé!'}))
				.catch(error => res.status(401).json({ error }));
			}
			else {  
				res.status(401).json({ message :'Vous ne pouvez pas supprimer ce post'});
			} 
		// })
		// .catch((error) => {
		// 	res.status(400).json({ error });
		// });
	})
	.catch((error) => {
		res.status(400).json({ error });
	});
}
				
				


	exports.likePost =(req, res, next) => {
		console.log('id', req.params.id);
		console.log('user', req.auth.userId);
		if(req.auth.userId){
			Post.findOne({_id: req.params.id})
				.then(post => {
					let query = {};
					let index = post.usersLiked.findIndex(uid => uid == req.auth.userId);

					if (index > -1) {
						query.$pull = {usersLiked:req.auth.userId};
						query.$inc = {likes: -1};
						post.likes -=1;
						post.usersLiked.splice(index , 1);
					}
					else {
						query.$push = {usersLiked:req.auth.userId};
						query.$inc = {likes: +1}
						post.likes +=1;
						post.usersLiked.push(req.auth.userId);
					}
					Post.updateOne(
						{ _id: req.params.id }, query)
						.then(() => res.status(200).json({ message: 'enregistré', post }))
						.catch(error => res.status(400).json({ error }));
				})
				.catch(error => res.status(404).json({ error }));
		}
		// if (req.body.like === 1) {
		// 	Post.updateOne(
		// 	{ _id: req.params.id },
		// 	{
		// 	$inc: { likes: 1 },
		// 	$push: { usersLiked: req.auth.userId }
		// 	})

		// 	.then(() => res.status(200).json({ message: '+1 like !' }))
		// 	.catch(error => res.status(400).json({ error }));

		// } else (req.body.like === -1); {
		// 	Post.updateOne(
		// 	{ _id: req.params.id },
		// 	{
		// 		$inc: { likes: -1 },
		// 		$push: { userLiked: req.auth.userId }
		// 	})

		// 	.then(() => res.status(200).json({ message: '+1 dislike !' }))
		// 	.catch(error => res.status(400).json({ error }))
		// 	};	
	}
/*
} else {
Post.findOne({ _id: req.params.id })
.then(post => {
	if (sauce.usersLiked.includes(req.body.userId)) {
		Sauce.updateOne({ _id: req.params.id },
			{
				$pull: { usersLiked: req.body.userId },
				$inc: { likes: -1 }
			})
			
			.then(() => res.status(200).json({ message: 'like -1 !' }))
			.catch(error => res.status(400).json({ error }))
			
		} else if (sauce.usersDisliked.includes(req.body.userId)) {
			Sauce.updateOne({ _id: req.params.id },
				{
					$pull: { usersDisliked: req.body.userId },
					$inc: { dislikes: -1 }
				})
				.then(() => res.status(200).json({ message: 'Dislike -1 !' }))
				.catch(error => res.status(400).json({ error }))
			}
		})
		.catch(error => res.status(400).json({ error }))
	}
	
}
*/