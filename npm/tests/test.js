// Load the mLearning module
const mLearning = require('../src/index');

// Test the functionality of the waves method
mLearning.method.waves.frequency = 10;
console.log("Testing Waves Frequency: " + mLearning.method.waves.frequency); // Output: 10

// Test the functionality of the lastUsed utility
const methodRecord = mLearning.utils.lastUsed.createRecord('methodRecords');
console.log('Created record:', methodRecord);
console.log('All tests completed.');
