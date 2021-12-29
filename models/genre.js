var mongoose=require('mongoose');

var Schema = mongoose.Schema;

var genreschema = new Schema(
    {
        name : {type:String,required:true, maxlength:100,minlength:3}

    }
);

genreschema.virtual('url').get(function(){
    return '/catalog/genre/'+this._id;
});

module.exports=mongoose.model('Genre',genreschema);

