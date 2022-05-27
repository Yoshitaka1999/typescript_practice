// class User {

// }

// console.log("hello world");

enum Signal {
    Red, //0
    Blue = 3,
    Yellow //4
}

var results: Signal;

function add(a: number, b?: number): number {
    return a + b;
}

//返り値がない場合は、"void", 引数をoptionにしたい（引数が入るかわからない）場合は"?"

var add = function(a: number, b: number): number {
    return a + b;
}

var add = (a: number, b: number): number  => {
    return a + b;
}

var add = (a: number, b: number): number  =>  a + b;

console.log(add(3, 5));

//関数のオーバーロード

function add(a: number, b: number): number; //シグネチャ（関数の引数と返り値の組み合わせ）
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b
}

console.log(add("hello", "world"));

console.log(add("hello", 3)); //コンパイルエラー

//クラス
//public, protected, private

class User {
    // public name: string;
    // constructor(name: string) {
    //     this.name = name;
    // }
    constructor(private _name: string) {}
    sayHi(): void {
        console.log("hi! i am " + this._name)
    }
    get name() {
        return this._name;
    }
    set name(newValue: string) {
        this._name = newValue;
    }
}

var tom = new User("Tom");
console.log(tom._name); //エラー（private）
console.log(tom.name); 

tom.name = "TOM";
console.log(tom.name)
tom.sayHi();