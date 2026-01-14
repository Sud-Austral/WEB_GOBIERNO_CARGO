/* Configuracion Global */
const API_URL = "https://186.67.61.251:8001";

function getToken() {
    return localStorage.getItem("token");
}

function isAuthenticated() {
    return !!getToken();
}

/* Helper para fetch con auth */
async function fetchAPI(endpoint, options = {}) {
    const token = getToken();
    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
    });

    if (response.status === 401) {
        alert("Sesión expirada o inválida");
        logout();
        return null;
    }

    return response;
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_name");
    window.location.href = "index.html";
}

/* Navbar generador */
function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = "navbar";
    nav.innerHTML = `
        <div class="nav-brand">App Candidatos</div>
        <div class="nav-links">
            <a href="dashboard.html">Dashboard</a>
            <a href="cargos.html">Cargos</a>
            <a href="personas.html">Personas</a>
            <a href="postulaciones.html">Postulaciones</a>
            <a href="revisiones.html">Revisiones</a>
            <a href="#" onclick="logout()">Salir</a>
        </div>
    `;
    document.body.prepend(nav);
}

/* Simple CSS inject */
const style = document.createElement('style');
style.textContent = `
    body { font-family: system-ui, sans-serif; margin: 0; padding: 0; background: #f4f4f9; color: #333; }
    .navbar { background: #2c3e50; padding: 1rem; color: white; display: flex; justify-content: space-between; align-items: center; }
    .nav-brand { font-weight: bold; font-size: 1.2rem; }
    .nav-links a { color: white; text-decoration: none; margin-left: 1rem; }
    .nav-links a:hover { text-decoration: underline; }
    .container { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem; }
    .btn { padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; background: #3498db; color: white; }
    .btn:hover { background: #2980b9; }
    .btn-danger { background: #e74c3c; }
    .btn-danger:hover { background: #c0392b; }
    input, select, textarea { width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd; }
    th { bg: #f8f9fa; }
    .login-container { max-width: 400px; margin: 100px auto; text-align: center; }
`;
document.head.appendChild(style);
