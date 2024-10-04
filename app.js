const express = require('express');
const app = express();
const schema = require('./schema');

// Mock database (replace with actual data fetching in a real implementation)
const dublinBikesData = require('./dublinBikesData.json');

app.use(express.json());

// GET: /schema
app.get('/schema', (req, res) => {
  res.json(schema);
});

// POST: /data
app.post('/data', (req, res) => {
  let filteredData = dublinBikesData;

  if (req.body.where) {
    filteredData = filteredData.filter(item => {
      return Object.entries(req.body.where).every(([field, condition]) => {
        const [operator, value] = Object.entries(condition)[0];
        const itemValue = item[field];
        
        switch (operator) {
          case 'eq': return itemValue === value;
          case 'lt': return itemValue < value;
          case 'gt': return itemValue > value;
          default: return true;
        }
      });
    });
  }

  // Convert field names to camelCase
  const camelCaseData = filteredData.map(item => {
    const newItem = {};
    Object.entries(item).forEach(([key, value]) => {
      const schemaField = schema.find(field => field.display === key);
      if (schemaField) {
        newItem[schemaField.name] = value;
      }
    });
    return newItem;
  });

  res.json(camelCaseData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});