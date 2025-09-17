const HEBREW_MAPPINGS = {
    'א': 1,
    'ב': 2,
    'ג': 3,
    'ד': 4,
    'ה': 5,
    'ו': 6,
    'ז': 7,
    'ח': 8,
    'ט': 9,
    'י': 10,
    'כ': 20,
    'ל': 30,
    'מ': 40,
    'נ': 50,
    'ס': 60,
    'ע': 70,
    'פ': 80,
    'צ': 90,
    'ק': 100,
    'ר': 200,
    'ש': 300,
    'ת': 400,
    // Final forms of some letters have different values:
    'ך': 500, // final kaf
    'ם': 600, // final mem
    'ן': 700, // final nun
    'ף': 800, // final pe
    'ץ': 900  // final tsade
};

function computeGematria(word) {
    return word.split('').reduce((sum, letter) => sum + (HEBREW_MAPPINGS[letter] || 0), 0);
}



module.exports = {
    computeGematria,
};