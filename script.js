console.clear();
console.log("✅ script.js connected");

const nameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById("pw2");
const btn = document.getElementById("btnCalc");
const outputBox = document.getElementById("outputBox");

btn.addEventListener("click", function () {
    calculateMarks();
});

function calculateMarks() {
    let name = nameInput.ariaValue;
    let pw1 = Number(pw1Input.value);
    let pw2 = Number(pw2Input.value);

    console.log("Name:", name);
    console.log("PW1:", pw1);
    console.log("PW2:", pw2);


let total = pw1 + pw2;
let average = total / 2;
let percentage = (total / 200) * 100;

console.log("Total:", total);
console.log("Average:", average);
console.log("Percentage:", percentage);

let grade;

if (average >= 80) {
    grade = "Excellent";
} else if (average >= 60) {
    grade = "Good";
} else if (average >= 40) {
    grade = "Satisfactory";
} else {
    grade = "Fail";
}

outputBox.className = "alert alert-success mt-3 mb-0";
outputBox.innerHTML = `
        <h4>Result Summary</h4>
        <p>Name: ${name}</p>
        <p>PW1: ${pw1}/100</p>
        <p>PW2: ${pw2}/100</p>
        <p>Total: ${total}/200</p>
        <p>Average: ${average.toFixed(2)}/100</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
    `;

console.log("Total:", total);
console.log("Average:", average);
console.log("Percentage:", percentage);
console.log("Grade:", grade);
}

