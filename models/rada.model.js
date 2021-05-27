"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.Rada = void 0;
var Rada = /** @class */ (function () {
    function Rada(speaker, members) {
        this.speaker = speaker;
        this.parties = members;
    }
    Rada.prototype.addParty = function (party) {
        this.parties = __spreadArray(__spreadArray([], this.parties), [party]);
    };
    Rada.prototype.removeParty = function (party) {
        this.parties = this.parties.filter(function (value) { return value.name !== party.name; });
    };
    Rada.prototype.logParties = function () {
        console.log('Parties:');
        this.parties.forEach(function (party) {
            return console.log("Party name: " + party.name + ", Party chairman: " + party.chairman.name);
        });
    };
    Rada.prototype.logParty = function (partyName) {
        console.log('Party:');
        var chosenParty = this.parties.filter(function (item) { return item.name === partyName; })[0];
        console.log("Party name: " + chosenParty.name + ", Party chairman: " + chosenParty.chairman.name);
    };
    Rada.prototype.logBribers = function () {
        console.log('Rada Bribers:');
        this.parties.forEach(function (party) { return party.logBribers(); });
    };
    Rada.prototype.logBiggestBriber = function () {
        var biggestBriber = this.parties[0].members[0];
        for (var _i = 0, _a = this.parties; _i < _a.length; _i++) {
            var party = _a[_i];
            var bribers = party.members.filter(function (value) { return value.honestyDegree < 50; });
            var biggestPartyBriber = bribers.reduce(function (prev, curr) {
                return prev.minBribe > curr.minBribe ? prev : curr;
            });
            if (biggestBriber.minBribe < biggestPartyBriber.minBribe) {
                biggestBriber = biggestPartyBriber;
            }
        }
        console.log('Rada biggest briber:');
        console.log("Name: " + biggestBriber.name + ", Age: " + biggestBriber.age + ", Gender: " + biggestBriber.gender + ", Minimum bribe: " + biggestBriber.minBribe + ", Honesty degree: " + biggestBriber.honestyDegree);
    };
    return Rada;
}());
exports.Rada = Rada;
