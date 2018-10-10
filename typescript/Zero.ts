import { Nat } from "./Nat";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { NatParInt } from "./NatParInt";
import { Succ } from "./Succ";

export class Zero implements Nat {
    public static  FAB: FabriqueNaturels<Nat> = new Zero();

    public constructor(){}

    estNul(): boolean {
        return true;
    }    
    predecesseur(): Nat {
        throw new Error("0 n'a pas de predecesseur");
    }
    chiffre(i: number): number {
        if(i != 0)
            throw new Error("Erreur argument");
        else 
            return 0;
    }
    taille(): number {
        return 1;
    }
    val(): number {
        return 0;
    }
    creerNatAvecValeur(x: number): Nat {
        return NatParInt.FAB.creerNatAvecValeur(x);
    }
    creerZero(): Nat {
        return new Zero();
    }
    creerSuccesseur(predecesseur: Nat): Nat {
        return NatParInt.FAB.creerSuccesseur(predecesseur);
    }
    creerNatAvecRepresentation(val: string): Nat {
        return NatParInt.FAB.creerNatAvecRepresentation(val);
    }
    somme(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val());
    }
    zero(): Nat {
        return this.creerZero()
    }
    produit(x: Nat): Nat {
        return this.creerZero()
    }
    un(): Nat {
        return this.creerNatAvecValeur(1);
    }
    modulo(x: Nat): Nat {
        if (x.estNul()) 
            throw new Error("Division par 0");
        return this.creerZero();
    }
    div(x: Nat): Nat {
        if (x.estNul()) 
            throw new Error("Division par 0");
        return this.creerZero();
    }

    toString(): string {
        return "0";
    }
    equals(n: Nat): boolean {
        return n.val() == 0;
    }
}