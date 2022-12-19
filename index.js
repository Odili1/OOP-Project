class Animal {
    #name
    constructor(name){
        if (this.constructor === Animal){
            throw new Error ('The Animal class cannot be initiated of called directly')
        }
        this.#name = name;
    }

    
    // Methods to set the property
    bodyTemp(temprature){
        if (temprature.toLowerCase() === 'warm'){
            return 'warm blooded'
        }else if (temprature.toLowerCase() === 'cold'){
            return 'cold blooded'
        }
    };

    #myFeatures(){
        return `I am a ${this.name}, under the class ${this.constructor.name}. \nI have ${this.hasBackbone} and also I am ${this.bodyTemp}`    
    }
    
    // Getters to get the name 
    get name(){
        return this.#name;
    }

    get myFeatures(){
        return this.#myFeatures()
    }
    // Setters to change the name at any time
    set name(name){
        return this.#name = name
    }


}


// Child classes of the Parent Animal
class Backbone extends Animal{
    constructor(name){
        super(name)
        if (this.constructor === Backbone) {
            throw new Error('This class cannot be instantiated or called directly')
        }

    }

    // Private Method to display the presence of backbone
    #hasBackbone(){
        return 'a backbone'
    }

    // Getter to get the private method
    get hasBackbone(){
        return this.#hasBackbone()
    }
}

class Nobackbone extends Animal{
    constructor(name){
        super(name)
        if (this.constructor === Nobackbone) {
            throw new Error('This class cannot be instantiated or called directly')
        }

    }

    // Private Method to display the presence of backbone
    #hasBackbone(){
        return 'no backbone'
    }

    // Getter to get the private method
    get hasBackbone(){
        return this.#hasBackbone()
    }
}


// Child classes of th class Nobackbone
class Anthropoda extends Nobackbone{
    constructor(name){
        super(name);
        this.bodyTemp = this.bodyTemp('cold')
    }
} 

class Fish extends Backbone{
    constructor(name){
        super(name);
        this.bodyTemp = this.bodyTemp('cold')
    }
}

class Amphibia extends Backbone{
    constructor(name){
        super(name);
        this.bodyTemp = this.bodyTemp('cold');
    }
}

class Reptiles extends Backbone{
    constructor(name){
        super(name);
        this.bodyTemp = this.bodyTemp('cold');
    }
}

class AVES extends Backbone{
    constructor(name){
        super(name);
        this.bodyTemp = this.bodyTemp('warm');
    }
}

class Mammal extends Backbone{
    constructor(name){
        super(name);
        this.bodyTemp = this.bodyTemp('warm')
    }
}

// Instantiated Classes
const butterfly = new Anthropoda('Butterfly');
const tilapia = new Fish('Tilapia');
const frog = new Amphibia('Frog');
const tortoise = new Reptiles('Tortoise');
const eagle = new AVES('Eagle');
const cat = new Mammal('Cat');

const animals = [butterfly, tilapia, frog, tortoise, eagle, cat];

for (let each of animals){
    console.log(each.myFeatures + '\n');
}

