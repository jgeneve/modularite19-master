package session1.td;

public class Test {

	public static void main(String[] args) {
		System.out.println("------------- Launch of the tests for NatParInt -------------");
		test(NatParInt.FAB);		
		System.out.println("------------- Launch of the tests for NatDecimal -------------");
		test(NatDecimal.FAB);
		System.out.println("------------- Launch of the tests for Zero -------------");
		test(Zero.FAB);
		System.out.println("------------- Launch of the tests for Succ -------------");
		test(Succ.FAB);
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
		System.out.println("Predecessor ? " + five.predecesseur().val());
		Nat six = fab.creerNatAvecValeur(6);
		System.out.println(six);
		System.out.println("Sum 5+6 ? " +five.somme(six).val());
		System.out.println("Multiplication 5x6 ? " +five.produit(six).val());
		Nat x = fab.creerNatAvecValeur(33);
		System.out.println("Div 33/6 ? Quotient: " + x.div(six).val() + " - Rest: "+ x.modulo(six).val());
		
		try {
			Nat z = fab.creerNatAvecValeur(2000000000);
			Nat sum = z.somme(z);
			System.out.println(z.val() +"x"+ z.val() +" ? " + z.somme(z));
		} catch(Exception e ) {
			e.printStackTrace();
		}
	}

}
