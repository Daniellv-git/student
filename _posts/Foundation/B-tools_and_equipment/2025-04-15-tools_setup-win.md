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

## What I Learned

Throughout these assignments I learned a lot about JavaScript on OpenCoding Society!

**Strings** are used to store and work with text in JavaScript.

**Booleans** are true or false values, useful for making decisions in code.

**JSON** is a way to store and organize data that is easy to read and use.

**Data Abstraction** is about simplifying complex code by breaking it into smaller pieces.

**Arrays** let you store multiple values in one variable instead of making a bunch of separate ones.

**Nested Conditionals** are if statements inside other if statements, used to check multiple conditions.

**Math** covered how to use operators like +, -, *, /, and % to do calculations in JavaScript.

Each assignment helped me get better at writing and understanding code!

On February 12th, 2026, I had the opportunity to attend Night at the Museum! Together with my classmates from CSSE Period 1, we showcased our game project, Murder Mystery, which is still being developed. 
Here is a picture of us ![My Image]({{site.baseurl}}/images/IMG_0469.jpg)

Some of my achievements include the [lesson I made](https://pages.opencodingsociety.com/js/variables/)
I also had a really fun time working on the [Connect 4 game](https://rashig-1804.github.io/csse_teamrepo/connect4/)

<a href="https://daniellv-git.github.io/student/achievments" target="_blank">
  <button>Click Me</button>
</a>