const express = require('express');
const cors = require('cors');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const CSV_PATH = path.join(__dirname, 'contacts.csv');

// Setup CSV writer, appending to file, with headers defined
const csvWriter = createCsvWriter({
  path: CSV_PATH,
  header: [
    { id: 'name', title: 'Name' },
    { id: 'email', title: 'Email' },
    { id: 'message', title: 'Message' },
    { id: 'date', title: 'Date' }
  ],
  append: true
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Write a new record
    await csvWriter.writeRecords([
      { name, email, message, date: new Date().toISOString() }
    ]);

    console.log('✅ Data saved to CSV:', { name, email, message });

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving to CSV:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
