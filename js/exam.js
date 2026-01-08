// ============================================
// SISTEMA DE EXAMEN - PROPIEDAD INTELECTUAL
// ============================================

const examQuestions = [
    {
        id: 1,
        question: "¿Cuál es la principal diferencia entre derechos de autor y propiedad industrial?",
        options: [
            "Los derechos de autor protegen obras creativas, mientras que la propiedad industrial protege invenciones y signos distintivos",
            "Los derechos de autor son más costosos de registrar",
            "La propiedad industrial solo aplica a grandes empresas",
            "No hay diferencia, son términos intercambiables"
        ],
        correct: 0,
        feedback: "Los derechos de autor protegen obras literarias, artísticas y científicas, mientras que la propiedad industrial abarca patentes, marcas, diseños industriales y secretos comerciales."
    },
    {
        id: 2,
        question: "¿Cuánto tiempo dura la protección de una patente en México?",
        options: [
            "10 años",
            "15 años",
            "20 años",
            "Toda la vida del inventor"
        ],
        correct: 2,
        feedback: "En México, las patentes tienen una duración de 20 años a partir de la fecha de solicitud, sin posibilidad de renovación."
    },
    {
        id: 3,
        question: "¿Cuál de los siguientes NO es un derecho moral del autor?",
        options: [
            "Derecho de paternidad",
            "Derecho de reproducción",
            "Derecho de integridad",
            "Derecho de divulgación"
        ],
        correct: 1,
        feedback: "El derecho de reproducción es un derecho patrimonial, no moral. Los derechos morales incluyen paternidad, integridad, divulgación y retracto."
    },
    {
        id: 4,
        question: "¿Qué institución en México se encarga del registro de marcas?",
        options: [
            "INDAUTOR",
            "IMPI",
            "PROFECO",
            "OMPI"
        ],
        correct: 1,
        feedback: "El Instituto Mexicano de la Propiedad Industrial (IMPI) es el encargado de administrar el sistema de propiedad industrial en México, incluyendo el registro de marcas."
    },
    {
        id: 5,
        question: "¿Cuál es la duración de la protección de derechos de autor en México después de la muerte del autor?",
        options: [
            "50 años",
            "70 años",
            "100 años",
            "Indefinida"
        ],
        correct: 2,
        feedback: "En México, los derechos patrimoniales de autor duran 100 años después de la muerte del autor, uno de los plazos más largos del mundo."
    },
    {
        id: 6,
        question: "¿Qué tipo de licencia Creative Commons permite cualquier uso siempre que se dé crédito al autor?",
        options: [
            "CC BY-NC",
            "CC BY-ND",
            "CC BY",
            "CC BY-NC-ND"
        ],
        correct: 2,
        feedback: "La licencia CC BY (Atribución) permite copiar, distribuir, exhibir y modificar la obra, siempre que se reconozca y cite la obra de la forma especificada por el autor."
    },
    {
        id: 7,
        question: "¿Cuáles son los tres requisitos para que una invención sea patentable?",
        options: [
            "Original, útil y registrable",
            "Novedad, actividad inventiva y aplicación industrial",
            "Creatividad, funcionalidad y comercialización",
            "Diseño, fabricación y venta"
        ],
        correct: 1,
        feedback: "Para ser patentable, una invención debe ser novedosa (no existir previamente), tener actividad inventiva (no ser obvia) y tener aplicación industrial (poder fabricarse)."
    },
    {
        id: 8,
        question: "¿Cuánto tiempo dura el registro de una marca en México?",
        options: [
            "5 años, renovable indefinidamente",
            "10 años, renovable indefinidamente",
            "15 años, renovable una vez",
            "20 años, no renovable"
        ],
        correct: 1,
        feedback: "En México, el registro de una marca tiene una vigencia de 10 años a partir de la fecha de presentación de la solicitud, y puede renovarse indefinidamente por períodos iguales."
    },
    {
        id: 9,
        question: "¿Qué es un modelo de utilidad?",
        options: [
            "Una marca de producto",
            "Una mejora técnica menor a un objeto existente",
            "Un diseño artístico",
            "Un tipo de contrato de licencia"
        ],
        correct: 1,
        feedback: "Un modelo de utilidad protege invenciones de menor nivel inventivo que las patentes, generalmente mejoras técnicas a objetos ya existentes. Su duración es de 10 años."
    },
    {
        id: 10,
        question: "¿Cuál de los siguientes NO puede ser protegido como secreto industrial?",
        options: [
            "Una fórmula de producto",
            "Una lista de clientes",
            "Una patente publicada",
            "Un proceso de fabricación confidencial"
        ],
        correct: 2,
        feedback: "Una patente es información pública (se publica para que otros puedan conocer la invención), por lo que no puede ser considerada secreto industrial. El secreto industrial requiere confidencialidad."
    },
    {
        id: 11,
        question: "¿Qué tratado internacional regula la protección de obras literarias y artísticas?",
        options: [
            "Convenio de París",
            "Convenio de Berna",
            "Tratado PCT",
            "Protocolo de Madrid"
        ],
        correct: 1,
        feedback: "El Convenio de Berna (1886) es el tratado internacional fundamental para la protección de obras literarias y artísticas. El Convenio de París se refiere a la propiedad industrial."
    },
    {
        id: 12,
        question: "¿Es obligatorio registrar una obra ante INDAUTOR para obtener protección de derechos de autor?",
        options: [
            "Sí, es obligatorio para cualquier tipo de protección",
            "No, los derechos nacen desde la creación de la obra",
            "Solo para obras comerciales",
            "Solo para obras publicadas"
        ],
        correct: 1,
        feedback: "El registro no es obligatorio. Los derechos de autor nacen desde el momento de la creación de la obra. Sin embargo, el registro proporciona prueba de autoría y facilita la defensa legal."
    },
    {
        id: 13,
        question: "¿Qué característica distingue a los derechos morales de los derechos patrimoniales?",
        options: [
            "Los derechos morales son temporales",
            "Los derechos morales pueden venderse",
            "Los derechos morales son inalienables e irrenunciables",
            "Los derechos morales solo aplican a obras musicales"
        ],
        correct: 2,
        feedback: "Los derechos morales son perpetuos, inalienables (no pueden venderse), irrenunciables e inembargables. Protegen la relación personal del autor con su obra."
    },
    {
        id: 14,
        question: "¿Qué es la piratería en el contexto de la propiedad intelectual?",
        options: [
            "El robo de barcos en el mar",
            "La reproducción no autorizada de obras protegidas",
            "La venta de productos originales sin factura",
            "El registro de marcas en otros países"
        ],
        correct: 1,
        feedback: "La piratería es la reproducción y distribución ilegal de obras protegidas por derechos de autor sin autorización del titular de los derechos."
    },
    {
        id: 15,
        question: "¿Cuál es la función principal de las sociedades de gestión colectiva?",
        options: [
            "Crear nuevas obras artísticas",
            "Administrar y cobrar los derechos de sus miembros",
            "Otorgar patentes",
            "Perseguir a los piratas"
        ],
        correct: 1,
        feedback: "Las sociedades de gestión colectiva administran los derechos patrimoniales de sus miembros, recaudando y distribuyendo las regalías por el uso de sus obras."
    },
    {
        id: 16,
        question: "¿Qué signo distintivo identifica productos vinculados a una región geográfica específica?",
        options: [
            "Marca colectiva",
            "Nombre comercial",
            "Denominación de origen",
            "Aviso comercial"
        ],
        correct: 2,
        feedback: "La denominación de origen identifica productos cuyas características se deben esencialmente al medio geográfico (natural y humano) de donde provienen, como el Tequila o el Mezcal."
    },
    {
        id: 17,
        question: "¿Cuál de las siguientes acciones constituye una infracción al derecho de integridad?",
        options: [
            "Citar brevemente una obra dando crédito",
            "Modificar una obra de manera que afecte la reputación del autor",
            "Comprar una copia legal de un libro",
            "Leer una obra en público"
        ],
        correct: 1,
        feedback: "El derecho de integridad permite al autor oponerse a modificaciones que perjudiquen su honor o reputación. Alteraciones que deformen la obra violan este derecho moral."
    },
    {
        id: 18,
        question: "¿Qué es el dominio público?",
        options: [
            "Obras que pertenecen al gobierno",
            "Obras cuyos derechos patrimoniales han expirado y pueden usarse libremente",
            "Obras publicadas en internet",
            "Obras con licencia Creative Commons"
        ],
        correct: 1,
        feedback: "El dominio público es el estado jurídico de las obras cuyos derechos patrimoniales han expirado. Estas obras pueden ser utilizadas libremente por cualquier persona."
    },
    {
        id: 19,
        question: "¿Cuánto dura la protección de un diseño industrial en México?",
        options: [
            "10 años",
            "15 años",
            "20 años",
            "25 años"
        ],
        correct: 3,
        feedback: "En México, los diseños industriales tienen una duración de 25 años a partir de la fecha de presentación de la solicitud de registro."
    },
    {
        id: 20,
        question: "¿Cuál es el propósito principal del sistema de propiedad intelectual?",
        options: [
            "Generar ingresos para el gobierno",
            "Fomentar la creatividad y la innovación mediante la protección de las creaciones",
            "Limitar el acceso al conocimiento",
            "Beneficiar exclusivamente a las grandes empresas"
        ],
        correct: 1,
        feedback: "El sistema de PI busca equilibrar los intereses de los creadores con los de la sociedad, incentivando la innovación mediante la protección temporal de las creaciones, a cambio de su eventual difusión pública."
    }
];

// Estado del examen
let examState = {
    currentQuestion: 0,
    answers: {},
    startTime: null,
    endTime: null,
    timeRemaining: 3600, // 60 minutos en segundos
    timerInterval: null,
    attempts: 2,
    bestScore: null,
    isCompleted: false
};

// Inicializar examen
function initExam() {
    // Cargar estado guardado
    const savedState = localStorage.getItem('examState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        examState.attempts = parsed.attempts || 2;
        examState.bestScore = parsed.bestScore;
        examState.isCompleted = parsed.isCompleted || false;
    }
    
    updateExamStatus();
}

// Actualizar estado mostrado
function updateExamStatus() {
    const attemptsEl = document.getElementById('attemptsLeft');
    const bestScoreEl = document.getElementById('bestScore');
    const retryBtn = document.getElementById('retryExamBtn');
    const startBtn = document.getElementById('startExamBtn');
    
    if (attemptsEl) attemptsEl.textContent = examState.attempts;
    if (bestScoreEl) bestScoreEl.textContent = examState.bestScore ? `${examState.bestScore}%` : '-';
    
    if (startBtn) {
        if (examState.attempts <= 0) {
            startBtn.disabled = true;
            startBtn.innerHTML = '<i class="fas fa-lock"></i> Sin intentos disponibles';
        }
    }
    
    if (retryBtn) {
        retryBtn.style.display = examState.attempts > 0 ? 'inline-flex' : 'none';
    }
}

// Iniciar examen
function startExam() {
    if (examState.attempts <= 0) {
        alert('No tienes más intentos disponibles.');
        return;
    }
    
    examState.currentQuestion = 0;
    examState.answers = {};
    examState.startTime = new Date();
    examState.timeRemaining = 3600;
    
    // Ocultar intro, mostrar examen
    document.getElementById('exam-intro').style.display = 'none';
    document.getElementById('exam-results').style.display = 'none';
    document.getElementById('exam-container').style.display = 'block';
    
    // Cargar primera pregunta
    loadQuestion(0);
    
    // Iniciar temporizador
    startTimer();
}

// Temporizador
function startTimer() {
    updateTimerDisplay();
    
    examState.timerInterval = setInterval(() => {
        examState.timeRemaining--;
        updateTimerDisplay();
        
        if (examState.timeRemaining <= 0) {
            clearInterval(examState.timerInterval);
            submitExam();
        }
        
        // Advertencia a los 5 minutos
        if (examState.timeRemaining === 300) {
            alert('¡Atención! Quedan 5 minutos para terminar el examen.');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(examState.timeRemaining / 60);
    const seconds = examState.timeRemaining % 60;
    const timerEl = document.getElementById('timer');
    if (timerEl) {
        timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Cambiar color si queda poco tiempo
        if (examState.timeRemaining <= 300) {
            timerEl.style.color = '#ef4444';
        }
    }
}

// Cargar pregunta
function loadQuestion(index) {
    const question = examQuestions[index];
    const container = document.getElementById('questions-container');
    
    const savedAnswer = examState.answers[question.id];
    
    let optionsHtml = question.options.map((option, i) => `
        <li>
            <label class="option-label ${savedAnswer === i ? 'selected' : ''}">
                <input type="radio" name="question${question.id}" value="${i}" 
                    ${savedAnswer === i ? 'checked' : ''}
                    onchange="selectAnswer(${question.id}, ${i})">
                <span>${option}</span>
            </label>
        </li>
    `).join('');
    
    container.innerHTML = `
        <div class="question-card">
            <h4>Pregunta ${index + 1}: ${question.question}</h4>
            <ul class="options-list">
                ${optionsHtml}
            </ul>
        </div>
    `;
    
    // Actualizar UI
    document.getElementById('currentQuestion').textContent = index + 1;
    document.getElementById('examProgress').style.width = `${((index + 1) / examQuestions.length) * 100}%`;
    
    // Botones de navegación
    document.getElementById('prevQuestion').disabled = index === 0;
    
    if (index === examQuestions.length - 1) {
        document.getElementById('nextQuestion').style.display = 'none';
        document.getElementById('submitExam').style.display = 'inline-flex';
    } else {
        document.getElementById('nextQuestion').style.display = 'inline-flex';
        document.getElementById('submitExam').style.display = 'none';
    }
}

// Seleccionar respuesta
function selectAnswer(questionId, answerIndex) {
    examState.answers[questionId] = answerIndex;
    
    // Actualizar UI
    const labels = document.querySelectorAll('.option-label');
    labels.forEach(label => label.classList.remove('selected'));
    event.target.closest('.option-label').classList.add('selected');
}

// Navegación
function nextQuestion() {
    if (examState.currentQuestion < examQuestions.length - 1) {
        examState.currentQuestion++;
        loadQuestion(examState.currentQuestion);
    }
}

function prevQuestion() {
    if (examState.currentQuestion > 0) {
        examState.currentQuestion--;
        loadQuestion(examState.currentQuestion);
    }
}

// Enviar examen
function submitExam() {
    if (!confirm('¿Estás seguro de que deseas enviar el examen?')) {
        return;
    }
    
    clearInterval(examState.timerInterval);
    examState.endTime = new Date();
    examState.attempts--;
    
    // Calcular resultados
    let correctCount = 0;
    examQuestions.forEach(q => {
        if (examState.answers[q.id] === q.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / examQuestions.length) * 100);
    const passed = score >= 70;
    
    // Actualizar mejor puntuación
    if (!examState.bestScore || score > examState.bestScore) {
        examState.bestScore = score;
    }
    
    // Guardar estado
    localStorage.setItem('examState', JSON.stringify({
        attempts: examState.attempts,
        bestScore: examState.bestScore,
        isCompleted: true
    }));
    
    // Mostrar resultados
    showResults(score, correctCount, passed);
}

// Mostrar resultados
function showResults(score, correctCount, passed) {
    document.getElementById('exam-container').style.display = 'none';
    document.getElementById('exam-results').style.display = 'block';
    
    const resultsIcon = document.getElementById('results-icon');
    const resultsTitle = document.getElementById('results-title');
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreMessage = document.getElementById('scoreMessage');
    
    if (passed) {
        resultsIcon.innerHTML = '<i class="fas fa-trophy"></i>';
        resultsIcon.classList.remove('failed');
        resultsTitle.textContent = '¡Felicidades! Has aprobado';
        scoreCircle.classList.remove('failed');
        scoreMessage.textContent = '¡Excelente trabajo!';
    } else {
        resultsIcon.innerHTML = '<i class="fas fa-times"></i>';
        resultsIcon.classList.add('failed');
        resultsTitle.textContent = 'No has aprobado';
        scoreCircle.classList.add('failed');
        scoreMessage.textContent = 'Necesitas 70% para aprobar';
    }
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctCount;
    
    // Tiempo utilizado
    const timeUsed = Math.floor((examState.endTime - examState.startTime) / 1000);
    const minutes = Math.floor(timeUsed / 60);
    const seconds = timeUsed % 60;
    document.getElementById('timeUsed').textContent = `${minutes}m ${seconds}s`;
    
    updateExamStatus();
}

// Revisar respuestas
function reviewExam() {
    const reviewContainer = document.getElementById('review-container');
    const examReview = document.getElementById('exam-review');
    
    let reviewHtml = '';
    
    examQuestions.forEach((q, index) => {
        const userAnswer = examState.answers[q.id];
        const isCorrect = userAnswer === q.correct;
        
        reviewHtml += `
            <div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">
                <h5>Pregunta ${index + 1}: ${q.question}</h5>
                <div class="review-answer ${isCorrect ? 'correct-answer' : 'user-answer'}">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Tu respuesta: ${userAnswer !== undefined ? q.options[userAnswer] : 'Sin responder'}</span>
                </div>
                ${!isCorrect ? `
                    <div class="review-answer correct-answer">
                        <i class="fas fa-check-circle"></i>
                        <span>Respuesta correcta: ${q.options[q.correct]}</span>
                    </div>
                ` : ''}
                <p style="margin-top: 10px; font-size: 0.9rem; color: #64748b;">
                    <strong>Retroalimentación:</strong> ${q.feedback}
                </p>
            </div>
        `;
    });
    
    reviewContainer.innerHTML = reviewHtml;
    examReview.style.display = 'block';
}

// Descargar resultados
function downloadResults() {
    let correctCount = 0;
    examQuestions.forEach(q => {
        if (examState.answers[q.id] === q.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / examQuestions.length) * 100);
    const passed = score >= 70;
    
    let content = `
RESULTADOS DEL EXAMEN - PROPIEDAD INTELECTUAL
=============================================

Fecha: ${new Date().toLocaleDateString('es-MX')}
Hora: ${new Date().toLocaleTimeString('es-MX')}

CALIFICACIÓN: ${score}%
ESTADO: ${passed ? 'APROBADO' : 'NO APROBADO'}
Respuestas correctas: ${correctCount} de ${examQuestions.length}

---------------------------------------------
DETALLE DE RESPUESTAS
---------------------------------------------

`;

    examQuestions.forEach((q, index) => {
        const userAnswer = examState.answers[q.id];
        const isCorrect = userAnswer === q.correct;
        
        content += `
Pregunta ${index + 1}: ${q.question}
Tu respuesta: ${userAnswer !== undefined ? q.options[userAnswer] : 'Sin responder'}
Respuesta correcta: ${q.options[q.correct]}
Resultado: ${isCorrect ? '✓ CORRECTA' : '✗ INCORRECTA'}
Retroalimentación: ${q.feedback}

`;
    });
    
    content += `
=============================================
Este documento es un comprobante de tu examen.
Curso: Propiedad Intelectual
`;

    // Crear y descargar archivo
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Resultados_Examen_PI_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Reintentar examen
function retryExam() {
    if (examState.attempts <= 0) {
        alert('No tienes más intentos disponibles.');
        return;
    }
    
    document.getElementById('exam-results').style.display = 'none';
    document.getElementById('exam-review').style.display = 'none';
    document.getElementById('exam-intro').style.display = 'block';
    
    updateExamStatus();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initExam();
    
    const startBtn = document.getElementById('startExamBtn');
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const submitBtn = document.getElementById('submitExam');
    const reviewBtn = document.getElementById('reviewExamBtn');
    const downloadBtn = document.getElementById('downloadResultsBtn');
    const retryBtn = document.getElementById('retryExamBtn');
    
    if (startBtn) startBtn.addEventListener('click', startExam);
    if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (submitBtn) submitBtn.addEventListener('click', submitExam);
    if (reviewBtn) reviewBtn.addEventListener('click', reviewExam);
    if (downloadBtn) downloadBtn.addEventListener('click', downloadResults);
    if (retryBtn) retryBtn.addEventListener('click', retryExam);
});

// Exportar funciones
window.examFunctions = {
    startExam,
    submitExam,
    reviewExam,
    downloadResults,
    retryExam,
    selectAnswer
};
