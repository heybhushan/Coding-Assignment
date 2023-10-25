//Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it. 
import java.util.*;

public class A {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7};
        shuffle(numbers);

        for (int number : numbers) {
            System.out.print(number + " ");
        }
    }

    public static void shuffle(int[] array) {
        int length = array.length;
        Random random = new Random();

        for (int i = length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
