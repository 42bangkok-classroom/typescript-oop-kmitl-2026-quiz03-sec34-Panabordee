"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is starting..."));
    };
    return Car;
}());
exports.Car = Car;
