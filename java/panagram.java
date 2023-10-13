import java.util.HashSet;

public class PangramChecker {
    public static boolean isPangram(String input) {

        input = input.replaceAll(" ", "").toLowerCase();

        HashSet<Character> chars = new HashSet<>();

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (Character.isLetter(ch)) {
                chars.add(ch);
            }
        }
        return chars.size() == 26;
    }

    public static void main(String[] args) {
        String inp = "The quick brown fox jumps over the lazy dog";
    
        if (isPangram(inp)) {
            System.out.println("pangram.");
        } else {
            System.out.println("not a pangram.");
        }
    }
}