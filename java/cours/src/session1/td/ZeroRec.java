package session1.td;

public class ZeroRec extends Zero implements Nat {
	
	public static FabriqueNaturels<Nat> FAB = new ZeroRec();

	public ZeroRec() {}
	
	//Create the successor of an object
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return FAB.creerNatAvecValeur(predecesseur.val()+1);
	}

	
	//Add two numbers (the pointed one and the one passed in arg)
	@Override
	public Nat somme(Nat x) {
		return x;
	}

	//Return a neutral element of the addition, a.k.a zero
	@Override
	public Nat zero() {
		return FAB.creerNatAvecValeur(0);
	}

	//Multiplication between two numbers
	@Override
	public Nat produit(Nat x) {
		return FAB.creerNatAvecValeur(this.val()*x.val());
	}

	//Return a neutral element of the multiplication, a.k.a one
	@Override
	public Nat un() {
		return FAB.creerNatAvecValeur(1);
	}

	//Return the rest of the Euclidean division this.val/x
	@Override
	public Nat modulo(Nat x) {
		return (x.estNul()) ? null : FAB.creerNatAvecValeur(this.val()%x.val());
	}

	//Return the quotient of the division this.val/x
	@Override
	public Nat div(Nat x) {
		return (x.estNul()) ? null : FAB.creerNatAvecValeur(this.val()/x.val());
	}

	//Equals method
	public boolean equals(Object o) {
		if(!(o instanceof Nat)) return false;
		Nat n = (Nat)o;
		return this.val() == n.val();
	}
}
