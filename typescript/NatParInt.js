"use strict";
exports.__esModule = true;
var NatParInt = /** @class */ (function () {
    function NatParInt(val) {
        if (val < 0)
            throw new Error("Nombre inferieur a 0");
        this.valeur = val;
    }
    NatParInt.prototype.val = function () {
        return this.valeur;
    };
    NatParInt.prototype.estNul = function () {
        return this.val() == 0;
    };
    NatParInt.prototype.predecesseur = function () {
        return this.creerNatAvecValeur(this.val() - 1);
    };
    NatParInt.prototype.chiffre = function (i) {
        if (i < 0 || i > this.taille())
            throw new Error("Invalid argument");
        var number = this.val().toString();
        var length = number.length;
        i = length - i;
        return parseInt(number.charAt(i));
    };
    NatParInt.prototype.taille = function () {
        return this.val().toString().length;
    };
    NatParInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    NatParInt.prototype.zero = function () {
        return this.creerZero();
    };
    NatParInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    NatParInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NatParInt.prototype.modulo = function (x) {
        if (x.estNul())
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NatParInt.prototype.div = function (x) {
        if (x.estNul())
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    NatParInt.prototype.creerNatAvecValeur = function (val) {
        return new NatParInt(val);
    };
    NatParInt.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    NatParInt.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    NatParInt.prototype.creerNatAvecRepresentation = function (val) {
        return this.creerNatAvecValeur(Number(val));
    };
    NatParInt.prototype.toString = function () {
        return String(this.val());
    };
    NatParInt.prototype.equals = function (n) {
        return n.val() == this.val();
    };
    NatParInt.FAB = new NatParInt(0);
    return NatParInt;
}());
exports.NatParInt = NatParInt;
