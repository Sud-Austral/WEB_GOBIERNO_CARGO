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
    :root {
        --bs-primary: #1e3a8a; /* Deep Navy */
        --bs-primary-rgb: 30, 58, 138;
        --bs-secondary: #64748b; /* Slate */
        --bs-secondary-rgb: 100, 116, 139;
        --bs-success: #15803d; /* Green */
        --bs-info: #0e7490; /* Cyan */
        --bs-warning: #b45309; /* Amber */
        --bs-danger: #b91c1c; /* Red */
        --bs-dark: #0f172a; /* Slate 900 */
        --bs-light: #f8fafc; /* Slate 50 */
        
        --bs-body-bg: #f1f5f9; /* Slate 100 */
        --bs-body-color: #334155; /* Slate 700 */
        --bs-card-border-color: #e2e8f0;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--bs-body-bg);
        color: var(--bs-body-color);
        font-size: 0.9rem;
    }
    
    .navbar {
        background: #ffffff !important;
        border-bottom: 1px solid #e2e8f0;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    
    .navbar-brand {
        font-weight: 700;
        color: var(--bs-primary) !important;
        letter-spacing: -0.5px;
    }
    
    .nav-link {
        color: #64748b !important;
        font-weight: 500;
        font-size: 0.95rem;
    }
    
    .nav-link:hover, .nav-link.active {
        color: var(--bs-primary) !important;
    }

    .card {
        border: 1px solid var(--bs-card-border-color);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        background-color: #fff;
    }
    
    .card-header {
        background-color: #fff;
        border-bottom: 1px solid #e2e8f0;
        font-weight: 600;
    }
    
    /* Elegant Buttons */
    .btn-primary {
        background-color: var(--bs-primary);
        border-color: var(--bs-primary);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    
    .btn-primary:hover {
        background-color: #172554;
        border-color: #172554;
    }

    .badge {
        font-weight: 500;
        letter-spacing: 0.3px;
    }

    .table thead th {
        background-color: #f8fafc;
        color: #475569;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.5px;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .select2-container--bootstrap-5 .select2-selection {
        border-color: #cbd5e1;
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
        color: var(--bs-primary);
    }
    .pdf-viewer-body {
        flex: 1;
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #525659;
    }
    .pdf-viewer-iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
    .pdf-viewer-close-btn {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #334155;
    }
    .pdf-viewer-close-btn:hover {
        color: var(--bs-danger);
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
    <nav class="navbar navbar-expand-lg main-navbar sticky-top mb-4">
        <div class="container-xl">
            <a class="navbar-brand d-flex align-items-center gap-2" href="dashboard.html">
                <i class="fas fa-layer-group"></i>
                <span>GestiónCandidatos</span>
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
                    <li class="nav-item"><a class="nav-link ${activePage === 'dashboard' ? 'active' : ''}" href="dashboard.html"><i class="fas fa-home me-1 opacity-75"></i> Inicio</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'personas' ? 'active' : ''}" href="personas.html"><i class="fas fa-user-friends me-1 opacity-75"></i> Personas</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'cargos' ? 'active' : ''}" href="cargos.html"><i class="fas fa-briefcase me-1 opacity-75"></i> Cargos</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'postulaciones' ? 'active' : ''}" href="postulaciones.html"><i class="fas fa-file-alt me-1 opacity-75"></i> Postulaciones</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'revisiones' ? 'active' : ''}" href="revisiones.html"><i class="fas fa-tasks me-1 opacity-75"></i> Revisiones</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'seleccion' ? 'active' : ''}" href="seleccion.html"><i class="fas fa-check-circle me-1 opacity-75"></i> Selección</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'ayuda' ? 'active' : ''}" href="ayuda.html"><i class="fas fa-question-circle me-1 opacity-75"></i> Ayuda</a></li>
                    <li class="nav-item border-start ps-2 ms-2 d-none d-lg-block"></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'resultados' ? 'active' : ''} text-success fw-bold" href="resultados.html"><i class="fas fa-chart-pie me-1"></i> Resultados</a></li>
                </ul>
                <div class="d-flex align-items-center gap-3">
                    <div class="d-flex flex-column text-end d-none d-lg-block line-height-sm">
                        <span class="fw-bold text-dark small">${user ? user.nombre : 'Usuario'}</span>
                        <span class="text-xs text-muted" style="font-size: 0.75rem;">Administrador</span>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-light rounded-circle shadow-sm" type="button" onclick="logout()" title="Cerrar Sesión">
                            <i class="fas fa-sign-out-alt text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1060;"></div>
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

    // If sending FormData, delete Content-Type header so browser sets it with boundary
    if (options.body instanceof FormData) {
        delete config.headers['Content-Type'];
    }

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
