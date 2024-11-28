// Fungsi untuk menghitung Dense Ranking
function denseRanking(playerScores, gitsScores) {
    // Hapus skor duplikat dan urutkan skor secara menurun
    let uniqueScores = [...new Set(playerScores)].sort((a, b) => b - a);
    
    // Menyimpan hasil ranking untuk skor GITS
    let results = [];
    
    // Menentukan ranking untuk setiap skor GITS
    for (let score of gitsScores) {
        let rank = 1;
        
        // Mencari peringkat berdasarkan skor
        for (let playerScore of uniqueScores) {
            if (score < playerScore) {
                rank++;
            } else {
                break;
            }
        }
        
        // Menambahkan hasil peringkat ke dalam array results
        results.push(rank);
    }

    return results;
}

// Contoh penggunaan
const playerScores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];

// Menampilkan hasil ranking untuk GITS
const rankings = denseRanking(playerScores, gitsScores);
console.log(rankings.join(' '));
