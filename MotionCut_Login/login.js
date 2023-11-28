// var name = getElementById('name')
// var email = getElementById('email')
// var password = getElementById('password')
// var phone = getElementById('phone')


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    if (name === '' || email === '' || password === '' || phone === '') {
        alert('All fields must be filled out');
        return false; 
    }


    var phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }



    return true; 
}