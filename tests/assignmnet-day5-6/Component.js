"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        console.log("Rendering Button");
    };
    Button.prototype.handleEvent = function () {
        console.log("Handling Button event");
    };
    return Button;
}());
//TextField
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.render = function () {
        console.log("Rendering TextField");
    };
    TextField.prototype.handleEvent = function () {
        console.log("Handling TextField event");
    };
    return TextField;
}());
//`Checkbox`    
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        console.log("Rendering Checkbox");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("Handling Checkbox event");
    };
    return Checkbox;
}());
new Button().render();
new Button().handleEvent();
new TextField().render();
new TextField().handleEvent();
new Checkbox().render();
new Checkbox().handleEvent();
