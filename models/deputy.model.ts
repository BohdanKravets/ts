import {EGender} from "../enums/gender.enum";
import {EBribeResult} from "../enums/bribeResult.enum";

export class Deputy {
    name: string;
    age: number;
    gender: EGender;
    honestyDegree: number;
    minBribe?: number;

    constructor(name: string, age: number, gender: EGender, honestyDegree: number, minBribe: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        if (honestyDegree < 0) {
            this.honestyDegree = 0;
        } else if (honestyDegree > 100) {
            this.honestyDegree = 100;
        } else {
            this.honestyDegree = honestyDegree;
        }
        if(this.honestyDegree<50) {
            this.minBribe = minBribe;
        }
        else {
                this.minBribe = 0;
        }
    }

    takeBribe(sum: number): EBribeResult {
        if (sum < this.minBribe || this.honestyDegree >= 50) {
            return EBribeResult.NOTTAKEN
        } else if (sum < 1.1 * this.minBribe) {
            return EBribeResult.PENDING
        }
        return EBribeResult.TAKEN
    }
}