[💻Demo](https://ramasas.github.io/smart-punctuation/)

# Smart Punctuation Converter

A web application that converts straight quotes to elegant curved quotation marks, inspired by Calibre eBook's "Smarten Punctuation" feature.

![Node.js](https://img.shields.io/badge/node.js-v14+-blue) ![License](https://img.shields.io/badge/license-GPL-green)

## Features

- **Smart Quote Conversion**: Transform straight quotes `"` to elegant curved quotes `""`
- **Apostrophe Handling**: Convert straight apostrophes `'` to proper curved quotes `''`
- **Context-Aware**: Intelligently distinguishes between opening and closing quotes
- **Contraction Support**: Properly handles contractions (don't → don't, it's → it's)
- **Real-time Processing**: Instant conversion with live statistics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Copy-Friendly**: Auto-selects output text for easy copying

## Quick Start

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ramasas/smart-punctuation.git
   cd smart-punctuation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Development Mode
For development with auto-reload:
```bash
npm run dev
```

## Project Structure

```
smart-punctuation/
├── server.js          # Express.js server with conversion logic
├── package.json       # Dependencies and scripts
├── public/
│   └── index.html     # Frontend interface with styling
├── README.md          # Project documentation
└── .gitignore         # Git ignore file
```

## Technical Details

### Conversion Rules

The smart punctuation algorithm follows these rules:

1. **Double Quotes (`"`):**
   - Opening: After whitespace, start of line, or opening punctuation → `"`
   - Closing: All other cases → `"`

2. **Single Quotes (`'`):**
   - Contractions: Between letters (don't, can't) → `'`
   - Opening: After whitespace, start of line, or opening punctuation → `'`
   - Closing: All other cases → `'`

3. **Special Cases:**
   - Possessives ending in 's' → `'`
   - Years like '90s → `'`

### Tech Stack

- **Backend:** Node.js + Express.js
- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript
- **Styling:** Modern CSS with gradients, animations, and responsive design
- **API:** RESTful endpoint for text conversion

### API Endpoint

```javascript
POST /api/smarten
Content-Type: application/json

{
  "text": "Your text with 'straight quotes' to convert."
}

// Response
{
  "result": "Your text with 'curved quotes' converted."
}
```

## Features in Detail

### User Interface
- **Dual Textarea Layout**: Side-by-side input and output areas
- **Smart Button**: Large, prominent conversion trigger
- **Live Statistics**: Character count and conversion metrics
- **Responsive Design**: Adapts to mobile and desktop screens
- **Modern Styling**: Gradient backgrounds and smooth animations

### Conversion Features
- **Batch Processing**: Handle large texts efficiently
- **Preserves Formatting**: Maintains line breaks and spacing
- **Error Handling**: Graceful failure with helpful messages
- **Performance**: Fast conversion even for long documents

## Usage Examples

### Basic Text Conversion
```
Input:  "Hello," he said. 'How are you?'
Output: "Hello," he said. 'How are you?'
```

### Contractions and Possessives
```
Input:  It's John's car from the '90s.
Output: It's John's car from the '90s.
```

### Mixed Quotes in Literature
```
Input:  She whispered, "He said 'never' to me."
Output: She whispered, "He said 'never' to me."
```

## Deployment

### Local Development
```bash
npm start
# Server runs on http://localhost:3000
```
## License

This project is licensed under the GPL License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by **Calibre eBook Management** software's "Smarten Punctuation" feature
