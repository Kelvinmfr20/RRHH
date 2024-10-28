document.getElementById('employeeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const dni = document.getElementById('dni').value;
    const fullName = document.getElementById('fullName').value;
    const pricePerHour = document.getElementById('pricePerHour').value;

    const token = localStorage.getItem('token');

    try {
        const response = await axios.post('http://localhost:3000/api/employee', {
            dni,
            fullName,
            pricePerHour
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = response.data;

        if (response.status === 201) {
            document.getElementById('response').innerHTML = '<div class="alert alert-success">Empleado creado exitosamente.</div>';
            // Limpiar el formulario
            document.getElementById('employeeForm').reset();
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').innerHTML = `<div class="alert alert-danger">${error.response.data.message || 'Error al crear empleado.'}</div>`;
    }
});
