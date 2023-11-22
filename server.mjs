    const app = express();
    const PORT= 3000
    import mongoose from 'mongoose'
    import dotenv from 'dotenv'
    dotenv.config()
    import Yugi from './db/yugi.mjs'
    import yugi from './routes/yugi.mjs'
    import express from 'express'
    
    
    const connectDb = async()=>{
        mongoose.connect(process.env.MONGO_URI)
        
        mongoose.connection
        .on('open',()=>console.log('connected to Mongodb'))
        .on('close',()=>console.log('disconnected'))
        .on('error',(error)=>console.log(error))
        };
        connectDb()
      
      app.get("/", (req, res) => res.send("Testing Yugioh Data"));
      app.use(express.json())
      app.use ('/yugi',yugi)

        // MongoDb Data Base

        // Create a New card Post
        // const newCard = await Yugi.create({
        // name: "Pot of Greed", 
        // starLevel:'', 
        // cardType:'Spell',
        // });

        

        
        //Create PUT with changes
        // newCard.name = "Dark Magician"
        // newCard.starLevel = 7
        // newCard.cardType = 'Normal Monster'
        // await newCard.save()


        //Query
        const card = await Yugi.findById
        ('655da09e2826dd7cbf3acccc','name cardType').exec();
        console.log(card);
        
        //Delete
        // const yugi = await Yugi.deleteOne({_id: "655da0d36638fd7b830306d0"})
        // console.log(yugi);
    
    
    
    
        app.listen(PORT,()=>{
            console.log(`Server tetris ${PORT}`);
        })
