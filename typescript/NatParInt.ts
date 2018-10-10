import { Nat } from "./Nat";
import { FabriqueNaturels } from "./FabriqueNaturels";

export class NatParInt implements Nat{
    private valeur: number;
    public static FAB: FabriqueNaturels<Nat> = new NatParInt(0);

    public constructor(val: number) {
        if (val < 0) 
            throw new Error("Nombre inferieur a 0");
        this.valeur = val;
    }

    public val(): number {
        return this.valeur;
    }

    public estNul(): boolean {
        return this.val() == 0;
    }

    public predecesseur(): Nat {
        return this.creerNatAvecValeur(this.val() - 1);
    }

    public chiffre(i: number): number {
        if(i < 0 || i > this.taille())
            throw new Error("Invalid argument");

        var number = this.val().toString();
        var length = number.length;
        i = length - i;

        return parseInt(number.charAt(i));
    }
    public taille(): number {
        return this.val().toString().length;
    }
    
    public somme(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val() + x.val())
    }
    public zero(): Nat {
        return this.creerZero();
    }
    public produit(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val() * x.val())
    }
    public un(): Nat {
        return this.creerNatAvecValeur(1);
    }
    public modulo(x: Nat): Nat {
        if (x.estNul()) 
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(this.val() % x.val());
    }
    public div(x: Nat): Nat {
        if (x.estNul()) 
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    }

    public creerNatAvecValeur(val: number): Nat {
        return new NatParInt(val);
    }

    public creerZero(): Nat {
        return this.creerNatAvecValeur(0)
    }
    public creerSuccesseur(predecesseur: Nat): Nat {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }
    public creerNatAvecRepresentation(val: string): Nat {
        return this.creerNatAvecValeur(Number(val));
    }

    public toString(): string {
        return String(this.val());
    }

    public equals(n: Nat): boolean {
        return n.val() == this.val();
    }
}