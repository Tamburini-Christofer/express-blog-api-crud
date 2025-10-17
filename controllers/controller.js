//todo Recuperiamo i posts
const Post = require('../data/posts');

//?INDEX
const index = (req, res) => {
    res.json(Post);
}

//?SHOW
const show = (req, res) => {
    //todo Recuperiamo l'id dai parametri della richiesta
    const id = parseInt(req.params.id);
    //todo Cerchiamo il post con l'id corrispondente
    const post = Post.find(p => p.id === id);   
    //todo Rispondiamo con il post trovato
    res.json(post);
}

//?STORE
const store = (req, res) => {

}

//?UPDATE 
const update = (req, res) => {

}

//?MODIFY
const modify = (req, res) => {

}

//?DESTROY
const destroy = (req, res) => {

}

