fn main() {
    println!("Hello, world!");
    fn count_vowels(input_string: &str) -> usize {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let mut vowel_count = 0;
    
        // Iterate through each character in the input string
        for ch in input_string.chars() {
            // Check if the current character is a vowel
            if vowels.contains(&ch) {
                vowel_count += 1; // Increment the count if it's a vowel
            }
        }
    
        vowel_count // Return the total count of vowels
    }
    
    fn main() {
        let input_text = "This is a sample string with vowels.";
        let total_vowels = count_vowels(input_text);
        println!("Total vowels in the string: {}", total_vowels);
    }
}
