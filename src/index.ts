// Examples of TypeScript variable declaration:
let a: number = 1;
let b: string = 'hello';
let c: boolean = true;
let d: any = 'any';
let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let g: [string, number] = ['hello', 1];
let h: object = { key: 'value' };
let i: { key: string, x: number, y: boolean } = { key: 'value', x: 5, y: true };

// let j: undefined = undefined;
// let k: null = null;
// let l: never;
// let m: unknown = 'unknown';
// let n: void = undefined;
// let q: Function = () => { };
// let r: RegExp = /hello/;
// let s: Date = new Date();
// let t: Error = new Error('error');
// let u: Promise<number> = new Promise((resolve) => resolve(1));

// Examples of TypeScript interface declaration:
interface Interface {
    key: string;
}
let o: Interface = { key: 'value' };

// Examples of TypeScript class declaration
class Class {
    key: string;
    constructor(key: string) {
        this.key = key;
    }
}
let p: Class = new Class('value');

// Examples of TypeScript function declaration
function functionDeclaration(key: string): string {
    return key;
}
let v: string = functionDeclaration('value');
