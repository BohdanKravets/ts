import {EGender} from "./enums/gender.enum";
import {Deputy} from "./models/deputy.model";
import {Party} from "./models/party.model";
import {Rada} from "./models/rada.model";

// Створити такі класи:
//  1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)

// Мають бути присутні такі можливості:
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести фсіх депутатів фракції

// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір

// Мають бути присутні такі можливості:
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - вивести найбільшого хабарника верховної ради

let deputy1 = new Deputy('Nata', 25, EGender.FEMALE, 30, 2000);
let deputy2 = new Deputy('Den', 30, EGender.MALE, 40, 1500);
let deputy3 = new Deputy('Lilia', 33, EGender.FEMALE, 20, 3500);
let deputy4 = new Deputy('Ruslan', 40, EGender.MALE, 55, 1000);
let deputy5 = new Deputy('Olga', 29, EGender.FEMALE, 30, 4100);
let deputy6 = new Deputy('Yaroslav', 27, EGender.MALE, 35, 4500);
let deputy7 = new Deputy('Mykola', 40, EGender.MALE, 330, 3300);
let deputy8 = new Deputy('Yulia', 55, EGender.FEMALE, 41, 4100);
let deputy9 = new Deputy('Denys', 60, EGender.MALE, 55, 4200);
let deputy10 = new Deputy('Vira', 61, EGender.FEMALE, 65, 3000);
let deputy11 = new Deputy('Nazar', 66, EGender.MALE, 55, 5000);
let deputy12 = new Deputy('Stanislav', 70, EGender.MALE, 30, 7000);
console.log(deputy1.takeBribe(2500));

const party1 = new Party('First', deputy1, [deputy1, deputy2, deputy3]);
const party2 = new Party('Second', deputy6, [deputy4, deputy5, deputy6, deputy7]);
const party3 = new Party('Third', deputy8, [deputy8, deputy9, deputy10, deputy11]);

party1.logBiggestBriber();
party2.logBribers();
party3.logDeputies();
party1.addMember(deputy12);
party1.logDeputies();
party2.removeMember(deputy5);
party2.logDeputies()
const VerkhovnaRada = new Rada(deputy4,[party1,party2]);
VerkhovnaRada.logParties();
VerkhovnaRada.removeParty(party1);
VerkhovnaRada.logParties();

VerkhovnaRada.addParty(party1);
VerkhovnaRada.addParty(party3);
VerkhovnaRada.logParties();

VerkhovnaRada.logParty('First');
VerkhovnaRada.logBribers();
VerkhovnaRada.logBiggestBriber();

