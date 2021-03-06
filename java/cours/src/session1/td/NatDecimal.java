package session1.td;

public class NatDecimal implements Nat, FabriqueNaturels<Nat> {
	
	public static FabriqueNaturels<Nat> FAB = new NatDecimal(Integer.toString(0));
	private String chiffres;
	
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
		return this.chiffres;
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
	  int t = this.taille() < x.taille() ? this.taille() : x.taille();
	  StringBuilder rep = new StringBuilder();
	  int retenue = 0;
	  for(int i = 0; i < t; i++){
	    int chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
	    if(chiffre > 9){
	      chiffre = chiffre - 10;
	      retenue = 1;
	    }else{
	      retenue = 0;
	    }
	    rep.append(Integer.toString(chiffre));
	  }
	  rep = retenue == 0 ? rep : rep.append(1);
	  return new NatDecimal(rep.reverse().toString());
	  //return creerNatAvecRepresentation(rep.reverse().toString());
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
