// Fungsi untuk menghitung barisan A000124
function generateA000124(input) {
    let result = [];
    for (let n = 1; n <= input; n++) {
        // Rumus A000124
        let value = (n * (n + 1)) / 2 - n + 1;
        result.push(value);
    }
    return result.join("-");
}

// Meminta input dari pengguna
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menanyakan jumlah elemen dari pengguna
rl.question("Masukkan jumlah elemen: ", (input) => {
    input = parseInt(input); // Konversi input ke angka
    if (!isNaN(input) && input > 0) {
        // Menampilkan hasil
        console.log("Output: " + generateA000124(input));
    } else {
        console.log("Input tidak valid. Harus berupa angka positif.");
    }
    rl.close();
});
