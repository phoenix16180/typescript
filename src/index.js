"use strict";
// Examples of TypeScript variable declaration:
var a = 1;
var b = 'hello';
var c = true;
var d = 'any';
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = ['hello', 1];
var h = { key: 'value' };
var i = { key: 'value', x: 5, y: true };
var o = { key: 'value' };
// Examples of TypeScript class declaration
var Class = /** @class */ (function () {
    function Class(key) {
        this.key = key;
    }
    return Class;
}());
var p = new Class('value');
// Examples of TypeScript function declaration
function functionDeclaration(key) {
    return key;
}
var v = functionDeclaration('value');
