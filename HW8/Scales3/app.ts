interface IStorageEngine {
    addItem(item: Product): void;

    getItem(index: number): Product|string;

    getCount(): number;
};

let products:Product[]=[];

class Scales<StorageEngine extends IStorageEngine> {

    engine:StorageEngine;

    constructor(engine:StorageEngine) {
        this.engine=engine;
    }

    addItem(product:Product){
        this.engine.addItem(product);
    }

    getSumScale(): number {
        let sum: number = 0;
        products.forEach(item => sum += item.getScale());
        return sum;
    }

    getNameList(): Array<string> {
        let arr: Array<string> = [];
        products.forEach(item => arr.push(item.getName()));
        return arr;
    }
}

class ScalesStorageEngineArray implements IStorageEngine{

    addItem(item: Product): void {
        products.push(item);
    }

    getItem(index: number): Product {
        return products[index]
    }

    getCount(): number {
        return products.length
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
    addItem(item: Product): void {
        localStorage.setItem(item.getName(), item.getScale().toString());
    }

    getItem(index: number): string {
        return localStorage.key(index);
    }

    getCount(): number {
        return localStorage.length
    }
}

class Product {

    constructor(private scale: number, private name: string) {
    }

    getScale(): number {
        return this.scale;
    }

    getName(): string {
        return this.name;
    }
}

let product1 = new Product(2, 'апельсин');
let product2 = new Product(3, 'лимон');
let product3 = new Product(4, 'банан');

let scale1 = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray());

scale1.addItem(product1);
scale1.addItem(product2);
scale1.addItem(product3);

console.log('scale1',scale1.getSumScale());
console.log('scale1',scale1.getNameList());

let scale2=new Scales<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage);

scale2.addItem(product1);
scale2.addItem(product2);
scale2.addItem(product3);

console.log('scale2',scale2.getSumScale());
console.log('scale2',scale2.getNameList());








