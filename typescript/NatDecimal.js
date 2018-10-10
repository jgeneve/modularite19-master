"use strict";
exports.__esModule = true;
var NatDecimal = /** @class */ (function () {
    function NatDecimal(rep) {
        this.chiffres = rep;
    }
    NatDecimal.prototype.estNul = function () {
        return this.val() == 0;
    };
    NatDecimal.prototype.predecesseur = function () {
        if (this.estNul())
            throw Error("Impossible de faire l'opération predecesseur sur un élèment null");
        return this.creerNatAvecValeur(this.val() - 1);
    };
    NatDecimal.prototype.chiffre = function (i) {
        if (i < 0 || i > this.taille())
            throw new Error("Negative argument");
        var number = this.val().toString();
        var length = number.length;
        i = length - i;
        return parseInt(number.charAt(i));
    };
    NatDecimal.prototype.taille = function () {
        return this.val().toString().length;
    };
    NatDecimal.prototype.val = function () {
        return Number(this.chiffres);
    };
    NatDecimal.prototype.equals = function (n) {
        return n.val() == this.val();
    };
    NatDecimal.prototype.creerNatAvecValeur = function (x) {
        return new NatDecimal(x.toString());
    };
    NatDecimal.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    NatDecimal.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(this.val() + 1);
    };
    NatDecimal.prototype.creerNatAvecRepresentation = function (val) {
        return new NatDecimal(val);
    };
    NatDecimal.prototype.somme = function (x) {
        var t = this.taille() < x.taille() ? this.taille() : x.taille();
        var rep = "";
        var retenue = 0;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            rep += chiffre.toString();
        }
        rep = retenue == 0 ? rep : rep + 1;
        return this.creerNatAvecRepresentation(rep.split("").reverse().join("").toString());
    };
    NatDecimal.prototype.zero = function () {
        return this.creerNatAvecValeur(0);
    };
    NatDecimal.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    NatDecimal.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NatDecimal.prototype.modulo = function (x) {
        if (x.estNul())
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NatDecimal.prototype.div = function (x) {
        if (x.estNul())
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    NatDecimal.prototype.toString = function () {
        return String(this.val());
    };
    NatDecimal.FAB = new NatDecimal("0");
    return NatDecimal;
}());
exports.NatDecimal = NatDecimal;
