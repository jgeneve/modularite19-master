package session1.td;

public class NatDecimal implements Nat, FabriqueNaturels<Nat> {
	
	public static FabriqueNaturels<Nat> FAB = new NatDecimal();
	private String chiffres;
	
	public NatDecimal() {} //Default constructor
	
	//Constructor with argument
	public NatDecimal(String rep) {
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < rep.length(); i++){
			char c = rep.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		this.chiffres = rep;
	}
	//Factory with a value as argument
	@Override
	public Nat creerNatAvecValeur(int x) {
		return new NatDecimal(Integer.toString(x));
	}
	//Factory with a String value as argument
	@Override
	public Nat creerNatAvecRepresentation(String val) {
		return new NatDecimal(val);
	}
	
	@Override
	public String toString() {
		return "NatDecimal [chiffres=" + chiffres + "]";
	}
	
	//----------- General methods (below)

	//Verify is the value is equal to 0 or not
	@Override
	public boolean estNul() {
		return (this.val() == 0) ? true : false;
	}

	@Override
	public int chiffre(int i) {
		return this.estNul() ? this.val()%10 : (creerNatAvecValeur(this.val()%10).chiffre(i-1));
	}

	//Return the length of the number without the leading zeros
	@Override
	public int taille() {
		String x = Integer.toString(this.val()).replaceFirst("^0+(?!$)"," ");
		if (x.length() > 0) 
			return x.length();
		else 
			throw new UnsupportedOperationException("Empty number");
	}

	//Return the value of the NatParInt
	@Override
	public int val() {
		return Integer.parseInt(this.chiffres);
	}

	//Factory method to create a object where the value is zero
	@Override
	public Nat creerZero() {
		return creerNatAvecValeur(0);
	}

	//Return the predecessor of an object
	@Override
	public Nat predecesseur() {
		if(this.estNul())
			throw new UnsupportedOperationException("You cannot use this operation with 0");
		return creerNatAvecValeur(this.val()-1);
	}
	
	//Create the successor of an object
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return creerNatAvecValeur(predecesseur.val()+1);
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
		return (x.estNul()) ? null : creerNatAvecValeur(this.val()%x.val());
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