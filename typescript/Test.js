"use strict";
exports.__esModule = true;
var NatParInt_1 = require("./NatParInt");
var Zero_1 = require("./Zero");
var Succ_1 = require("./Succ");
var NatDecimal_1 = require("./NatDecimal");
function test(fab) {
    var zero = fab.creerZero();
    console.log("0 ? " + zero);
    console.log("0 == 0 - true ? " + zero.equals(zero.zero()));
    var un = fab.creerSuccesseur(zero);
    console.log("Successeur de 0 - 1 ? " + un);
    console.log("1 == 1 - true ? " + un.equals(un.un()));
    console.log("Predecesseur de 1 - 0 ? " + un.predecesseur());
    var cinq = fab.creerNatAvecValeur(5);
    console.log("5 ? " + cinq);
    console.log("Predecesseur de 5 - 4 ? " + cinq.predecesseur());
    var six = fab.creerNatAvecValeur(6);
    console.log("6 ? " + six);
    console.log("Somme 5 + 6 - 11 ? " + cinq.somme(six));
    console.log("Produit 5 * 6 - 30 ? " + cinq.produit(six));
    var x = fab.creerNatAvecValeur(33);
    var y = fab.creerNatAvecValeur(6);
    console.log("Division 33 / 6 Quotient - 5 ? " + x.div(y) + " | Reste - 3 ? " + x.modulo(y));
    try {
        var z = fab.creerNatAvecValeur(2000000000);
        console.log("2000000000 x 2000000000 ? " + (z.val() + z.val()));
    }
    catch (e) {
        console.log(e);
    }
}
console.log("Tests NatParInt");
test(NatParInt_1.NatParInt.FAB);
console.log("\n");
console.log("Tests NatDecimal");
test(NatDecimal_1.NatDecimal.FAB);
console.log("\n");
console.log("Tests Zero");
test(Zero_1.Zero.FAB);
console.log("\n");
console.log("Tests Succ");
test(Succ_1.Succ.FAB);
console.log("\n");
