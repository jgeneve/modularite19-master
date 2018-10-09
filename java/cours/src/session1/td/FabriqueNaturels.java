package session1.td;

public interface FabriqueNaturels<T> {
    public T creerNatAvecValeur(int x);
    public T creerZero();
    public T creerSuccesseur(Nat predecesseur);
    public T creerNatAvecRepresentation(String val);
}
