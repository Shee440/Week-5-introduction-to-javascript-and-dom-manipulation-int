// Part 1: JavaScript Basics - Variables, conditionals, and user input

/**
 * Checks the age entered by the user and provides a message based on the age
 */
function checkAge() {
    const age = parseInt(document.getElementById('userAge').value);
    let message;
    
    // Using conditionals to make decisions
    if (isNaN(age)) {
        message = "Please enter a valid age.";
    } else if (age < 0) {
        message = "Age cannot be negative.";
    } else if (age < 13) {
        message = "You are a child.";
    } else if (age < 18) {
        message = "You are a teenager.";
    } else if (age < 65) {
        message = "You are an adult.";
    } else {
        message = "You are a senior.";
    }
    
    document.getElementById('output1').innerHTML = `<strong>Result:</strong> ${message}`;
}

/**
 * Performs a calculation based on user input and selected operation
 */
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
    
    // Using operators and conditionals
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch(operation) {
            case 'add':
                result = `${num1} + ${num2} = ${num1 + num2}`;
                break;
            case 'subtract':
                result = `${num1} - ${num2} = ${num1 - num2}`;
                break;
            case 'multiply':
                result = `${num1} * ${num2} = ${num1 * num2}`;
                break;
            case 'divide':
                result = num2 !== 0 ? 
                    `${num1} / ${num2} = ${num1 / num2}` : 
                    "Error: Division by zero is not allowed.";
                break;
            default:
                result = "Invalid operation selected.";
        }
    }
    
    document.getElementById('output1').innerHTML = `<strong>Calculation:</strong> ${result}`;
}

// Part 2: JavaScript Functions - Reusable blocks of logic

/**
 * Reusable function for calculating area of a circle
 * @param {number} radius - The radius of the circle
 * @returns {number} The area of the circle
 */
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

/**
 * Calculates and displays the area of a circle based on user input
 */
function calculateCircleArea() {
    const radius = parseFloat(document.getElementById('circleRadius').value);
    
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('output2').innerHTML = "Please enter a valid positive number for radius.";
        return;
    }
    
    // Using the reusable calculateArea function
    const area = calculateArea(radius);
    document.getElementById('output2').innerHTML = `
        <strong>Circle Calculation:</strong> 
        A circle with radius ${radius} cm has an area of ${area.toFixed(2)} cm².
    `;
}

/**
 * Reusable function for formatting a greeting
 * @param {string} name - The name to include in the greeting
 * @returns {string} A formatted greeting message
 */
function formatGreeting(name) {
    const hours = new Date().getHours();
    let timeOfDay;
    
    if (hours < 12) timeOfDay = "Morning";
    else if (hours < 18) timeOfDay = "Afternoon";
    else timeOfDay = "Evening";
    
    return `Good ${timeOfDay}, ${name}! Welcome to our JavaScript project.`;
}

/**
 * Greets the user with a personalized message based on their name and time of day
 */
function greetUser() {
    const name = document.getElementById('userName').value.trim();
    
    if (!name) {
        document.getElementById('output2').innerHTML = "Please enter your name.";
        return;
    }
    
    // Using the reusable formatGreeting function
    const greeting = formatGreeting(name);
    document.getElementById('output2').innerHTML = `<strong>Greeting:</strong> ${greeting}`;
}

// Part 3: JavaScript Loops - Solving repetitive tasks

/**
 * Generates a multiplication table using a for loop
 */
function generateMultiplicationTable() {
    const number = parseInt(document.getElementById('loopNumber').value);
    
    if (isNaN(number) || number < 1 || number > 10) {
        document.getElementById('output3').innerHTML = "Please enter a number between 1 and 10.";
        return;
    }
    
    let tableHTML = `<h3>Multiplication Table for ${number}</h3>`;
    
    // Using a for loop to generate the table
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${number} × ${i} = ${number * i}</p>`;
    }
    
    document.getElementById('output3').innerHTML = tableHTML;
}

/**
 * Generates colorful boxes using a forEach loop
 */
function generateColorBoxes() {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', 
        '#FB5607', '#FF006E', '#8338EC', '#3A86FF'
    ];
    let boxesHTML = '<h3>Color Boxes</h3>';
    
    // Using forEach loop to iterate through colors array
    colors.forEach((color, index) => {
        boxesHTML += `
            <div class="color-box" style="background-color: ${color};">
                Color ${index + 1}
            </div>
        `;
    });
    
    document.getElementById('colorBoxContainer').innerHTML = boxesHTML;
}

// Part 4: DOM Manipulation - Making the page interactive

let count = 0;

/**
 * Increments the counter and updates the display
 */
function incrementCounter() {
    count++;
    updateCounter();
}

/**
 * Decrements the counter and updates the display
 */
function decrementCounter() {
    count--;
    updateCounter();
}

/**
 * Resets the counter to zero and updates the display
 */
function resetCounter() {
    count = 0;
    updateCounter();
}

/**
 * Updates the counter display and changes color based on value
 */
function updateCounter() {
    document.getElementById('counter').textContent = count;
    
    // Change color based on value
    if (count > 0) {
        document.getElementById('counter').style.color = '#4CAF50';
    } else if (count < 0) {
        document.getElementById('counter').style.color = '#FF5252';
    } else {
        document.getElementById('counter').style.color = '#6e8efb';
    }
}

/**
 * Adds a random user to the user list
 */
function addUser() {
    const firstNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'James'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    const domains = ['example.com', 'mail.com', 'test.org', 'demo.net'];
    
    // Generate random user data
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
    
    const userList = document.getElementById('userList');
    
    // Create new user card element
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
        <div class="user-avatar">${firstName[0]}${lastName[0]}</div>
        <div>
            <strong>${firstName} ${lastName}</strong><br>
            <small>${email}</small>
        </div>
    `;
    
    // Add the new user card to the list
    userList.appendChild(userCard);
}

/**
 * Clears all users from the user list
 */
function clearUsers() {
    document.getElementById('userList').innerHTML = '';
}

/**
 * Toggles the visibility of the content section
 */
function toggleContent() {
    const content = document.getElementById('toggableContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

/**
 * Toggles between dark and light mode
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}