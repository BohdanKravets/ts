"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.Party = void 0;
var Party = /** @class */ (function () {
    function Party(name, chairman, members) {
        this.name = name;
        this.chairman = chairman;
        this.members = members;
    }
    Party.prototype.addMember = function (member) {
        this.members = __spreadArray(__spreadArray([], this.members), [member]);
    };
    Party.prototype.removeMember = function (member) {
        this.members = this.members.filter(function (value) { return value.name !== member.name; });
    };
    Party.prototype.logDeputies = function () {
        console.log(this.name + " party deputies:");
        this.members.forEach(function (member) {
            return console.log("Name: " + member.name + ", Age: " + member.age + ", Gender: " + member.gender + ", Minimum bribe:" + member.minBribe + ", Honesty degree: " + member.honestyDegree);
        });
    };
    Party.prototype.logBribers = function () {
        var bribers = this.members.filter(function (value) { return value.honestyDegree < 50; });
        console.log(this.name + " party bribers:");
        bribers.forEach(function (briber) {
            return console.log("Name: " + briber.name + ", Age: " + briber.age + ", Gender: " + briber.gender + ", Minimum bribe: " + briber.minBribe + ", Honesty degree: " + briber.honestyDegree);
        });
    };
    Party.prototype.logBiggestBriber = function () {
        var bribers = this.members.filter(function (value) { return value.honestyDegree < 50; });
        var biggestPartyBriber = bribers.reduce(function (prev, curr) {
            return prev.minBribe > curr.minBribe ? prev : curr;
        });
        console.log(this.name + " party biggest briber:");
        console.log("Name: " + biggestPartyBriber.name + ", Age: " + biggestPartyBriber.age + ", Gender: " + biggestPartyBriber.gender + ", Minimum bribe: " + biggestPartyBriber.minBribe + ", Honesty degree: " + biggestPartyBriber.honestyDegree);
    };
    return Party;
}());
exports.Party = Party;
