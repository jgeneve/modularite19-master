package session1.td;

public class Zero implements Nat{

	public static FabriqueNaturels<Nat> FAB = new Zero();
	
	public Zero() {	}
	
	@Override
	public Nat creerNatAvecValeur(int x) {
		return NatParInt.FAB.creerNatAvecValeur(x);
	}


	@Override
	public Nat creerNatAvecRepresentation(String val) {
		return NatParInt.FAB.creerNatAvecRepresentation(val);
	}
	
	@Override
	public String toString() {
		return "0";
	}
	
	
	//----------- General methods (below)

	//Verify is the value is equal to 0 or not
	@Override
	public boolean estNul() {
		return true;
	}

	@Override
	public int chiffre(int i) {
		if(i < 0 || i > this.taille())
			throw new IllegalArgumentException();
		String number = Integer.toString(this.val());
		int length = number.length();
		i = length - i - 1;
		return Integer.parseInt(Character.toString(number.charAt(i)));
	}

	//Return the length of the number without the leading zeros
	@Override
	public int taille() {
		return 1;
	}

	//Return the value of the NatParInt
	@Override
	public int val() {
		return 0;
	}

	//Factory method to create a object where the value is zero
	@Override
	public Nat creerZero() {
		return creerNatAvecValeur(0);
	}

	//Return the predecessor of an object
	@Override
	public Nat predecesseur() {
		throw new UnsupportedOperationException("You cannot use this operation with 0");
	}
	
	//Create the successor of an object
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return creerNatAvecValeur(predecesseur.val()+1);
	}

	
	//Add two numbers (the pointed one and the one passed in arg)
	@Override
	public Nat somme(Nat x) {
		return x;
	}

	//Return a neutral element of the addition, a.k.a zero
	@Override
	public Nat zero() {
		return creerZero();
	}

	//Multiplication between two numbers
	@Override
	public Nat produit(Nat x) {
		return zero();
	}

	//Return a neutral element of the multiplication, a.k.a one
	@Override
	public Nat un() {
		return creerNatAvecValeur(1);
	}

	//Return the rest of the Euclidean division this.val/x
	@Override
	public Nat modulo(Nat x) {
		if(x.estNul())
			throw new IllegalArgumentException("On ne peut pas diviser par zero");
		return zero();
	}

	//Return the quotient of the division this.val/x
	@Override
	public Nat div(Nat x) {
		return zero();
	}

	//Equals method
	public boolean equals(Object o) {
		if(!(o instanceof Nat)) return false;
		Nat n = (Nat)o;
		return this.val() == n.val();
	}
	
}
