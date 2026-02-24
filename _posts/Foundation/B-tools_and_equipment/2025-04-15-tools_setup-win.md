---
toc: true
layout: post
date: 2026-02-23
title: Homework Summation! All the Links!
---

[Strings](https://daniellv-git.github.io/student/js/strings)

[Booleans](https://daniellv-git.github.io/student/js/booleans)

[JSON](https://daniellv-git.github.io/student/js/json)

[Data Abstraction](https://daniellv-git.github.io/student/js/dataabstraction)

[Arrays](https://daniellv-git.github.io/student/js/arrays)

[Nested Conditionals](https://daniellv-git.github.io/student/2026/01/12/nested-conditionals_IPYNB_2_.html)

[Math](https://daniellv-git.github.io/student/js/math)

<style>
  textarea { width: 100%; height: 200px; }
  button { margin-top: 10px; padding: 8px 16px; font-size: 14px; cursor: pointer; }
</style>

<h2>Code Runner</h2>
<p>Type your JavaScript code below and hit Run!</p>

<textarea id="code">
// Write your code here!
console.log("Hello World!");
</textarea>
<br>
<button id="run-button">Run Code</button>
<h3>Output:</h3>
<div id="output"></div>

<script>
  document.getElementById('run-button').addEventListener('click', function() {
    const code = document.getElementById('code').value;
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = '';
    
    const originalLog = console.log;
    let outputText = '';
    console.log = function(...args) {
      outputText += args.join(' ') + '\n';
      outputDiv.textContent = outputText;
    };
    
    try {
      eval(code);
    } catch (err) {
      outputDiv.textContent = 'Error: ' + err.message;
    }
    
    console.log = originalLog;
  });
</script>