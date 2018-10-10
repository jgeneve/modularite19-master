package session1.td;

public class Succ implements Nat{
	
	public static FabriqueNaturels<Nat> FAB = new Succ(NatParInt.FAB.creerNatAvecValeur(0));
	private Nat predecesseur;
	
	public Succ(Nat predecesseur) {
		this.predecesseur = predecesseur;
	}

	@Override
	public Nat creerNatAvecValeur(int x) {
		return (x == 0) ? Zero.FAB.creerZero() : creerSuccesseur(NatParInt.FAB.creerNatAvecValeur(x-1));
	}
	
	//Factory with a String value as argument
	@Override
	public Nat creerNatAvecRepresentation(String val) {
		if(val.isEmpty()) throw new IllegalArgumentException();
		return new Succ(NatParInt.FAB.creerNatAvecValeur(Integer.parseInt(val)));
	}
	
	@Override
	public String toString() {
		return String.valueOf(this.val());
	}
	
	
	//----------- General methods (below)

	//Verify is the value is equal to 0 or not
	@Override
	public boolean estNul() {
		return (this.val() == 0) ? true : false;
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
		return Integer.toString(this.val()).length();
	}

	//Return the value of the NatParInt
	@Override
	public int val() {
		return this.predecesseur.val()+1;
	}

	//Factory method to create a object where the value is zero
	@Override
	public Nat creerZero() {
		return new Zero();
	}

	//Return the predecessor of an object
	@Override
	public Nat predecesseur() {
		if(this.estNul())
			throw new UnsupportedOperationException("You cannot use this operation with 0");
		return FAB.creerNatAvecValeur(this.val()-1);
	}
	
	//Create the successor of an object
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new Succ(predecesseur);
	}

	
	//Add two numbers (the pointed one and the one passed in arg)
	@Override
	public Nat somme(Nat x) {
		return creerNatAvecValeur(this.val()+x.val());
	}

	//Return a neutral element of the addition, a.k.a zero
	@Override
	public Nat zero() {
		return creerNatAvecValeur(0);
	}

	//Multiplication between two numbers
	@Override
	public Nat produit(Nat x) {
		return creerNatAvecValeur(this.val()*x.val());
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
		
		return creerNatAvecValeur(this.val()%x.val());
	}

	//Return the quotient of the division this.val/x
	@Override
	public Nat div(Nat x) {
		return (x.estNul()) ? null : creerNatAvecValeur(this.val()/x.val());
	}


	//Equals method
	public boolean equals(Object o) {
		if(!(o instanceof Nat)) return false;
		Nat n = (Nat)o;
		return this.val() == n.val();
	}	
}
