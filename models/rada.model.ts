import {Deputy} from "./deputy.model";
import {Party} from "./party.model";

export class Rada {
    speaker: Deputy
    parties: Array<Party>

    constructor(speaker: Deputy, members: Array<Party>) {
        this.speaker = speaker;
        this.parties = members;
    }

    addParty(party: Party): void {
        this.parties = [...this.parties, party];
    }

    removeParty(party: Party): void {
        this.parties = this.parties.filter(value => value.name !== party.name)
    }

    logParties(): void {
        console.log('Parties:');
        this.parties.forEach(party =>
            console.log(`Party name: ${party.name}, Party chairman: ${party.chairman.name}`));
    }

    logParty(partyName: string): void {
        console.log('Party:');
        const chosenParty: Party = this.parties.filter(item => item.name === partyName)[0];
        console.log(`Party name: ${chosenParty.name}, Party chairman: ${chosenParty.chairman.name}`);
    }

    logBribers(): void {
        console.log('Rada Bribers:');
        this.parties.forEach(party => party.logBribers());
    }

    logBiggestBriber(): void {
        let biggestBriber: Deputy = this.parties[0].members[0]
        for (const party of this.parties) {
            const bribers: Array<Deputy> = party.members.filter(value => value.honestyDegree < 50);
            const biggestPartyBriber: Deputy = bribers.reduce((prev, curr) => {
                return prev.minBribe > curr.minBribe ? prev : curr;
            });

            if (biggestBriber.minBribe < biggestPartyBriber.minBribe) {
                biggestBriber = biggestPartyBriber
            }
        }
        console.log('Rada biggest briber:')
        console.log(`Name: ${biggestBriber.name}, Age: ${biggestBriber.age}, Gender: ${biggestBriber.gender}, Minimum bribe: ${biggestBriber.minBribe}, Honesty degree: ${biggestBriber.honestyDegree}`);
    }
}