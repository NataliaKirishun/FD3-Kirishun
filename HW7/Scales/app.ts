class Product {

    constructor(private scale:number, private name:string) {
    }

    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }
}

class Apple extends Product {
    constructor (scale: number, name:string) {
        super(scale, name);
    }
}

class Tomato extends Product {
    constructor(scale:number, name:string) {
        super(scale, name);
    }
}

class Scale {

    addedProducts:Array<Product>=[];

    add(NewProduct:Product):void{
        this.addedProducts.push(NewProduct);
    }

    getSumScale():number{
        let sum:number = 0;
        this.addedProducts.forEach( item => sum += item.getScale());
        return sum;
    }

    getNameList():Array<string> {
        let arr:Array<string>=[];
        this.addedProducts.forEach( item=> arr.push(item.getName()));
        return arr;
    }
}

let apple1:Product=new Apple(100, 'apple1');
let apple2:Product=new Apple(200, 'apple2');
let apple3:Product=new Apple(300, 'apple3');
let tomato1:Product=new Tomato(400, 'tomato1');
let tomato2:Product=new Tomato(500, 'tomato2');
let tomato3:Product=new Tomato(600, 'tomato3');

let scale=new Scale();

scale.add(apple1);
scale.add(apple2);
scale.add(apple3);
scale.add(tomato1);
scale.add(tomato2);
scale.add(tomato3);

console.log(scale.getSumScale());
console.log(scale.getNameList());


