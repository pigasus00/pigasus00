document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const urlSession = 'https://wappsto.com/services/2.1/session';
    const data = {
        username: username,
        password: password,
        remember_me: false
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(urlSession, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud de sesión');
            }
            return response.json();
        })
        .then(responseData => {
            if (!responseData.meta || !responseData.meta.id) {
                throw new Error('Error: No se pudo obtener el sessionId de la respuesta JSON');
            }
            const sessionId = responseData.meta.id;
            document.cookie = "sessionId=" + sessionId;
            window.location.href = "main.html";

        })
        .catch(error => {
            console.error(error.message);
    });
});