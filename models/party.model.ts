import {Deputy} from "./deputy.model";

export class Party {
    name: string
    chairman: Deputy;
    members: Array<Deputy>;

    constructor(name: string, chairman: Deputy, members: Array<Deputy>) {
        this.name = name;
        this.chairman = chairman;
        this.members = members;
    }

    addMember(member: Deputy): void {
        this.members = [...this.members, member];
    }

    removeMember(member: Deputy): void {
        this.members = this.members.filter(value => value.name !== member.name)
    }

    logDeputies(): void {
        console.log(`${this.name} party deputies:`);
        this.members.forEach(member =>
            console.log(`Name: ${member.name}, Age: ${member.age}, Gender: ${member.gender}, Minimum bribe:${member.minBribe}, Honesty degree: ${member.honestyDegree}`));
    }


    logBribers(): void {
        const bribers: Array<Deputy> = this.members.filter(value => value.honestyDegree < 50);
        console.log(`${this.name} party bribers:`)
        bribers.forEach(briber =>
            console.log(`Name: ${briber.name}, Age: ${briber.age}, Gender: ${briber.gender}, Minimum bribe: ${briber.minBribe}, Honesty degree: ${briber.honestyDegree}`));

    }

    logBiggestBriber(): void {
        const bribers: Array<Deputy> = this.members.filter(value => value.honestyDegree < 50);

        const biggestPartyBriber: Deputy = bribers.reduce((prev, curr) => {

            return prev.minBribe > curr.minBribe ? prev : curr;
        });
        console.log(`${this.name} party biggest briber:`)
        console.log(`Name: ${biggestPartyBriber.name}, Age: ${biggestPartyBriber.age}, Gender: ${biggestPartyBriber.gender}, Minimum bribe: ${biggestPartyBriber.minBribe}, Honesty degree: ${biggestPartyBriber.honestyDegree}`)
    }
}