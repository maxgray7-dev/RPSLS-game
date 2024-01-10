//Global variables
const openRules = document.getElementById('open-rules-btn');
const rules = document.getElementById('rules-container');
const close = document.getElementById('close');

openRules.onclick = function () {
    rules.style.display = "block";
};
close.onclick = function () {
    rules.style.display = "none";
};
