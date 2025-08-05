---
layout: default
title: Home
description: Convert straight quotes to elegant curved quotation marks with our smart punctuation converter
---

<div class="hero-section">
    <div class="container">
        <div class="quote-examples">
            <strong>Example conversions:</strong> 
            "straight quotes" → &#8220;curved quotes&#8221; |
            'single quotes' → &#8216;curved singles&#8217; |
            don't → don&#8217;t |
            it's → it&#8217;s
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
