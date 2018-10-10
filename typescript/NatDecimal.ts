import { Nat } from "./Nat";
import { FabriqueNaturels } from "./FabriqueNaturels";

export class NatDecimal implements Nat {
    public static FAB: FabriqueNaturels<Nat> = new NatDecimal("0")
    public chiffres: String;

    public constructor(rep: String) {
        this.chiffres = rep;
    }

    estNul(): boolean {
        return this.val() == 0;
    }    
    predecesseur(): Nat {
        if(this.estNul())
            throw Error("Impossible de faire l'opération predecesseur sur un élèment null");
        return this.creerNatAvecValeur(this.val()-1);
    }
    
    public chiffre(i: number): number {
        if(i < 0 || i > this.taille())
            throw new Error("Negative argument");

        var number = this.val().toString();
        var length = number.length;
        i = length - i;

        return parseInt(number.charAt(i));
    }

    taille(): number {
        return this.val().toString().length;
    }
    val(): number {
        return Number(this.chiffres);
    }
    equals(n: Nat): boolean {
        return n.val() == this.val();
    }
    creerNatAvecValeur(x: number): Nat {
        return new NatDecimal(x.toString());
    }
    creerZero(): Nat {
        return this.creerNatAvecValeur(0);
    }
    creerSuccesseur(predecesseur: Nat): Nat {
        return this.creerNatAvecValeur(this.val()+1);
    }
    creerNatAvecRepresentation(val: string): Nat {
        return new NatDecimal(val);
    }
    somme(x: Nat): Nat {
        let t = this.taille() < x.taille() ? this.taille() : x.taille();
	    let rep = "";
	    let retenue = 0;
	  for(let i = 0; i < t; i++){
	    let chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
	    if(chiffre > 9){
	      chiffre = chiffre - 10;
	      retenue = 1;
	    }else{
	      retenue = 0;
        }
        rep += chiffre.toString();
	  }
	  rep = retenue == 0 ? rep : rep + 1;
	  return this.creerNatAvecRepresentation(rep.split("").reverse().join("").toString());
    }
    zero(): Nat {
        return this.creerNatAvecValeur(0);
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
        if(x.estNul())
            throw new Error("Division par 0");
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    }

    public toString(): string {
        return String(this.val());
    }
}