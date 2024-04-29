import java.util.Scanner;

public class CalculadoraDescuentos {
    public static void main(String[] args) {
        // Definir los rangos y porcentajes de descuento
        double[][] rangosDescuento = {
            {0, 2, 0},
            {2.01, 5, 10},
            {5.01, 10, 15},
            {10.01, Double.MAX_VALUE, 20}
        };

        // Solicitar al usuario la cantidad de kilos de manzanas comprados
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese la cantidad de kilos de manzanas comprados: ");
        double kilosComprados = scanner.nextDouble();
        scanner.close();

        // Calcular el descuento
        double descuento = calcularDescuento(kilosComprados, rangosDescuento);

        // Imprimir el descuento
        System.out.println("El descuento aplicado es: " + descuento + "%");
    }

    public static double calcularDescuento(double kilosComprados, double[][] rangosDescuento) {
        // Iterar sobre los rangos de descuento
        for (double[] rango : rangosDescuento) {
            double min = rango[0];
            double max = rango[1];
            double porcentajeDescuento = rango[2];

            // Verificar si la cantidad de kilos comprados está dentro del rango actual
            if (kilosComprados >= min && kilosComprados <= max) {
                return porcentajeDescuento;
            }
        }

        return 0; // Si no se encuentra un rango, no hay descuento
    }
}
