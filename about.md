---
layout: default
title: About
description: Learn about the Smart Punctuation Converter and how it works
---

<div class="container">
    <div class="content-page">
        <h1>About Smart Punctuation Converter</h1>
        
        <div class="intro-section">
            <p class="lead">
                The Smart Punctuation Converter transforms straight quotes into elegant curved quotation marks, 
                bringing professional typography to your writing with just one click.
            </p>
        </div>

        <h2>How It Works</h2>
        
        <p>Our algorithm intelligently analyzes the context around each quote mark to determine whether it should be an opening or closing quote:</p>

        <div class="conversion-rules">
            <h3>Double Quotes (<code>"</code>)</h3>
            <ul>
                <li><strong>Opening quotes</strong> (<code>"</code>): After whitespace, start of line, or opening punctuation</li>
                <li><strong>Closing quotes</strong> (<code>"</code>): All other cases</li>
            </ul>

            <h3>Single Quotes (<code>'</code>)</h3>
            <ul>
                <li><strong>Apostrophes</strong> (<code>'</code>): In contractions like "don't", "can't", "it's"</li>
                <li><strong>Opening quotes</strong> (<code>'</code>): After whitespace, start of line, or opening punctuation</li>
                <li><strong>Closing quotes</strong> (<code>'</code>): All other cases</li>
            </ul>

            <h3>Special Cases</h3>
            <ul>
                <li>Possessives ending in 's' (like "James' car") use the correct apostrophe</li>
                <li>Years like "'90s" use the proper opening quote</li>
            </ul>
        </div>

        <h2>Why Smart Quotes Matter</h2>
        
        <p>Smart quotes (also called curly quotes) are the hallmark of professional typography:</p>
        
        <ul>
            <li><strong>Visual Appeal</strong>: Curved quotes look more elegant than straight quotes</li>
            <li><strong>Readability</strong>: Proper opening and closing quotes guide the reader's eye</li>
            <li><strong>Professional Publishing</strong>: Books, magazines, and quality websites use smart quotes</li>
            <li><strong>Typographic Standards</strong>: Follow established conventions in typography</li>
        </ul>

        <h2>Inspiration</h2>
        
        <p>
            This tool was inspired by the "Smarten Punctuation" feature in 
            <a href="https://calibre-ebook.com/" target="_blank">Calibre eBook Management</a> software. 
            Calibre is an excellent tool for managing and converting eBooks, and its punctuation 
            smartening feature helps create professionally formatted digital books.
        </p>

        <h2>Examples</h2>

        <div class="examples-grid">
            <div class="example">
                <h4>Basic Quotes</h4>
                <div class="before-after">
                    <div>Before: <code>"Hello world"</code></div>
                    <div>After: <code>&#8220;Hello world&#8221;</code></div>
                </div>
            </div>

            <div class="example">
                <h4>Contractions</h4>
                <div class="before-after">
                    <div>Before: <code>don't, can't, it's</code></div>
                    <div>After: <code>don&#8217;t, can&#8217;t, it&#8217;s</code></div>
                </div>
            </div>

            <div class="example">
                <h4>Nested Quotes</h4>
                <div class="before-after">
                    <div>Before: <code>He said, 'She told me "hello" yesterday.'</code></div>
                    <div>After: <code>He said, &#8216;She told me &#8220;hello&#8221; yesterday.&#8217;</code></div>
                </div>
            </div>

            <div class="example">
                <h4>Possessives</h4>
                <div class="before-after">
                    <div>Before: <code>James' car, the dogs' toys</code></div>
                    <div>After: <code>James&#8217; car, the dogs&#8217; toys</code></div>
                </div>
            </div>
        </div>

        <h2>Technical Details</h2>
        
        <p>The Smart Punctuation Converter is built with:</p>
        
        <ul>
            <li><strong>Jekyll</strong>: Static site generator for GitHub Pages</li>
            <li><strong>JavaScript</strong>: Client-side processing for instant results</li>
            <li><strong>Regular Expressions</strong>: Pattern matching for context-aware conversion</li>
            <li><strong>Responsive Design</strong>: Works on desktop, tablet, and mobile devices</li>
        </ul>

        <h2>Open Source</h2>
        
        <p>
            This project is open source and available on 
            <a href="https://github.com/{{ site.github_username }}/smart-punctuation" target="_blank">GitHub</a>. 
            Contributions, bug reports, and feature requests are welcome!
        </p>

        <div class="cta-section">
            <a href="{{ '/' | relative_url }}" class="cta-button">Try the Converter</a>
            <a href="https://github.com/{{ site.github_username }}/smart-punctuation" target="_blank" class="cta-button secondary">View Source Code</a>
        </div>
    </div>
</div>

<style>
.content-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
}

.intro-section {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    margin: 2rem 0;
    border-left: 4px solid #667eea;
}

.lead {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #495057;
    margin: 0;
}

.conversion-rules {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 2rem 0;
}

.conversion-rules h3 {
    color: #2c3e50;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}

.conversion-rules h3:first-child {
    margin-top: 0;
}

.conversion-rules ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
}

.conversion-rules li {
    margin-bottom: 0.5rem;
}

.examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.example {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.example h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.before-after div {
    padding: 0.5rem 0;
    font-family: 'Courier New', Monaco, monospace;
    font-size: 0.9rem;
}

.before-after div:first-child {
    color: #dc3545;
}

.before-after div:last-child {
    color: #28a745;
    border-top: 1px solid #eee;
    margin-top: 0.5rem;
    padding-top: 1rem;
}

.cta-section {
    text-align: center;
    margin: 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    color: white;
}

.cta-button {
    display: inline-block;
    background: white;
    color: #2c3e50;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    margin: 0 0.5rem;
    transition: all 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    color: #2c3e50;
    text-decoration: none;
}

.cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.cta-button.secondary:hover {
    background: white;
    color: #2c3e50;
}

code {
    background: #f1f3f4;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', Monaco, monospace;
    font-size: 0.9em;
}

@media (max-width: 768px) {
    .examples-grid {
        grid-template-columns: 1fr;
    }
    
    .cta-button {
        display: block;
        margin: 0.5rem 0;
    }
}
    