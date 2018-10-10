"use strict";
exports.__esModule = true;
var NatParInt_1 = require("./NatParInt");
var Zero = /** @class */ (function () {
    function Zero() {
    }
    Zero.prototype.estNul = function () {
        return true;
    };
    Zero.prototype.predecesseur = function () {
        throw new Error("0 n'a pas de predecesseur");
    };
    Zero.prototype.chiffre = function (i) {
        if (i != 0)
            throw new Error("Erreur argument");
        else
            return 0;
    };
    Zero.prototype.taille = function () {
        return 1;
    };
    Zero.prototype.val = function () {
        return 0;
    };
    Zero.prototype.creerNatAvecValeur = function (x) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(x);
    };
    Zero.prototype.creerZero = function () {
        return new Zero();
    };
    Zero.prototype.creerSuccesseur = function (predecesseur) {
        return NatParInt_1.NatParInt.FAB.creerSuccesseur(predecesseur);
    };
    Zero.prototype.creerNatAvecRepresentation = function (val) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecRepresentation(val);
    };
    Zero.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val());
    };
    Zero.prototype.zero = function () {
        return this.creerZero();
    };
    Zero.prototype.produit = function (x) {
        return this.creerZero();
    };
    Zero.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Zero.prototype.modulo = function (x) {
        if (x.estNul())
            throw new Error("Division par 0");
        return this.creerZero();
    };
    Zero.prototype.div = function (x) {
        if (x.estNul())
            throw new Error("Division par 0");
        return this.creerZero();
    };
    Zero.prototype.toString = function () {
        return "0";
    };
    Zero.prototype.equals = function (n) {
        return n.val() == 0;
    };
    Zero.FAB = new Zero();
    return Zero;
}());
exports.Zero = Zero;
