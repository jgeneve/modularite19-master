import { SemiAnneauUnitaireEuclidien } from "./hierarchie/SemiAnneauUnitaireEuclidien";
import { FabriqueNaturels } from "./FabriqueNaturels";

export interface Nat extends FabriqueNaturels<Nat>, SemiAnneauUnitaireEuclidien<Nat>{
    estNul(): boolean;
    predecesseur(): Nat;
    chiffre(i: number): number;
    taille(): number;
    val(): number;
    equals(n: Nat): boolean;
}