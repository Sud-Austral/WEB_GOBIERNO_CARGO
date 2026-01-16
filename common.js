/* Configuracion Global */
const API_URL = "https://186.67.61.251:8001"; // Adjusted to http/localhost based on previous interactions, user can change if needed.

// --- Dependencies ---
const LIBS = [
    // Bootstrap 5 CSS
    { tag: 'link', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' },
    // FontAwesome
    { tag: 'link', rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
    // Google Fonts (Inter)
    { tag: 'link', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
    // DataTables BS5 CSS
    { tag: 'link', rel: 'stylesheet', href: 'https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap5.min.css' },
    // Select2 BS5 Theme CSS
    { tag: 'link', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' },
    { tag: 'link', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css' },

    // Scripts (Order matters)
    // jQuery
    { tag: 'script', src: 'https://code.jquery.com/jquery-3.7.0.min.js' },
    // Bootstrap Bundle
    { tag: 'script', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' },
    // DataTables
    { tag: 'script', src: 'https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js' },
    { tag: 'script', src: 'https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js' },
    // Select2
    { tag: 'script', src: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js' }
];

// --- Custom Styles ---
const STYLES = `
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f4f6f9;
        font-size: 0.9rem;
    }
    .main-navbar {
        background: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .navbar-brand {
        font-weight: 700;
        color: #0d6efd;
        font-size: 1.25rem;
    }
    .nav-link {
        color: #495057;
        font-weight: 500;
        margin-right: 1rem;
    }
    .nav-link:hover, .nav-link.active {
        color: #0d6efd;
    }
    .page-header {
        margin-bottom: 1.5rem;
        margin-top: 1.5rem;
    }
    .card {
        border: none;
        box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
        margin-bottom: 1.5rem;
    }
    .card-header {
        background-color: transparent;
        border-bottom: 1px solid rgba(0,0,0,.125);
        font-weight: 600;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .btn-primary {
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    .btn-secondary {
        background-color: #6c757d;
        border-color: #6c757d;
        color: #fff;
    }
    .table-responsive {
        padding: 0.5rem;
    }
    .select2-container--bootstrap-5 .select2-selection {
        border-color: #dee2e6;
    }
    
    /* PDF Viewer Modal */
    .pdf-viewer-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        z-index: 9999;
        display: none;
        flex-direction: column;
    }
    .pdf-viewer-modal.active {
        display: flex;
    }
    .pdf-viewer-header {
        background: #fff;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dee2e6;
    }
    .pdf-viewer-header h5 {
        margin: 0;
        font-size: 1.1rem;
    }
    .btn-close-viewer {
        background: #dc3545;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-close-viewer:hover {
        background: #bb2d3b;
    }
    .pdf-viewer-body {
        flex: 1;
        position: relative;
        background: #525252;
    }
    .pdf-viewer-body iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
    #viewerLoading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }

`;

// --- Loader ---
function loadDependencies() {
    // Inject Styles
    const style = document.createElement('style');
    style.textContent = STYLES;
    document.head.appendChild(style);

    // Inject Libs
    // We do this synchronously or via promises if needed, but for simplicity we append.
    // However, jQuery must load before others.

    // Ideally, we'd use a real loader, but let's just append and hope network holds up or user refreshes if it fails.
    // Better: Recursive loader.

    let index = 0;
    function loadNext() {
        if (index >= LIBS.length) {
            // All loaded, fire init event if needed
            document.dispatchEvent(new Event('libsLoaded'));
            return;
        }

        const lib = LIBS[index];
        index++;

        let el;
        if (lib.tag === 'link') {
            el = document.createElement('link');
            el.rel = lib.rel;
            el.href = lib.href;
            document.head.appendChild(el);
            loadNext(); // CSS doesn't block much
        } else {
            el = document.createElement('script');
            el.src = lib.src;
            el.onload = loadNext;
            document.body.appendChild(el);
        }
    }
    loadNext();
}

loadDependencies();

// --- Auth Helpers ---
function isAuthenticated() {
    return !!localStorage.getItem('token');
}

function getToken() {
    return localStorage.getItem('token');
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

function getCurrentUser() {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
}

// --- Layout ---
function renderLayout(activePage) {
    if (!isAuthenticated()) return;

    // Remove existing navbar if any to prevent duplicates
    const existingNav = document.querySelector('.main-navbar');
    if (existingNav) existingNav.remove();

    // Navbar HTML
    const user = getCurrentUser();
    const navHTML = `
    <nav class="navbar navbar-expand-lg main-navbar sticky-top">
        <div class="container-fluid px-5">
            <a class="navbar-brand" href="dashboard.html"><i class="fas fa-users-cog me-2"></i>Gestión Candidatos</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link ${activePage === 'dashboard' ? 'active' : ''}" href="dashboard.html">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'personas' ? 'active' : ''}" href="personas.html">Personas</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'cargos' ? 'active' : ''}" href="cargos.html">Cargos</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'postulaciones' ? 'active' : ''}" href="postulaciones.html">Postulaciones</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'revisiones' ? 'active' : ''}" href="revisiones.html">Revisiones</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'seleccion' ? 'active' : ''}" href="seleccion.html">Selección</a></li>
                </ul>
                <div class="d-flex align-items-center">
                    <span class="me-3 text-muted"><i class="fas fa-user-circle me-1"></i> ${user ? user.nombre : 'Usuario'}</span>
                    <button class="btn btn-outline-danger btn-sm" onclick="logout()"><i class="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
        </div>
    </nav>
    <div class="toast-container position-fixed bottom-0 end-0 p-3"></div>
    `;

    // Prepend Navbar
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// --- API Wrapper ---
async function fetchAPI(endpoint, options = {}) {
    const token = getToken();
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const config = {
        ...options,
        headers: { ...headers, ...options.headers }
    };

    try {
        const res = await fetch(`${API_URL}${endpoint}`, config);
        if (res.status === 401) {
            logout();
            return null;
        }
        return res;
    } catch (e) {
        console.error("API Error:", e);
        return null;
    }
}

// --- UI Helpers ---
function showToast(message, type = 'success') {
    const bg = type === 'success' ? 'bg-success' : 'bg-danger';
    const toastHTML = `
    <div class="toast align-items-center text-white ${bg} border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
    `;
    const container = document.querySelector('.toast-container');
    if (container) {
        container.innerHTML = toastHTML;
        setTimeout(() => { container.innerHTML = ''; }, 3000); // Simple auto hide
    }
}
