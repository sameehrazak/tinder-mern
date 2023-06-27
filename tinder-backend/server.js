import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from "./dbCards.js"

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url="mongodb+srv://sam366:speedck47@mydb.mmuckvc.mongodb.net/tinderdb?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/',(req,res) => res.status(200).send("Hello World"));

app.post('/tinder/card', (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// app.get('/tinder/cards',(req,res) => {
//     Cards.find((err,data) => {
//         if(err){
//             res.status(500).send(err)
//         } else {
//             res.status(200).send(data)
//         }
//     })
// });
app.get('/tinder/cards', async (req, res) => {
    try {
      const data = await Cards.find().exec();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
// Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));

//gjtiXZC6CP1FfZP6

//dywnre5zBmabpH9m