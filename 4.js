<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Regular Expressions</h2>

<p>The ignoreCase property returns true if the "i" modifier is set, otherwise false:</p>

<p id="demo"></p>

<script>
let text = "Visit W3Schools!";
let pattern = /W3S/i;
let result = pattern.ignoreCase;
document.getElementById("demo").innerHTML = result;
