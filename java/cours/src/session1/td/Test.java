package session1.td;

public class Test {

	public static void main(String[] args) {
		System.out.println("Tests NatParInt");
		test(NatParInt.FAB);		
		System.out.println("\nTests NatDecimal");
		test(NatDecimal.FAB);
		System.out.println("\nTests Zero");
		test(Zero.FAB);
		System.out.println("\nTests Succ");
		test(Succ.FAB);
	}
	
	private static void test(FabriqueNaturels<Nat> fab) {		
		Nat zero = fab.creerZero();
		System.out.println("0 ? "+zero);
		System.out.println("0 == 0 - true ? " + zero.equals(zero.zero()));
		Nat un = fab.creerSuccesseur(zero);
		System.out.println("Successeur de 0 - 1 ? " + un);
		System.out.println("1 == 1 - true ? " + un.equals(un.un()));
		System.out.println("Predecesseur de 1 - 0 ? " + un.predecesseur());
		Nat five = fab.creerNatAvecValeur(5);
		System.out.println("5 ? " + five);
		System.out.println("Predecesseur de 5 - 4 ? " + five.predecesseur());
		Nat six = fab.creerNatAvecValeur(6);
		System.out.println("6 ? " + six);
		System.out.println("Somme 5 + 6 - 11 ? " +five.somme(six));
		System.out.println("Produit 5 x 6 - 30 ? " + five.produit(six));
		Nat x = fab.creerNatAvecValeur(33);
		System.out.println("Division 33 / 6 Quotient - 5  ? " + x.div(six) + " | - Reste : 3 ? "+ x.modulo(six));
		
		
		try {
			Nat z = fab.creerNatAvecValeur(2000000000);
			System.out.println(z.val() +"x"+ z.val() +" ? " + z.somme(z));
		} catch(Exception e ) {
		}
	}

}
