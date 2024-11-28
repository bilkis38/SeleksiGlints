function isBalanced(input) {
    // Inisialisasi stack
    let stack = [];
    
    // Iterasi karakter pada input
    for (let char of input) {
        // Jika karakter adalah bracket buka
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // Jika karakter adalah bracket tutup
        else if (char === ')' || char === '}' || char === ']') {
            // Jika stack kosong, tidak ada bracket buka yang sesuai
            if (stack.length === 0) {
                return 'NO';
            }
            // Ambil bracket buka dari stack dan periksa kecocokannya
            let openBracket = stack.pop();
            if (!isMatchingPair(openBracket, char)) {
                return 'NO';
            }
        }
    }
    
    // Jika stack kosong, berarti semua bracket seimbang
    return stack.length === 0 ? 'YES' : 'NO';
}

// Fungsi untuk memeriksa apakah pasangan bracket cocok
function isMatchingPair(openBracket, closeBracket) {
    return (openBracket === '(' && closeBracket === ')') ||
           (openBracket === '{' && closeBracket === '}') ||
           (openBracket === '[' && closeBracket === ']');
}

// Contoh penggunaan
console.log(isBalanced("{[()]}"));  // Output: YES
console.log(isBalanced("{[(])}"));  // Output: NO
console.log(isBalanced("{(([])[[]])[]}"));  // Output: YES
