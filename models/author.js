var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var authorSchema=new Schema(
    {
        first_name:{type: String, required:true, maxlength:100},
        family_name:{type: String, required:true, maxlength:100},
        date_of_birth:{type:Date},
        date_of_death:{type:Date}
    }
)

authorSchema.virtual('name').get(function(){
    var fullname='';
    if(this.first_name && this.family_name){
        fullname=this.family_name+','+this.first_name;
    }
    if(!this.first_name || !this.family_name){
        fullname='';
    }
    return fullname;
})

authorSchema.virtual('lifespan').get(function(){
    var lifetime='';
    if(this.date_of_birth){
        lifetime+=this.date_of_birth.getYear().toString();
    }
    lifetime+='-';
    if(this.date_of_death){
        lifetime+=this.date_of_death.getYear().toString();
    }
    return lifetime;
})

authorSchema.virtual('url').get(function(){
    return '/catalog/author/'+this._id;
})

module.exports=mongoose.model('Author',authorSchema)