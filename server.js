// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Add CORS headers for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Smart punctuation conversion function
function smartenPunctuation(text) {
    // Replace straight quotes with smart quotes
    let result = text;
    
    // Handle double quotes
    // Opening double quote: at start of line, after whitespace, or after opening punctuation
    result = result.replace(/(^|[\s\(\[\{])"/g, '$1\u201C');
    // Closing double quote: everything else
    result = result.replace(/"/g, '\u201D');
    
    // Handle single quotes/apostrophes
    // Apostrophes in contractions (letter + ' + letter)
    result = result.replace(/([a-zA-Z])'([a-zA-Z])/g, '$1\u2019$2');
    // Opening single quote: at start of line, after whitespace, or after opening punctuation
    result = result.replace(/(^|[\s\(\[\{])'/g, '$1\u2018');
    // Closing single quote: everything else
    result = result.replace(/'/g, '\u2019');
    
    // Fix common patterns that might have been incorrectly converted
    // Possessives at end of words ending in 's'
    result = result.replace(/([a-zA-Z]s)\u2019(\s|$|[^\w])/g, '$1\u2019$2');
    // Years like '90s
    result = result.replace(/(\s|^)\u2018(\d)/g, '$1\u2019$2');
    
    return result;
}

// API endpoint for punctuation conversion
app.post('/api/smarten', (req, res) => {
    try {
        console.log('Received request:', req.body);
        
        if (!req.body || typeof req.body.text !== 'string') {
            return res.status(400).json({ 
                error: 'Invalid request. Expected { text: string }' 
            });
        }

        const { text } = req.body;
        const smartened = smartenPunctuation(text);
        
        console.log('Conversion successful');
        res.json({ result: smartened });
        
    } catch (error) {
        console.error('Error in /api/smarten:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Smart Punctuation server running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('Received SIGTERM, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('Received SIGINT, shutting down gracefully');
    process.exit(0);
});