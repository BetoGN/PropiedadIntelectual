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
// CUESTIONARIO UNIDAD 3: LEGISLACIÓN DE LA PROPIEDAD INTELECTUAL
// =============================================

const quiz3Questions = [
    {
        question: "¿Qué ley regula la protección de los derechos de autor en México?",
        options: [
            "Ley Federal de Protección a la Propiedad Industrial",
            "Ley General de Transparencia",
            "Ley Federal del Derecho de Autor (LFDA)",
            "Código Civil Federal"
        ],
        correct: 2,
        feedback: "La Ley Federal del Derecho de Autor (LFDA) es el ordenamiento jurídico que regula la protección de las obras literarias, artísticas y demás creaciones protegidas por el Derecho de Autor en México."
    },
    {
        question: "¿En qué año fue publicada la Ley Federal de Protección a la Propiedad Industrial (LFPPI)?",
        options: [
            "1991",
            "2000",
            "2020",
            "2015"
        ],
        correct: 2,
        feedback: "La LFPPI fue publicada el 1 de julio de 2020, sustituyendo a la anterior Ley de la Propiedad Industrial (LPI) de 1991."
    },
    {
        question: "¿Cuál de las siguientes NO es una novedad introducida por la LFPPI de 2020?",
        options: [
            "Indicaciones geográficas",
            "Marcas de certificación",
            "Patentes de 30 años",
            "Marcas no tradicionales (sonoras, olfativas)"
        ],
        correct: 2,
        feedback: "La LFPPI no modificó la vigencia de las patentes, que sigue siendo de 20 años. Las novedades incluyen indicaciones geográficas, marcas de certificación y marcas no tradicionales."
    },
    {
        question: "¿Qué acto se considera competencia desleal?",
        options: [
            "Registrar una marca similar a la de un competidor",
            "Ofrecer precios más bajos que la competencia",
            "Imitación de signos distintivos para causar confusión",
            "Lanzar productos innovadores al mercado"
        ],
        correct: 2,
        feedback: "La imitación de signos distintivos para causar confusión es un acto de competencia desleal. Ofrecer mejores precios o innovar son prácticas comerciales legítimas."
    },
    {
        question: "¿Qué artículo del Convenio de París establece obligaciones internacionales de protección contra competencia desleal?",
        options: [
            "Artículo 6",
            "Artículo 10bis",
            "Artículo 15",
            "Artículo 1"
        ],
        correct: 1,
        feedback: "El artículo 10bis del Convenio de París establece las obligaciones internacionales de los países miembros para proteger contra actos de competencia desleal."
    },
    {
        question: "¿Cuántos Estados miembros tiene actualmente la OMPI?",
        options: [
            "150 Estados",
            "175 Estados",
            "193 Estados",
            "210 Estados"
        ],
        correct: 2,
        feedback: "La Organización Mundial de la Propiedad Intelectual (OMPI) cuenta actualmente con 193 Estados miembros, siendo un organismo especializado de las Naciones Unidas."
    },
    {
        question: "¿Desde qué año es México miembro de la OMPI?",
        options: [
            "1967",
            "1975",
            "1986",
            "1994"
        ],
        correct: 1,
        feedback: "México es miembro de la OMPI desde 1975 y participa activamente en sus tratados y programas internacionales."
    },
    {
        question: "¿Qué sistema administrado por la OMPI permite solicitar protección de patentes en múltiples países con una sola solicitud?",
        options: [
            "Sistema de Madrid",
            "Sistema PCT (Tratado de Cooperación en materia de Patentes)",
            "Sistema de La Haya",
            "Sistema de Lisboa"
        ],
        correct: 1,
        feedback: "El Sistema PCT (Tratado de Cooperación en materia de Patentes) permite solicitar protección de patentes en múltiples países con una sola solicitud internacional."
    },
    {
        question: "¿Cuál es la diferencia principal entre el IMPI e INDAUTOR en cuanto al efecto del registro?",
        options: [
            "El IMPI es federal y el INDAUTOR es estatal",
            "El registro en IMPI es constitutivo (crea el derecho), mientras que en INDAUTOR es declarativo (reconoce el derecho)",
            "El INDAUTOR solo registra software",
            "No hay diferencia, ambos son constitutivos"
        ],
        correct: 1,
        feedback: "El registro ante el IMPI es constitutivo (crea el derecho de PI), mientras que el registro ante INDAUTOR es declarativo (el derecho nace con la creación de la obra, el registro solo lo reconoce)."
    },
    {
        question: "¿Cuál de los siguientes NO es un recurso que ofrece la Academia de la OMPI?",
        options: [
            "Cursos a distancia gratuitos",
            "Programas de maestría conjuntos",
            "Certificación obligatoria para agentes de PI",
            "Cursos profesionales para funcionarios de oficinas de PI"
        ],
        correct: 2,
        feedback: "La Academia de la OMPI ofrece cursos a distancia gratuitos, programas de maestría y cursos profesionales. No ofrece certificaciones obligatorias para agentes de PI, esto depende de cada país."
    }
];

// Preguntas del Quiz 4: Derechos de Autor
const quiz4Questions = [
    {
        question: "¿Cuál de las siguientes es una característica de los derechos morales?",
        options: [
            "Son transferibles mediante contrato",
            "Son perpetuos, inalienables e irrenunciables",
            "Tienen una duración de 100 años",
            "Solo se aplican a obras literarias"
        ],
        correct: 1,
        feedback: "Los derechos morales son perpetuos, inalienables (no pueden venderse) e irrenunciables. Protegen el vínculo personal entre el autor y su obra, incluyendo el derecho de paternidad e integridad."
    },
    {
        question: "¿Cuánto duran los derechos patrimoniales sobre una obra en México?",
        options: [
            "50 años después de la muerte del autor",
            "70 años después de la muerte del autor",
            "100 años después de la muerte del autor",
            "La vida del autor únicamente"
        ],
        correct: 2,
        feedback: "En México, los derechos patrimoniales duran la vida del autor más 100 años después de su muerte. Es uno de los plazos más extensos del mundo."
    },
    {
        question: "¿Qué elemento NO es distintivo de una marca?",
        options: [
            "Nombres propios distintivos",
            "Figuras o símbolos tridimensionales",
            "Descripciones genéricas del producto",
            "Sonidos y hologramas"
        ],
        correct: 2,
        feedback: "Las descripciones genéricas del producto (ej: 'Leche' para vender leche) no pueden registrarse como marca porque carecen de distintividad. Las marcas deben distinguir productos de sus competidores."
    },
    {
        question: "¿Cuál es la vigencia de una marca registrada en México?",
        options: [
            "5 años, no renovable",
            "10 años, renovable indefinidamente",
            "15 años, renovable hasta 3 veces",
            "20 años desde el registro"
        ],
        correct: 1,
        feedback: "Las marcas en México tienen vigencia de 10 años desde su registro y pueden renovarse indefinidamente por períodos iguales, siempre que se pague la tarifa y se demuestre el uso."
    },
    {
        question: "¿Cuál de los siguientes NO puede registrarse como diseño industrial?",
        options: [
            "La forma de una botella de perfume",
            "El patrón decorativo de una tela",
            "El mecanismo interno de un reloj",
            "La apariencia de un teléfono celular"
        ],
        correct: 2,
        feedback: "Los diseños industriales protegen la apariencia estética (forma, configuración, ornamento), no los aspectos funcionales o técnicos como el mecanismo interno de un reloj."
    },
    {
        question: "¿Qué requisito es esencial para que una invención sea patentable?",
        options: [
            "Ser conocida previamente en México",
            "Ser una teoría científica",
            "Tener aplicación industrial",
            "Ser un método de negocios"
        ],
        correct: 2,
        feedback: "Para ser patentable, una invención debe cumplir tres requisitos: novedad, actividad inventiva y aplicación industrial. Las teorías científicas y métodos de negocios están expresamente excluidos."
    },
    {
        question: "¿Cuál es la diferencia entre una patente y un modelo de utilidad?",
        options: [
            "Son exactamente lo mismo",
            "El modelo de utilidad requiere mayor nivel inventivo",
            "El modelo de utilidad protege mejoras menores por menos tiempo",
            "Las patentes solo protegen procesos, no productos"
        ],
        correct: 2,
        feedback: "Los modelos de utilidad (patentes menores) protegen mejoras técnicas con menor nivel inventivo, tienen vigencia de 10 años (vs 20 de patentes) y proceso más rápido y económico."
    },
    {
        question: "¿Qué caracteriza a una licencia exclusiva de tecnología?",
        options: [
            "El licenciante puede otorgar licencias a múltiples partes",
            "Solo el licenciatario puede explotar la tecnología en el territorio acordado",
            "Es siempre gratuita",
            "No requiere contrato escrito"
        ],
        correct: 1,
        feedback: "En una licencia exclusiva, solo el licenciatario puede explotar la tecnología en el territorio y campo definidos. El licenciante renuncia a otorgar licencias a terceros e incluso a explotarla él mismo."
    },
    {
        question: "¿Qué es el copyleft en licencias de software?",
        options: [
            "Una renuncia total a los derechos de autor",
            "Un mecanismo que obliga a compartir obras derivadas bajo la misma licencia",
            "Una licencia que prohíbe cualquier uso comercial",
            "Un tipo de patente de software"
        ],
        correct: 1,
        feedback: "El copyleft usa el derecho de autor para garantizar que una obra y sus derivados permanezcan libres. Si usas código con copyleft (como GPL), debes liberar tu código bajo la misma licencia."
    },
    {
        question: "¿Cuál es la licencia más permisiva para software?",
        options: [
            "GPL (General Public License)",
            "LGPL (Lesser GPL)",
            "MIT License",
            "AGPL (Affero GPL)"
        ],
        correct: 2,
        feedback: "La licencia MIT es muy permisiva: solo requiere mantener el aviso de copyright. Permite uso comercial, modificación y distribución sin copyleft, lo que la hace popular en proyectos comerciales."
    }
];

// Preguntas Unidad 5: PI y su Aplicación
const quiz5Questions = [
    {
        question: "¿Cuál es la principal ventaja del secreto industrial sobre la patente?",
        options: [
            "Ofrece protección más fuerte",
            "Tiene duración indefinida mientras se mantenga confidencial",
            "Es más fácil de defender en juicio",
            "Protege contra la ingeniería inversa"
        ],
        correct: 1,
        feedback: "El secreto industrial puede durar indefinidamente mientras se mantenga confidencial, a diferencia de la patente que expira a los 20 años. Sin embargo, no protege contra la ingeniería inversa legítima."
    },
    {
        question: "¿Qué organismo administra el sistema de propiedad industrial en México?",
        options: [
            "INDAUTOR",
            "IMPI",
            "OMPI",
            "Secretaría de Cultura"
        ],
        correct: 1,
        feedback: "El Instituto Mexicano de la Propiedad Industrial (IMPI) es la autoridad responsable de administrar el sistema de propiedad industrial en México, incluyendo marcas, patentes y diseños industriales."
    },
    {
        question: "¿Para qué sirve el Sistema de Madrid administrado por la OMPI?",
        options: [
            "Registro internacional de patentes",
            "Registro internacional de marcas",
            "Arbitraje de disputas de PI",
            "Registro de derechos de autor"
        ],
        correct: 1,
        feedback: "El Sistema de Madrid permite el registro internacional de marcas en más de 120 países con una sola solicitud, simplificando la protección de marcas a nivel global."
    },
    {
        question: "Según la posición actual de EE.UU. sobre obras generadas por IA, ¿qué estatus legal tienen?",
        options: [
            "Protección completa para el desarrollador de la IA",
            "No hay protección de copyright sin autor humano",
            "Protección automática para el usuario que creó el prompt",
            "Protección compartida entre IA y usuario"
        ],
        correct: 1,
        feedback: "Los tribunales de EE.UU. han establecido que una obra generada completamente por IA no puede recibir registro de copyright porque carece de autoría humana, considerándose que pasa al dominio público."
    },
    {
        question: "¿Cuál es el principal argumento legal de los creadores contra el entrenamiento de IA con sus obras?",
        options: [
            "Las IAs son competencia desleal",
            "El entrenamiento constituye una reproducción no autorizada",
            "Las IAs no pagan impuestos",
            "Los modelos son demasiado poderosos"
        ],
        correct: 1,
        feedback: "Los creadores argumentan que el entrenamiento de modelos de IA implica una reproducción no autorizada de sus obras protegidas por derecho de autor, lo cual requeriría licencia o compensación."
    },
    {
        question: "¿Cuál es la diferencia entre piratería y falsificación?",
        options: [
            "Son términos equivalentes",
            "La piratería afecta derechos de autor; la falsificación afecta marcas",
            "La falsificación solo aplica a productos digitales",
            "La piratería es legal para uso personal"
        ],
        correct: 1,
        feedback: "La piratería se refiere a la reproducción no autorizada de obras protegidas por derecho de autor, mientras que la falsificación implica usar marcas registradas sin autorización para hacer pasar productos como originales."
    },
    {
        question: "¿Cuál de las siguientes NO es una sanción que puede imponer el IMPI?",
        options: [
            "Multa de hasta 500,000 UMAs",
            "Clausura temporal del establecimiento",
            "Pena de prisión",
            "Decomiso de productos infractores"
        ],
        correct: 2,
        feedback: "El IMPI es una autoridad administrativa y solo puede imponer sanciones administrativas como multas, clausuras y decomisos. Las penas de prisión solo pueden ser impuestas por autoridades judiciales penales."
    },
    {
        question: "¿Qué es la regalía razonable como método de cuantificación de daños?",
        options: [
            "El precio de venta del producto infractor",
            "Lo que un licenciatario habría pagado por usar legalmente el derecho",
            "El costo de producción del infractor",
            "Un monto fijo establecido por ley"
        ],
        correct: 1,
        feedback: "La regalía razonable es el monto que un licenciatario hipotético habría pagado por usar legalmente el derecho. Se usa cuando las ganancias perdidas son difíciles de probar directamente."
    },
    {
        question: "¿Qué significa que un delito contra la PI sea de 'querella'?",
        options: [
            "Que se persigue automáticamente por las autoridades",
            "Que requiere que el titular presente formalmente la denuncia",
            "Que solo puede procesarse en tribunales federales",
            "Que las penas son más severas"
        ],
        correct: 1,
        feedback: "Los delitos de querella requieren que el titular del derecho afectado presente formalmente la denuncia para que el Ministerio Público pueda iniciar la investigación."
    },
    {
        question: "¿Cuál es una recomendación práctica al usar contenido generado por IA?",
        options: [
            "No hay necesidad de revisar licencias porque la IA crea todo nuevo",
            "Añadir creatividad y edición humana significativa para fortalecer reclamaciones de autoría",
            "Usar el contenido sin modificaciones para mantener la pureza del algoritmo",
            "Reclamar siempre autoría completa sin mencionar el uso de IA"
        ],
        correct: 1,
        feedback: "Añadir creatividad y edición humana significativa al contenido generado por IA fortalece las reclamaciones de autoría y ayuda a establecer derechos sobre el resultado final."
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
