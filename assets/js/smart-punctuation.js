// Smart Punctuation Converter JavaScript
// Client-side implementation for Jekyll/GitHub Pages

(function () {
  'use strict';

  // Smart punctuation conversion function
  function smartenPunctuation(text) {
    let result = text;

    // Handle double quotes
    // Opening double quote: at start of line, after whitespace, or after opening punctuation
    result = result.replace(/(^|[\s\(\[\{])"/g, '$1"');
    // Closing double quote: everything else
    result = result.replace(/"/g, '"');

    // Handle single quotes/apostrophes
    // Apostrophes in contractions (letter + ' + letter)
    result = result.replace(/([a-zA-Z])'([a-zA-Z])/g, '$1'$2');
        // Opening single quote: at start of line, after whitespace, or after opening punctuation
        result = result.replace(/(^|[\s\(\[\{])'/g, '$1'');
        // Closing single quote: everything else
        result = result.replace(/'/g, ''');

        // Fix common patterns that might have been incorrectly converted
        // Possessives at end of words ending in 's'
        result = result.replace(/([a-zA-Z]s)'(\s|$|[^\w])/g, '$1'$2');
        // Years like '90s
        result = result.replace(/(\s|^)'(\d)/g, '$1'$2');
        
        return result;
  }

  // Utility functions
  function updateStats(original, converted) {
    const statsElement = document.getElementById('stats');
    if (!statsElement) return;

    const originalLength = original.length;
    const changes = countChanges(original, converted);

    if (originalLength > 0) {
      statsElement.textContent = `Processed ${originalLength} characters • ${changes} quote${changes !== 1 ? 's' : ''} converted`;
    } else {
      statsElement.textContent = '';
    }
  }

  function countChanges(original, converted) {
    const straightQuotes = /['"]/g;
    const originalMatches = (original.match(straightQuotes) || []).length;
    const convertedMatches = (converted.match(straightQuotes) || []).length;
    return originalMatches - convertedMatches;
  }

  function processText() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const smartenButton = document.getElementById('smartenButton');

    if (!inputText || !outputText || !smartenButton) return;

    const text = inputText.value;

    if (!text.trim()) {
      outputText.value = '';
      updateStats('', '');
      return;
    }

    smartenButton.disabled = true;
    smartenButton.textContent = 'Processing...';

    // Simulate brief processing delay for better UX
    setTimeout(() => {
      try {
        const result = smartenPunctuation(text);
        outputText.value = result;
        updateStats(text, result);

        // Auto-select output text for easy copying
        outputText.select();

        // Show success feedback
        showFeedback('Conversion complete!', 'success');

      } catch (error) {
        console.error('Error:', error);
        outputText.value = 'Error processing text. Please try again.';
        showFeedback('Error processing text', 'error');
      } finally {
        smartenButton.disabled = false;
        smartenButton.textContent = 'Smarten Punctuation';
      }
    }, 150);
  }

  function showFeedback(message, type) {
    // Create feedback element if it doesn't exist
    let feedback = document.getElementById('feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.id = 'feedback';
      feedback.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 6px;
                color: white;
                font-weight: 500;
                z-index: 1000;
                transition: all 0.3s ease;
                transform: translateX(100%);
            `;
      document.body.appendChild(feedback);
    }

    // Set colors based on type
    feedback.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
    feedback.textContent = message;
    feedback.style.transform = 'translateX(0)';

    // Hide after 3 seconds
    setTimeout(() => {
      feedback.style.transform = 'translateX(100%)';
    }, 3000);
  }

  function loadExampleText() {
    const inputText = document.getElementById('inputText');
    const statsElement = document.getElementById('stats');

    if (!inputText) return;

    const exampleText = `His territory—formerly Peter's—wasn't vast. Just a modest stretch of blocks wedged between Henry's zone and the outer edge of Dino's reach.

"Hello," he said. 'How are you today?'

She replied, "I'm doing well, thanks for asking!"`;

    inputText.value = exampleText;

    if (statsElement) {
      const length = inputText.value.length;
      statsElement.textContent = `${length} characters • Press button to convert`;
    }
  }

  function initializeApp() {
    const inputText = document.getElementById('inputText');
    const smartenButton = document.getElementById('smartenButton');
    const statsElement = document.getElementById('stats');

    if (!inputText || !smartenButton) return;

    // Event listeners
    smartenButton.addEventListener('click', processText);

    // Allow Enter+Ctrl/Cmd to trigger conversion
    inputText.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        processText();
      }
    });

    // Real-time character count
    inputText.addEventListener('input', () => {
      const outputText = document.getElementById('outputText');
      const length = inputText.value.length;

      if (statsElement) {
        if (length > 0 && (!outputText || !outputText.value)) {
          statsElement.textContent = `${length} characters • Press button to convert`;
        } else if (length === 0) {
          statsElement.textContent = '';
          if (outputText) outputText.value = '';
        }
      }
    });

    // Load example text on page load
    loadExampleText();

    console.log('Smart Punctuation Converter initialized');
  }

  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }

  // Expose functions globally for debugging
  window.smartPunctuation = {
    convert: smartenPunctuation,
    process: processText,
    loadExample: loadExampleText
  };

})();