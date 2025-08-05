---
layout: default
title: Home
description: Convert straight quotes to elegant curved quotation marks with our smart punctuation converter
---

<div class="hero-section">
    <div class="container">
        <h1 class="hero-title">{{ site.app.name }}</h1>
        <p class="hero-subtitle">{{ site.app.description }}</p>
        
        <div class="quote-examples">
            <strong>Example conversions:</strong> 
            "straight quotes" → "curved quotes" | 
            'single quotes' → 'curved singles' | 
            don't → don't | 
            it's → it's
        </div>
    </div>
</div>

<div class="app-container">
    <div class="converter-section">
        <div class="textarea-container">
            <div class="textarea-header input-header">
                📝 Input Text
            </div>
            <textarea 
                id="inputText" 
                placeholder="Paste or type your text with mixed quotation marks here...

Example:
He said, 'I don't think &quot;smart quotes&quot; are being used properly in this text.' She replied, 'You're right! Let's fix that.'"
            ></textarea>
        </div>

        <div class="textarea-container">
            <div class="textarea-header output-header">
                ✨ Smartened Output
            </div>
            <textarea 
                id="outputText" 
                placeholder="Your converted text with smart quotes will appear here..."
                readonly
            ></textarea>
        </div>
    </div>

    <div class="button-container">
        <button id="smartenButton" class="smarten-btn">
            Smarten Punctuation
        </button>
        <div class="stats" id="stats"></div>
    </div>
</div>

<div class="features-section">
    <div class="container">
        <h2>Features</h2>
        <div class="features-grid">
            <div class="feature">
                <h3>🎯 Context-Aware</h3>
                <p>Intelligently distinguishes between opening and closing quotes based on context.</p>
            </div>
            <div class="feature">
                <h3>📱 Responsive Design</h3>
                <p>Works seamlessly on desktop, tablet, and mobile devices.</p>
            </div>
            <div class="feature">
                <h3>⚡ Instant Processing</h3>
                <p>Real-time conversion with live statistics and character count.</p>
            </div>
            <div class="feature">
                <h3>📋 Copy-Friendly</h3>
                <p>Auto-selects output text for easy copying to clipboard.</p>
            </div>
        </div>
    </div>
</div>