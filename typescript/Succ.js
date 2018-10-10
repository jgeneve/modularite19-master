"use strict";
exports.__esModule = true;
var Zero_1 = require("./Zero");
var NatParInt_1 = require("./NatParInt");
var Succ = /** @class */ (function () {
    function Succ(val) {
        this.pred = val;
    }
    Succ.prototype.estNul = function () {
        return false;
    };
    Succ.prototype.predecesseur = function () {
        return this.pred;
    };
    Succ.prototype.chiffre = function (i) {
        if (i < 0 || i > this.taille())
            throw new Error("Invalid argument");
        var number = this.val().toString();
        var length = number.length;
        i = length - i;
        return parseInt(number.charAt(i));
    };
    Succ.prototype.taille = function () {
        return this.val().toString().length;
    };
    Succ.prototype.val = function () {
        return this.pred.val() + 1;
    };
    Succ.prototype.equals = function (n) {
        return this.val() == n.val();
    };
    Succ.prototype.creerNatAvecValeur = function (x) {
        return new Succ(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(x - 1));
    };
    Succ.prototype.creerZero = function () {
        return Zero_1.Zero.FAB.creerZero();
    };
    Succ.prototype.creerSuccesseur = function (predecesseur) {
        return new Succ(predecesseur);
    };
    Succ.prototype.creerNatAvecRepresentation = function (val) {
        return new Succ(NatParInt_1.NatParInt.FAB.creerNatAvecValeur((Number(val)) - 1));
    };
    Succ.prototype.somme = function (x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    Succ.prototype.zero = function () {
        return this.creerZero();
    };
    Succ.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    Succ.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Succ.prototype.modulo = function (x) {
        if (x.estNul())
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    Succ.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    Succ.prototype.toString = function () {
        return String(this.val());
    };
    Succ.FAB = new Succ(Zero_1.Zero.FAB.creerZero());
    return Succ;
}());
exports.Succ = Succ;
