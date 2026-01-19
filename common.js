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
        /* Modern Color Palette (Interstellar Blue Theme) */
        --primary-hue: 220;
        --primary-sat: 90%;
        --primary-lig: 40%;
        
        --bs-primary: hsl(var(--primary-hue), var(--primary-sat), var(--primary-lig));
        --bs-primary-rgb: 30, 58, 138; /* Fallback/Approx */
        
        --bs-secondary: #64748b;
        --bs-success: #10b981; /* Emerald 500 */
        --bs-info: #0ea5e9;    /* Sky 500 */
        --bs-warning: #f59e0b; /* Amber 500 */
        --bs-danger: #ef4444;  /* Red 500 */
        
        --bs-body-bg: #f3f4f6;
        --bs-body-color: #1e293b;
        
        --glass-bg: rgba(255, 255, 255, 0.85);
        --glass-border: rgba(255, 255, 255, 0.5);
        --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        --card-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
    }

    body {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        background-color: var(--bs-body-bg);
        color: var(--bs-body-color);
        font-size: 0.925rem;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
    }

    /* --- Navbar Premium --- */
    .navbar.main-navbar {
        background: rgba(255, 255, 255, 0.85) !important;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02);
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
    
    .navbar-brand {
        font-weight: 800;
        letter-spacing: -0.5px;
        background: linear-gradient(135deg, var(--bs-primary) 0%, #3b82f6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.25rem;
    }
    
    .nav-link {
        font-weight: 500;
        color: #64748b !important;
        padding: 0.5rem 0.75rem !important;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
    }
    
    .nav-link:hover, .nav-link.active {
        color: var(--bs-primary) !important;
        background-color: rgba(59, 130, 246, 0.08);
    }

    /* --- Cards Modern --- */
    .card {
        border: 1px solid rgba(226, 232, 240, 0.8);
        background: #fff;
        border-radius: 1rem;
        box-shadow: var(--card-shadow);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .card-hover:hover {
        transform: translateY(-2px);
        box-shadow: var(--card-shadow-hover);
    }
    
    .card-header {
        background-color: transparent;
        border-bottom: 1px solid rgba(226, 232, 240, 0.6);
        padding: 1rem 1.25rem;
        font-weight: 600;
    }

    /* --- Buttons & Inputs --- */
    .btn {
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: all 0.2s;
    }
    
    .btn-primary {
        background: linear-gradient(145deg, var(--bs-primary) 0%, #2563eb 100%);
        border: none;
        box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);
    }
    
    .btn-primary:hover {
        background: linear-gradient(145deg, #1e40af 0%, #1d4ed8 100%);
        box-shadow: 0 4px 6px rgba(37, 99, 235, 0.4);
        transform: translateY(-1px);
    }
    
    .btn-success {
        background: linear-gradient(145deg, #059669 0%, #10b981 100%);
        border: none;
        box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
    }
    
    .btn-success:hover {
        box-shadow: 0 4px 6px rgba(16, 185, 129, 0.4);
        transform: translateY(-1px);
    }

    .form-control, .form-select {
        border-radius: 0.5rem;
        border-color: #cbd5e1;
        padding: 0.6rem 0.8rem;
    }
    .form-control:focus, .form-select:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    }

    /* --- Tables --- */
    .table thead th {
        background-color: #f8fafc;
        color: #64748b;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 0.6px;
        border-bottom: 1px solid #e2e8f0;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .table tbody td {
        vertical-align: middle;
        padding: 1rem 0.75rem;
        color: #334155;
    }
    .table-hover tbody tr:hover {
        background-color: #f8fafc;
    }

    /* --- Badges --- */
    .badge {
        font-weight: 600;
        padding: 0.35em 0.65em;
        border-radius: 6px;
        letter-spacing: 0.3px;
    }

    /* --- PDF Viewer --- */
    .pdf-viewer-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(4px);
        z-index: 10000;
        display: none;
        flex-direction: column;
        animation: fadeIn 0.2s ease-out;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .pdf-viewer-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .pdf-viewer-header {
        background: #fff;
        padding: 0.75rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        z-index: 10;
    }
    
    .pdf-viewer-body {
        flex: 1;
        background-color: #334155;
        position: relative;
        overflow: hidden;
    }

    .pdf-viewer-iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    .pdf-viewer-close-btn {
        background: transparent;
        border: none;
        color: #64748b;
        font-size: 1.25rem;
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }
    .pdf-viewer-close-btn:hover {
        background-color: #f1f5f9;
        color: #ef4444;
    }
`;

// --- Loader ---
function loadDependencies() {
    // Inject Styles
    const style = document.createElement('style');
    style.textContent = STYLES;
    document.head.appendChild(style);

    // Inject Libs
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
function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

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
