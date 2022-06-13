const mongoose = require('../models/connection')
const Composer = require('../models/composer')
const db = mongoose.connection
  db.on("open", () =>{
      const composersArr = [{
          name: "W.A. Mozart",
          songs: [{name:"Overture to the marriage of Figaro"  , audio: "Overture-to-The-marriage-of-Figaro-K.-492.mp3"}]
      },{name: "F.List" }
      
      ]
      console.log("Connected to Mongoose")
      
      Composer.deleteMany({})
      .then((data) => {
          // Seed Starter Fruits
          //Song.create(composers).rhen()
          Composer.create(composersArr)
          .then((data) => {
      
            // send created fruits as response to confirm creation
            console.log(data)
            db.on("close", () => console.log("Disconnected from Mongoose"))
           // res.json(data);
          })
          .catch("error", (error) => console.log(error));
        });
    })
  



