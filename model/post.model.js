const mongoose=require('mongoose');
const deviceEnum = ["Laptop", "Tablet", "Mobile"];

const PostSchema=mongoose.Schema({


    
   title:String,
   body:String,
   device: {
    type: String,
    enum: deviceEnum,
  },
   no_of_comments:Number,
   user:String,
   userID:String,
},{
    versionKey:false
})

const PostModel=mongoose.model("post",PostSchema);
module.exports={
    PostModel
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGUyZjRlOGYyN2I1NjdlZWZkMjUwMTQiLCJ1c2VyIjoidmlrYXMgc3VyciIsImlhdCI6MTY5MjU5NTU5MX0.OD7EukKI3ozG-TyPn5i9yE0NHuL8-dDhqYTgRHij6BQ