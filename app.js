document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const diners = document.getElementById('diners').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    if (date && time && diners && name && contact) {
        alert('Reservation successful!');
    } else {
        alert('Please fill out all fields.');
    }
});
