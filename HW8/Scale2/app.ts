interface IScalable {
    scale: number;
    name: string;

    getScale(): number;

    getName(): string;
}

class Apple implements IScalable {
    scale: number;
    name: string;

    constructor(scale: number) {
        this.scale = scale;
        this.name = 'apple';
    }

    getScale(): number {
        return this.scale;
    }

    getName(): string {
        return this.name;
    }
}

class Tomato implements IScalable {
    scale: number;
    name: string;

    constructor(scale: number) {
        this.scale = scale;
        this.name = 'tomato';
    }

    getScale(): number {
        return this.scale;
    }

    getName(): string {
        return this.name;
    }
}

class Scale {

    addedProducts: Array<IScalable> = [];

    add(NewProduct: IScalable): void {
        this.addedProducts.push(NewProduct);
    }

    getSumScale(): number {
        let sum: number = 0;
        this.addedProducts.forEach(item => sum += item.getScale());
        return sum;
    }

    getNameList(): Array<string> {
        let arr: Array<string> = [];
        this.addedProducts.forEach(item => arr.push(item.getName()));
        return arr;
    }
}

let apple1: IScalable = new Apple(100);
let apple2: IScalable = new Apple(200);
let apple3: IScalable = new Apple(300);
let tomato1: IScalable = new Tomato(400);
let tomato2: IScalable= new Tomato(500);
let tomato3: IScalable = new Tomato(600);

let scale = new Scale();

scale.add(apple1);
scale.add(apple2);
scale.add(apple3);
scale.add(tomato1);
scale.add(tomato2);
scale.add(tomato3);

console.log(scale.getSumScale());
console.log(scale.getNameList());


