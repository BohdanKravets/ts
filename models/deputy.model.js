"use strict";
exports.__esModule = true;
exports.Deputy = void 0;
var bribeResult_enum_1 = require("../enums/bribeResult.enum");
var Deputy = /** @class */ (function () {
    function Deputy(name, age, gender, honestyDegree, minBribe) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        if (honestyDegree < 0) {
            this.honestyDegree = 0;
        }
        else if (honestyDegree > 100) {
            this.honestyDegree = 100;
        }
        else {
            this.honestyDegree = honestyDegree;
        }
        if (this.honestyDegree < 50) {
            this.minBribe = minBribe;
        }
        else {
            this.minBribe = 0;
        }
    }
    Deputy.prototype.takeBribe = function (sum) {
        if (sum < this.minBribe || this.honestyDegree >= 50) {
            return bribeResult_enum_1.EBribeResult.NOTTAKEN;
        }
        else if (sum < 1.1 * this.minBribe) {
            return bribeResult_enum_1.EBribeResult.PENDING;
        }
        return bribeResult_enum_1.EBribeResult.TAKEN;
    };
    return Deputy;
}());
exports.Deputy = Deputy;
