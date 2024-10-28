
document.getElementById('loginForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('/api/auth/login', { username, password });
        alert(response.data.message);
        localStorage.setItem('token', response.data.token); 
        window.location.href = '../index.html'; 
    } catch (error) {
        console.error(error);
        alert('Error al iniciar sesión');
    }
});

document.getElementById('registerForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('/api/auth/register', { email, username, password });
        alert(response.data.message);
        window.location.href = 'login.html'; 
    } catch (error) {
        console.error(error);
        alert('Error al registrarse');
    }
});

document.getElementById('createUserForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const token = localStorage.getItem('token');

    try {
        const response = await axios.post('/api/users', { username, password, role }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        alert(response.data.message);
        window.location.href = '../index.html'; 
    } catch (error) {
        console.error(error);
        alert('Error al crear el usuario');
    }
});
