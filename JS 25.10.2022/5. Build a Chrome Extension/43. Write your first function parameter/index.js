const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(name, greeting, emoji) {
    welcomeEl.textContent = `${greeting}, ${name}  ${emoji}`    
}

greetUser("Tomek Smuga", "Howdy", "8=====D")