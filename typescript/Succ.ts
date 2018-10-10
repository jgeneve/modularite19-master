import { Nat } from "./Nat";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Zero } from "./Zero";
import { NatParInt } from "./NatParInt";

export class Succ implements Nat {
    public static FAB: FabriqueNaturels<Nat> = new Succ(Zero.FAB.creerZero());
    private pred: Nat;

    public constructor(val: Nat) {
        this.pred = val;
    }

    estNul(): boolean {
        return false;
    }    
    predecesseur(): Nat {
        return this.pred;
    }
    chiffre(i: number): number {
        if(i < 0 || i > this.taille())
            throw new Error("Invalid argument");

        var number = this.val().toString();
        var length = number.length;
        i = length - i;

        return parseInt(number.charAt(i));
    }
    taille(): number {
        return this.val().toString().length;
    }
    val(): number {
        return this.pred.val() + 1;
    }
    equals(n: Nat): boolean {
        return this.val() == n.val();
    }
    creerNatAvecValeur(x: number): Nat {
        return new Succ(NatParInt.FAB.creerNatAvecValeur(x-1));
    }
    creerZero(): Nat {
        return Zero.FAB.creerZero();
    }
    creerSuccesseur(predecesseur: Nat): Nat {
        return new Succ(predecesseur);
    }
    creerNatAvecRepresentation(val: string): Nat {
        return new Succ(NatParInt.FAB.creerNatAvecValeur((Number(val))-1));
    }
    somme(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val() + x.val());
    }
    zero(): Nat {
        return this.creerZero();
    }
    produit(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val() * x.val());
    }
    un(): Nat {
        return this.creerNatAvecValeur(1);
    }
    modulo(x: Nat): Nat {
        if (x.estNul()) 
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(this.val() % x.val());
    }
    div(x: Nat): Nat {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()))
    }

    toString(): String {
        return String(this.val());
    }
}