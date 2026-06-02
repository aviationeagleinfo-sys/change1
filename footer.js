document.addEventListener("DOMContentLoaded", function() {
    // 1. Iniezione automatica dello stile CSS nel <head> della pagina
    const footerStyle = document.createElement('style');
    footerStyle.textContent = `
        .main-footer { 
            background-color: rgba(0,0,0,0.2); 
            color: var(--text-light); 
            padding: 60px 0 30px; 
            border-top: 6px solid var(--titles-gold); 
        }
        .footerbox { background: rgba(42, 61, 114, 0.95); }
        .footer-link { color: #9da3a8; text-decoration: none; transition: 0.2s; font-size: 0.95rem; display: block; margin-bottom: 8px; }
        .footer-link:hover { color: var(--accent-coral); padding-left: 5px; }
    `;
    document.head.appendChild(footerStyle);

    // 2. Generazione dinamica del contenuto all'interno del gancio HTML
    const footerContainer = document.getElementById("global-footer");
    
    if (footerContainer) {
        // Calcola l'anno corrente dinamicamente
        const currentYear = new Date().getFullYear();
        
        // Se siamo nel 2026 mostra solo 2026, dal 2027 mostrerà 2026-2027
        const yearDisplay = currentYear === 2026 ? "2026" : `2026-${currentYear}`;

        // Inietta l'intero blocco HTML aggiornato
        footerContainer.innerHTML = `
        <div class="container text-center text-md-start">
            <div class="row g-5">
                <div class="col-lg-5">
                    <div class="footer-logo mb-3" style="font-family:'Outfit'; font-weight:600;">GIUSEPPE<span class="brand-accent">MUSUMECI</span></div>
                    <p class="opacity-75">Giuseppe Musumeci MD<br>
                    Direttore SC Cardiologia,<br>
                    AO Ordine Mauriziano Torino<br>
                    Largo Turati, 62, Torino, Italy<br>
                    tel. +390115082515 <br>
                    Presidente Regione Piemonte ANMCO</p>
                    <div class="mt-4">
                        <a href="https://it.linkedin.com/in/giuseppe-musumeci-96414358" class="btn btn-outline-light btn-sm rounded-0 me-2"><i class="bi bi-linkedin"></i></a>
                        <a href="mailto:change@drgiuseppemusumeci.com" class="btn btn-outline-light btn-sm rounded-0"><i class="bi bi-envelope"></i></a>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <h6 class="fw-bold mb-4 text-uppercase small">Navigazione</h6>
                    <nav>
                        <a href="index.html" class="footer-link">Home</a>
                        <a href="login.html" class="footer-link">Accesso</a>
                        <a href="https://drgiuseppemusumeci.com/news.html" class="footer-link">Aggiornamenti</a>
                        <a href="congresso" class="footer-link">dove & Quando</a>
                        <a href="storia.html" class="footer-link">Storia del Congresso</a>
                        <a href="partecipa" class="footer-link">Partecipa anche Tu!</a>
                    </nav>
                </div>
                <div class="col-6 col-lg-4">
                    <h6 class="fw-bold mb-4 text-uppercase small">Sicurezza</h6>
                    <nav>
                        <a href="privacy.html" class="footer-link">Privacy Policy</a>
                        <a href="termini&condizioni" class="footer-link">Termini & Condizioni d'Uso</a>
                        <span class="footer-link text-white-50 mt-3 small">Status: <span class="text-success">● Operativo</span></span>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p class="mb-0"><br>&copy; ${yearDisplay} MD Giuseppe Musumeci. Tutti i diritti riservati.</p>
            </div>
        </div>
        `;
    }
});
