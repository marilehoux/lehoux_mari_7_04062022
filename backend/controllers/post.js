const Post = require('../models/post');
const fs = require('fs'); 
const User = require('../models/user');

// pour afficher tous les post
exports.getAllPost = (req, res, next) => {
	Post.find()
	.then(
		(posts) => {
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
			console.log(req.body)
			const postObject = req.body;
			
			delete postObject._id;
			const post = new Post({
				...postObject, 
				userId: req.auth.userId,
				imageUrl: req.file
				? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
				: null
			});
			post.save()
			.then(() => res.status(201).json({ message: 'post enregistré!'}))
			.catch(error => res.status(400).json({error}));
		};
		
		//pour récupérer un post
		exports.getOnePost = (req, res, next) => {
			Post.findOne({
				_id: req.params.id
			}).then(
				(post) => {
					res.status(200).json(post);
				}
				).catch(
					(error) => {
						res.status(404).json({error: error});
					}
					);
				};
				
				//pour modifier un post
				exports.modifyPost = (req, res, next) => {
					// récupère le Post, gère s'il existe ou non
					const postObject =req.file? {
						...JSON.parse(req.body.post),
						imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
					} : {...req.body};
					
					delete postObject._userId;
					console.log(req.params.id);
					Post.findOne({_id: req.params.id})
					.then((post) => {
						//   console.log(post);
						//   console.log(req.auth.userId)
						User.findOne({_id:req.auth.userId})
						.then ((user) => {
							console.log(user);
							
							if (post.userId == req.auth.userId || user.level == 1) {
								Post.updateOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
								.then(() => res.status(200).json({message : 'votre post est  modifié!'}))
								.catch(error => res.status(401).json({ error }));
							}
							else {  
								console.log(req.auth.userId)
								res.status(401).json({ message :'Vous ne pouvez pas modifier ce post'});
							} 
						})
						
						.catch((error) => {
							res.status(400).json ({error});
						}) 
					})
					
					
					.catch((error) => {
						console.log('vérif');
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
						if (post.userId != req.auth.userId) {
							res.status(401).json({ message :'Vous ne pouvez pas supprimer ce post'});
						} 
						//ajouter possibilité qu'un admin level 1 modifie
						//else if (post.level != 1) {
						// res.status(401).json({message : 'Vous ne pouvez pas modifier ce post'});
						// }
						else {
							Post.deleteOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
							.then(() => res.status(200).json({message : 'Post supprimé!'}))
							.catch(error => res.status(401).json({ error }));
						}
					})
					.catch((error) => {
						res.status(400).json({ error });
					});
				};
				
				/*
				exports.deletePost = (req, res, next) => {
					// m^me tests que pour modify post
					Post.findOne({ _id: req.params.id })
					.then(post => {
						const filename = post.imageUrl.split('/images/')[1];
						fs.unlink(`images/${filename}`, () => {
							Post.deleteOne({ _id: req.params.id })
							.then(() => res.status(200).json({ message: 'Post supprimé !'}))
							.catch(error => res.status(400).json({ error }));
						});
					})
					.catch(error => res.status(500).json({ error }));
				};
				*/
				//like dislike une post
				
				/*
				
				exports.likePost =(req, res, next) => {
					const id = req.params.id;
					if (req.body.like === 1) {
						Sauce.updateOne(
							{ _id: req.params.id },
							{
								$inc: { likes: 1 },
								$push: { usersLiked: req.body.userId }
							})
							
							.then(() => res.status(200).json({ message: '+1 like !' }))
							.catch(error => res.status(400).json({ error }))
							
						} else if (req.body.like === -1) {
							Sauce.updateOne(
								{ _id: req.params.id },
								{
									$inc: { dislikes: 1 },
									$push: { usersDisliked: req.body.userId }
								})
								
								.then(() => res.status(200).json({ message: '+1 dislike !' }))
								.catch(error => res.status(400).json({ error }))
								
							} else {
								Sauce.findOne({ _id: req.params.id })
								.then(sauce => {
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