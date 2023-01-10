export default class ApiPlayLoad{
    Name;
    Image;
    Id;

    constructor(name, image, id){
        this.Name = name;
        this.Image = image;
        this.Id = id;
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
    get Name(){
        return this.Name;
    }
    get Image(){
        return this.Image;
    }
    get Id(){
        return this.Id;
    }
}