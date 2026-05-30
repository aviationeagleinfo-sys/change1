document.addEventListener("DOMContentLoaded", function() {
    // 1. Iniezione automatica delle variabili :root e dello stile CSS nel <head>
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        :root {
            --bg-main: #395296;
            --titles-gold: #f8c200;
            --accent-coral: #eb966a;
            --text-light: #d6dcea;
            --dark-overlay: rgba(0, 0, 0, 0.2);
            --column-base: rgba(214, 220, 234, 0.1);
            --white: #ffffff;
        }
        .navbar { 
            background: rgba(42, 61, 114, 0.95); 
            border-bottom: 4px solid var(--accent-coral); 
            padding: 1rem 0; 
            backdrop-filter: blur(10px);
        }
        .navbar-brand { font-family: 'Outfit', sans-serif; font-weight: 700; color: var(--white)!important; }
        .brand-accent { color: var(--titles-gold); }
        .nav-link { color: var(--text-light)!important; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; }
        .nav-link:hover { color: var(--titles-gold)!important; }
        .navbar-toggler { color: var(--white); border: none; }
        .btn-medical { 
            background-color: var(--accent-coral); 
            color: var(--white); 
            border-radius: 50px; 
            padding: 8px 20px; 
            font-weight: 700; 
            border: none;
            transition: 0.3s;
        }
        .btn-medical:hover { 
            background-color: var(--titles-gold); 
            color: var(--bg-main); 
            transform: translateY(-2px); 
        }
        .dropdown-menu {
            background-color: #2a3d72;
            border: 1px solid var(--accent-coral);
        }
        .dropdown-item {
            color: var(--text-light);
        }
        .dropdown-item:hover {
            background-color: var(--accent-coral);
            color: var(--white);
        }
    `;
    document.head.appendChild(navStyle);

    // 2. Generazione dinamica della struttura HTML all'interno del gancio
    const navContainer = document.getElementById("global-navbar");
    
    if (navContainer) {
        navContainer.innerHTML = `
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="https://drgiuseppemusumeci.com/index.html">
                <img src="media/changelogoclear.png" alt="Logo" width="55" class="me-2">
                <span>GIUSEPPE<span class="brand-accent">MUSUMECI</span></span>
            </a>
            <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <i class="bi bi-list fs-1"></i> 
            </button>

            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item dropdown px-lg-2">
                        <a class="nav-link dropdown-toggle fw-bold text-uppercase" href="#" id="dropChiSono" role="button" data-bs-toggle="dropdown" aria-expanded="false">Chi Sono</a>
                        <ul class="dropdown-menu shadow" aria-labelledby="dropChiSono">
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/giuseppe-musumeci.html">Giuseppe Musumeci</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/formazione.html">Formazione</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/carriera.html">Carriera</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown px-lg-2">
                        <a class="nav-link dropdown-toggle fw-bold text-uppercase" href="#" id="dropCosaFaccio" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cosa faccio</a>
                        <ul class="dropdown-menu shadow" aria-labelledby="dropCosaFaccio">
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/direttore.html">Direttore</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/interventistica.html">Interventistica Strutturale</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/cardiologia.html">Cardiologia Clinica</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/patologie.html">Patologie Cardiovascolari</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/incarichi.html">Incarichi Istituzionali</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/media.html">Comunicazione e Media</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown px-lg-2">
                        <a class="nav-link dropdown-toggle fw-bold text-uppercase" href="#" id="dropInfo" role="button" data-bs-toggle="dropdown" aria-expanded="false">Info</a>
                        <ul class="dropdown-menu shadow" aria-labelledby="dropInfo">
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/contatti.html">Contatti</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/libera-professione.html">Libera Professione</a></li>
                            <li><a class="dropdown-item py-2 fw-semibold" href="https://drgiuseppemusumeci.com/documenti.html">Documenti&Articoli</a></li>
                        </ul>
                    </li>
                    <li class="nav-item px-lg-2"><a class="nav-link fw-bold text-uppercase" href="https://drgiuseppemusumeci.com/eventi.html">News&Eventi</a></li>
                    <li class="nav-item px-lg-2"><a class="nav-link fw-bold text-uppercase" href="https://drgiuseppemusumeci.com/media.html#video">Video</a></li>
                    <li class="nav-item px-lg-2 me-lg-3"><a class="nav-link fw-bold text-uppercase" href="index.html">Change</a></li>
                    
                    <li class="nav-item">
                        <a href="login.html" onclick="window.location.href='login.html?redirect=' + encodeURIComponent(window.location.href); return false;" id="btn-login-nav" class="btn btn-medical btn-sm">ACCESSO HUB</a>
                        <div id="user-info" style="display: none;">
                            <span id="user-name" class="me-3 small fw-bold text-uppercase opacity-75"></span>
                            <button onclick="logout()" class="btn btn-outline-dark btn-sm rounded-0 fw-bold">LOGOUT</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
});
