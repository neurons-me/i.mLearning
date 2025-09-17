// Create a cache object to store the last used records
const cache = {};

// Function to create a record for a given category
const createRecord = (category) => {
  const record = {
    category,
    lastUsed: new Date(),
  };

  cache[category] = record;
  return record;
};

// Function to get the last used record for a given category
const getLastUsedRecord = (category) => {
  return cache[category];
};

module.exports = {
  createRecord,
  getLastUsedRecord,
};
