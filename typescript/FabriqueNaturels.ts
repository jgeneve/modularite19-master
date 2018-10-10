export interface FabriqueNaturels<T>{
    creerNatAvecValeur(x: number): T;
    creerZero(): T;
    creerSuccesseur(predecesseur: T): T;
    creerNatAvecRepresentation(val: string): T;
}