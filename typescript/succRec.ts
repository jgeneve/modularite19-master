import { Nat } from "./Nat";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { NatParInt } from "./NatParInt";
import { Succ } from "./Succ";
import { Zero } from "./Zero";

export class SuccRec extends Succ implements Nat {

    public static FAB: FabriqueNaturels<Nat> = new SuccRec(NatParInt.FAB.creerNatAvecValeur(0));

    public constructor (pred: Nat){
        super(pred);
    }
    estNul(): boolean {
        return this.val() == 0;
    }
    chiffre(i: number): number {
        if(i < 0 && i > this.val().toString.length)
            throw new Error("Invalid argument");

        var number = this.val().toString();
        var length = number.length;
        i = length - i;

        return parseInt(number.charAt(i));
    }
    taille(): number {
        return this.val().toString().length;
    }
    equals(n: Nat): boolean {
        return this.val() == n.val();
    }
    
    creerZero(): Nat {
        return Zero.FAB.creerZero();
    }
    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccRec(predecesseur);
    }
   
    somme(x: Nat): Nat {
        if(x.estNul())
            return this;
        return this.creerSuccesseur(this).somme(x.predecesseur())
    }

    produit(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val() * x.val());
    }

    modulo(x: Nat): Nat {
        if (x.estNul()) 
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(this.val() % x.val());
    }
    div(x: Nat): Nat {
        if (x.estNul()) 
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(this.val() / x.val());
    }
    toString(): String {
        return String(this.val());
    }

}