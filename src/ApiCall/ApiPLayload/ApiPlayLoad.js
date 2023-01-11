export default class ApiPlayLoad{
    Name;
    Image;
    Id;
    Type;

    constructor(name, image, id, type){
        this.Name = name;
        this.Image = image;
        this.Id = id;
        this.Type = type;
    }
    setName(name){
        this.Name = name;
    }
    setImage(image){
        this.Image = image;
    }
    setId(id){
        this.Id = id;
    }
    setType(type){
        this.Type = type;
    }
    get Name(){
        return this.Name;
    }
    get Image(){
        return this.Image;
    }
    get Id(){
        return this.Id;
    }
    get Type(){
        return this.Type;
    }
}