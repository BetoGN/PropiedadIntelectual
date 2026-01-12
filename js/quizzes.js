// ============================================
// SISTEMA DE CUESTIONARIOS POR UNIDAD
// ============================================

// Configuración de cuestionarios
const quizConfig = {
    timePerQuiz: 15, // minutos
    maxAttempts: 2,
    passingScore: 60
};

// Estado de los cuestionarios
let quizState = {
    currentQuiz: null,
    currentQuestion: 0,
    answers: [],
    timeRemaining: 0,
    timerInterval: null,
    attempts: {},
    bestScores: {},
    lastResults: null
};

// =============================================
// FUNCIONES DE LOCALSTORAGE
// =============================================

function saveQuizState() {
    const stateToSave = {
        currentQuiz: quizState.currentQuiz,
        currentQuestion: quizState.currentQuestion,
        answers: quizState.answers,
        timeRemaining: quizState.timeRemaining,
        attempts: quizState.attempts
    };
    localStorage.setItem('quizState', JSON.stringify(stateToSave));
}

function loadQuizState() {
    const saved = localStorage.getItem('quizState');
    if (saved) {
        const parsed = JSON.parse(saved);
        quizState.attempts = parsed.attempts || {};
        // Solo restaurar si hay un quiz en progreso
        if (parsed.currentQuiz && parsed.timeRemaining > 0) {
            quizState.currentQuiz = parsed.currentQuiz;
            quizState.currentQuestion = parsed.currentQuestion;
            quizState.answers = parsed.answers;
            quizState.timeRemaining = parsed.timeRemaining;
        }
    }
}

function saveAnswerToStorage(questionIndex, optionIndex) {
    let answers = JSON.parse(localStorage.getItem('currentQuizAnswers') || '[]');
    answers[questionIndex] = optionIndex;
    localStorage.setItem('currentQuizAnswers', JSON.stringify(answers));
    return answers;
}

function getAnswersFromStorage() {
    return JSON.parse(localStorage.getItem('currentQuizAnswers') || '[]');
}

function clearCurrentQuizAnswers() {
    localStorage.removeItem('currentQuizAnswers');
}

function saveAttempts() {
    localStorage.setItem('quizAttempts', JSON.stringify(quizState.attempts));
}

function loadAttempts() {
    const saved = localStorage.getItem('quizAttempts');
    if (saved) {
        quizState.attempts = JSON.parse(saved);
    }
}

function saveBestScore(unitNumber, score) {
    const currentBest = quizState.bestScores[unitNumber] || 0;
    if (score > currentBest) {
        quizState.bestScores[unitNumber] = score;
        localStorage.setItem('quizBestScores', JSON.stringify(quizState.bestScores));
        console.log(`Nuevo mejor score para Unidad ${unitNumber}: ${score}%`);
    }
}

function loadBestScores() {
    const saved = localStorage.getItem('quizBestScores');
    if (saved) {
        quizState.bestScores = JSON.parse(saved);
    }
}

// Cargar datos al iniciar
loadAttempts();
loadBestScores();

// =============================================
// FUNCIONES PARA GESTIÓN DE UI DE QUIZZES
// =============================================

function updateQuizStartButton(unitNumber) {
    const startBtn = document.getElementById(`quiz${unitNumber}-start-btn`);
    const attemptsInfo = document.getElementById(`quiz${unitNumber}-attempts-info`);
    
    if (!startBtn) return;
    
    loadAttempts();
    loadBestScores();
    
    const attemptsUsed = quizState.attempts[unitNumber] || 0;
    const attemptsRemaining = quizConfig.maxAttempts - attemptsUsed;
    const bestScore = quizState.bestScores[unitNumber];
    
    // Actualizar información de configuración del quiz
    const timeLimitEl = document.getElementById(`quiz${unitNumber}-time-limit`);
    const maxAttemptsEl = document.getElementById(`quiz${unitNumber}-max-attempts`);
    const passingScoreEl = document.getElementById(`quiz${unitNumber}-passing-score`);
    
    if (timeLimitEl) {
        timeLimitEl.textContent = `${quizConfig.timePerQuiz} minutos`;
    }
    if (maxAttemptsEl) {
        maxAttemptsEl.textContent = `${quizConfig.maxAttempts} intentos permitidos`;
    }
    if (passingScoreEl) {
        passingScoreEl.textContent = `Calificación mínima: ${quizConfig.passingScore}%`;
    }
    
    // Actualizar información de intentos
    if (attemptsInfo) {
        let infoHtml = `<p><i class="fas fa-clipboard-check"></i> Intentos disponibles: <strong>${attemptsRemaining}</strong> de ${quizConfig.maxAttempts}</p>`;
        if (bestScore !== undefined && bestScore !== null) {
            infoHtml += `<p><i class="fas fa-trophy"></i> Tu mejor puntuación: <strong>${bestScore}%</strong></p>`;
        }
        attemptsInfo.innerHTML = infoHtml;
    }
    
    // Deshabilitar botón si no quedan intentos
    if (attemptsRemaining <= 0) {
        startBtn.disabled = true;
        startBtn.classList.add('btn-disabled');
        startBtn.innerHTML = '<i class="fas fa-lock"></i> Sin intentos disponibles';
    } else {
        startBtn.disabled = false;
        startBtn.classList.remove('btn-disabled');
        startBtn.innerHTML = '<i class="fas fa-play"></i> Iniciar Cuestionario';
    }
}

// Actualizar botones cuando se carga la página
function initializeQuizButtons() {
    // Actualizar todos los botones de quiz existentes
    for (let i = 1; i <= 5; i++) {
        updateQuizStartButton(i);
    }
}

// Llamar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuizButtons);
} else {
    // DOM ya está cargado, ejecutar después de un pequeño delay para asegurar que el contenido esté renderizado
    setTimeout(initializeQuizButtons, 500);
}

// =============================================
// PREGUNTAS DEL CUESTIONARIO - UNIDAD 1
// Principios del Derecho y Regulación
// =============================================

const quiz1Questions = [
    {
        id: 1,
        question: "¿Qué rama jurídica se enfoca en regular las acciones, procesos, productos y relaciones jurídicas que emergen de la informática?",
        options: [
            "Derecho Civil",
            "Derecho Informático",
            "Derecho Mercantil",
            "Derecho Administrativo"
        ],
        correct: 1,
        feedback: "El Derecho Informático es la rama jurídica especializada que regula todo lo relacionado con la informática y sus aplicaciones, incluyendo el procesamiento de datos, la comunicación digital y la inteligencia artificial."
    },
    {
        id: 2,
        question: "Las normas que obligan a realizar una acción o abstenerse de ella, sin que la voluntad de los particulares pueda modificarlas, se denominan:",
        options: [
            "Normas Dispositivas",
            "Normas Permisivas",
            "Normas Imperativas",
            "Normas Prohibitivas"
        ],
        correct: 2,
        feedback: "Las Normas Imperativas son aquellas de cumplimiento obligatorio que no pueden ser modificadas por la voluntad de las partes. Un ejemplo es la obligación de implementar medidas de seguridad para proteger datos personales."
    },
    {
        id: 3,
        question: "¿Cuál de los siguientes NO es un ejemplo de objeto del derecho en el ámbito informático?",
        options: [
            "El software y código fuente",
            "Los datos personales",
            "La edad del programador",
            "El espectro radioeléctrico"
        ],
        correct: 2,
        feedback: "Los objetos del derecho en el Derecho Informático incluyen elementos inmateriales como la información, el software, el espectro radioeléctrico y los sistemas informáticos. La edad del programador es una característica personal, no un objeto jurídico."
    },
    {
        id: 4,
        question: "Un contrato de suministro de servicios en la nube (cloud computing) entre una empresa y un proveedor tecnológico es un ejemplo de:",
        options: [
            "Contrato Civil",
            "Contrato Laboral",
            "Contrato Mercantil",
            "Contrato Público"
        ],
        correct: 2,
        feedback: "Los Contratos Mercantiles aplican a actos de comercio entre comerciantes. El suministro de servicios de nube o Big Data entre empresas es un acto de comercio regulado por el derecho mercantil."
    },
    {
        id: 5,
        question: "El acceso sin autorización a sistemas informáticos protegidos constituye:",
        options: [
            "Una falta administrativa menor",
            "Un delito informático tipificado en el Código Penal Federal",
            "Una conducta permitida si no hay daño",
            "Una violación contractual únicamente"
        ],
        correct: 1,
        feedback: "El acceso no autorizado a sistemas informáticos protegidos está tipificado como delito en el Código Penal Federal mexicano, con penas de prisión y multas."
    },
    {
        id: 6,
        question: "¿Cuál de los siguientes principios de seguridad informática garantiza que los datos no hayan sido alterados de forma no autorizada?",
        options: [
            "Confidencialidad",
            "Disponibilidad",
            "Integridad",
            "Autenticación"
        ],
        correct: 2,
        feedback: "La Integridad de los Datos garantiza que la información sea precisa y completa, sin haber sido alterada o destruida de forma no autorizada. Es uno de los tres pilares fundamentales de la seguridad informática."
    },
    {
        id: 7,
        question: "El Instituto Federal de Telecomunicaciones (IFT) tiene como función principal:",
        options: [
            "Proteger los derechos de autor en internet",
            "Regular y promover la competencia en telecomunicaciones",
            "Investigar delitos informáticos",
            "Registrar patentes de software"
        ],
        correct: 1,
        feedback: "El IFT es el órgano autónomo encargado de regular las telecomunicaciones y la radiodifusión en México, incluyendo el otorgamiento de concesiones, la promoción de la competencia y la protección de los derechos de los usuarios."
    },
    {
        id: 8,
        question: "Los derechos ARCO permiten a los ciudadanos:",
        options: [
            "Acceder a redes gubernamentales",
            "Acceder, Rectificar, Cancelar y Oponerse al tratamiento de sus datos personales",
            "Registrar obras de su autoría",
            "Apelar resoluciones judiciales"
        ],
        correct: 1,
        feedback: "Los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) son fundamentales para la autodeterminación informativa, permitiendo a las personas controlar el tratamiento de sus datos personales."
    },
    {
        id: 9,
        question: "Según la regulación penal informática en México, la pena por delitos informáticos se AGRAVA cuando:",
        options: [
            "El delito se comete en fin de semana",
            "El responsable es técnico o especialista en sistemas",
            "La víctima es una empresa pequeña",
            "Se utilizan computadoras antiguas"
        ],
        correct: 1,
        feedback: "La pena se agrava significativamente cuando el responsable es un técnico o especialista en el manejo de los sistemas, ya que su conocimiento le otorga mayor responsabilidad y capacidad de causar daño."
    },
    {
        id: 10,
        question: "La Ley General de Transparencia y Acceso a la Información Pública (LGTAIP) tiene como objetivo principal:",
        options: [
            "Regular el comercio electrónico",
            "Proteger las patentes de invención",
            "Garantizar el acceso de los ciudadanos a la información pública",
            "Sancionar los delitos cibernéticos"
        ],
        correct: 2,
        feedback: "La LGTAIP garantiza que cualquier persona pueda acceder a la información pública mediante procedimientos sencillos, promoviendo la transparencia y la rendición de cuentas del gobierno."
    }
];

// =============================================
// CUESTIONARIO UNIDAD 2: PANORAMA GENERAL DE LA PI
// =============================================

const quiz2Questions = [
    {
        question: "¿Cuál es el objeto principal de protección de la Propiedad Intelectual?",
        options: [
            "Las ideas abstractas y conceptos teóricos",
            "La forma en que las ideas se expresan o se aplican",
            "Los bienes materiales y tangibles",
            "Las opiniones personales de los autores"
        ],
        correct: 1,
        feedback: "La PI protege la forma en que las ideas se expresan o se aplican, no las ideas en sí mismas. Es esta expresión o aplicación lo que puede ser protegido legalmente."
    },
    {
        question: "La Teoría Utilitaria o del Incentivo sostiene que la Propiedad Intelectual:",
        options: [
            "Es un derecho natural inherente al creador",
            "Es una extensión de la personalidad del autor",
            "Es un incentivo pragmático otorgado por el Estado a cambio de divulgación",
            "Debe ser permanente y sin límite temporal"
        ],
        correct: 2,
        feedback: "La Teoría Utilitaria argumenta que la PI no es un derecho inherente, sino un incentivo otorgado por el Estado. El monopolio temporal se concede a cambio de la divulgación pública de la invención."
    },
    {
        question: "¿Cuál de las siguientes características de los derechos de PI se refiere a que los derechos se otorgan dentro de las fronteras del país que los concedió?",
        options: [
            "Exclusividad",
            "Temporalidad",
            "Territorialidad",
            "Transferibilidad"
        ],
        correct: 2,
        feedback: "La Territorialidad indica que los derechos de Propiedad Industrial (patentes y marcas) se otorgan y protegen generalmente dentro de las fronteras del país que los concedió."
    },
    {
        question: "En el contexto de la economía digital, ¿qué mecanismo protege el código fuente de un software?",
        options: [
            "Patentes exclusivamente",
            "Derecho de Autor",
            "Secretos de Estado",
            "Tratados internacionales únicamente"
        ],
        correct: 1,
        feedback: "El código fuente puede protegerse por Derecho de Autor, que protege la expresión codificada. Sin embargo, no protege el concepto abstracto, la lógica o el método operativo del software."
    },
    {
        question: "¿Cuál es la principal limitación del Secreto Empresarial como mecanismo de protección para algoritmos de IA?",
        options: [
            "Tiene una duración máxima de 10 años",
            "Requiere divulgación pública obligatoria",
            "Se pierde si se viola la confidencialidad",
            "Solo protege obras literarias"
        ],
        correct: 2,
        feedback: "El Secreto Empresarial ofrece protección potencialmente indefinida, pero su principal limitación es que se pierde completamente si se viola la confidencialidad de la información protegida."
    },
    {
        question: "El Acuerdo ADPIC/TRIPS de la OMC es significativo porque:",
        options: [
            "Eliminó todos los derechos de PI a nivel mundial",
            "Transformó la PI de un asunto de política doméstica a una obligación comercial internacional",
            "Solo aplica a países desarrollados",
            "Prohibió el comercio de software"
        ],
        correct: 1,
        feedback: "El Acuerdo ADPIC/TRIPS estableció un punto de inflexión, transformando la PI de un asunto de política doméstica a una obligación comercial internacional, estableciendo normas mínimas globales de protección."
    },
    {
        question: "¿Qué organismo internacional administra 28 tratados sobre Propiedad Intelectual, incluyendo el PCT?",
        options: [
            "La Organización de las Naciones Unidas (ONU)",
            "La Organización Mundial del Comercio (OMC)",
            "La Organización Mundial de la Propiedad Intelectual (OMPI)",
            "El Fondo Monetario Internacional (FMI)"
        ],
        correct: 2,
        feedback: "La OMPI (WIPO) es la institución global que administra 28 tratados internacionales de PI, incluyendo el Convenio de París, el Convenio de Berna y el Tratado de Cooperación en materia de Patentes (PCT)."
    },
    {
        question: "En una auditoría de PI, la primera fase de diagnóstico consiste en:",
        options: [
            "Presentar demandas contra infractores",
            "Crear un inventario exhaustivo de todos los activos de Capital Intelectual",
            "Vender los activos no rentables",
            "Cancelar todas las patentes existentes"
        ],
        correct: 1,
        feedback: "La primera fase de una auditoría de PI es el diagnóstico legal y financiero, que consiste en crear un inventario exhaustivo de todos los activos de Capital Intelectual de la organización."
    },
    {
        question: "Respecto a la compra de un NFT, es correcto afirmar que:",
        options: [
            "Siempre incluye la transferencia total del copyright de la obra",
            "Representa la titularidad del token digital, pero no necesariamente la transferencia del copyright",
            "Es ilegal en la mayoría de los países",
            "No tiene ninguna relación con la Propiedad Intelectual"
        ],
        correct: 1,
        feedback: "La compra de un NFT representa la titularidad del token digital, pero no necesariamente la transferencia del copyright (derechos patrimoniales) de la obra subyacente. Los creadores deben establecer licencias claras."
    },
    {
        question: "¿Cuál es una consecuencia de un fallo en la cadena de custodia de la PI durante una auditoría?",
        options: [
            "Se incrementa el valor de la empresa",
            "Se reduce drásticamente el valor de la empresa por pérdida del derecho de exclusividad",
            "No tiene ningún efecto significativo",
            "Se obtienen más patentes automáticamente"
        ],
        correct: 1,
        feedback: "Un fallo en la cadena de custodia de la PI o un defecto en la titularidad reduce drásticamente el valor de la empresa, ya que se pierde el derecho fundamental de exclusividad sobre los activos intelectuales."
    }
];

// =============================================
// CUESTIONARIO UNIDAD 3: PROPIEDAD INDUSTRIAL
// =============================================

const quiz3Questions = [
    {
        question: "¿Cuál es el organismo encargado de administrar y proteger los derechos de Propiedad Industrial en México?",
        options: [
            "INDAUTOR",
            "IMPI (Instituto Mexicano de la Propiedad Industrial)",
            "PROFECO",
            "Secretaría de Economía directamente"
        ],
        correct: 1,
        feedback: "El IMPI (Instituto Mexicano de la Propiedad Industrial) es el organismo descentralizado encargado de administrar y proteger los derechos de Propiedad Industrial en México."
    },
    {
        question: "Para que una invención sea patentable, debe cumplir con tres requisitos fundamentales. ¿Cuáles son?",
        options: [
            "Originalidad, creatividad y utilidad",
            "Novedad, actividad inventiva y aplicación industrial",
            "Registro, publicación y divulgación",
            "Diseño, funcionalidad y estética"
        ],
        correct: 1,
        feedback: "Los tres requisitos de patentabilidad son: Novedad (no existir en el estado de la técnica), Actividad Inventiva (no ser obvio para un experto) y Aplicación Industrial (poder fabricarse o utilizarse)."
    },
    {
        question: "¿Cuál es la vigencia de una patente en México?",
        options: [
            "10 años renovables",
            "15 años improrrogables",
            "20 años improrrogables",
            "25 años renovables"
        ],
        correct: 2,
        feedback: "En México, las patentes tienen una vigencia de 20 años improrrogables contados a partir de la fecha de presentación de la solicitud."
    },
    {
        question: "¿Qué diferencia principal existe entre una patente y un modelo de utilidad?",
        options: [
            "El modelo de utilidad protege solo marcas",
            "El modelo de utilidad no requiere actividad inventiva, solo novedad y aplicación industrial",
            "La patente tiene menor duración",
            "El modelo de utilidad protege procedimientos"
        ],
        correct: 1,
        feedback: "A diferencia de las patentes, los modelos de utilidad no requieren actividad inventiva. Basta con que representen una mejora funcional o ventaja técnica sobre lo existente."
    },
    {
        question: "Los diseños industriales protegen:",
        options: [
            "La función técnica de un producto",
            "El proceso de fabricación",
            "La apariencia estética u ornamental de productos industriales",
            "Las fórmulas químicas"
        ],
        correct: 2,
        feedback: "El diseño industrial protege la apariencia estética u ornamental de productos industriales. No protege la función técnica, sino el aspecto visual que hace atractivo un producto."
    },
    {
        question: "¿Cuál es la vigencia de los diseños industriales en México?",
        options: [
            "10 años renovables",
            "15 años improrrogables",
            "20 años improrrogables",
            "25 años improrrogables"
        ],
        correct: 3,
        feedback: "En México, los diseños industriales tienen una vigencia de 25 años improrrogables contados desde la fecha de presentación de la solicitud."
    },
    {
        question: "¿Cuál de los siguientes NO es un tipo de marca reconocido?",
        options: [
            "Marca nominativa",
            "Marca figurativa",
            "Marca algorítmica",
            "Marca sonora"
        ],
        correct: 2,
        feedback: "Los tipos de marcas reconocidos incluyen: nominativas, figurativas, mixtas, tridimensionales, sonoras y de color. No existe el concepto de 'marca algorítmica'."
    },
    {
        question: "¿Cuál es la característica única de las marcas respecto a otros derechos de PI?",
        options: [
            "No requieren registro",
            "Son renovables indefinidamente, pudiendo ser perpetuas",
            "Tienen la duración más corta",
            "Solo protegen en el país de origen"
        ],
        correct: 1,
        feedback: "Las marcas tienen vigencia de 10 años renovables indefinidamente por períodos iguales. Es el único derecho de PI que puede ser perpetuo."
    },
    {
        question: "Para que la información califique como secreto industrial debe cumplir tres requisitos. ¿Cuál NO es uno de ellos?",
        options: [
            "Ser secreta (no generalmente conocida)",
            "Tener valor comercial por su carácter secreto",
            "Estar registrada ante el IMPI",
            "Haber tomado medidas razonables para mantenerla secreta"
        ],
        correct: 2,
        feedback: "El secreto industrial NO requiere registro. Los tres requisitos son: ser secreta, tener valor comercial por su carácter secreto, y que el titular haya tomado medidas razonables para mantenerla secreta."
    },
    {
        question: "¿Cuál es una ventaja del secreto industrial sobre la patente?",
        options: [
            "Protege contra la ingeniería inversa",
            "Tiene duración potencialmente indefinida",
            "Es más fácil de defender en tribunales",
            "Requiere divulgación pública"
        ],
        correct: 1,
        feedback: "El secreto industrial puede tener duración potencialmente indefinida, siempre que se mantenga la confidencialidad. A diferencia de la patente (20 años máximo), no tiene límite temporal."
    }
];

// Preguntas del Quiz 4: Derechos de Autor
const quiz4Questions = [
    {
        question: "¿Qué protege el Derecho de Autor?",
        options: [
            "Las ideas y conceptos abstractos",
            "La forma de expresión original de las ideas",
            "Los procedimientos y métodos",
            "Los descubrimientos científicos"
        ],
        correct: 1,
        feedback: "El Derecho de Autor protege la forma de expresión original de las ideas, no las ideas en sí mismas. Una idea no es protegible, pero la forma específica en que se expresa sí lo es."
    },
    {
        question: "¿Cuáles son características de los derechos morales?",
        options: [
            "Temporales, transferibles y embargables",
            "Perpetuos, inalienables e irrenunciables",
            "Limitados a 100 años después de la muerte del autor",
            "Cedibles mediante contrato de licencia"
        ],
        correct: 1,
        feedback: "Los derechos morales son perpetuos, inalienables (no pueden venderse), irrenunciables, inembargables e imprescriptibles. Protegen el vínculo personal entre el autor y su obra."
    },
    {
        question: "¿Cuánto dura la protección de los derechos patrimoniales en México para obras de autor individual?",
        options: [
            "Vida del autor + 50 años",
            "Vida del autor + 70 años",
            "Vida del autor + 100 años",
            "100 años desde la creación"
        ],
        correct: 2,
        feedback: "En México, los derechos patrimoniales duran la vida del autor más 100 años. Es uno de los plazos más largos del mundo."
    },
    {
        question: "¿Qué es el derecho de integridad?",
        options: [
            "Derecho a ser reconocido como autor de la obra",
            "Derecho a decidir si la obra se hace pública",
            "Derecho a oponerse a modificaciones que dañen el honor del autor",
            "Derecho a retirar la obra del comercio"
        ],
        correct: 2,
        feedback: "El derecho de integridad permite al autor oponerse a modificaciones, mutilaciones o deformaciones que puedan dañar su honor o reputación, o que demeriten la obra."
    },
    {
        question: "¿Cuál de las siguientes NO es una excepción al Derecho de Autor en México?",
        options: [
            "Cita con fines de crítica o comentario",
            "Reproducción para uso educativo sin lucro",
            "Uso comercial sin autorización si se menciona la fuente",
            "Copia privada para uso personal"
        ],
        correct: 2,
        feedback: "El uso comercial SÍ requiere autorización del titular. Las excepciones como cita, uso educativo y copia privada no permiten fines de lucro."
    },
    {
        question: "¿Qué es el copyleft?",
        options: [
            "Una forma de renunciar a todos los derechos de autor",
            "Un mecanismo que obliga a compartir obras derivadas bajo la misma licencia",
            "Una licencia que prohíbe cualquier modificación",
            "Un tipo de patente para software"
        ],
        correct: 1,
        feedback: "El copyleft usa el Derecho de Autor para garantizar que una obra y sus derivados permanezcan libres. Si usas código con copyleft, debes compartir tu código bajo la misma licencia."
    },
    {
        question: "¿Cuál licencia Creative Commons es la más permisiva?",
        options: [
            "CC BY-NC-ND",
            "CC BY-SA",
            "CC BY",
            "CC BY-NC"
        ],
        correct: 2,
        feedback: "CC BY (atribución) es la más permisiva: solo requiere dar crédito al autor. Permite uso comercial y obras derivadas sin restricciones adicionales."
    },
    {
        question: "¿Qué característica tiene la licencia GPL para software?",
        options: [
            "Es una licencia permisiva sin copyleft",
            "Tiene copyleft fuerte, requiere liberar código derivado",
            "Solo permite uso no comercial",
            "Prohíbe la modificación del código"
        ],
        correct: 1,
        feedback: "La GPL (General Public License) tiene copyleft fuerte. Si usas código GPL en un proyecto, debes liberar todo el código derivado bajo la misma licencia."
    },
    {
        question: "¿Cuál es el papel del INDAUTOR en México?",
        options: [
            "Registrar marcas y patentes",
            "Proteger y fomentar el derecho de autor",
            "Perseguir penalmente la piratería",
            "Regular el comercio electrónico"
        ],
        correct: 1,
        feedback: "El Instituto Nacional del Derecho de Autor (INDAUTOR) es la autoridad administrativa responsable de proteger y fomentar el derecho de autor en México."
    },
    {
        question: "¿Qué diferencia hay entre cesión y licencia de derechos?",
        options: [
            "Son términos equivalentes",
            "La cesión transfiere la titularidad, la licencia solo autoriza el uso",
            "La licencia es perpetua, la cesión es temporal",
            "Solo la licencia requiere contrato escrito"
        ],
        correct: 1,
        feedback: "La cesión transfiere la titularidad de los derechos patrimoniales al cesionario. La licencia solo autoriza ciertos usos sin transferir la titularidad, que permanece con el autor."
    }
];

// Preguntas Unidad 5: Protección y Aplicación de la PI
const quiz5Questions = [
    {
        question: "¿Cuál es la diferencia principal entre piratería y falsificación?",
        options: [
            "Son sinónimos que se usan indistintamente",
            "La piratería afecta derechos de autor; la falsificación afecta marcas registradas",
            "La falsificación solo aplica a productos físicos, la piratería solo a digitales",
            "La piratería es legal para uso personal, la falsificación nunca"
        ],
        correct: 1,
        feedback: "La piratería se refiere a la reproducción no autorizada de obras protegidas por derecho de autor (software, música, películas), mientras que la falsificación implica usar marcas registradas sin autorización para hacer pasar productos como originales."
    },
    {
        question: "¿Qué autoridad mexicana es competente para conocer infracciones a marcas registradas?",
        options: [
            "INDAUTOR",
            "PROFECO",
            "IMPI",
            "Secretaría de Economía"
        ],
        correct: 2,
        feedback: "El Instituto Mexicano de la Propiedad Industrial (IMPI) es la autoridad competente para marcas, patentes, diseños industriales y secretos industriales. INDAUTOR se encarga de derechos de autor."
    },
    {
        question: "¿Cuántos días hábiles tiene el presunto infractor para contestar una solicitud de declaración administrativa ante el IMPI?",
        options: [
            "5 días hábiles",
            "10 días hábiles",
            "15 días hábiles",
            "30 días hábiles"
        ],
        correct: 1,
        feedback: "El presunto infractor tiene 10 días hábiles para contestar la solicitud de declaración administrativa, ofrecer pruebas y presentar sus argumentos de defensa."
    },
    {
        question: "¿Cuál de las siguientes NO es una sanción que puede imponer el IMPI?",
        options: [
            "Multa de hasta 500,000 UMAs",
            "Clausura temporal del establecimiento",
            "Prisión de hasta 10 años",
            "Decomiso de productos infractores"
        ],
        correct: 2,
        feedback: "El IMPI es una autoridad administrativa y solo puede imponer sanciones administrativas como multas, clausuras y decomisos. Las penas de prisión solo pueden ser impuestas por autoridades judiciales penales."
    },
    {
        question: "En materia civil, ¿cuál método de cuantificación de daños implica calcular lo que un licenciatario habría pagado por usar legalmente el derecho?",
        options: [
            "Ganancias perdidas",
            "Beneficios del infractor",
            "Regalía razonable",
            "Daños estatutarios"
        ],
        correct: 2,
        feedback: "La regalía razonable es el monto que un licenciatario hipotético habría pagado por usar legalmente el derecho. Se usa cuando las ganancias perdidas son difíciles de probar directamente."
    },
    {
        question: "¿Qué significa que la mayoría de los delitos contra la PI sean de 'querella'?",
        options: [
            "Que se persiguen automáticamente por las autoridades",
            "Que requieren que el titular presente formalmente la denuncia",
            "Que solo pueden denunciarse ante tribunales federales",
            "Que no tienen penas de prisión"
        ],
        correct: 1,
        feedback: "Los delitos de querella requieren que el titular del derecho afectado presente formalmente la denuncia para que el Ministerio Público pueda iniciar la investigación. Sin querella del afectado, no hay persecución."
    },
    {
        question: "¿Qué son las Medidas Tecnológicas de Protección (MTP)?",
        options: [
            "Leyes que protegen a los creadores de tecnología",
            "Mecanismos técnicos para controlar el acceso y uso de obras protegidas",
            "Seguros contra robo de propiedad intelectual",
            "Certificaciones de calidad para software"
        ],
        correct: 1,
        feedback: "Las MTP (también conocidas como DRM) son mecanismos técnicos diseñados para controlar el acceso y uso de obras protegidas por derecho de autor, como cifrado, contraseñas, códigos de región, etc."
    },
    {
        question: "¿Cuál de las siguientes es una excepción legal válida para eludir medidas tecnológicas de protección?",
        options: [
            "Para uso personal ya que el usuario pagó por el producto",
            "Para investigación en criptografía y seguridad informática",
            "Cuando el DRM es muy restrictivo o molesto",
            "Para compartir contenido con familiares"
        ],
        correct: 1,
        feedback: "La investigación en criptografía y seguridad informática es una de las pocas excepciones legales para eludir MTP. Las otras opciones, aunque puedan parecer razonables, no están contempladas como excepciones legales."
    },
    {
        question: "¿Qué tipo de licencia se requiere para usar una canción en un comercial de televisión?",
        options: [
            "Licencia de ejecución pública",
            "Licencia mecánica",
            "Licencia de sincronización",
            "Licencia de reproducción"
        ],
        correct: 2,
        feedback: "La licencia de sincronización es necesaria cuando se usa música junto con imágenes (comerciales, películas, videojuegos). Esta licencia no está cubierta por las sociedades de gestión colectiva y debe negociarse directamente con el titular."
    },
    {
        question: "¿Cuál de las siguientes es una estrategia preventiva recomendada para proteger la propiedad intelectual empresarial?",
        options: [
            "Evitar registrar marcas para mantener secreto el nombre",
            "Firmar NDAs (acuerdos de confidencialidad) con empleados y realizar auditorías de PI",
            "Publicar todas las invenciones inmediatamente para establecer prioridad",
            "Usar solo software de código abierto para evitar problemas de licencias"
        ],
        correct: 1,
        feedback: "Los acuerdos de confidencialidad (NDA) con empleados y las auditorías periódicas de activos de PI son estrategias preventivas fundamentales para proteger la propiedad intelectual de una empresa."
    }
];

// Almacenar preguntas por unidad
const quizzesByUnit = {
    1: quiz1Questions,
    2: quiz2Questions,
    3: quiz3Questions,
    4: quiz4Questions,
    5: quiz5Questions
};

// =============================================
// FUNCIONES DEL SISTEMA DE CUESTIONARIOS
// =============================================

function startQuiz(unitNumber) {
    const questions = quizzesByUnit[unitNumber];
    if (!questions) {
        alert('Cuestionario no disponible');
        return;
    }
    
    // Cargar intentos desde localStorage
    loadAttempts();
    
    // Verificar intentos
    const attempts = quizState.attempts[unitNumber] || 0;
    if (attempts >= quizConfig.maxAttempts) {
        alert(`Has agotado tus ${quizConfig.maxAttempts} intentos para este cuestionario.`);
        return;
    }
    
    // Inicializar estado
    quizState.currentQuiz = unitNumber;
    quizState.currentQuestion = 0;
    quizState.answers = new Array(questions.length).fill(null);
    quizState.timeRemaining = quizConfig.timePerQuiz * 60;
    
    // Limpiar respuestas anteriores en localStorage
    clearCurrentQuizAnswers();
    
    // Ocultar sección de inicio y mostrar preguntas
    document.getElementById(`quiz${unitNumber}-start`).style.display = 'none';
    document.getElementById(`quiz${unitNumber}-results`).style.display = 'none';
    document.getElementById(`quiz${unitNumber}-container`).style.display = 'block';
    
    // Renderizar preguntas
    renderQuizQuestions(unitNumber, questions);
    
    // Iniciar temporizador
    startQuizTimer(unitNumber);
    
    console.log('Quiz iniciado para unidad:', unitNumber);
    console.log('Array de respuestas inicializado:', quizState.answers);
}

function renderQuizQuestions(unitNumber, questions) {
    const container = document.getElementById(`quiz${unitNumber}-container`);
    
    let html = `
        <div class="quiz-timer">
            <i class="fas fa-clock"></i>
            <span id="quiz${unitNumber}-timer">15:00</span>
        </div>
        <div class="quiz-progress">
            <div class="progress-bar">
                <div class="progress-fill" id="quiz${unitNumber}-progress" style="width: 0%"></div>
            </div>
            <span class="progress-text">Pregunta <span id="quiz${unitNumber}-current">1</span> de ${questions.length}</span>
        </div>
    `;
    
    questions.forEach((q, index) => {
        html += `
            <div class="quiz-question ${index === 0 ? 'active' : ''}" data-question="${index}">
                <div class="question-number">Pregunta ${index + 1}</div>
                <div class="question-text">${q.question}</div>
                <div class="question-options">
                    ${q.options.map((opt, optIndex) => `
                        <div class="option-label" data-option="${optIndex}" data-question="${index}" role="button" tabindex="0">
                            <input type="radio" name="q${unitNumber}_${index}" value="${optIndex}" style="display:none;">
                            <span class="option-marker">${String.fromCharCode(65 + optIndex)}</span>
                            <span class="option-text">${opt}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += `
        <div class="quiz-navigation">
            <button class="btn-secondary" id="quiz${unitNumber}-prev" onclick="navigateQuestion(${unitNumber}, -1)" disabled>
                <i class="fas fa-arrow-left"></i> Anterior
            </button>
            <button class="btn-secondary" id="quiz${unitNumber}-next" onclick="navigateQuestion(${unitNumber}, 1)">
                Siguiente <i class="fas fa-arrow-right"></i>
            </button>
            <button class="btn-primary" id="quiz${unitNumber}-submit" onclick="submitQuiz(${unitNumber})" style="display: none;">
                <i class="fas fa-check"></i> Enviar Cuestionario
            </button>
        </div>
        
        <div class="quiz-question-nav">
            <span>Ir a pregunta:</span>
            <div class="question-dots">
                ${questions.map((_, i) => `
                    <button class="question-dot ${i === 0 ? 'current' : ''}" 
                            data-index="${i}" 
                            onclick="goToQuestion(${unitNumber}, ${i})">
                        ${i + 1}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Usar event delegation en el contenedor para capturar clics en opciones
    container.onclick = function(e) {
        const option = e.target.closest('.option-label');
        if (option) {
            const questionIndex = parseInt(option.dataset.question);
            const optIndex = parseInt(option.dataset.option);
            handleOptionClick(unitNumber, questionIndex, optIndex);
        }
    };
    
    console.log('Quiz renderizado. Event delegation configurado.');
}

// Función separada para manejar el clic en una opción
function handleOptionClick(unitNumber, questionIndex, optionIndex) {
    console.log(`Click detectado: Unidad ${unitNumber}, Pregunta ${questionIndex + 1}, Opción ${optionIndex}`);
    
    // Guardar respuesta en localStorage (fuente de verdad)
    const answers = saveAnswerToStorage(questionIndex, optionIndex);
    
    // También actualizar el estado en memoria
    quizState.answers[questionIndex] = optionIndex;
    
    console.log('Respuestas actualizadas:', answers);
    
    // Actualizar UI
    updateOptionUI(unitNumber, questionIndex, optionIndex);
}

// Función para actualizar la UI cuando se selecciona una opción
function updateOptionUI(unitNumber, questionIndex, optionIndex) {
    const container = document.getElementById(`quiz${unitNumber}-container`);
    if (!container) return;
    
    // Marcar pregunta como respondida en la navegación
    const dots = container.querySelectorAll('.question-dot');
    if (dots[questionIndex]) {
        dots[questionIndex].classList.add('answered');
    }
    
    // Actualizar estilo de opciones
    const questionElement = container.querySelector(`.quiz-question[data-question="${questionIndex}"]`);
    if (questionElement) {
        const options = questionElement.querySelectorAll('.option-label');
        options.forEach((opt, idx) => {
            opt.classList.remove('selected');
            if (idx === optionIndex) {
                opt.classList.add('selected');
            }
        });
    }
}

// Mantener selectAnswer por compatibilidad
function selectAnswer(unitNumber, questionIndex, optionIndex) {
    handleOptionClick(unitNumber, questionIndex, optionIndex);
}

function navigateQuestion(unitNumber, direction) {
    const questions = quizzesByUnit[unitNumber];
    const newIndex = quizState.currentQuestion + direction;
    
    if (newIndex >= 0 && newIndex < questions.length) {
        showQuestion(unitNumber, newIndex);
    }
}

function goToQuestion(unitNumber, index) {
    showQuestion(unitNumber, index);
}

function showQuestion(unitNumber, index) {
    const questions = quizzesByUnit[unitNumber];
    quizState.currentQuestion = index;
    
    // Ocultar todas las preguntas y mostrar la actual
    document.querySelectorAll(`#quiz${unitNumber}-container .quiz-question`).forEach((q, i) => {
        q.classList.toggle('active', i === index);
    });
    
    // Actualizar dots de navegación
    document.querySelectorAll(`#quiz${unitNumber}-container .question-dot`).forEach((dot, i) => {
        dot.classList.toggle('current', i === index);
    });
    
    // Actualizar progreso
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById(`quiz${unitNumber}-progress`).style.width = `${progress}%`;
    document.getElementById(`quiz${unitNumber}-current`).textContent = index + 1;
    
    // Actualizar botones de navegación
    document.getElementById(`quiz${unitNumber}-prev`).disabled = index === 0;
    
    const nextBtn = document.getElementById(`quiz${unitNumber}-next`);
    const submitBtn = document.getElementById(`quiz${unitNumber}-submit`);
    
    if (index === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

function startQuizTimer(unitNumber) {
    updateTimerDisplay(unitNumber);
    
    quizState.timerInterval = setInterval(() => {
        quizState.timeRemaining--;
        updateTimerDisplay(unitNumber);
        
        if (quizState.timeRemaining <= 0) {
            clearInterval(quizState.timerInterval);
            submitQuiz(unitNumber, true);
        }
    }, 1000);
}

function updateTimerDisplay(unitNumber) {
    const minutes = Math.floor(quizState.timeRemaining / 60);
    const seconds = quizState.timeRemaining % 60;
    const timerElement = document.getElementById(`quiz${unitNumber}-timer`);
    
    if (timerElement) {
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (quizState.timeRemaining <= 60) {
            timerElement.parentElement.classList.add('timer-warning');
        }
    }
}

function submitQuiz(unitNumber, timeUp = false) {
    clearInterval(quizState.timerInterval);
    
    const questions = quizzesByUnit[unitNumber];
    let correctCount = 0;
    const results = [];
    
    // IMPORTANTE: Leer respuestas desde localStorage (fuente de verdad)
    const savedAnswers = getAnswersFromStorage();
    console.log('Enviando cuestionario...');
    console.log('Respuestas desde localStorage:', savedAnswers);
    console.log('Respuestas desde quizState:', quizState.answers);
    
    // Usar las respuestas de localStorage si existen, si no usar quizState
    const answersToUse = savedAnswers.length > 0 ? savedAnswers : quizState.answers;
    console.log('Respuestas a evaluar:', answersToUse);
    
    questions.forEach((q, index) => {
        const userAnswer = answersToUse[index];
        const isCorrect = userAnswer === q.correct;
        if (isCorrect) correctCount++;
        
        console.log(`Pregunta ${index + 1}: respuesta=${userAnswer}, correcta=${q.correct}, isCorrect=${isCorrect}`);
        
        results.push({
            question: q.question,
            userAnswer: userAnswer !== null && userAnswer !== undefined ? q.options[userAnswer] : 'Sin respuesta',
            correctAnswer: q.options[q.correct],
            isCorrect: isCorrect,
            feedback: q.feedback
        });
    });
    
    const score = Math.round((correctCount / questions.length) * 100);
    const passed = score >= quizConfig.passingScore;
    
    // Incrementar intentos y guardar en localStorage
    quizState.attempts[unitNumber] = (quizState.attempts[unitNumber] || 0) + 1;
    saveAttempts();
    
    // Guardar mejor puntuación
    saveBestScore(unitNumber, score);
    
    // Limpiar respuestas del quiz actual
    clearCurrentQuizAnswers();
    
    // Actualizar quizState.answers para la descarga de resultados
    quizState.answers = answersToUse;
    
    // Guardar resultados para descarga
    quizState.lastResults = {
        unitNumber,
        score,
        correctCount,
        total: questions.length,
        passed,
        results,
        date: new Date().toLocaleString()
    };
    
    // Mostrar resultados
    displayQuizResults(unitNumber, score, correctCount, questions.length, passed, results, timeUp);
}

function displayQuizResults(unitNumber, score, correct, total, passed, results, timeUp) {
    document.getElementById(`quiz${unitNumber}-container`).style.display = 'none';
    const resultsContainer = document.getElementById(`quiz${unitNumber}-results`);
    resultsContainer.style.display = 'block';
    
    const attemptsUsed = quizState.attempts[unitNumber];
    const attemptsRemaining = quizConfig.maxAttempts - attemptsUsed;
    const bestScore = quizState.bestScores[unitNumber] || score;
    
    // Crear indicadores minimalistas de estado por pregunta
    let questionIndicators = '<div class="question-indicators">';
    results.forEach((r, index) => {
        let statusClass = 'unanswered';
        let statusIcon = 'fa-minus';
        if (r.userAnswer !== 'Sin respuesta') {
            statusClass = r.isCorrect ? 'correct' : 'incorrect';
            statusIcon = r.isCorrect ? 'fa-check' : 'fa-times';
        }
        questionIndicators += `
            <div class="indicator ${statusClass}" title="Pregunta ${index + 1}: ${r.isCorrect ? 'Correcta' : r.userAnswer === 'Sin respuesta' ? 'Sin respuesta' : 'Incorrecta'}">
                <span class="indicator-number">${index + 1}</span>
            </div>
        `;
    });
    questionIndicators += '</div>';
    
    let html = `
        <div class="results-header ${passed ? 'passed' : 'failed'}">
            <div class="results-icon">
                <i class="fas ${passed ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            </div>
            <h3>${passed ? '¡Felicidades!' : 'Cuestionario no aprobado'}</h3>
            <p>${timeUp ? 'El tiempo ha terminado. ' : ''}${passed ? 'Has aprobado el cuestionario.' : 'No alcanzaste la calificación mínima.'}</p>
        </div>
        
        <div class="results-score">
            <div class="score-circle ${passed ? 'passed' : 'failed'}">
                <span class="score-number">${score}%</span>
            </div>
            <div class="score-details">
                <p><strong>${correct}</strong> de <strong>${total}</strong> respuestas correctas</p>
                <p>Calificación mínima: ${quizConfig.passingScore}%</p>
                <p>Mejor puntuación: ${bestScore}%</p>
                <p>Intentos utilizados: ${attemptsUsed} de ${quizConfig.maxAttempts}</p>
            </div>
        </div>
        
        <div class="results-summary">
            <h4><i class="fas fa-th"></i> Resumen de Respuestas</h4>
            <div class="indicators-legend">
                <span class="legend-item"><span class="legend-dot correct"></span> Correcta</span>
                <span class="legend-item"><span class="legend-dot incorrect"></span> Incorrecta</span>
                <span class="legend-item"><span class="legend-dot unanswered"></span> Sin respuesta</span>
            </div>
            ${questionIndicators}
        </div>
        
        <div class="results-actions">
    `;
    
    // Mostrar botón de reintento si no tiene 100% y quedan intentos
    if (score < 100 && attemptsRemaining > 0) {
        html += `
            <button class="btn-primary" onclick="retryQuiz(${unitNumber})">
                <i class="fas fa-redo"></i> Intentar de nuevo (${attemptsRemaining} intento${attemptsRemaining > 1 ? 's' : ''} restante${attemptsRemaining > 1 ? 's' : ''})
            </button>
        `;
    } else if (attemptsRemaining <= 0) {
        html += `
            <div class="no-attempts-message">
                <i class="fas fa-info-circle"></i> Has agotado todos tus intentos para este cuestionario.
            </div>
        `;
    }
    
    html += `
            <button class="btn-secondary" onclick="downloadQuizResults(${unitNumber})">
                <i class="fas fa-download"></i> Descargar Comprobante
            </button>
        </div>
    `;
    
    resultsContainer.innerHTML = html;
}

function retryQuiz(unitNumber) {
    document.getElementById(`quiz${unitNumber}-results`).style.display = 'none';
    document.getElementById(`quiz${unitNumber}-start`).style.display = 'block';
    // Actualizar el botón de inicio con los intentos restantes
    updateQuizStartButton(unitNumber);
}

function downloadQuizResults(unitNumber) {
    const results = quizState.lastResults;
    if (!results) {
        alert('No hay resultados disponibles para descargar.');
        return;
    }
    
    // Crear canvas para generar imagen
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Configurar dimensiones
    const width = 600;
    const height = 450;
    canvas.width = width;
    canvas.height = height;
    
    // Fondo
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);
    
    // Header con gradiente
    const headerGradient = ctx.createLinearGradient(0, 0, width, 80);
    headerGradient.addColorStop(0, '#4361ee');
    headerGradient.addColorStop(1, '#7209b7');
    ctx.fillStyle = headerGradient;
    ctx.fillRect(0, 0, width, 80);
    
    // Título
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Comprobante de Evaluación', width / 2, 35);
    
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText(`Unidad ${results.unitNumber} - Propiedad Intelectual`, width / 2, 60);
    
    // Información del estudiante
    ctx.fillStyle = '#e0e0e0';
    ctx.font = '14px Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Fecha: ${results.date}`, 30, 110);
    
    // Score grande en círculo
    const centerX = width / 2;
    const centerY = 200;
    const radius = 60;
    
    // Círculo de fondo
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = results.passed ? '#10b981' : '#ef4444';
    ctx.fill();
    
    // Score texto
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${results.score}%`, centerX, centerY);
    
    // Estado
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillStyle = results.passed ? '#10b981' : '#ef4444';
    ctx.fillText(results.passed ? 'APROBADO' : 'NO APROBADO', centerX, centerY + 90);
    
    // Detalles
    ctx.fillStyle = '#a0a0a0';
    ctx.font = '14px Arial, sans-serif';
    ctx.fillText(`${results.correctCount} de ${results.total} respuestas correctas`, centerX, centerY + 115);
    
    // Indicadores de preguntas
    ctx.fillStyle = '#e0e0e0';
    ctx.font = 'bold 14px Arial, sans-serif';
    ctx.fillText('Resumen de respuestas:', centerX, 330);
    
    // Dibujar indicadores minimalistas
    const indicatorSize = 28;
    const spacing = 8;
    const totalWidth = results.results.length * (indicatorSize + spacing) - spacing;
    let startX = (width - totalWidth) / 2;
    const indicatorY = 355;
    
    results.results.forEach((r, index) => {
        const x = startX + index * (indicatorSize + spacing);
        
        // Color según estado
        let color;
        if (r.userAnswer === 'Sin respuesta') {
            color = '#6b7280'; // gris
        } else if (r.isCorrect) {
            color = '#10b981'; // verde
        } else {
            color = '#ef4444'; // rojo
        }
        
        // Círculo indicador
        ctx.beginPath();
        ctx.arc(x + indicatorSize / 2, indicatorY, indicatorSize / 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Número
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(index + 1), x + indicatorSize / 2, indicatorY);
    });
    
    // Leyenda
    const legendY = 405;
    ctx.font = '11px Arial, sans-serif';
    ctx.textAlign = 'left';
    
    // Correcta
    ctx.beginPath();
    ctx.arc(150, legendY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#10b981';
    ctx.fill();
    ctx.fillStyle = '#a0a0a0';
    ctx.fillText('Correcta', 162, legendY + 4);
    
    // Incorrecta
    ctx.beginPath();
    ctx.arc(260, legendY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    ctx.fillStyle = '#a0a0a0';
    ctx.fillText('Incorrecta', 272, legendY + 4);
    
    // Sin respuesta
    ctx.beginPath();
    ctx.arc(380, legendY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#6b7280';
    ctx.fill();
    ctx.fillStyle = '#a0a0a0';
    ctx.fillText('Sin respuesta', 392, legendY + 4);
    
    // Pie de página
    ctx.fillStyle = '#4a4a6a';
    ctx.font = '10px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Este comprobante no incluye respuestas correctas por políticas académicas.', width / 2, height - 15);
    
    // Descargar como imagen
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `comprobante_unidad${unitNumber}_${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 'image/png');
}

// Exportar funciones globalmente
window.startQuiz = startQuiz;
window.selectAnswer = selectAnswer;
window.handleOptionClick = handleOptionClick;
window.navigateQuestion = navigateQuestion;
window.goToQuestion = goToQuestion;
window.submitQuiz = submitQuiz;
window.retryQuiz = retryQuiz;
window.downloadQuizResults = downloadQuizResults;
window.updateQuizStartButton = updateQuizStartButton;
window.initializeQuizButtons = initializeQuizButtons;

// Log para confirmar que el script se cargó correctamente
console.log('✅ Sistema de cuestionarios cargado. localStorage habilitado para persistencia.');
