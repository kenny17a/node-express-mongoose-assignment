const News = require("../models/news.schema")
const newCnt = {
    create: async (req, res)=>{
        try{
            
            const news = await new News({
                title: req.body.title,
                description: req.body.description,
                body: req.body.body,
                isValid: req.body.isValid
             })
             .save() //  to save the created data
             
             if (!news) throw new Error ("News not saved properly")
             res.status(201).send(news)
        } catch (error){
            res.status(400).send(error.message)

        }
    
    },
    

    update: async (req, res) => {
        try{
            const postId = req.params.postId;
            const {title, description, body} = req.body
            if(!title || !description || !body) 
            throw new Error ("Hello, you're not sending the body data");

            const news = await News.findByIdAndUpdate(postId, {
                title: req.body.title,
                description: req.body.description,
                body: req.body.body
            })
            
            if(!news) throw new Error("News not updated properly");
            return res.status(200).send(news);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }, 

    read: async (req,res) =>{
        try {
            const allNews = await News.find({})
            return res.status(200).send(allNews);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    getAll: async (req, res) => {
        try {
        const allNews = await News.find({})
        return res.status(200).send(allNews)
        } catch(error) {
            res.status(400).send(error.message)
        }
    },

    delete: async (req, res) => {
        try {
            const postId = req.params.postId;
            await News.findByIdAndDelete(postId);
            return res.status(200).send("post deleted")
        } catch (error){
            res.status(400).send(error.message)
        }
    },
};
module.exports = newCnt;