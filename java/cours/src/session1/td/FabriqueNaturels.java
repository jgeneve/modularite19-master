package session1.td;

public interface FabriqueNaturels<T> {
    public Nat creerNatAvecValeur(int x);
    public Nat creerZero();
    public Nat creerSuccesseur(Nat predecesseur);
    public Nat creerNatAvecRepresentation(String val);
}
