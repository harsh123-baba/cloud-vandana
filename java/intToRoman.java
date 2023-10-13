import java.util.HashMap;
import java.util.Map;

public class romToInt {
    public static int romanToInt(String s) {
        
        Map<Character, Integer> romToInt = new HashMap<>();
        romToInt.put('I', 1);
        romToInt.put('V', 5);
        romToInt.put('X', 10);
        romToInt.put('L', 50);
        romToInt.put('C', 100);
        romToInt.put('D', 500);
        romToInt.put('M', 1000);

        int result = 0;
        int prev = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int val = romToInt.get(s.charAt(i));

            if (val < prev) {
                result -= val;
            } else {
                result += val;
            }

            prev = val;
        }

        return result;
    }

    public static void main(String[] args) {
        String romanNum = "IX"; // Change this to the Roman numeral you want to convert
        int inteq = romanToInt(romanNum);
        System.out.println("Integer equivalent of " + romanNum + " is: " + inteq);
    }
}