document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const form = event.target;

    // Prepare form data for submission
    const formData = new FormData(form);

    // Send a POST request
    fetch(form.action, {
        method: form.method,
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        console.log('Success:', data);
        form.reset(); // Clear the form fields after successful submission
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
