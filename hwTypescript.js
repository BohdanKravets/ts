"use strict";
exports.__esModule = true;
var gender_enum_1 = require("./enums/gender.enum");
var deputy_model_1 = require("./models/deputy.model");
var party_model_1 = require("./models/party.model");
var rada_model_1 = require("./models/rada.model");
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
var deputy1 = new deputy_model_1.Deputy('Nata', 25, gender_enum_1.EGender.FEMALE, 30, 2000);
var deputy2 = new deputy_model_1.Deputy('Den', 30, gender_enum_1.EGender.MALE, 40, 1500);
var deputy3 = new deputy_model_1.Deputy('Lilia', 33, gender_enum_1.EGender.FEMALE, 20, 3500);
var deputy4 = new deputy_model_1.Deputy('Ruslan', 40, gender_enum_1.EGender.MALE, 55, 1000);
var deputy5 = new deputy_model_1.Deputy('Olga', 29, gender_enum_1.EGender.FEMALE, 30, 4100);
var deputy6 = new deputy_model_1.Deputy('Yaroslav', 27, gender_enum_1.EGender.MALE, 35, 4500);
var deputy7 = new deputy_model_1.Deputy('Mykola', 40, gender_enum_1.EGender.MALE, 330, 3300);
var deputy8 = new deputy_model_1.Deputy('Yulia', 55, gender_enum_1.EGender.FEMALE, 41, 4100);
var deputy9 = new deputy_model_1.Deputy('Denys', 60, gender_enum_1.EGender.MALE, 55, 4200);
var deputy10 = new deputy_model_1.Deputy('Vira', 61, gender_enum_1.EGender.FEMALE, 65, 3000);
var deputy11 = new deputy_model_1.Deputy('Nazar', 66, gender_enum_1.EGender.MALE, 55, 5000);
var deputy12 = new deputy_model_1.Deputy('Stanislav', 70, gender_enum_1.EGender.MALE, 30, 7000);
console.log(deputy1.takeBribe(2500));
var party1 = new party_model_1.Party('First', deputy1, [deputy1, deputy2, deputy3]);
var party2 = new party_model_1.Party('Second', deputy6, [deputy4, deputy5, deputy6, deputy7]);
var party3 = new party_model_1.Party('Third', deputy8, [deputy8, deputy9, deputy10, deputy11]);
party1.logBiggestBriber();
party2.logBribers();
party3.logDeputies();
party1.addMember(deputy12);
party1.logDeputies();
party2.removeMember(deputy5);
party2.logDeputies();
var VerkhovnaRada = new rada_model_1.Rada(deputy4, [party1, party2]);
VerkhovnaRada.logParties();
VerkhovnaRada.removeParty(party1);
VerkhovnaRada.logParties();
VerkhovnaRada.addParty(party1);
VerkhovnaRada.addParty(party3);
VerkhovnaRada.logParties();
VerkhovnaRada.logParty('First');
VerkhovnaRada.logBribers();
VerkhovnaRada.logBiggestBriber();
