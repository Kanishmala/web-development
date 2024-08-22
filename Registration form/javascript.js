document.getElementById("form").addEventListener("submit", function(event) {
    
    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const conpass = document.getElementById('conpass').value.trim();
    const raddress = document.getElementById('raddress').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const district = document.getElementById('district').value.trim();
    

    if (!name || !lastname || !email || !phone || !pass || !conpass || !raddress || !address || !city || !district) {
        alert("Please fill out all the fields!");
        event.preventDefault();
        return;
    }

    
    if (phone.length < 10 || isNaN(phone)) {
        alert("Phone number must contain at least 10 digits.");
        event.preventDefault();
        return;
    }

    
    if (pass !== conpass) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    
    if (!email.includes('@') || !email.includes('.com')) {
        alert("Enter a valid email address. It should contain '@' and end with '.com'.");
        event.preventDefault();
        return;
    }

    
    alert("Registration successful!");
});
