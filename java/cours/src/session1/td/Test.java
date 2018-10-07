package session1.td;

public class Test {

	public static void main(String[] args) {
		System.out.println("------------- Launch of the tests for NatParInt -------------");
		test(NatParInt.FAB);		
		System.out.println("------------- Launch of the tests for NatDecimal -------------");
		test(NatDecimal.FAB);
		System.out.println("------------- Launch of the tests for Zero -------------");
		test(Zero.FAB);
		//System.out.println("------------- Launch of the tests for Succ -------------");
		//test(Succ.FAB);
	}
	
	private static void test(FabriqueNaturels<Nat> fab) {		
		System.out.println("> Test zero ");
		Nat zero = fab.creerZero();
		System.out.println(zero);
		System.out.println("0 equals 0 ? " + zero.equals(zero.zero()));

		System.out.println("> Test un ");
		Nat un = fab.creerSuccesseur(zero);
		System.out.println("Successor zero ? " + un.val());
		System.out.println(un);
		System.out.println("1 equals 1 ? " + un.equals(un.un()));
		System.out.println("Predecessor 1 ? " + un.predecesseur().val());
		
		System.out.println("> Test five");
		Nat five = fab.creerNatAvecValeur(5);
		System.out.println(five);
		Nat six = fab.creerNatAvecValeur(6);
		System.out.println(six);
		System.out.println("Sum 5+6 ? " +five.somme(six).val());
		System.out.println("Sum 5x6 ? " +five.produit(six).val());
		Nat x = fab.creerNatAvecValeur(33);
		Nat y = fab.creerNatAvecValeur(6);
		System.out.println("Div 33/6 ? Quotient: " + x.div(y).val() + " - Rest: "+ x.modulo(y).val());
		try {
			Nat z = fab.creerNatAvecValeur(2_000_000_000);
			System.out.println(z.val() * z.val() +" ? " + z.somme(z).val());
		} catch(Exception e ) {
			e.printStackTrace();
		}
	}

}
