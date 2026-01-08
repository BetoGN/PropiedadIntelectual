// ============================================
// MAIN.JS - FUNCIONALIDAD PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes
    initTabs();
    initSidebar();
    initModals();
    initSearch();
    initContactForm();
});

// ============================================
// SISTEMA DE PESTAÑAS
// ============================================
function initTabs() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remover active de todos
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Activar seleccionado
            this.classList.add('active');
            const content = document.getElementById(tabId);
            if (content) {
                content.classList.add('active');
            }
            
            // Scroll al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============================================
// SIDEBAR - MENÚ DE CONTENIDOS
// ============================================
function initSidebar() {
    const sectionTitles = document.querySelectorAll('.section-title');
    const contentLinks = document.querySelectorAll('.submenu a');
    
    // Toggle de secciones
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Si es examen, mostrar sección de examen
            if (section === 'examen') {
                showExamSection();
                return;
            }
            
            // Toggle submenu
            this.classList.toggle('expanded');
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('show');
            }
        });
    });
    
    // Click en enlaces de contenido
    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.getAttribute('data-content');
            
            // Marcar como activo
            contentLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Cargar contenido
            loadContent(contentId);
        });
    });
}

// Cargar contenido dinámico
function loadContent(contentId) {
    const content = window.courseContent[contentId];
    
    if (!content) {
        console.error('Contenido no encontrado:', contentId);
        return;
    }
    
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    
    // Mostrar contenido dinámico
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="content-card">
            <h2><i class="fas fa-book"></i> ${content.title}</h2>
            ${content.content}
        </div>
    `;
    dynamicContent.classList.add('active');
    
    // Si es un cuestionario, actualizar el botón de inicio
    if (contentId.startsWith('quiz')) {
        const unitNumber = parseInt(contentId.replace('quiz', ''));
        if (window.updateQuizStartButton) {
            setTimeout(() => window.updateQuizStartButton(unitNumber), 100);
        }
    }
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar sección de examen
function showExamSection() {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    
    document.getElementById('examen-section').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MODALES
// ============================================
function initModals() {
    // Manual
    const manualBtn = document.getElementById('manualBtn');
    const manualModal = document.getElementById('manualModal');
    
    if (manualBtn) {
        manualBtn.addEventListener('click', (e) => {
            e.preventDefault();
            manualModal.classList.add('show');
        });
    }
    
    // Contacto
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('show');
        });
    }
    
    // Cerrar modales
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
        });
    });
    
    // Cerrar al hacer clic fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
            }
        });
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
        }
    });
}

// ============================================
// BÚSQUEDA
// ============================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchResults = document.getElementById('searchResults');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            alert('Por favor ingresa al menos 2 caracteres para buscar.');
            return;
        }
        
        const results = [];
        
        // Buscar en contenido del curso
        for (const [key, content] of Object.entries(window.courseContent)) {
            const title = content.title.toLowerCase();
            const text = content.content.toLowerCase();
            
            if (title.includes(query) || text.includes(query)) {
                // Extraer fragmento de texto
                let snippet = '';
                const index = text.indexOf(query);
                if (index !== -1) {
                    const start = Math.max(0, index - 50);
                    const end = Math.min(text.length, index + query.length + 50);
                    snippet = '...' + text.substring(start, end).replace(/<[^>]+>/g, '') + '...';
                }
                
                results.push({
                    id: key,
                    title: content.title,
                    snippet: snippet,
                    type: content.type === 'activity' ? 'Actividad' : 'Contenido'
                });
            }
        }
        
        // Buscar en glosario
        const glossaryItems = document.querySelectorAll('.glossary-item');
        glossaryItems.forEach(item => {
            const term = item.querySelector('dt').textContent.toLowerCase();
            const definition = item.querySelector('dd').textContent.toLowerCase();
            
            if (term.includes(query) || definition.includes(query)) {
                results.push({
                    id: 'glosario',
                    title: item.querySelector('dt').textContent,
                    snippet: item.querySelector('dd').textContent,
                    type: 'Glosario'
                });
            }
        });
        
        // Mostrar resultados
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No se encontraron resultados para "${query}"</p>
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map(r => `
                <div class="search-result-item" data-id="${r.id}">
                    <span class="result-type">${r.type}</span>
                    <h4>${r.title}</h4>
                    <p>${r.snippet}</p>
                </div>
            `).join('');
            
            // Click en resultados
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    searchModal.classList.remove('show');
                    
                    if (id === 'glosario') {
                        // Ir a pestaña de glosario
                        document.querySelector('[data-tab="glosario"]').click();
                    } else {
                        // Cargar contenido
                        loadContent(id);
                    }
                });
            });
        }
        
        searchModal.classList.add('show');
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// ============================================
// BÚSQUEDA EN GLOSARIO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const glossarySearch = document.getElementById('glossarySearch');
    
    if (glossarySearch) {
        glossarySearch.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const glossaryItems = document.querySelectorAll('.glossary-item');
            const glossaryLetters = document.querySelectorAll('.glossary-letter');
            
            if (query === '') {
                // Mostrar todos
                glossaryItems.forEach(item => item.style.display = 'block');
                glossaryLetters.forEach(letter => letter.style.display = 'block');
                return;
            }
            
            // Ocultar letras temporalmente
            glossaryLetters.forEach(letter => letter.style.display = 'none');
            
            // Filtrar items
            glossaryItems.forEach(item => {
                const term = item.querySelector('dt').textContent.toLowerCase();
                const definition = item.querySelector('dd').textContent.toLowerCase();
                
                if (term.includes(query) || definition.includes(query)) {
                    item.style.display = 'block';
                    // Mostrar la letra correspondiente
                    const prevLetter = item.previousElementSibling;
                    if (prevLetter && prevLetter.classList.contains('glossary-letter')) {
                        prevLetter.style.display = 'block';
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Simular envío
            alert(`Gracias ${name}, tu mensaje ha sido enviado.\n\nTe responderemos a ${email} lo antes posible.`);
            
            // Limpiar formulario y cerrar modal
            contactForm.reset();
            document.getElementById('contactModal').classList.remove('show');
        });
    }
}

// ============================================
// RESPONSIVE - TOGGLE SIDEBAR
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón de toggle para móvil
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'sidebar-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    toggleBtn.style.cssText = `
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(toggleBtn);
    
    // Mostrar en móvil
    function checkMobile() {
        if (window.innerWidth <= 1024) {
            toggleBtn.style.display = 'block';
        } else {
            toggleBtn.style.display = 'none';
            document.querySelector('.sidebar').classList.remove('open');
        }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    toggleBtn.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('open');
    });
    
    // Cerrar sidebar al seleccionar contenido en móvil
    document.querySelectorAll('.submenu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        });
    });
});

// ============================================
// UTILIDADES
// ============================================

// Función para enviar actividad (placeholder)
function submitActivity(activityNumber) {
    const confirmed = confirm(`¿Estás seguro de que deseas enviar la Actividad ${activityNumber}?`);
    
    if (confirmed) {
        alert(`¡Actividad ${activityNumber} enviada correctamente!\n\nRecibirás retroalimentación de tu profesor pronto.`);
    }
}

// Hacer función global
window.submitActivity = submitActivity;

// Animación de scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Prevenir pérdida de datos en el examen
window.addEventListener('beforeunload', function(e) {
    const examContainer = document.getElementById('exam-container');
    if (examContainer && examContainer.style.display !== 'none') {
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que deseas salir? Perderás el progreso del examen.';
        return e.returnValue;
    }
});

console.log('✅ Página de Propiedad Intelectual cargada correctamente');
