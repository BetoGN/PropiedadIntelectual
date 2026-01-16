// ============================================
// CONTENIDO DEL CURSO - PROPIEDAD INTELECTUAL
// Curso de Servicio Social
// ============================================

const courseContent = {
    // =============================================
    // UNIDAD 1: PRINCIPIOS DEL DERECHO Y REGULACIÓN
    // =============================================
    
    'tema1-1': {
        title: '1.1 Principios del Derecho',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Introducción al Derecho Informático</h3>
                <p>La tecnología no existe en un vacío normativo, sino que se inscribe en el marco del <strong>Derecho</strong>, entendido como el conjunto de normas y principios que regulan las interacciones sociales para establecer un orden justo. La aplicación de estos principios a las tecnologías de la información da origen al <strong>Derecho Informático</strong>, una rama jurídica que se enfoca en regular las acciones, procesos, productos y relaciones jurídicas que emergen de la informática y sus diversas aplicaciones.</p>
                
                <p>El Derecho Informático abarca ámbitos fundamentales como:</p>
                <ul>
                    <li>El procesamiento de datos personales y corporativos</li>
                    <li>La transmisión de contenidos digitales</li>
                    <li>La comunicación a distancia</li>
                    <li>La inteligencia artificial y sus implicaciones legales</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Importancia</h4>
                    <p>Comprender los elementos primarios del derecho es un prerrequisito indispensable para analizar cualquier marco normativo tecnológico, especialmente en el campo de la Ingeniería en Inteligencia Artificial.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> 1.1.1 La Norma Jurídica y el Derecho</h3>
                <p>La <strong>norma jurídica</strong> es el enunciado formal que establece la conducta permitida, obligatoria o prohibida, y cuya inobservancia conlleva una sanción impuesta por el Estado. Las normas se clasifican típicamente en cuatro categorías esenciales que rigen la conducta en el entorno digital:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-exclamation-circle"></i>
                            <h4>Normas Imperativas</h4>
                        </div>
                        <p>Aquellas que obligan a realizar una acción o abstenerse de ella, sin que la voluntad de los particulares pueda modificarlas.</p>
                        <p class="example"><strong>Ejemplo:</strong> La obligación legal de implementar medidas de seguridad específicas para proteger los datos personales.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-ban"></i>
                            <h4>Normas Prohibitivas</h4>
                        </div>
                        <p>Impiden categóricamente una conducta determinada.</p>
                        <p class="example"><strong>Ejemplo:</strong> La prohibición de acceder a sistemas informáticos protegidos sin la debida autorización.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-handshake"></i>
                            <h4>Normas Dispositivas</h4>
                        </div>
                        <p>Permiten a las partes regular una situación jurídica mediante su voluntad, operando solo en ausencia de un acuerdo explícito.</p>
                        <p class="example"><strong>Ejemplo:</strong> Las cláusulas en contratos de software y licencias que las partes pueden negociar.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-check-circle"></i>
                            <h4>Normas Permisivas</h4>
                        </div>
                        <p>Conceden una facultad o permiten una acción específica.</p>
                        <p class="example"><strong>Ejemplo:</strong> El derecho a la autodeterminación informativa, que faculta a las personas a controlar la información recogida sobre ellas.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-file-alt"></i> Legislación Aplicable</h4>
                    <p>Un ejemplo práctico de la aplicación de la norma jurídica es la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> en México y el <strong>Reglamento General de Protección de Datos (RGPD)</strong> de la Unión Europea, que imponen obligaciones imperativas sobre cómo deben recabarse y tratarse los datos personales.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-users"></i> 1.1.2 Sujetos y Objetos del Derecho</h3>
                <p>Para que una norma jurídica se aplique, deben existir <strong>sujetos</strong> y <strong>objetos</strong> claramente definidos.</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-user-tie"></i> Sujetos del Derecho</h4>
                        <p>Son los entes (personas físicas o morales/jurídicas) que tienen la capacidad de ser titulares de derechos y obligaciones. En el ámbito digital, estos pueden ser:</p>
                        <ul>
                            <li>El usuario individual de una red social</li>
                            <li>El desarrollador de un algoritmo de IA</li>
                            <li>Grandes corporaciones tecnológicas</li>
                            <li>El propio Estado (como regulador y como entidad que posee datos)</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-cube"></i> Objetos del Derecho</h4>
                        <p>Son los bienes, valores o intereses sobre los cuales recaen las normas. En el Derecho Informático, el objeto se expande más allá de lo tangible para incluir:</p>
                        <ul>
                            <li>La información (datos personales, secretos industriales)</li>
                            <li>El software y código fuente</li>
                            <li>El espectro radioeléctrico</li>
                            <li>Los sistemas informáticos mismos</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-signature"></i> 1.1.3 El Contrato</h3>
                <p>Un <strong>contrato</strong> es la manifestación de voluntad entre dos o más partes que, al generar derechos y obligaciones recíprocas, establece un marco legal para una relación específica. En la Ingeniería en Inteligencia Artificial, la <strong>contratación informática</strong> es omnipresente.</p>
                
                <div class="table-responsive">
                    <table class="content-table">
                        <thead>
                            <tr>
                                <th>Tipo de Contrato</th>
                                <th>Descripción</th>
                                <th>Ejemplo en IA/TI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Contratos Civiles</strong></td>
                                <td>Regulan relaciones entre particulares. Pueden ser unilaterales o bilaterales.</td>
                                <td>Contrato de licencia de software oneroso</td>
                            </tr>
                            <tr>
                                <td><strong>Contratos Mercantiles</strong></td>
                                <td>Aplican a actos de comercio entre comerciantes.</td>
                                <td>Contrato de suministro de servicio de nube o Big Data</td>
                            </tr>
                            <tr>
                                <td><strong>Contratos Laborales</strong></td>
                                <td>Definen la relación entre el trabajador y la empresa.</td>
                                <td>Contrato por obra determinada para desarrollo de módulo de IA</td>
                            </tr>
                            <tr>
                                <td><strong>Contratos Públicos</strong></td>
                                <td>Una de las partes es una institución pública.</td>
                                <td>Licitación para implementar sistema de IA gubernamental</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> Punto Clave</h4>
                    <p>La validez y el cumplimiento de estos contratos son fundamentales para la <strong>transferencia de propiedad intelectual</strong> y la <strong>asignación de responsabilidades</strong> en el desarrollo de sistemas complejos de IA.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-skull-crossbones"></i> 1.1.4 El Delito</h3>
                <p>Un <strong>delito</strong> es una acción u omisión que contraviene lo estipulado en la ley penal y que es susceptible de ser castigada por las autoridades. Su etimología latina, <em>delinquere</em>, denota el acto de apartarse del camino señalado por la ley.</p>
                
                <p>En la era digital, la tipificación de conductas ilícitas ha dado lugar a los <strong>delitos informáticos o cibernéticos</strong>, los cuales se cometen utilizando medios digitales, siendo la computadora tanto el instrumento como, en ocasiones, el fin de la acción criminal.</p>
                
                <div class="warning-box">
                    <h4><i class="fas fa-exclamation-triangle"></i> Delitos Tipificados en el Código Penal Federal</h4>
                    <ul>
                        <li><strong>Acceso no autorizado:</strong> Ingresar sin permiso a sistemas o equipos de informática protegidos, o exceder la autorización concedida.</li>
                        <li><strong>Modificación o destrucción de información:</strong> Alterar, dañar o provocar la pérdida de información contenida en sistemas o bases de datos.</li>
                        <li><strong>Fraude informático:</strong> Engañar o aprovechar el error para obtener un lucro indebido a través de medios informáticos (phishing, falsificación de tarjetas).</li>
                        <li><strong>Uso de información confidencial:</strong> Utilizar indebidamente información sensible en provecho propio o ajeno, con agravantes para funcionarios públicos.</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    'tema1-2': {
        title: '1.2 Regulación Jurídica en Materia Informática',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-laptop-code"></i> Introducción a la Regulación Informática</h3>
                <p>La <strong>regulación jurídica en materia informática</strong> es esencial para garantizar un entorno digital confiable, protegiendo los derechos de los usuarios y la integridad de los sistemas. El derecho informático abarca aspectos cruciales para el desarrollo de la inteligencia artificial, entre ellos el derecho a la información, la confidencialidad y la seguridad.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-info-circle"></i> 1.2.1 Derecho a la Información</h3>
                <p>El <strong>Derecho a la Información</strong> es una prerrogativa fundamental que faculta a toda persona a buscar, recibir y difundir información. En el contexto digital, una de sus vertientes más importantes es el <strong>Derecho de Acceso a la Información Pública</strong>.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-door-open"></i> Características del Derecho a la Información</h4>
                    <ul>
                        <li>Permite examinar datos y registros en poder de entidades públicas</li>
                        <li>Es clave para la transparencia gubernamental</li>
                        <li>Fundamental para la rendición de cuentas en una sociedad democrática</li>
                        <li>Incluye el derecho a difundir información veraz</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-user-secret"></i> 1.2.2 Confidencialidad</h3>
                <p>La <strong>confidencialidad</strong> es el principio que asegura que la información solo sea accesible por aquellos individuos, entidades o procesos que estén debidamente autorizados. En la Ingeniería en IA, este principio se aplica rigurosamente a:</p>
                <ul>
                    <li>Los datos personales de los usuarios</li>
                    <li>La propiedad intelectual de la compañía</li>
                    <li>Los secretos comerciales</li>
                    <li>Los algoritmos propietarios</li>
                </ul>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-key"></i>
                            <h4>Controles de Acceso</h4>
                        </div>
                        <p>Uso de cifrados, contraseñas y esquemas de privilegios para que el usuario solo acceda a lo estrictamente necesario para sus funciones.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-contract"></i>
                            <h4>Políticas de Confidencialidad</h4>
                        </div>
                        <p>Establecimiento de instrucciones claras sobre el manejo interno de la información por parte de los empleados.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-handshake"></i>
                            <h4>Acuerdos de Confidencialidad (NDA)</h4>
                        </div>
                        <p>Contratos firmados con terceros (empleados, socios, inversores) para garantizar la no divulgación de datos sensibles.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-shield-alt"></i> Legislación de Datos Personales</h4>
                    <p>La legislación de datos personales es la manifestación legal más clara de este principio, buscando proteger la <strong>privacidad</strong>, <strong>dignidad</strong> y <strong>autonomía</strong> de las personas, otorgándoles control sobre su información.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-lock"></i> 1.2.3 Seguridad</h3>
                <p>La <strong>seguridad</strong> en el ámbito informático se refiere a la protección de los sistemas y la información contra amenazas. Legalmente, la regulación se enfoca en tres aspectos fundamentales esenciales para cualquier sistema de IA:</p>
                
                <div class="three-pillars">
                    <div class="pillar">
                        <div class="pillar-icon"><i class="fas fa-shield-virus"></i></div>
                        <h4>Ciberseguridad</h4>
                        <p>Protección de la infraestructura tecnológica y los datos críticos, como lo establece la <strong>Estrategia Nacional de Ciberseguridad</strong> en México.</p>
                    </div>
                    
                    <div class="pillar">
                        <div class="pillar-icon"><i class="fas fa-database"></i></div>
                        <h4>Integridad de los Datos</h4>
                        <p>Garantizar que los datos y la información sean precisos y completos, no habiendo sido alterados o destruidos de forma no autorizada.</p>
                    </div>
                    
                    <div class="pillar">
                        <div class="pillar-icon"><i class="fas fa-server"></i></div>
                        <h4>Disponibilidad</h4>
                        <p>Asegurar que los usuarios autorizados tengan acceso a la información y a los sistemas cuando lo requieran.</p>
                    </div>
                </div>
                
                <div class="warning-box">
                    <h4><i class="fas fa-exclamation-circle"></i> Obligación Legal</h4>
                    <p>Las <strong>políticas de seguridad</strong> definen los permisos (lectura, modificación) que tiene un usuario sobre la información o servicios. Las vulnerabilidades de seguridad que afecten significativamente los derechos de los titulares de datos deben ser <strong>informadas de inmediato</strong> por el responsable.</p>
                </div>
            </div>
        `
    },
    
    'tema1-3': {
        title: '1.3 Regulación Jurídica en Materia de Telecomunicaciones',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-broadcast-tower"></i> Importancia de las Telecomunicaciones</h3>
                <p>La <strong>Regulación Jurídica en Materia de Telecomunicaciones</strong> es vital, ya que la Inteligencia Artificial se sustenta en la transmisión masiva de datos a través de redes y el uso del espectro radioeléctrico. En México, esta materia se rige principalmente por la <strong>Ley Federal de Telecomunicaciones y Radiodifusión (LFTR)</strong>.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-landmark"></i> Rectoría del Estado</h4>
                    <p>El Estado ejerce la rectoría sobre las telecomunicaciones y mantiene el dominio sobre el <strong>espectro radioeléctrico</strong> y las <strong>posiciones orbitales</strong>. El espectro radioeléctrico y las redes públicas de telecomunicaciones son consideradas <strong>vías generales de comunicación</strong> y son de jurisdicción federal.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-satellite-dish"></i> El Espectro Radioeléctrico</h3>
                <p>El uso, aprovechamiento y explotación de las bandas de frecuencia del espectro se otorga mediante <strong>concesiones</strong>, un acto administrativo que confiere el derecho a explotar estas bandas bajo los términos establecidos en la ley.</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-wifi"></i>
                            <h4>Administración del Espectro</h4>
                        </div>
                        <p>Regulación y administración eficiente del espectro radioeléctrico como recurso escaso del Estado.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-chart-line"></i>
                            <h4>Fomento a la Competencia</h4>
                        </div>
                        <p>Requisitos y promoción de la competencia efectiva en las redes de telecomunicaciones.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-shield"></i>
                            <h4>Derechos de los Usuarios</h4>
                        </div>
                        <p>Protección de los derechos de los usuarios y garantía de la calidad de los servicios prestados.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-building"></i> Instituto Federal de Telecomunicaciones (IFT)</h3>
                <p>El <strong>Instituto Federal de Telecomunicaciones (IFT)</strong> es el órgano autónomo encargado de regular y promover la competencia en esta materia. Sus funciones principales incluyen:</p>
                
                <ul>
                    <li>Otorgar concesiones para el uso del espectro radioeléctrico</li>
                    <li>Regular los servicios de telecomunicaciones y radiodifusión</li>
                    <li>Promover la competencia efectiva en el sector</li>
                    <li>Resolver controversias entre operadores</li>
                    <li>Establecer tarifas de interconexión</li>
                    <li>Vigilar el cumplimiento de obligaciones de los concesionarios</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-robot"></i> Relevancia para la IA</h4>
                    <p>La regulación de telecomunicaciones es fundamental para la IA porque los sistemas de inteligencia artificial dependen de la conectividad, el ancho de banda y la transmisión de grandes volúmenes de datos en tiempo real. Sin una infraestructura de telecomunicaciones robusta y bien regulada, el desarrollo y despliegue de sistemas de IA sería prácticamente imposible.</p>
                </div>
            </div>
        `
    },
    
    'tema1-4': {
        title: '1.4 Regulación Administrativa en Materia Informática',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-file-alt"></i> Marco Administrativo</h3>
                <p>La <strong>Regulación Administrativa en Materia Informática</strong> se relaciona con las leyes que rigen la operación de las entidades públicas y privadas en el manejo de la información y los datos, con énfasis en la transparencia y la protección de datos personales.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-scroll"></i> Fundamento Constitucional</h4>
                    <p>Esta regulación se fundamenta en principios constitucionales, destacando el <strong>Artículo 16 Constitucional</strong> que protege la vida privada y los datos personales de toda persona.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-book-open"></i> Instrumentos Legales Esenciales</h3>
                
                <div class="law-cards">
                    <div class="law-card">
                        <div class="law-card-header">
                            <i class="fas fa-eye"></i>
                            <h4>Ley General de Transparencia y Acceso a la Información Pública (LGTAIP)</h4>
                        </div>
                        <div class="law-card-body">
                            <p>Esta ley tiene como objetivos fundamentales:</p>
                            <ul>
                                <li>Asegurar que todo solicitante tenga acceso a la información pública mediante procedimientos sencillos y expeditos</li>
                                <li>Transparentar la gestión pública mediante la difusión de información oportuna, verificable y comprensible</li>
                                <li>Promover la rendición de cuentas de los sujetos obligados</li>
                                <li>Garantizar el derecho de acceso a la información de cualquier persona</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="law-card">
                        <div class="law-card-header">
                            <i class="fas fa-user-lock"></i>
                            <h4>Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO)</h4>
                        </div>
                        <div class="law-card-body">
                            <p>Esta ley regula el tratamiento de datos personales por parte de las autoridades y entidades públicas:</p>
                            <ul>
                                <li>Obliga a establecer medidas de seguridad de nivel alto</li>
                                <li>Garantiza la integridad, disponibilidad y confidencialidad de la información</li>
                                <li>Protege los derechos ARCO de los titulares</li>
                                <li>Establece sanciones por incumplimiento</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-university"></i> Instituto Nacional de Transparencia (INAI)</h3>
                <p>El <strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong> es el organismo garante de estos derechos. Su función principal es conocer y resolver los recursos de inconformidad interpuestos por particulares.</p>
                
                <div class="table-responsive">
                    <table class="content-table">
                        <thead>
                            <tr>
                                <th>Actor</th>
                                <th>Obligaciones</th>
                                <th>Derechos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Instituciones Públicas</strong></td>
                                <td>Publicar información actualizada y resguardar datos personales</td>
                                <td>Clasificar información como reservada o confidencial cuando proceda</td>
                            </tr>
                            <tr>
                                <td><strong>Ciudadanos</strong></td>
                                <td>Usar la información de manera responsable</td>
                                <td>Acceder a información pública y ejercer derechos ARCO</td>
                            </tr>
                            <tr>
                                <td><strong>INAI</strong></td>
                                <td>Garantizar el cumplimiento de la ley</td>
                                <td>Resolver controversias y emitir sanciones</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="highlight-box arco-box">
                    <h4><i class="fas fa-user-cog"></i> Derechos ARCO</h4>
                    <p>Los derechos ARCO son fundamentales para la autodeterminación informativa:</p>
                    <ul>
                        <li><strong>A</strong>cceso: Conocer qué datos personales se tienen sobre uno</li>
                        <li><strong>R</strong>ectificación: Corregir datos inexactos o incompletos</li>
                        <li><strong>C</strong>ancelación: Solicitar la eliminación de datos cuando sea procedente</li>
                        <li><strong>O</strong>posición: Oponerse al tratamiento de datos para fines específicos</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    'tema1-5': {
        title: '1.5 Regulación Penal en Materia Informática',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> Marco Penal Informático</h3>
                <p>La <strong>Regulación Penal en Materia Informática</strong> es la vertiente del derecho que define y sanciona las conductas delictivas cometidas utilizando sistemas informáticos. La creciente sofisticación de los sistemas de IA y la dependencia en los datos hacen que esta regulación sea fundamental.</p>
                
                <div class="warning-box">
                    <h4><i class="fas fa-exclamation-triangle"></i> Importancia para el Ingeniero en IA</h4>
                    <p>El ingeniero en IA debe conocer estas tipificaciones, ya que su expertise lo sitúa en una posición de <strong>alta responsabilidad</strong>, pudiendo ser tanto víctima como potencial sujeto activo de estas conductas si no actúa con la debida diligencia y ética profesional.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale-right"></i> Delitos Tipificados en el Código Penal Federal</h3>
                <p>Las leyes penales en México, principalmente el <strong>Código Penal Federal</strong>, establecen penas de prisión y multas por diversos delitos informáticos:</p>
                
                <div class="crime-cards">
                    <div class="crime-card">
                        <div class="crime-icon"><i class="fas fa-door-open"></i></div>
                        <h4>Acceso y Modificación Ilegales</h4>
                        <p>Acceder sin autorización, modificar, destruir o provocar pérdida de información contenida en sistemas protegidos.</p>
                        <div class="crime-penalty">
                            <span class="penalty-label">Pena:</span> 3 meses a 2 años de prisión y multa
                        </div>
                    </div>
                    
                    <div class="crime-card">
                        <div class="crime-icon"><i class="fas fa-file-invoice"></i></div>
                        <h4>Uso de Datos Confidenciales</h4>
                        <p>Obtener y utilizar información sensible para provecho propio o de un tercero sin autorización.</p>
                        <div class="crime-penalty">
                            <span class="penalty-label">Pena:</span> 6 meses a 4 años de prisión
                        </div>
                    </div>
                    
                    <div class="crime-card">
                        <div class="crime-icon"><i class="fas fa-credit-card"></i></div>
                        <h4>Fraude y Falsificación</h4>
                        <p>Falsificar tarjetas de crédito o débito, o acceder indebidamente a sistemas financieros para realizar operaciones ilícitas.</p>
                        <div class="crime-penalty">
                            <span class="penalty-label">Pena:</span> 3 a 9 años de prisión
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-plus-circle"></i> Agravantes</h3>
                <p>La pena se agrava significativamente en los siguientes casos:</p>
                
                <div class="aggravating-factors">
                    <div class="factor">
                        <i class="fas fa-user-graduate"></i>
                        <div>
                            <h5>Conocimiento Técnico</h5>
                            <p>Si el responsable es un <strong>técnico o especialista</strong> en el manejo de los sistemas afectados.</p>
                        </div>
                    </div>
                    
                    <div class="factor">
                        <i class="fas fa-money-bill-wave"></i>
                        <div>
                            <h5>Fines de Lucro</h5>
                            <p>Si la información obtenida se usa con <strong>fines económicos</strong> o para obtener un beneficio indebido.</p>
                        </div>
                    </div>
                    
                    <div class="factor">
                        <i class="fas fa-university"></i>
                        <div>
                            <h5>Función Pública</h5>
                            <p>Si el responsable es un <strong>funcionario público</strong> que aprovecha su cargo.</p>
                        </div>
                    </div>
                    
                    <div class="factor">
                        <i class="fas fa-users"></i>
                        <div>
                            <h5>Afectación Masiva</h5>
                            <p>Si el delito afecta a un <strong>gran número de personas</strong> o sistemas críticos.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Recomendaciones para el Profesional en IA</h3>
                <div class="recommendations-grid">
                    <div class="recommendation">
                        <i class="fas fa-check-circle"></i>
                        <p>Actuar siempre con la debida diligencia y ética profesional</p>
                    </div>
                    <div class="recommendation">
                        <i class="fas fa-check-circle"></i>
                        <p>Documentar todas las autorizaciones de acceso a sistemas</p>
                    </div>
                    <div class="recommendation">
                        <i class="fas fa-check-circle"></i>
                        <p>Respetar los acuerdos de confidencialidad</p>
                    </div>
                    <div class="recommendation">
                        <i class="fas fa-check-circle"></i>
                        <p>Reportar vulnerabilidades de forma responsable</p>
                    </div>
                    <div class="recommendation">
                        <i class="fas fa-check-circle"></i>
                        <p>Mantenerse actualizado sobre la legislación vigente</p>
                    </div>
                    <div class="recommendation">
                        <i class="fas fa-check-circle"></i>
                        <p>Implementar medidas de seguridad robustas en los sistemas que se desarrollen</p>
                    </div>
                </div>
            </div>
        `
    },
    
    'quiz1': {
        title: 'Cuestionario Unidad 1: Legislación Informática',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 1: Legislación Informática</p>
                </div>
                
                <div class="quiz-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor del cuestionario</strong>
                        <p>Este cuestionario representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="quiz-info">
                    <div class="info-item">
                        <i class="fas fa-question-circle"></i>
                        <span>10 preguntas</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span id="quiz1-time-limit">15 minutos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-redo"></i>
                        <span id="quiz1-max-attempts">2 intentos permitidos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-percentage"></i>
                        <span id="quiz1-passing-score">Calificación mínima: 60%</span>
                    </div>
                </div>
                
                <div class="quiz-instructions">
                    <h4><i class="fas fa-info-circle"></i> Instrucciones</h4>
                    <ul>
                        <li>Lee cuidadosamente cada pregunta antes de responder.</li>
                        <li>Selecciona la opción que consideres correcta para cada pregunta.</li>
                        <li>Una vez iniciado el cuestionario, el tiempo comenzará a correr.</li>
                        <li>Puedes revisar tus respuestas antes de enviar.</li>
                        <li>Al finalizar, recibirás retroalimentación inmediata.</li>
                    </ul>
                </div>
                
                <div id="quiz1-container" class="quiz-questions" style="display: none;">
                    <!-- Las preguntas se cargarán dinámicamente -->
                </div>
                
                <div id="quiz1-start" class="quiz-start-section">
                    <p>Asegúrate de haber revisado los temas 1.1 al 1.5 antes de iniciar.</p>
                    <div class="quiz-attempts-info" id="quiz1-attempts-info"></div>
                    <button class="btn-primary btn-large" id="quiz1-start-btn" onclick="startQuiz(1)">
                        <i class="fas fa-play"></i> Iniciar Cuestionario
                    </button>
                </div>
                
                <div id="quiz1-results" class="quiz-results" style="display: none;">
                    <!-- Los resultados se mostrarán aquí -->
                </div>
            </div>
        `
    },
    
    // =============================================
    // UNIDAD 2: PANORAMA GENERAL DE LA PROPIEDAD INTELECTUAL
    // =============================================
    
    'tema2-1': {
        title: '2.1 Panorama General de la Propiedad Intelectual',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> Introducción a la Propiedad Intelectual</h3>
                <p>La <strong>Propiedad Intelectual (PI)</strong> es una disciplina jurídica compleja que confiere a los creadores derechos exclusivos sobre sus invenciones, obras literarias y artísticas, diseños y otros activos intangibles. Se diferencia de la propiedad material en que su objeto de protección es la <strong>forma en que las ideas se expresan o se aplican</strong>, y no la idea en sí misma.</p>
                
                <p>Históricamente, la PI en su acepción moderna se consolidó entre los siglos XVI y XVII. Las primeras referencias legales no se introdujeron primariamente para asegurar los derechos inherentes de los autores, sino como concesiones o privilegios reales otorgados por el Estado, funcionando como un instrumento de control sobre industrias clave, como la editorial.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Ámbitos Principales de la PI</h4>
                    <p>Actualmente, la PI abarca cuatro ámbitos jurídicos principales esenciales para la economía del conocimiento:</p>
                    <ul>
                        <li><strong>Marcas:</strong> Signos distintivos que identifican productos o servicios</li>
                        <li><strong>Patentes:</strong> Protección de invenciones técnicas</li>
                        <li><strong>Derechos de Autor:</strong> Protección de obras creativas</li>
                        <li><strong>Secretos Industriales:</strong> Información confidencial de valor comercial</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-book"></i> 2.1.1 Teorías de Derechos de Propiedad Intelectual</h3>
                <p>La justificación filosófica y legal de otorgar derechos exclusivos temporales a los creadores se apoya en diversas teorías, reflejando la naturaleza compleja de la PI y su constante tensión entre el interés privado del creador y el interés público de la sociedad:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user"></i>
                            <h4>Teoría de los Derechos Naturales</h4>
                        </div>
                        <p>Inspirada en <strong>John Locke</strong>, sostiene que los creadores tienen un derecho moral y natural sobre los frutos de su trabajo intelectual, de manera análoga a la propiedad sobre bienes físicos.</p>
                        <p class="example">La PI es una extensión de la persona del autor. Es especialmente relevante en el Derecho de Autor, donde se protegen los derechos morales (paternidad e integridad de la obra).</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-chart-line"></i>
                            <h4>Teoría Utilitaria o del Incentivo</h4>
                        </div>
                        <p>Es la teoría predominante en el sistema de <strong>Patentes</strong>. Argumenta que la PI no es un derecho inherente, sino un <strong>incentivo pragmático</strong> otorgado por el Estado.</p>
                        <p class="example">El monopolio temporal se concede a cambio de la divulgación pública de la invención, fomentando la inversión en I+D y el progreso tecnológico.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-balance-scale"></i>
                            <h4>Teoría de la Justicia Distributiva</h4>
                        </div>
                        <p>Busca un <strong>equilibrio entre el derecho exclusivo y el bienestar público</strong>. Reconoce que el monopolio es una restricción, pero lo justifica como compensación justa al inversor o inventor.</p>
                        <p class="example">El monopolio debe ser limitado en el tiempo para permitir la difusión final del conocimiento a la sociedad.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-fingerprint"></i>
                            <h4>Teoría de la Personalidad</h4>
                        </div>
                        <p>Vinculada a las filosofías de <strong>Kant y Hegel</strong>, sostiene que la obra creativa es una extensión de la personalidad, la voluntad y la identidad del autor.</p>
                        <p class="example">Se refleja directamente en los <strong>derechos morales</strong> de los autores, que son inalienables, irrenunciables e imprescriptibles.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-list-check"></i> 2.1.2 Características de los Derechos de Propiedad Intelectual</h3>
                <p>Los derechos de PI poseen atributos distintivos que definen su alcance y su operación legal:</p>
                
                <div class="characteristics-grid">
                    <div class="characteristic-box">
                        <h4><i class="fas fa-lock"></i> Exclusividad</h4>
                        <p>El titular tiene la facultad de <strong>impedir que terceros no autorizados exploten su creación</strong>. Constituye el núcleo del derecho de monopolio.</p>
                    </div>
                    
                    <div class="characteristic-box">
                        <h4><i class="fas fa-map-marker-alt"></i> Territorialidad</h4>
                        <p>Los derechos de Propiedad Industrial (patentes y marcas) se otorgan y protegen generalmente <strong>dentro de las fronteras del país</strong> que los concedió. Requieren registro en cada jurisdicción donde se desee protección.</p>
                    </div>
                    
                    <div class="characteristic-box">
                        <h4><i class="fas fa-hourglass-half"></i> Temporalidad</h4>
                        <p>Los derechos exclusivos tienen una <strong>vigencia definida por ley</strong>. Las patentes son típicamente de 20 años no renovables, mientras que el Derecho de Autor puede extenderse por toda la vida del autor más un plazo considerable.</p>
                    </div>
                    
                    <div class="characteristic-box">
                        <h4><i class="fas fa-exchange-alt"></i> Transferibilidad</h4>
                        <p>Los derechos patrimoniales pueden ser <strong>licenciados, vendidos, cedidos o heredados</strong>, permitiendo al titular monetizar su creación.</p>
                    </div>
                </div>
                
                <div class="comparison-table">
                    <h4><i class="fas fa-table"></i> Comparativa: Propiedad Industrial vs. Derecho de Autor</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Aspecto</th>
                                <th>Propiedad Industrial</th>
                                <th>Derecho de Autor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Objeto de Protección</td>
                                <td>La idea o solución técnica</td>
                                <td>La forma de expresión</td>
                            </tr>
                            <tr>
                                <td>Ejemplos</td>
                                <td>Patentes, diseños industriales, marcas</td>
                                <td>Obras literarias, software, bases de datos</td>
                            </tr>
                            <tr>
                                <td>Duración (ejemplo)</td>
                                <td>20 años (patentes)</td>
                                <td>Vida del autor + 100 años (México)</td>
                            </tr>
                            <tr>
                                <td>Registro</td>
                                <td>Constitutivo (obligatorio)</td>
                                <td>Declarativo (no obligatorio)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    
    'tema2-2': {
        title: '2.2 Importancia de la Propiedad Intelectual',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-rocket"></i> La PI como Pilar Estratégico</h3>
                <p>La Propiedad Intelectual es un <strong>pilar estratégico en la economía contemporánea</strong>, especialmente para el sector tecnológico, ya que confiere a los activos intangibles el estatus de bienes transaccionables y defendibles.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> Valor Estratégico</h4>
                    <p>La PI no es meramente un conjunto de normas legales, sino un <strong>pilar económico</strong> que actúa como un incentivo principal para la inversión y la innovación. Al garantizar derechos exclusivos, la PI recompensa la creatividad humana y fomenta el desarrollo tecnológico.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-cogs"></i> Funciones Clave de la PI</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-flask"></i>
                            <h4>Fomento de la Innovación</h4>
                        </div>
                        <p>Al garantizar la exclusividad, la PI minimiza el riesgo de que los competidores copien resultados sin incurrir en costos de I+D.</p>
                        <p class="example">Asegura el <strong>retorno de la inversión</strong> necesario para que las empresas y startups de IA sigan innovando.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-store"></i>
                            <h4>Estandarización y Mercado</h4>
                        </div>
                        <p>Las marcas y los secretos industriales aseguran la <strong>diferenciación y la calidad</strong> de los productos.</p>
                        <p class="example">Permiten a los consumidores distinguir entre oferentes y confiar en la procedencia de un software o un modelo de IA.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-chart-bar"></i>
                            <h4>Valoración de Activos</h4>
                        </div>
                        <p>La PI transforma las ideas en <strong>activos contables y financieros</strong>.</p>
                        <p class="example">Patentes robustas, marcas reconocidas y bases de datos protegidas son esenciales para la valoración de empresas de tecnología, atrayendo inversiones y facilitando fusiones y adquisiciones.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-shield-alt"></i>
                            <h4>Protección Económica</h4>
                        </div>
                        <p>Evita que los competidores copien invenciones o utilicen la marca sin permiso.</p>
                        <p class="example">Mitiga el riesgo de <strong>daños irreparables al negocio</strong> y asegura el control sobre los activos intelectuales.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-coins"></i> La Valoración de la Propiedad Intelectual</h3>
                <p>La <strong>valoración de la PI</strong> es el proceso para determinar el valor monetario de los activos intangibles, un ejercicio fundamental en la economía del conocimiento. El valor se deriva inherentemente del derecho de exclusividad que posee el titular.</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-check-circle"></i> Criterios para que un Activo de PI sea Valorable</h4>
                        <ul>
                            <li>Debe generar una <strong>cantidad medible de beneficios económicos</strong> para su propietario</li>
                            <li>Debe <strong>aumentar el valor</strong> de otros activos con los que está asociado</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-tasks"></i> Gestión Eficiente de Activos PI</h4>
                        <ul>
                            <li>Protegerlos mediante patentes, marcas y derechos de autor</li>
                            <li>Vigilarlos continuamente contra infracciones</li>
                            <li>Definir estrategias de explotación (licencias o uso directo)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-hand-holding-usd"></i> La PI como Garantía Financiera</h4>
                    <p>Un portafolio de PI bien establecido no solo protege la tecnología, sino que también facilita la <strong>transferencia de tecnología</strong> y la <strong>atracción de inversión extranjera</strong>. Un activo de PI sólido puede ser utilizado como <strong>garantía hipotecaria</strong>, sirviendo como indicador de la salud financiera y la capacidad de innovación de la empresa.</p>
                </div>
            </div>
        `
    },
    
    'tema2-3': {
        title: '2.3 La Propiedad Intelectual y la Economía Digital',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-laptop-code"></i> PI en la Era Digital</h3>
                <p>La <strong>economía digital</strong>, caracterizada por la ubicuidad de los datos y la facilidad de replicación y distribución de la información, hace que la protección de la PI sea más crítica y, a la vez, más desafiante.</p>
                
                <p>Las tecnologías impulsadas por datos, el <strong>Big Data</strong> y la <strong>Inteligencia Artificial (IA)</strong>, se han posicionado como la fuerza dominante en la producción y distribución económica, planteando desafíos sin precedentes para el marco tradicional de la PI.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-code"></i> Protección del Software y Algoritmos</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-code"></i>
                            <h4>Derecho de Autor</h4>
                        </div>
                        <p>El código fuente puede protegerse por Derecho de Autor, que protege la <strong>expresión codificada</strong>.</p>
                        <p class="example"><strong>Limitación:</strong> No protege el concepto abstracto, la lógica o el método operativo del software.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cog"></i>
                            <h4>Patentes</h4>
                        </div>
                        <p>Los algoritmos subyacentes y las invenciones funcionales de la IA requieren protección por <strong>Patentes</strong>.</p>
                        <p class="example">Protegen la <strong>funcionalidad técnica</strong> y la solución al problema que resuelve el algoritmo.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-secret"></i>
                            <h4>Secreto Industrial</h4>
                        </div>
                        <p>Protege el <strong>know-how</strong>, datos de entrenamiento, lógica y arquitectura interna del modelo.</p>
                        <p class="example">Protección potencialmente indefinida mientras se mantenga la confidencialidad.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-handshake"></i>
                            <h4>Licenciamiento</h4>
                        </div>
                        <p>La PI facilita el <strong>licenciamiento</strong>, modelo de negocio primordial en SaaS y en la IA.</p>
                        <p class="example">La transferencia de derechos de uso es la fuente principal de ingresos en software.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-database"></i> El Desafío del Big Data</h3>
                <p>Las vastas colecciones de datos utilizadas para entrenar modelos de IA son invaluables. Aunque los <strong>datos brutos no son patentables</strong>, varios elementos sí pueden protegerse:</p>
                
                <ul>
                    <li>La <strong>estructura de la base de datos</strong></li>
                    <li>La <strong>organización y clasificación</strong> del material</li>
                    <li>Los <strong>métodos de curación</strong> de datos</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Tensión: PI vs. Transparencia Algorítmica</h4>
                    <p>El avance de la IA ha generado una tensión significativa entre los derechos de PI (especialmente el secreto empresarial) y las crecientes obligaciones de <strong>transparencia algorítmica</strong>. Esta transparencia es demandada para permitir la auditoría de sistemas de decisiones automatizadas, mitigando sesgos y previniendo violaciones de derechos fundamentales.</p>
                    <p><strong>Soluciones propuestas:</strong> Auditorías por terceros independientes o algoritmos que auditan a otros algoritmos.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-link"></i> Blockchain y NFTs</h3>
                <p>La tecnología <strong>blockchain</strong> y los <strong>Tokens No Fungibles (NFT)</strong> han transformado la gestión de la PI en el arte digital al proporcionar singularidad y trazabilidad.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Importante sobre NFTs</h4>
                    <p>La compra de un NFT representa la <strong>titularidad del token digital</strong>, pero <strong>no necesariamente la transferencia del copyright</strong> (derechos patrimoniales) de la obra subyacente. Los creadores deben establecer licencias claras desde el inicio y registrar tanto la marca como los derechos de autor.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-table"></i> Mecanismos de Protección para Algoritmos de IA</h3>
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Mecanismo</th>
                                <th>Objeto de Protección</th>
                                <th>Ventajas</th>
                                <th>Limitaciones en IA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Secreto Empresarial</strong></td>
                                <td>Know-how, datos de entrenamiento, arquitectura interna</td>
                                <td>Duración indefinida, no requiere divulgación</td>
                                <td>Se pierde si se viola la confidencialidad</td>
                            </tr>
                            <tr>
                                <td><strong>Derechos de Autor</strong></td>
                                <td>Código fuente, código objeto, estructura de BD</td>
                                <td>Protección automática y estándar internacional</td>
                                <td>No protege funcionalidad ni lógica</td>
                            </tr>
                            <tr>
                                <td><strong>Patentes</strong></td>
                                <td>Aplicación técnica novedosa para resolver un problema</td>
                                <td>Monopolio funcional por 20 años</td>
                                <td>Costoso, requiere divulgación completa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    
    'tema2-4': {
        title: '2.4 La Propiedad Intelectual y el Comercio Internacional',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-globe-americas"></i> Marco Global de la PI</h3>
                <p>Dado que la Ingeniería en IA es un campo inherentemente globalizado, el comercio de tecnología, software y servicios digitales depende totalmente de <strong>marcos internacionales</strong> que armonizan la protección de la PI.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-building"></i> La OMPI (WIPO): Organización Mundial de la Propiedad Intelectual</h3>
                <p>La <strong>OMPI</strong> es la institución global que asegura la armonización y el funcionamiento internacional de la PI. Constituye el foro mundial de políticas donde gobiernos, industria y sociedad civil discuten las cuestiones cambiantes de la PI.</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-signature"></i>
                            <h4>Tratados Administrados</h4>
                        </div>
                        <p>La OMPI administra <strong>28 tratados internacionales</strong>, incluyendo:</p>
                        <ul>
                            <li>Convenio de París (Propiedad Industrial)</li>
                            <li>Convenio de Berna (Derecho de Autor)</li>
                            <li>Tratado de Cooperación en materia de Patentes (PCT)</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-graduation-cap"></i>
                            <h4>Academia de la OMPI</h4>
                        </div>
                        <p>Ofrece programas de enseñanza a distancia y formación en PI.</p>
                        <p class="example">Cursos sobre patentes, marcas, derecho de autor, gestión de PI y arbitraje.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-handshake"></i> Acuerdos Multilaterales Clave</h3>
                
                <div class="accordion-item">
                    <h4><i class="fas fa-gavel"></i> Acuerdo ADPIC/TRIPS (OMC)</h4>
                    <p>El <strong>Acuerdo sobre los Aspectos de los Derechos de Propiedad Intelectual relacionados con el Comercio</strong> estableció un punto de inflexión, transformando la PI de un asunto de política doméstica a una <strong>obligación comercial internacional</strong>.</p>
                    <ul>
                        <li>Establece <strong>normas mínimas globales</strong> de protección</li>
                        <li>Unifica las leyes de PI para mayor transparencia</li>
                        <li>Fomenta las inversiones y mejora la transferencia tecnológica</li>
                        <li>Vincula el cumplimiento de PI con el sistema de resolución de disputas de la OMC</li>
                    </ul>
                </div>
                
                <div class="accordion-item">
                    <h4><i class="fas fa-file-alt"></i> Tratado de Cooperación en materia de Patentes (PCT)</h4>
                    <p>Simplifica el proceso de solicitud de patente en múltiples países, facilitando la <strong>expansión global</strong> de las invenciones de IA.</p>
                </div>
                
                <div class="accordion-item">
                    <h4><i class="fas fa-copyright"></i> Tratados de la OMPI sobre Derecho de Autor</h4>
                    <p>Regulan aspectos específicos del Derecho de Autor en el entorno digital (ej. el Tratado de la OMPI sobre Derecho de Autor, WCT).</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-seedling"></i> La Agenda para el Desarrollo de la OMPI</h3>
                <p>Creada en 2004 con el objetivo de incluir el <strong>desarrollo como eje fundamental</strong> en el mandato de la OMPI. Se adoptaron 45 recomendaciones que buscan que la PI funcione como un medio para:</p>
                
                <ul>
                    <li>El <strong>desarrollo económico</strong></li>
                    <li>El <strong>fortalecimiento de capacidades</strong></li>
                    <li>La <strong>transferencia de tecnología</strong></li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-balance-scale"></i> Funciones del Marco Internacional</h4>
                    <ul>
                        <li><strong>Prevención de falsificación y piratería:</strong> Mecanismos para combatir la explotación no autorizada</li>
                        <li><strong>Resolución de conflictos:</strong> Los tratados proveen mecanismos para resolver disputas cuando los activos intelectuales cruzan fronteras</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    'tema2-5': {
        title: '2.5 Las Auditorías de la Propiedad Intelectual',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-search"></i> ¿Qué es una Auditoría de PI?</h3>
                <p>Una <strong>auditoría de Propiedad Intelectual</strong> (también llamada <strong>IP Due Diligence</strong>) es un proceso sistemático y riguroso para identificar, catalogar, evaluar y gestionar todos los activos intangibles de una organización.</p>
                
                <p>Esta herramienta de gestión es <strong>indispensable</strong> para cualquier empresa tecnológica y es un requisito fundamental antes de cualquier evaluación monetaria o proceso de comercialización.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clipboard-list"></i> Fases de la Auditoría de PI</h3>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Fase de Diagnóstico Legal y Financiero</h4>
                        <p>Creación de un <strong>inventario exhaustivo</strong> de todos los activos de Capital Intelectual:</p>
                        <ul>
                            <li>Patentes y solicitudes en trámite</li>
                            <li>Marcas registradas</li>
                            <li>Secretos comerciales</li>
                            <li>Bases de datos y software</li>
                            <li>Código abierto utilizado</li>
                        </ul>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Fase de Investigación</h4>
                        <p><strong>Análisis de Titularidad:</strong> Verificar la posesión legal de los derechos, revisar acuerdos de cesión de PI y contratos laborales.</p>
                        <p><strong>Evaluación de Riesgos:</strong></p>
                        <ul>
                            <li>Posible infracción de derechos de terceros</li>
                            <li>Uso indebido de licencias open source</li>
                            <li>Violación de patentes competidoras</li>
                            <li>Lagunas en la protección de activos propios</li>
                        </ul>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Desarrollo del Portafolio de PI</h4>
                        <p><strong>Gestión Estratégica:</strong> Identificación, evaluación y optimización continuas de los activos de PI para garantizar su alineación con los objetivos comerciales.</p>
                        <ul>
                            <li>Priorización según ROI potencial y riesgo</li>
                            <li>Creación de planes de mantenimiento</li>
                            <li>Definición de estrategias de monetización</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-briefcase"></i> Importancia en Transacciones Corporativas</h3>
                <p>La IP Due Diligence es esencial en los procesos de <strong>Fusiones y Adquisiciones (M&A)</strong> e inversión:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-search-dollar"></i> Evaluación de Oportunidades</h4>
                        <ul>
                            <li>Activos de PI no explotados o licenciados</li>
                            <li>Invenciones no protegidas formalmente</li>
                            <li>Establecimiento de estrategias de monetización</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-exclamation-triangle"></i> Identificación de Riesgos</h4>
                        <ul>
                            <li>Posibles litigios pendientes</li>
                            <li>Riesgos de infracción</li>
                            <li>Pasivos latentes no documentados</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> La Auditoría de PI en Proyectos de IA</h3>
                <p>En el campo de la Inteligencia Artificial, una auditoría de PI es crucial para clarificar:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-brain"></i>
                            <h4>Propiedad de Modelos</h4>
                        </div>
                        <p>¿Quién es el titular legal de los modelos de entrenamiento desarrollados?</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-database"></i>
                            <h4>Conjuntos de Datos</h4>
                        </div>
                        <p>¿Los datasets propietarios están debidamente documentados y protegidos?</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-code"></i>
                            <h4>Invenciones Algorítmicas</h4>
                        </div>
                        <p>¿Se ha evaluado si los algoritmos califican para protección por patente o secreto?</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-contract"></i>
                            <h4>Cesión de Derechos</h4>
                        </div>
                        <p>¿Los contratos laborales incluyen la cesión explícita de derechos sobre el código desarrollado?</p>
                    </div>
                </div>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-circle"></i> Advertencia Crítica</h4>
                    <p>Un fallo en la cadena de custodia de la PI o un defecto en la titularidad <strong>reduce drásticamente el valor de la empresa</strong>, ya que se pierde el derecho fundamental de exclusividad. La auditoría se transforma en una verificación de los procesos de gestión de capital humano y seguridad de la información.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-double"></i> Beneficios de una Auditoría de PI</h3>
                <ul>
                    <li><strong>Alineación estratégica:</strong> Asegura que los activos contribuyan directamente a la estrategia de la organización</li>
                    <li><strong>Toma de decisiones informadas:</strong> Proporciona una visión completa de la cartera</li>
                    <li><strong>Maximización del ROI:</strong> Permite priorizar el registro de activos de alto impacto</li>
                    <li><strong>Asignación óptima de recursos:</strong> Evita inversión en activos no estratégicos</li>
                    <li><strong>Mitigación de riesgos:</strong> Identifica vulnerabilidades antes de que se conviertan en problemas</li>
                </ul>
            </div>
        `
    },
    
    'quiz2': {
        title: 'Cuestionario Unidad 2: Panorama General de la PI',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 2: Panorama General de la Propiedad Intelectual</p>
                </div>
                
                <div class="quiz-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor del cuestionario</strong>
                        <p>Este cuestionario representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="quiz-info">
                    <div class="info-item">
                        <i class="fas fa-question-circle"></i>
                        <span>10 preguntas</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span id="quiz2-time-limit">15 minutos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-redo"></i>
                        <span id="quiz2-max-attempts">2 intentos permitidos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-percentage"></i>
                        <span id="quiz2-passing-score">Calificación mínima: 60%</span>
                    </div>
                </div>
                
                <div class="quiz-instructions">
                    <h4><i class="fas fa-info-circle"></i> Instrucciones</h4>
                    <ul>
                        <li>Lee cuidadosamente cada pregunta antes de responder.</li>
                        <li>Selecciona la opción que consideres correcta para cada pregunta.</li>
                        <li>Una vez iniciado el cuestionario, el tiempo comenzará a correr.</li>
                        <li>Puedes revisar tus respuestas antes de enviar.</li>
                        <li>Al finalizar, recibirás retroalimentación inmediata.</li>
                    </ul>
                </div>
                
                <div id="quiz2-container" class="quiz-questions" style="display: none;">
                    <!-- Las preguntas se cargarán dinámicamente -->
                </div>
                
                <div id="quiz2-start" class="quiz-start-section">
                    <p>Asegúrate de haber revisado los temas 2.1 al 2.5 antes de iniciar.</p>
                    <div class="quiz-attempts-info" id="quiz2-attempts-info"></div>
                    <button class="btn-primary btn-large" id="quiz2-start-btn" onclick="startQuiz(2)">
                        <i class="fas fa-play"></i> Iniciar Cuestionario
                    </button>
                </div>
                
                <div id="quiz2-results" class="quiz-results" style="display: none;">
                    <!-- Los resultados se mostrarán aquí -->
                </div>
            </div>
        `
    },
    
    // =============================================
    // UNIDAD 3: LEGISLACIÓN DE LA PROPIEDAD INTELECTUAL
    // =============================================
    
    'tema3-1': {
        title: '3.1 Ley Federal del Derecho de Autor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-copyright"></i> Introducción a la LFDA</h3>
                <p>La <strong>Ley Federal del Derecho de Autor (LFDA)</strong> es el ordenamiento jurídico que regula la protección de las obras del intelecto humano en México. Publicada en el Diario Oficial de la Federación el 24 de diciembre de 1996, esta ley establece el marco legal para la salvaguarda, promoción y desarrollo de los derechos de los creadores.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-bullseye"></i> Objeto de la Ley</h4>
                    <p>La LFDA tiene por objeto la <strong>salvaguarda y promoción del acervo cultural de la Nación</strong>; protección de los derechos de los autores, de los artistas intérpretes o ejecutantes, así como de los editores, de los productores y de los organismos de radiodifusión, en relación con sus obras literarias o artísticas en todas sus manifestaciones.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-book-open"></i> Obras Protegidas</h3>
                <p>La LFDA protege las obras en las siguientes ramas:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-pen-fancy"></i>
                            <h4>Literarias</h4>
                        </div>
                        <p>Novelas, cuentos, poemas, ensayos, artículos, obras de consulta, compilaciones.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-music"></i>
                            <h4>Musicales</h4>
                        </div>
                        <p>Composiciones con o sin letra, arreglos musicales.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-film"></i>
                            <h4>Audiovisuales</h4>
                        </div>
                        <p>Películas, series, documentales, videoclips, animaciones.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-laptop-code"></i>
                            <h4>Programas de Cómputo</h4>
                        </div>
                        <p>Software, aplicaciones, código fuente y objeto, bases de datos.</p>
                    </div>
                </div>
                
                <p>También se protegen: obras dramáticas, danza, pictóricas, escultóricas, caricaturas, arquitectónicas, fotográficas y obras de arte aplicado.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-user-shield"></i> Derechos que Otorga</h3>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-heart"></i> Derechos Morales</h4>
                        <p>Son <strong>perpetuos, inalienables, imprescriptibles e irrenunciables</strong>:</p>
                        <ul>
                            <li><strong>Divulgación:</strong> Decidir si la obra se da a conocer</li>
                            <li><strong>Paternidad:</strong> Ser reconocido como autor</li>
                            <li><strong>Integridad:</strong> Oponerse a modificaciones</li>
                            <li><strong>Modificación:</strong> Alterar la propia obra</li>
                            <li><strong>Retiro:</strong> Retirar la obra del comercio</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-coins"></i> Derechos Patrimoniales</h4>
                        <p>Son <strong>transferibles y tienen vigencia limitada</strong>:</p>
                        <ul>
                            <li><strong>Reproducción:</strong> Copiar la obra</li>
                            <li><strong>Distribución:</strong> Poner copias a disposición</li>
                            <li><strong>Comunicación pública:</strong> Difundir la obra</li>
                            <li><strong>Transformación:</strong> Traducir, adaptar</li>
                            <li><strong>Vigencia:</strong> Vida del autor + 100 años</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-users"></i> Derechos Conexos</h3>
                <p>La LFDA también protege los <strong>derechos conexos</strong> de:</p>
                <ul>
                    <li><strong>Artistas intérpretes o ejecutantes:</strong> Cantantes, músicos, actores</li>
                    <li><strong>Productores de fonogramas:</strong> Discográficas</li>
                    <li><strong>Productores de videogramas:</strong> Productoras audiovisuales</li>
                    <li><strong>Organismos de radiodifusión:</strong> Estaciones de radio y TV</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-clock"></i> Vigencia de Derechos Conexos</h4>
                    <p>Los derechos conexos tienen una vigencia de <strong>75 años</strong> a partir de la primera fijación, interpretación, transmisión o publicación, según corresponda.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-bookmark"></i> Reservas de Derechos</h3>
                <p>La LFDA establece el sistema de <strong>Reservas de Derechos al Uso Exclusivo</strong>, que protege:</p>
                <ul>
                    <li>Títulos de publicaciones periódicas (revistas, periódicos)</li>
                    <li>Nombres de personas o grupos dedicados a actividades artísticas</li>
                    <li>Nombres y características de personajes ficticios</li>
                    <li>Nombres y características de personas de caracterización humana</li>
                    <li>Promociones publicitarias</li>
                </ul>
            </div>
        `
    },
    
    'tema3-2': {
        title: '3.2 Ley Federal de Protección a la Propiedad Industrial (LFPPI)',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> ¿Qué es la LFPPI?</h3>
                <p>La <strong>Ley Federal de Protección a la Propiedad Industrial (LFPPI)</strong> es el ordenamiento jurídico mexicano que regula la protección de los derechos de propiedad industrial. Fue publicada el <strong>1 de julio de 2020</strong>, sustituyendo a la anterior Ley de la Propiedad Industrial (LPI) de 1991.</p>
                
                <p>Esta ley tiene como objetivo <strong>proteger la creatividad e innovación tecnológica</strong> mediante el otorgamiento de derechos exclusivos de explotación, fomentando así la competitividad económica del país.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Figuras que Protege la LFPPI</h3>
                <p>La LFPPI regula la protección de las siguientes figuras de propiedad industrial:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-lightbulb"></i>
                            <h4>Invenciones</h4>
                        </div>
                        <ul>
                            <li><strong>Patentes:</strong> 20 años de protección</li>
                            <li><strong>Modelos de utilidad:</strong> 15 años</li>
                            <li><strong>Diseños industriales:</strong> 25 años</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-trademark"></i>
                            <h4>Signos Distintivos</h4>
                        </div>
                        <ul>
                            <li><strong>Marcas:</strong> 10 años renovables</li>
                            <li><strong>Avisos comerciales:</strong> 10 años renovables</li>
                            <li><strong>Nombres comerciales</strong></li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4>Indicaciones Geográficas</h4>
                        </div>
                        <ul>
                            <li><strong>Denominaciones de origen</strong></li>
                            <li><strong>Indicaciones geográficas</strong></li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-secret"></i>
                            <h4>Secretos Industriales</h4>
                        </div>
                        <p>Información confidencial que proporciona ventaja competitiva.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-plus-circle"></i> Novedades de la LFPPI (2020)</h3>
                <p>La nueva ley introdujo importantes cambios respecto a la anterior LPI:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-star"></i> Nuevas Figuras</h4>
                        <ul>
                            <li>Indicaciones geográficas (adicional a denominaciones de origen)</li>
                            <li>Marcas de certificación</li>
                            <li>Marcas no tradicionales (sonoras, olfativas, holográficas)</li>
                            <li>Patentes complementarias farmacéuticas</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-sync-alt"></i> Cambios Importantes</h4>
                        <ul>
                            <li>Diseños industriales: de 15 a 25 años</li>
                            <li>Modelos de utilidad: de 10 a 15 años</li>
                            <li>Procedimientos más ágiles</li>
                            <li>Mayor protección contra competencia desleal</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-university"></i> Autoridad Competente</h3>
                <p>El <strong>Instituto Mexicano de la Propiedad Industrial (IMPI)</strong> es la autoridad encargada de:</p>
                <ul>
                    <li>Recibir y tramitar solicitudes de registro</li>
                    <li>Otorgar patentes, registros de marcas y demás títulos</li>
                    <li>Resolver controversias administrativas</li>
                    <li>Sancionar infracciones a la ley</li>
                    <li>Promover la cultura de la propiedad industrial</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Principio de Territorialidad</h4>
                    <p>Los derechos de propiedad industrial otorgados bajo la LFPPI solo tienen validez en <strong>territorio mexicano</strong>. Para protección internacional, es necesario solicitar registros en cada país o usar sistemas como el PCT (patentes) o el Protocolo de Madrid (marcas).</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Infracciones y Sanciones</h3>
                <p>La LFPPI establece infracciones administrativas y sus sanciones:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Multas</h4>
                        <p>Hasta 500,000 UMAs por infracciones graves.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Clausura</h4>
                        <p>Temporal o definitiva del establecimiento.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Decomiso</h4>
                        <p>De productos que violen derechos de PI.</p>
                    </div>
                </div>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Delitos en Materia de PI</h4>
                    <p>Además de las infracciones administrativas, el <strong>Código Penal Federal</strong> tipifica delitos como la falsificación de marcas y la piratería, con penas de prisión de 2 a 10 años.</p>
                </div>
            </div>
        `
    },
    
    'tema3-3': {
        title: '3.3 Competencia Desleal',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-balance-scale-right"></i> ¿Qué es la Competencia Desleal?</h3>
                <p>La <strong>competencia desleal</strong> se refiere a cualquier acto contrario a los usos y prácticas honestas en materia industrial o comercial que afecte ilegítimamente a un competidor o al mercado en general.</p>
                
                <p>Mientras que la propiedad intelectual protege <strong>derechos exclusivos</strong> sobre creaciones específicas, la normativa de competencia desleal establece <strong>reglas de juego limpio</strong> en el mercado, sancionando conductas que, aunque no violen un derecho de PI concreto, sean contrarias a la buena fe comercial.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-contract"></i> Marco Legal en México</h3>
                <p>La competencia desleal en México está regulada por:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-gavel"></i>
                            <h4>LFPPI</h4>
                        </div>
                        <p>La Ley Federal de Protección a la Propiedad Industrial tipifica infracciones relacionadas con competencia desleal en materia de PI.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-chart-line"></i>
                            <h4>LFCE</h4>
                        </div>
                        <p>La Ley Federal de Competencia Económica sanciona prácticas monopólicas y restricciones al libre mercado.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-shopping-cart"></i>
                            <h4>LFPC</h4>
                        </div>
                        <p>La Ley Federal de Protección al Consumidor protege contra publicidad engañosa.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-globe"></i>
                            <h4>Convenio de París</h4>
                        </div>
                        <p>El artículo 10bis establece obligaciones internacionales de protección contra competencia desleal.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-ban"></i> Actos de Competencia Desleal</h3>
                <p>Los principales actos considerados como competencia desleal incluyen:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-clone"></i> Actos de Confusión</h4>
                        <ul>
                            <li>Imitación de signos distintivos</li>
                            <li>Imitación de apariencia comercial (trade dress)</li>
                            <li>Uso de nombres comerciales similares</li>
                            <li>Copia de empaques o presentaciones</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-comment-slash"></i> Actos de Denigración</h4>
                        <ul>
                            <li>Afirmaciones falsas sobre competidores</li>
                            <li>Difamación comercial</li>
                            <li>Desprestigio de productos o servicios</li>
                            <li>Publicidad comparativa deshonesta</li>
                        </ul>
                    </div>
                </div>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-mask"></i> Actos de Engaño</h4>
                        <ul>
                            <li>Publicidad falsa o engañosa</li>
                            <li>Indicaciones falsas de origen</li>
                            <li>Atribución falsa de cualidades</li>
                            <li>Simulación de certificaciones</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-user-secret"></i> Apropiación Indebida</h4>
                        <ul>
                            <li>Violación de secretos industriales</li>
                            <li>Inducción a la ruptura contractual</li>
                            <li>Aprovechamiento del esfuerzo ajeno</li>
                            <li>Parasitismo comercial</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-exclamation-circle"></i> Infracciones en Materia de PI</h3>
                <p>La LFPPI tipifica como infracciones administrativas relacionadas con competencia desleal:</p>
                
                <ul>
                    <li>Usar una marca parecida en grado de confusión</li>
                    <li>Producir, almacenar o comercializar productos con marcas falsificadas</li>
                    <li>Revelar secretos industriales sin consentimiento</li>
                    <li>Usar denominaciones de origen sin autorización</li>
                    <li>Realizar actos que causen confusión sobre el origen empresarial</li>
                    <li>Usar indicaciones falsas sobre premios o reconocimientos</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-landmark"></i> Autoridades Competentes</h4>
                    <p>El <strong>IMPI</strong> es competente para conocer de infracciones administrativas en materia de PI, mientras que <strong>COFECE</strong> (Comisión Federal de Competencia Económica) conoce de prácticas monopólicas y <strong>PROFECO</strong> de violaciones a derechos del consumidor.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Protección y Recursos Legales</h3>
                <p>Las empresas afectadas por competencia desleal pueden:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Solicitud de Infracción</h4>
                        <p>Presentar solicitud ante el IMPI para que investigue y sancione.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Medidas Precautorias</h4>
                        <p>Solicitar el cese inmediato de las conductas desleales.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Reparación del Daño</h4>
                        <p>Demandar civilmente la indemnización por daños y perjuicios.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-laptop-code"></i> Competencia Desleal en el Entorno Digital</h3>
                <p>En la era digital, surgen nuevas formas de competencia desleal:</p>
                <ul>
                    <li><strong>Cybersquatting:</strong> Registro de dominios con marcas ajenas</li>
                    <li><strong>Metatags:</strong> Uso de marcas de terceros en código web</li>
                    <li><strong>Click fraud:</strong> Manipulación de publicidad en línea</li>
                    <li><strong>Fake reviews:</strong> Reseñas falsas para desprestigiar competidores</li>
                    <li><strong>Scraping:</strong> Extracción no autorizada de datos comerciales</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Importancia de la Prevención</h4>
                    <p>La mejor estrategia contra la competencia desleal es la <strong>prevención</strong>: registrar marcas y demás signos distintivos, documentar innovaciones, implementar políticas de confidencialidad y monitorear el mercado para detectar infracciones tempranamente.</p>
                </div>
            </div>
        `
    },
    
    'tema3-4': {
        title: '3.4 La OMPI en México',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> 3.4.1 La OMPI (Organización Mundial de la Propiedad Intelectual)</h3>
                <p>La <strong>Organización Mundial de la Propiedad Intelectual (OMPI)</strong>, conocida en inglés como WIPO (World Intellectual Property Organization), es un organismo especializado de las Naciones Unidas dedicado a fomentar el uso y la protección de la propiedad intelectual a nivel mundial.</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-calendar-alt"></i>
                            <h4>Fundación</h4>
                        </div>
                        <p>Establecida en 1967, con sede en <strong>Ginebra, Suiza</strong>. Actualmente cuenta con 193 Estados miembros.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-bullseye"></i>
                            <h4>Misión</h4>
                        </div>
                        <p>Desarrollar un sistema de PI internacional equilibrado que fomente la innovación y creatividad.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-flag"></i>
                            <h4>México</h4>
                        </div>
                        <p>México es miembro de la OMPI desde <strong>1975</strong> y participa activamente en sus tratados y programas.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-tasks"></i> Funciones Principales de la OMPI</h3>
                <ul>
                    <li><strong>Desarrollo normativo:</strong> Administra tratados internacionales de PI</li>
                    <li><strong>Servicios de registro:</strong> Sistema PCT (patentes), Madrid (marcas), La Haya (diseños)</li>
                    <li><strong>Resolución de controversias:</strong> Centro de Arbitraje y Mediación</li>
                    <li><strong>Asistencia técnica:</strong> Apoyo a países en desarrollo</li>
                    <li><strong>Base de datos:</strong> Acceso a información de patentes y marcas mundiales</li>
                    <li><strong>Estadísticas:</strong> Indicadores globales de PI</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-signature"></i> Tratados Administrados por la OMPI</h3>
                <p>México es parte de importantes tratados administrados por la OMPI:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-lightbulb"></i> Propiedad Industrial</h4>
                        <ul>
                            <li><strong>Convenio de París</strong> (1883)</li>
                            <li><strong>Tratado PCT</strong> - Patentes internacionales</li>
                            <li><strong>Protocolo de Madrid</strong> - Marcas internacionales</li>
                            <li><strong>Arreglo de La Haya</strong> - Diseños industriales</li>
                            <li><strong>Arreglo de Lisboa</strong> - Denominaciones de origen</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-book"></i> Derecho de Autor</h4>
                        <ul>
                            <li><strong>Convenio de Berna</strong> (1886)</li>
                            <li><strong>Tratado de la OMPI sobre Derecho de Autor (WCT)</strong></li>
                            <li><strong>Tratado de la OMPI sobre Interpretaciones y Fonogramas (WPPT)</strong></li>
                            <li><strong>Tratado de Beijing</strong> - Interpretaciones audiovisuales</li>
                            <li><strong>Tratado de Marrakech</strong> - Acceso para discapacitados visuales</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-calendar-check"></i> 3.4.2 La Agenda de la OMPI</h3>
                <p>La <strong>Agenda para el Desarrollo de la OMPI</strong> fue adoptada en 2007 con 45 recomendaciones agrupadas en seis temas:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">A</div>
                        <h4>Asistencia Técnica</h4>
                        <p>Fortalecimiento de capacidades en países en desarrollo orientada a las necesidades locales.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">B</div>
                        <h4>Normas y Flexibilidades</h4>
                        <p>Desarrollo de normas equilibradas que permitan flexibilidades para políticas públicas.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">C</div>
                        <h4>Transferencia de Tecnología</h4>
                        <p>Promoción de la difusión y transferencia de tecnología a países en desarrollo.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-flag-checkered"></i> Objetivos Clave</h4>
                    <ul>
                        <li>Garantizar que la PI contribuya al desarrollo económico, social y cultural</li>
                        <li>Promover el acceso al conocimiento y la tecnología</li>
                        <li>Considerar las necesidades de los países en desarrollo</li>
                        <li>Fomentar la innovación y creatividad en beneficio de todos</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-graduation-cap"></i> 3.4.3 Academia de la OMPI</h3>
                <p>La <strong>Academia de la OMPI</strong> es el centro de excelencia para la educación y formación en propiedad intelectual. Ofrece:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-laptop"></i>
                            <h4>Cursos a Distancia</h4>
                        </div>
                        <p>Más de 20 cursos gratuitos en línea en español sobre diversos temas de PI, disponibles para cualquier persona.</p>
                        <p class="example">Ejemplo: Curso General de PI (DL-101), Derecho de Autor, Patentes, Marcas.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-users"></i>
                            <h4>Programas Profesionales</h4>
                        </div>
                        <p>Cursos avanzados para profesionales, funcionarios de oficinas de PI y académicos.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-university"></i>
                            <h4>Maestrías</h4>
                        </div>
                        <p>Programas de maestría conjuntos con universidades reconocidas mundialmente.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-handshake"></i>
                            <h4>Colaboraciones</h4>
                        </div>
                        <p>Alianzas con universidades e instituciones nacionales para formación especializada.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-link"></i> Recursos Útiles</h4>
                    <p>La Academia de la OMPI ofrece recursos gratuitos accesibles en <strong>www.wipo.int/academy</strong>. Los cursos a distancia son particularmente valiosos para estudiantes y profesionales mexicanos interesados en especializarse en PI.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-handshake"></i> Relación OMPI-México</h3>
                <p>México mantiene una relación activa con la OMPI:</p>
                <ul>
                    <li>Participa en asambleas y comités permanentes</li>
                    <li>Utiliza los sistemas PCT y Madrid para protección internacional</li>
                    <li>Recibe asistencia técnica para modernización del sistema de PI</li>
                    <li>Colabora en programas de formación y capacitación</li>
                    <li>Contribuye a la elaboración de nuevos tratados</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-info-circle"></i> Importancia para Innovadores Mexicanos</h4>
                    <p>Los sistemas de la OMPI permiten a inventores y empresarios mexicanos <strong>proteger sus creaciones en múltiples países</strong> con una sola solicitud, reduciendo costos y simplificando trámites. El sistema PCT es especialmente útil para startups tecnológicas que buscan expansión internacional.</p>
                </div>
            </div>
        `
    },
    
    'tema3-5': {
        title: '3.5 El IMPI e INDAUTOR',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-building"></i> 3.5.1 Instituto Mexicano de la Propiedad Industrial (IMPI)</h3>
                <p>El <strong>Instituto Mexicano de la Propiedad Industrial (IMPI)</strong> es un organismo público descentralizado con personalidad jurídica y patrimonio propio, encargado de administrar el sistema de propiedad industrial en México.</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-calendar-alt"></i>
                            <h4>Creación</h4>
                        </div>
                        <p>Fundado el <strong>10 de diciembre de 1993</strong>, inició operaciones el 1 de enero de 1994.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-gavel"></i>
                            <h4>Marco Legal</h4>
                        </div>
                        <p>Regulado por la LFPPI y su Reglamento, así como por su Estatuto Orgánico.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4>Sede</h4>
                        </div>
                        <p>Oficinas centrales en la Ciudad de México, con oficinas regionales en todo el país.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-tasks"></i> Funciones del IMPI</h3>
                <p>El IMPI tiene las siguientes atribuciones principales:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-file-signature"></i> Funciones Registrales</h4>
                        <ul>
                            <li>Tramitar solicitudes de patentes</li>
                            <li>Registrar modelos de utilidad</li>
                            <li>Registrar diseños industriales</li>
                            <li>Registrar marcas y avisos comerciales</li>
                            <li>Registrar denominaciones de origen</li>
                            <li>Mantener el acervo de solicitudes y registros</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-balance-scale"></i> Funciones de Autoridad</h4>
                        <ul>
                            <li>Resolver controversias administrativas</li>
                            <li>Declarar nulidades y cancelaciones</li>
                            <li>Sancionar infracciones a la LFPPI</li>
                            <li>Realizar visitas de inspección</li>
                            <li>Emitir medidas precautorias</li>
                            <li>Imponer multas y sanciones</li>
                        </ul>
                    </div>
                </div>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-handshake"></i> Servicios</h4>
                        <ul>
                            <li>Búsquedas de antecedentes</li>
                            <li>Información tecnológica de patentes</li>
                            <li>Capacitación y difusión</li>
                            <li>Orientación al público</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-globe"></i> Vinculación Internacional</h4>
                        <ul>
                            <li>Representar a México ante la OMPI</li>
                            <li>Tramitar solicitudes PCT y Madrid</li>
                            <li>Colaborar con oficinas extranjeras</li>
                            <li>Participar en foros internacionales</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-laptop"></i> Trámites en Línea</h3>
                <p>El IMPI ofrece servicios digitales a través de su portal:</p>
                <ul>
                    <li><strong>MARCANET:</strong> Consulta de marcas registradas</li>
                    <li><strong>SIGA:</strong> Sistema de solicitudes en línea</li>
                    <li><strong>VIDOC:</strong> Visor de documentos de expedientes</li>
                    <li><strong>Gaceta Electrónica:</strong> Publicación de solicitudes y registros</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-link"></i> Portal del IMPI</h4>
                    <p>Todos los servicios están disponibles en <strong>www.gob.mx/impi</strong>. Los usuarios pueden realizar consultas gratuitas de marcas y patentes, y presentar solicitudes electrónicamente.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-book-open"></i> 3.5.2 Instituto Nacional del Derecho de Autor (INDAUTOR)</h3>
                <p>El <strong>Instituto Nacional del Derecho de Autor (INDAUTOR)</strong> es un órgano desconcentrado de la Secretaría de Cultura, encargado de proteger y fomentar el derecho de autor y los derechos conexos en México.</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-calendar-alt"></i>
                            <h4>Creación</h4>
                        </div>
                        <p>Establecido en <strong>1996</strong> con la nueva Ley Federal del Derecho de Autor.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-gavel"></i>
                            <h4>Marco Legal</h4>
                        </div>
                        <p>Regulado por la Ley Federal del Derecho de Autor (LFDA) y su Reglamento.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4>Sede</h4>
                        </div>
                        <p>Ciudad de México, dentro de las instalaciones de la Secretaría de Cultura.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clipboard-list"></i> Funciones del INDAUTOR</h3>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-file-alt"></i> Funciones Registrales</h4>
                        <ul>
                            <li>Llevar el Registro Público del Derecho de Autor</li>
                            <li>Inscribir obras literarias y artísticas</li>
                            <li>Registrar contratos de cesión y licencia</li>
                            <li>Inscribir reservas de derechos</li>
                            <li>Registrar sociedades de gestión colectiva</li>
                            <li>Expedir certificaciones y constancias</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-gavel"></i> Funciones de Autoridad</h4>
                        <ul>
                            <li>Realizar procedimientos de avenencia</li>
                            <li>Resolver procedimientos de infracción</li>
                            <li>Imponer sanciones administrativas</li>
                            <li>Intervenir en arbitrajes</li>
                            <li>Supervisar sociedades de gestión</li>
                            <li>Emitir opiniones técnicas</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-bookmark"></i> Reservas de Derechos</h3>
                <p>INDAUTOR administra las <strong>reservas de derechos al uso exclusivo</strong>, que protegen:</p>
                <ul>
                    <li>Títulos de publicaciones periódicas (revistas, periódicos)</li>
                    <li>Títulos de difusiones periódicas (programas de radio/TV)</li>
                    <li>Nombres artísticos o seudónimos</li>
                    <li>Nombres de grupos artísticos</li>
                    <li>Personajes ficticios o simbólicos</li>
                    <li>Personajes humanos de caracterización</li>
                    <li>Promociones publicitarias</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-clock"></i> Vigencia</h4>
                    <p>Las reservas tienen vigencia de <strong>1 a 5 años</strong> según el tipo, y son <strong>renovables</strong> indefinidamente mientras se acredite el uso.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale-left"></i> Diferencias entre IMPI e INDAUTOR</h3>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Aspecto</th>
                                <th>IMPI</th>
                                <th>INDAUTOR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Materia</strong></td>
                                <td>Propiedad Industrial</td>
                                <td>Derecho de Autor</td>
                            </tr>
                            <tr>
                                <td><strong>Ley aplicable</strong></td>
                                <td>LFPPI</td>
                                <td>LFDA</td>
                            </tr>
                            <tr>
                                <td><strong>Dependencia</strong></td>
                                <td>Secretaría de Economía</td>
                                <td>Secretaría de Cultura</td>
                            </tr>
                            <tr>
                                <td><strong>Registro</strong></td>
                                <td>Constitutivo (crea el derecho)</td>
                                <td>Declarativo (reconoce el derecho)</td>
                            </tr>
                            <tr>
                                <td><strong>Protege</strong></td>
                                <td>Patentes, marcas, diseños</td>
                                <td>Obras, interpretaciones</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-laptop-code"></i> Servicios Digitales</h3>
                <p>Ambas instituciones ofrecen servicios en línea:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-building"></i>
                            <h4>IMPI en Línea</h4>
                        </div>
                        <ul>
                            <li>Consulta de marcas (MARCANET)</li>
                            <li>Solicitudes electrónicas (SIGA)</li>
                            <li>Pago de derechos en línea</li>
                            <li>Consulta de expedientes</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-book-open"></i>
                            <h4>INDAUTOR en Línea</h4>
                        </div>
                        <ul>
                            <li>Consulta del Registro Público</li>
                            <li>Solicitud de registros en línea</li>
                            <li>Consulta de reservas de derechos</li>
                            <li>Descarga de formatos</li>
                        </ul>
                    </div>
                </div>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-info-circle"></i> Consejo Práctico</h4>
                    <p>Antes de crear una marca, nombre artístico o título de publicación, es recomendable realizar búsquedas tanto en <strong>MARCANET del IMPI</strong> como en la base de datos de <strong>reservas de INDAUTOR</strong>, ya que pueden existir derechos previos en ambas instituciones.</p>
                </div>
            </div>
        `
    },
    
    'quiz3': {
        title: 'Cuestionario Unidad 3: Legislación de la PI',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 3: Legislación de la Propiedad Intelectual</p>
                </div>
                
                <div class="quiz-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor del cuestionario</strong>
                        <p>Este cuestionario representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="quiz-info">
                    <div class="info-item">
                        <i class="fas fa-question-circle"></i>
                        <span>10 preguntas</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span id="quiz3-time-limit">15 minutos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-redo"></i>
                        <span id="quiz3-max-attempts">2 intentos permitidos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-percentage"></i>
                        <span id="quiz3-passing-score">Calificación mínima: 60%</span>
                    </div>
                </div>
                
                <div class="quiz-instructions">
                    <h4><i class="fas fa-info-circle"></i> Instrucciones</h4>
                    <ul>
                        <li>Lee cuidadosamente cada pregunta antes de responder.</li>
                        <li>Selecciona la opción que consideres correcta para cada pregunta.</li>
                        <li>Una vez iniciado el cuestionario, el tiempo comenzará a correr.</li>
                        <li>Puedes revisar tus respuestas antes de enviar.</li>
                        <li>Al finalizar, recibirás retroalimentación inmediata.</li>
                    </ul>
                </div>
                
                <div id="quiz3-container" class="quiz-questions" style="display: none;">
                    <!-- Las preguntas se cargarán dinámicamente -->
                </div>
                
                <div id="quiz3-start" class="quiz-start-section">
                    <p>Asegúrate de haber revisado los temas 3.1 al 3.5 antes de iniciar.</p>
                    <div class="quiz-attempts-info" id="quiz3-attempts-info"></div>
                    <button class="btn-primary btn-large" id="quiz3-start-btn" onclick="startQuiz(3)">
                        <i class="fas fa-play"></i> Iniciar Cuestionario
                    </button>
                </div>
                
                <div id="quiz3-results" class="quiz-results" style="display: none;">
                    <!-- Los resultados se mostrarán aquí -->
                </div>
            </div>
        `
    },
    
    // =============================================
    // UNIDAD 4: DERECHO DE AUTOR Y CONEXOS
    // =============================================
    
    'tema4-1': {
        title: '4.1 Derechos de Autor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-copyright"></i> ¿Qué es el Derecho de Autor?</h3>
                <p>El <strong>Derecho de Autor</strong> es el conjunto de normas jurídicas que protegen las <strong>obras originales de autoría</strong> desde el momento de su creación. A diferencia de la Propiedad Industrial, el Derecho de Autor surge automáticamente con la creación de la obra, sin necesidad de registro previo.</p>
                
                <p>Esta rama de la Propiedad Intelectual protege la <strong>forma de expresión de las ideas</strong>, no las ideas en sí mismas. Mientras la idea de escribir una novela sobre robots no es protegible, la forma específica en que un autor desarrolla esa idea sí lo es.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-building"></i> Marco Legal en México</h4>
                    <p>El Derecho de Autor está regulado por la <strong>Ley Federal del Derecho de Autor (LFDA)</strong> y supervisado por el <strong>Instituto Nacional del Derecho de Autor (INDAUTOR)</strong>, dependiente de la Secretaría de Cultura.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-heart"></i> 4.1.1 Derechos Morales</h3>
                <p>Los <strong>derechos morales</strong> protegen la relación personal e íntima entre el autor y su obra. Reconocen el vínculo espiritual que existe entre el creador y su creación.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Características de los Derechos Morales</h4>
                    <ul>
                        <li><strong>Perpetuos:</strong> No tienen límite de tiempo, incluso después de la muerte del autor</li>
                        <li><strong>Inalienables:</strong> No pueden venderse ni transferirse a terceros</li>
                        <li><strong>Irrenunciables:</strong> El autor no puede renunciar a ellos por contrato</li>
                        <li><strong>Inembargables:</strong> No pueden ser objeto de embargo judicial</li>
                        <li><strong>Imprescriptibles:</strong> No se pierden por el paso del tiempo</li>
                    </ul>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-tag"></i>
                            <h4>Derecho de Paternidad</h4>
                        </div>
                        <p>Derecho a ser reconocido como el <strong>autor de la obra</strong> y a que su nombre aparezca vinculado a ella. Incluye el derecho a usar seudónimo o permanecer anónimo.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-shield-alt"></i>
                            <h4>Derecho de Integridad</h4>
                        </div>
                        <p>Derecho a <strong>oponerse a modificaciones</strong>, mutilaciones o deformaciones que puedan dañar el honor o reputación del autor, o que demeriten la obra.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-bullhorn"></i>
                            <h4>Derecho de Divulgación</h4>
                        </div>
                        <p>Derecho a <strong>decidir si la obra se hace pública</strong> y en qué forma, cuándo y dónde, o a mantenerla inédita.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-undo"></i>
                            <h4>Derecho de Retracto</h4>
                        </div>
                        <p>Derecho a <strong>retirar la obra del comercio</strong> cuando ya no represente su convicción intelectual o moral (requiere indemnizar a quien tenga derechos).</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-coins"></i> 4.1.2 Derechos Patrimoniales</h3>
                <p>Los <strong>derechos patrimoniales</strong> (también llamados derechos económicos) permiten al autor explotar económicamente su obra y obtener beneficios de ella.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Características de los Derechos Patrimoniales</h4>
                    <ul>
                        <li><strong>Temporales:</strong> Tienen una duración limitada (vida del autor + 100 años en México)</li>
                        <li><strong>Transferibles:</strong> Pueden cederse, licenciarse o venderse</li>
                        <li><strong>Renunciables:</strong> El autor puede renunciar a ellos</li>
                        <li><strong>Embargables:</strong> Pueden ser objeto de medidas cautelares</li>
                    </ul>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-copy"></i>
                            <h4>Reproducción</h4>
                        </div>
                        <p>Derecho a autorizar o prohibir la <strong>realización de copias</strong> de la obra por cualquier medio (impreso, digital, etc.).</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-truck"></i>
                            <h4>Distribución</h4>
                        </div>
                        <p>Derecho a <strong>poner copias a disposición del público</strong> mediante venta, alquiler o préstamo.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-broadcast-tower"></i>
                            <h4>Comunicación Pública</h4>
                        </div>
                        <p>Derecho a <strong>representar, ejecutar o exhibir</strong> la obra ante un público sin distribución de copias.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-exchange-alt"></i>
                            <h4>Transformación</h4>
                        </div>
                        <p>Derecho a autorizar <strong>traducciones, adaptaciones o modificaciones</strong> de la obra original.</p>
                    </div>
                </div>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de Obra</th>
                                <th>Duración en México</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Obras de autor individual</td>
                                <td>Vida del autor + <strong>100 años</strong></td>
                            </tr>
                            <tr>
                                <td>Obras en colaboración</td>
                                <td>Vida del último coautor + 100 años</td>
                            </tr>
                            <tr>
                                <td>Obras anónimas/seudónimas</td>
                                <td>100 años desde la primera publicación</td>
                            </tr>
                            <tr>
                                <td>Programas de computación</td>
                                <td>Vida del autor + 100 años</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-palette"></i> Obras Protegidas por Derecho de Autor</h3>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-check-circle"></i> Obras Protegidas</h4>
                        <ul>
                            <li>Obras literarias (libros, artículos, guiones)</li>
                            <li>Obras musicales con o sin letra</li>
                            <li>Obras artísticas (pinturas, esculturas, fotografías)</li>
                            <li>Obras audiovisuales y cinematográficas</li>
                            <li>Programas de computación (software)</li>
                            <li>Bases de datos originales</li>
                            <li>Obras arquitectónicas</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-times-circle"></i> No Protegidas</h4>
                        <ul>
                            <li>Ideas, conceptos o teorías abstractas</li>
                            <li>Procedimientos, métodos o sistemas</li>
                            <li>Descubrimientos científicos</li>
                            <li>Contenidos informativos de noticias</li>
                            <li>Textos legislativos y judiciales</li>
                            <li>Obras en dominio público</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    
    'tema4-2': {
        title: '4.2 Marca',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-trademark"></i> 4.2.1 Concepto de Marca</h3>
                <p>Una <strong>marca</strong> es un signo distintivo que sirve para <strong>identificar y diferenciar</strong> productos o servicios de una empresa respecto de los de sus competidores. Es uno de los activos intangibles más valiosos para las empresas.</p>
                
                <p>La marca cumple funciones esenciales en el mercado:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-fingerprint"></i>
                            <h4>Función Distintiva</h4>
                        </div>
                        <p>Diferencia productos o servicios de una empresa respecto de los de la competencia.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-building"></i>
                            <h4>Indicadora de Origen</h4>
                        </div>
                        <p>Señala la procedencia empresarial, permitiendo al consumidor identificar al fabricante.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-medal"></i>
                            <h4>Garantía de Calidad</h4>
                        </div>
                        <p>Genera expectativas sobre la calidad del producto basadas en experiencias previas.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-bullhorn"></i>
                            <h4>Función Publicitaria</h4>
                        </div>
                        <p>Herramienta de marketing y posicionamiento en el mercado.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-gavel"></i> Marco Legal</h4>
                    <p>Las marcas en México están reguladas por la <strong>Ley Federal de Protección a la Propiedad Industrial (LFPPI)</strong> y su registro se realiza ante el <strong>Instituto Mexicano de la Propiedad Industrial (IMPI)</strong>.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-th-list"></i> 4.2.2 Tipos de Marcas</h3>
                <p>La LFPPI reconoce diversos tipos de marcas según sus características:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-font"></i>
                            <h4>Marcas Nominativas</h4>
                        </div>
                        <p>Consisten únicamente en <strong>palabras o letras</strong> sin diseño especial ni tipografía distintiva.</p>
                        <p class="example">Ejemplos: "GOOGLE", "MICROSOFT", "BIMBO"</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-image"></i>
                            <h4>Marcas Figurativas</h4>
                        </div>
                        <p>Consisten en <strong>figuras, símbolos o logotipos</strong> sin elementos de texto.</p>
                        <p class="example">Ejemplos: La manzana de Apple, el swoosh de Nike</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-object-group"></i>
                            <h4>Marcas Mixtas</h4>
                        </div>
                        <p>Combinan <strong>elementos verbales y gráficos</strong> en un solo signo.</p>
                        <p class="example">Ejemplo: Logo de Coca-Cola con su tipografía característica</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cube"></i>
                            <h4>Marcas Tridimensionales</h4>
                        </div>
                        <p>Protegen la <strong>forma distintiva</strong> de productos o envases.</p>
                        <p class="example">Ejemplos: Botella de Coca-Cola, forma del chocolate Toblerone</p>
                    </div>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-music"></i>
                            <h4>Marcas Sonoras</h4>
                        </div>
                        <p>Consisten en <strong>sonidos distintivos</strong> asociados a una marca.</p>
                        <p class="example">Ejemplos: El rugido del león de MGM, el sonido de Netflix</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-palette"></i>
                            <h4>Marcas de Color</h4>
                        </div>
                        <p>Protegen un <strong>color específico</strong> cuando ha adquirido distintividad.</p>
                        <p class="example">Ejemplos: El azul Tiffany, el rojo de Christian Louboutin</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-layer-group"></i>
                            <h4>Marcas Holográficas</h4>
                        </div>
                        <p>Elementos que cambian de apariencia según el ángulo de visión.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-wind"></i>
                            <h4>Marcas Olfativas</h4>
                        </div>
                        <p>Fragancias distintivas asociadas a productos (novedad en LFPPI 2020).</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-signature"></i> Registro de Marcas</h3>
                <p>Para registrar una marca ante el IMPI:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Búsqueda de Antecedentes</h4>
                        <p>Verificar disponibilidad en MARCANET para evitar conflictos con marcas existentes.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Clasificación de Niza</h4>
                        <p>Determinar las clases de productos o servicios aplicables (sistema internacional de 45 clases).</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Solicitud ante IMPI</h4>
                        <p>Presentar la solicitud con documentación y pago de derechos.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">4</div>
                        <h4>Examen y Otorgamiento</h4>
                        <p>El IMPI examina requisitos legales, publica en Gaceta y emite el título.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-clock"></i> Vigencia de las Marcas</h4>
                    <p>Las marcas tienen vigencia de <strong>10 años</strong> a partir de su otorgamiento, <strong>renovables indefinidamente</strong> por períodos iguales. Es el único derecho de PI que puede ser perpetuo mientras se mantenga en uso.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-tags"></i> Otros Signos Distintivos</h3>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Signo Distintivo</th>
                                <th>Función</th>
                                <th>Vigencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Nombre Comercial</strong></td>
                                <td>Identifica a una empresa o establecimiento</td>
                                <td>10 años renovables</td>
                            </tr>
                            <tr>
                                <td><strong>Aviso Comercial</strong></td>
                                <td>Frases u oraciones publicitarias (eslóganes)</td>
                                <td>10 años renovables</td>
                            </tr>
                            <tr>
                                <td><strong>Denominación de Origen</strong></td>
                                <td>Vincula productos a una región geográfica</td>
                                <td>Indefinida</td>
                            </tr>
                            <tr>
                                <td><strong>Indicación Geográfica</strong></td>
                                <td>Similar pero con requisitos menos estrictos</td>
                                <td>Indefinida</td>
                            </tr>
                            <tr>
                                <td><strong>Marca Colectiva</strong></td>
                                <td>Identifica productos de una asociación</td>
                                <td>10 años renovables</td>
                            </tr>
                            <tr>
                                <td><strong>Marca de Certificación</strong></td>
                                <td>Garantiza cumplimiento de normas de calidad</td>
                                <td>10 años renovables</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    
    'tema4-3': {
        title: '4.3 Diseños Industriales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-pencil-ruler"></i> ¿Qué es un Diseño Industrial?</h3>
                <p>El <strong>diseño industrial</strong> protege la apariencia estética u ornamental de productos industriales. No protege la función técnica, sino el <strong>aspecto visual</strong> que hace atractivo un producto ante los consumidores.</p>
                
                <p>Es una figura de propiedad industrial que reconoce el valor comercial de la estética en los productos, incentivando la inversión en diseño y diferenciación visual.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-gavel"></i> Marco Legal</h4>
                    <p>Los diseños industriales están regulados por la <strong>Ley Federal de Protección a la Propiedad Industrial (LFPPI)</strong> y se registran ante el <strong>IMPI</strong>.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-th-large"></i> Tipos de Diseños Industriales</h3>
                <p>La LFPPI reconoce dos categorías de diseños industriales:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-image"></i>
                            <h4>Dibujos Industriales</h4>
                        </div>
                        <p>Configuraciones <strong>bidimensionales</strong> aplicadas a la superficie de productos.</p>
                        <ul>
                            <li>Patrones textiles y estampados</li>
                            <li>Diseños gráficos en envases</li>
                            <li>Decoraciones en superficies</li>
                            <li>Interfaces gráficas de usuario</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cube"></i>
                            <h4>Modelos Industriales</h4>
                        </div>
                        <p>Configuraciones <strong>tridimensionales</strong> de productos.</p>
                        <ul>
                            <li>Forma de automóviles</li>
                            <li>Diseño de muebles</li>
                            <li>Forma de electrodomésticos</li>
                            <li>Diseño de envases y botellas</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-double"></i> Requisitos de Protección</h3>
                <p>Para registrar un diseño industrial debe cumplir con:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Novedad</h4>
                        <p>No haber sido divulgado públicamente antes de la fecha de solicitud en ninguna parte del mundo.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Originalidad</h4>
                        <p>Ser creación independiente del diseñador, con características propias que lo distingan.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Aplicación Industrial</h4>
                        <p>Ser reproducible en serie por medios industriales o artesanales.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-ban"></i> Exclusiones</h3>
                <p>No pueden registrarse como diseños industriales:</p>
                <ul>
                    <li>Diseños contrarios al orden público o la moral</li>
                    <li>Diseños que carezcan de novedad u originalidad</li>
                    <li>Formas dictadas <strong>exclusivamente por la función técnica</strong></li>
                    <li>Diseños que puedan inducir a error sobre el origen o calidad del producto</li>
                    <li>Diseños que reproduzcan emblemas oficiales o símbolos patrios</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Forma Funcional vs. Estética</h4>
                    <p>Si la forma del producto está dictada únicamente por su función técnica (como una tuerca hexagonal), no puede protegerse como diseño industrial. Solo se protege la apariencia que va <strong>más allá de lo funcionalmente necesario</strong>.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clock"></i> Vigencia y Derechos</h3>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-calendar"></i> Duración</h4>
                        <p>En México, los diseños industriales tienen una vigencia de <strong>25 años improrrogables</strong> contados desde la fecha de presentación de la solicitud.</p>
                        <p><em>Nota: La LFPPI 2020 aumentó la vigencia de 15 a 25 años.</em></p>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-shield-alt"></i> Derechos del Titular</h4>
                        <ul>
                            <li>Impedir que terceros fabriquen productos con el diseño</li>
                            <li>Prohibir la comercialización de productos infractores</li>
                            <li>Licenciar o ceder el registro</li>
                            <li>Iniciar acciones legales contra infractores</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-laptop"></i> Diseños Industriales en Tecnología</h3>
                <p>En el sector tecnológico, los diseños industriales protegen:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-mobile-alt"></i>
                            <h4>Dispositivos Electrónicos</h4>
                        </div>
                        <p>Forma y apariencia de smartphones, tablets, computadoras portátiles.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-desktop"></i>
                            <h4>Interfaces Gráficas (GUI)</h4>
                        </div>
                        <p>Diseño visual de pantallas, iconos y elementos de interfaz de usuario.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-watch"></i>
                            <h4>Wearables</h4>
                        </div>
                        <p>Diseño de relojes inteligentes, auriculares, dispositivos vestibles.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-gamepad"></i>
                            <h4>Accesorios</h4>
                        </div>
                        <p>Controladores de videojuegos, cargadores, fundas y periféricos.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-gavel"></i> Caso Emblemático: Apple vs. Samsung</h4>
                    <p>El litigio Apple vs. Samsung es un ejemplo icónico de la importancia de los diseños industriales en tecnología. Apple obtuvo protección sobre el diseño rectangular con esquinas redondeadas del iPhone, demostrando el valor estratégico de esta figura.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> Protección Internacional</h3>
                <p>Para proteger diseños industriales en otros países:</p>
                <ul>
                    <li><strong>Sistema de La Haya:</strong> Permite solicitar protección en múltiples países con una sola solicitud internacional ante la OMPI</li>
                    <li><strong>Solicitudes nacionales:</strong> Presentar solicitudes individuales en cada país de interés</li>
                    <li><strong>Prioridad:</strong> 6 meses para reclamar prioridad desde la primera solicitud</li>
                </ul>
            </div>
        `
    },
    
    'tema4-4': {
        title: '4.4 Patentes',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-lightbulb"></i> ¿Qué es una Patente?</h3>
                <p>Una <strong>patente</strong> es un título de propiedad otorgado por el Estado que confiere a su titular el <strong>derecho exclusivo de explotar una invención</strong> por un tiempo determinado. Es el mecanismo por excelencia para proteger las innovaciones técnicas.</p>
                
                <p>A cambio de este monopolio temporal, el inventor debe <strong>divulgar públicamente su invención</strong>, contribuyendo así al acervo del conocimiento técnico mundial (estado de la técnica).</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-gavel"></i> Marco Legal</h4>
                    <p>Las patentes están reguladas por la <strong>Ley Federal de Protección a la Propiedad Industrial (LFPPI)</strong> y se otorgan por el <strong>IMPI</strong>.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-double"></i> Requisitos de Patentabilidad</h3>
                <p>Para que una invención sea patentable debe cumplir con tres requisitos fundamentales:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-star"></i>
                            <h4>Novedad</h4>
                        </div>
                        <p>La invención no debe formar parte del <strong>estado de la técnica</strong>. No puede haber sido divulgada previamente en ninguna parte del mundo, por ningún medio.</p>
                        <p class="example">El estado de la técnica incluye todo lo publicado antes de la fecha de solicitud.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-brain"></i>
                            <h4>Actividad Inventiva</h4>
                        </div>
                        <p>La invención no debe ser <strong>obvia</strong> para un experto en la materia. Debe representar un salto cualitativo respecto al conocimiento previo.</p>
                        <p class="example">No basta con combinar elementos conocidos de forma trivial.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cogs"></i>
                            <h4>Aplicación Industrial</h4>
                        </div>
                        <p>La invención debe poder ser <strong>fabricada o utilizada</strong> en cualquier tipo de industria, incluyendo la agricultura.</p>
                        <p class="example">Debe ser técnicamente realizable, no meramente teórica.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-ban"></i> Exclusiones de Patentabilidad</h3>
                <p>La ley mexicana establece que <strong>no son patentables</strong>:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4>No son invenciones:</h4>
                        <ul>
                            <li>Descubrimientos científicos</li>
                            <li>Teorías y métodos matemáticos</li>
                            <li>Obras literarias o artísticas</li>
                            <li>Planes y reglas de juegos</li>
                            <li>Programas de computación <em>per se</em></li>
                            <li>Presentación de información</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4>Invenciones no patentables:</h4>
                        <ul>
                            <li>Procesos esencialmente biológicos</li>
                            <li>Material genético natural</li>
                            <li>Razas animales</li>
                            <li>El cuerpo humano y sus partes</li>
                            <li>Variedades vegetales</li>
                            <li>Métodos de tratamiento médico</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-alt"></i> La Solicitud de Patente</h3>
                <p>Una solicitud de patente debe contener:</p>
                
                <ul>
                    <li><strong>Descripción:</strong> Explicación clara y completa de la invención que permita reproducirla</li>
                    <li><strong>Reivindicaciones:</strong> Definen el alcance de la protección solicitada</li>
                    <li><strong>Resumen:</strong> Síntesis de la invención para fines de búsqueda</li>
                    <li><strong>Dibujos:</strong> Cuando sean necesarios para comprender la invención</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-clock"></i> Vigencia de la Patente</h4>
                    <p>En México, las patentes tienen una vigencia de <strong>20 años improrrogables</strong> contados a partir de la fecha de presentación de la solicitud. Durante este tiempo, el titular tiene el derecho exclusivo de explotación.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-tools"></i> Modelos de Utilidad</h3>
                <p>El <strong>modelo de utilidad</strong> es una figura alternativa para proteger invenciones menores:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Aspecto</th>
                                <th>Patente</th>
                                <th>Modelo de Utilidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Nivel inventivo</strong></td>
                                <td>Alto (actividad inventiva)</td>
                                <td>Menor (mejora funcional)</td>
                            </tr>
                            <tr>
                                <td><strong>Objeto</strong></td>
                                <td>Productos y procedimientos</td>
                                <td>Solo objetos/utensilios</td>
                            </tr>
                            <tr>
                                <td><strong>Vigencia</strong></td>
                                <td>20 años</td>
                                <td>15 años</td>
                            </tr>
                            <tr>
                                <td><strong>Examen</strong></td>
                                <td>Examen de fondo riguroso</td>
                                <td>Examen simplificado</td>
                            </tr>
                            <tr>
                                <td><strong>Proceso</strong></td>
                                <td>Más largo y costoso</td>
                                <td>Más rápido y económico</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> Protección Internacional</h3>
                <p>Para proteger una invención en otros países:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-signature"></i>
                            <h4>Sistema PCT</h4>
                        </div>
                        <p>El Tratado de Cooperación en Materia de Patentes permite solicitar protección en múltiples países con una sola solicitud internacional.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-calendar-alt"></i>
                            <h4>Derecho de Prioridad</h4>
                        </div>
                        <p>12 meses para presentar solicitudes en otros países reclamando la fecha de la primera solicitud (Convenio de París).</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> Patentes en Tecnología e IA</h3>
                <p>En el campo de la tecnología y la IA, las patentes pueden proteger:</p>
                <ul>
                    <li>Algoritmos con <strong>aplicación técnica específica</strong></li>
                    <li>Arquitecturas de redes neuronales novedosas</li>
                    <li>Métodos de entrenamiento de modelos</li>
                    <li>Aplicaciones técnicas concretas de machine learning</li>
                    <li>Dispositivos y sistemas que incorporan IA</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Desafío Actual</h4>
                    <p>La patentabilidad de invenciones generadas por IA es un tema de debate. Actualmente, la mayoría de jurisdicciones requieren que el <strong>inventor sea una persona natural</strong>, no una máquina. El caso DABUS ha sido rechazado en múltiples países.</p>
                </div>
            </div>
        `
    },
    
    'tema4-5': {
        title: '4.5 Licencias Tecnológicas',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-file-contract"></i> ¿Qué son las Licencias Tecnológicas?</h3>
                <p>Una <strong>licencia tecnológica</strong> es un contrato mediante el cual el titular de derechos de propiedad intelectual autoriza a un tercero a utilizar su tecnología bajo condiciones específicas. Es el mecanismo principal para la <strong>transferencia de tecnología</strong> y la comercialización de innovaciones.</p>
                
                <p>Las licencias tecnológicas permiten monetizar la PI sin perder la titularidad, a diferencia de la cesión donde se transfieren los derechos.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Importancia Estratégica</h4>
                    <p>Las licencias son fundamentales para startups y empresas tecnológicas que buscan <strong>escalar globalmente</strong>, generar ingresos por regalías, o acceder a tecnologías complementarias mediante licencias cruzadas.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-th-list"></i> Tipos de Licencias Tecnológicas</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-lock"></i>
                            <h4>Licencia Exclusiva</h4>
                        </div>
                        <p>Solo el licenciatario puede explotar la tecnología en el territorio y campo acordados. Ni siquiera el licenciante puede usarla.</p>
                        <p class="example">Mayor valor, mayor compromiso del licenciatario.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-users"></i>
                            <h4>Licencia No Exclusiva</h4>
                        </div>
                        <p>El licenciante puede otorgar múltiples licencias a diferentes partes y seguir explotando la tecnología.</p>
                        <p class="example">Mayor alcance de mercado, menores regalías por licencia.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-check"></i>
                            <h4>Licencia Única</h4>
                        </div>
                        <p>Solo un licenciatario, pero el licenciante <strong>se reserva el derecho</strong> de explotar también la tecnología.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-exchange-alt"></i>
                            <h4>Licencia Cruzada</h4>
                        </div>
                        <p>Dos partes se otorgan mutuamente licencias sobre sus respectivas tecnologías. Común entre grandes empresas tecnológicas.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clipboard-list"></i> Elementos de un Contrato de Licencia</h3>
                <p>Un contrato de licencia tecnológica debe incluir:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-file-alt"></i> Elementos Esenciales</h4>
                        <ul>
                            <li><strong>Objeto:</strong> Descripción de la tecnología licenciada</li>
                            <li><strong>Alcance:</strong> Usos permitidos y prohibidos</li>
                            <li><strong>Territorio:</strong> Ámbito geográfico</li>
                            <li><strong>Duración:</strong> Plazo de la licencia</li>
                            <li><strong>Exclusividad:</strong> Tipo de licencia</li>
                            <li><strong>Contraprestación:</strong> Regalías o pago fijo</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-shield-alt"></i> Cláusulas Importantes</h4>
                        <ul>
                            <li><strong>Sublicenciamiento:</strong> Permitido o prohibido</li>
                            <li><strong>Mejoras:</strong> Titularidad de desarrollos derivados</li>
                            <li><strong>Auditoría:</strong> Verificación de cumplimiento</li>
                            <li><strong>Confidencialidad:</strong> Protección de know-how</li>
                            <li><strong>Garantías:</strong> Titularidad y no infracción</li>
                            <li><strong>Terminación:</strong> Causales y consecuencias</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-coins"></i> Modelos de Compensación</h3>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Modelo</th>
                                <th>Descripción</th>
                                <th>Uso Típico</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Regalías</strong></td>
                                <td>Porcentaje sobre ventas o ingresos</td>
                                <td>Productos de consumo masivo</td>
                            </tr>
                            <tr>
                                <td><strong>Pago Fijo (Lump Sum)</strong></td>
                                <td>Pago único por la licencia</td>
                                <td>Tecnologías maduras</td>
                            </tr>
                            <tr>
                                <td><strong>Pago Inicial + Regalías</strong></td>
                                <td>Combinación de ambos modelos</td>
                                <td>Licencias exclusivas</td>
                            </tr>
                            <tr>
                                <td><strong>Mínimo Garantizado</strong></td>
                                <td>Regalías con piso mínimo</td>
                                <td>Protección del licenciante</td>
                            </tr>
                            <tr>
                                <td><strong>Por Usuario/Dispositivo</strong></td>
                                <td>Pago por unidad de uso</td>
                                <td>Software y SaaS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-code"></i> Licencias de Software</h3>
                <p>El software tiene modelos de licenciamiento específicos:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-lock"></i>
                            <h4>Software Propietario</h4>
                        </div>
                        <p>Código cerrado, licencia de uso limitado. El usuario no puede modificar ni redistribuir.</p>
                        <p class="example">Ejemplos: Microsoft Office, Adobe Creative Cloud</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-unlock"></i>
                            <h4>Software Libre/Open Source</h4>
                        </div>
                        <p>Código abierto con diferentes niveles de restricción según la licencia.</p>
                        <p class="example">Licencias: MIT, Apache 2.0, GPL, LGPL</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cloud"></i>
                            <h4>SaaS (Software as a Service)</h4>
                        </div>
                        <p>Acceso al software como servicio en la nube, sin instalación local.</p>
                        <p class="example">Ejemplos: Salesforce, Google Workspace, Slack</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-share-alt"></i>
                            <h4>Copyleft</h4>
                        </div>
                        <p>Obliga a compartir modificaciones bajo la misma licencia (GPL).</p>
                        <p class="example">Linux kernel, WordPress</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> Licencias en Inteligencia Artificial</h3>
                <p>Los proyectos de IA tienen consideraciones especiales:</p>
                
                <ul>
                    <li><strong>Código:</strong> Generalmente bajo licencias open source (Apache 2.0, MIT)</li>
                    <li><strong>Modelos entrenados:</strong> Licencias específicas que pueden restringir usos comerciales o dañinos</li>
                    <li><strong>Datasets:</strong> Requieren verificar derechos sobre los datos</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-balance-scale"></i> Licencias de IA Emergentes</h4>
                    <ul>
                        <li><strong>OpenRAIL:</strong> Permite uso pero prohíbe ciertos usos dañinos</li>
                        <li><strong>Llama 2 License:</strong> Uso comercial con restricciones de escala</li>
                        <li><strong>CC-BY-NC:</strong> Común para datasets de investigación</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-handshake"></i> Mejores Prácticas</h3>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Due Diligence</h4>
                        <p>Verificar titularidad, libertad de operación y validez de los derechos de PI antes de negociar.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Definir Alcance</h4>
                        <p>Especificar claramente territorio, campo de uso, exclusividad y duración.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Valoración</h4>
                        <p>Determinar el valor justo de la tecnología usando métodos reconocidos.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">4</div>
                        <h4>Documentar</h4>
                        <p>Formalizar por escrito todos los términos, incluyendo resolución de disputas.</p>
                    </div>
                </div>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Auditoría de Licencias</h4>
                    <p>Antes de incorporar código de terceros en proyectos comerciales, es esencial realizar una <strong>auditoría de licencias</strong> para identificar obligaciones y riesgos, especialmente con licencias copyleft como GPL.</p>
                </div>
            </div>
        `
    },
    
    'quiz4': {
        title: 'Cuestionario Unidad 4: Derecho de Autor y Conexos',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 4: Derecho de Autor y Conexos</p>
                </div>
                
                <div class="quiz-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor del cuestionario</strong>
                        <p>Este cuestionario representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="quiz-info">
                    <div class="info-item">
                        <i class="fas fa-question-circle"></i>
                        <span>10 preguntas</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span id="quiz4-time-limit">15 minutos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-redo"></i>
                        <span id="quiz4-max-attempts">2 intentos permitidos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-percentage"></i>
                        <span id="quiz4-passing-score">Calificación mínima: 60%</span>
                    </div>
                </div>
                
                <div class="quiz-instructions">
                    <h4><i class="fas fa-info-circle"></i> Instrucciones</h4>
                    <ul>
                        <li>Lee cuidadosamente cada pregunta antes de responder.</li>
                        <li>Selecciona la opción que consideres correcta para cada pregunta.</li>
                        <li>Una vez iniciado el cuestionario, el tiempo comenzará a correr.</li>
                        <li>Puedes revisar tus respuestas antes de enviar.</li>
                        <li>Al finalizar, recibirás retroalimentación inmediata.</li>
                    </ul>
                </div>
                
                <div id="quiz4-container" class="quiz-questions" style="display: none;">
                    <!-- Las preguntas se cargarán dinámicamente -->
                </div>
                
                <div id="quiz4-start" class="quiz-start-section">
                    <p>Asegúrate de haber revisado los temas 4.1 al 4.5 antes de iniciar.</p>
                    <div class="quiz-attempts-info" id="quiz4-attempts-info"></div>
                    <button class="btn-primary btn-large" id="quiz4-start-btn" onclick="startQuiz(4)">
                        <i class="fas fa-play"></i> Iniciar Cuestionario
                    </button>
                </div>
                
                <div id="quiz4-results" class="quiz-results" style="display: none;">
                    <!-- Los resultados se mostrarán aquí -->
                </div>
            </div>
        `
    },
    
    // =============================================
    // UNIDAD 5: PI Y SU APLICACIÓN
    // =============================================
    
    'tema5-1': {
        title: '5.1 Marcas y Secretos Industriales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-trademark"></i> Las Marcas en la Práctica Empresarial</h3>
                <p>Las <strong>marcas</strong> son signos distintivos que identifican productos o servicios en el mercado, diferenciándolos de los de la competencia. Son activos estratégicos fundamentales para cualquier empresa.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> Valor de la Marca</h4>
                    <p>Las marcas pueden valer más que los activos físicos de una empresa. Según Interbrand, Apple vale más de <strong>$400 mil millones USD</strong> solo como marca, y Coca-Cola más de <strong>$80 mil millones USD</strong>.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-building"></i> Estrategias de Marca</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-star"></i>
                            <h4>Marca Única</h4>
                        </div>
                        <p>Una sola marca para todos los productos de la empresa.</p>
                        <p class="example">Ejemplo: Apple (iPhone, iPad, MacBook, Apple Watch)</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-layer-group"></i>
                            <h4>Marcas Múltiples</h4>
                        </div>
                        <p>Diferentes marcas para diferentes líneas de productos.</p>
                        <p class="example">Ejemplo: P&G (Tide, Pampers, Gillette, Pantene)</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-sitemap"></i>
                            <h4>Marca Paraguas</h4>
                        </div>
                        <p>Marca corporativa + submarcas por producto.</p>
                        <p class="example">Ejemplo: Google (Gmail, Google Maps, Google Drive)</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-handshake"></i>
                            <h4>Co-branding</h4>
                        </div>
                        <p>Alianzas entre marcas para crear productos conjuntos.</p>
                        <p class="example">Ejemplo: Nike + Apple Watch, GoPro + Red Bull</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Protección de Marcas</h3>
                <p>Para mantener una marca fuerte y protegida, se debe:</p>
                
                <ul>
                    <li><strong>Vigilancia del mercado:</strong> Monitorear uso no autorizado por terceros</li>
                    <li><strong>Acciones de defensa:</strong> Oposiciones, nulidades, demandas por infracción</li>
                    <li><strong>Renovación oportuna:</strong> Cada 10 años ante el IMPI</li>
                    <li><strong>Uso consistente:</strong> Mantener el uso comercial activo</li>
                    <li><strong>Licenciamiento controlado:</strong> Franquicias con control de calidad</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Riesgo de Genericidad</h4>
                    <p>Si una marca se vuelve genérica (usada para describir la categoría de producto), puede perder protección. Ejemplos históricos: aspirina, escalera mecánica, zipper. Evítalo usando la marca como adjetivo, no como sustantivo.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-user-secret"></i> Secretos Industriales</h3>
                <p>Los <strong>secretos industriales</strong> son información confidencial que da ventaja competitiva a quien la posee. A diferencia de las patentes, no requieren registro pero exigen medidas activas de protección.</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Característica</th>
                                <th>Secreto Industrial</th>
                                <th>Patente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Registro</strong></td>
                                <td>No requiere registro</td>
                                <td>Registro obligatorio ante IMPI</td>
                            </tr>
                            <tr>
                                <td><strong>Duración</strong></td>
                                <td>Indefinida (mientras se mantenga secreto)</td>
                                <td>20 años máximo</td>
                            </tr>
                            <tr>
                                <td><strong>Requisitos</strong></td>
                                <td>Confidencialidad y medidas de protección</td>
                                <td>Novedad, actividad inventiva, aplicación industrial</td>
                            </tr>
                            <tr>
                                <td><strong>Divulgación</strong></td>
                                <td>Pierde protección al divulgarse</td>
                                <td>Se publica para obtener protección</td>
                            </tr>
                            <tr>
                                <td><strong>Ingeniería inversa</strong></td>
                                <td>Es legal analizarlo y copiarlo</td>
                                <td>Está prohibido sin licencia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-lock"></i> Medidas de Protección de Secretos</h3>
                <p>Para que un secreto industrial tenga protección legal, debe haber:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Identificación</h4>
                        <p>Clasificar qué información es confidencial y documentarla adecuadamente.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Restricción de Acceso</h4>
                        <p>Limitar el acceso solo a personas autorizadas con necesidad de conocer.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Acuerdos de Confidencialidad</h4>
                        <p>NDAs con empleados, proveedores, socios y cualquier persona con acceso.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">4</div>
                        <h4>Medidas Técnicas</h4>
                        <p>Contraseñas, cifrado, servidores seguros, control de documentos.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-flask"></i> Ejemplo Famoso: Coca-Cola</h4>
                    <p>La fórmula de Coca-Cola se ha mantenido como secreto industrial por más de 130 años. Supuestamente solo dos ejecutivos conocen la fórmula completa, y nunca viajan juntos. Si hubieran optado por patentarla, habría expirado hace más de un siglo.</p>
                </div>
            </div>
        `
    },
    
    'tema5-2': {
        title: '5.2 Protección de la Propiedad Intelectual',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> 5.2.1 Estrategias de Protección</h3>
                <p>La <strong>protección efectiva de la PI</strong> requiere una estrategia integral que combine diferentes mecanismos legales, técnicos y administrativos adaptados a cada tipo de activo intelectual.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> Importancia de la Protección</h4>
                    <p>Una estrategia de PI bien diseñada puede convertir creaciones intangibles en ventajas competitivas duraderas, generar ingresos por licenciamiento, atraer inversiones y disuadir a competidores de copiar innovaciones.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clipboard-list"></i> Etapas de una Estrategia de Protección</h3>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Identificación</h4>
                        <p>Realizar un inventario de todos los activos de PI: marcas, invenciones, diseños, obras, secretos, software, bases de datos.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Clasificación</h4>
                        <p>Evaluar cada activo: importancia estratégica, valor comercial, vulnerabilidad a copia, vida útil esperada.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Selección del Mecanismo</h4>
                        <p>Elegir la protección adecuada: patente, modelo de utilidad, diseño industrial, marca, secreto, derecho de autor.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">4</div>
                        <h4>Registro</h4>
                        <p>Tramitar los registros ante las autoridades competentes (IMPI, INDAUTOR) o implementar medidas de protección.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">5</div>
                        <h4>Vigilancia</h4>
                        <p>Monitorear el mercado para detectar infracciones, solicitudes de registro de terceros, y amenazas competitivas.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">6</div>
                        <h4>Defensa</h4>
                        <p>Actuar contra infractores mediante procedimientos administrativos, civiles o penales según el caso.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Comparativa de Mecanismos de Protección</h3>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Mecanismo</th>
                                <th>Protege</th>
                                <th>Duración</th>
                                <th>Costo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Patente</strong></td>
                                <td>Invenciones técnicas</td>
                                <td>20 años</td>
                                <td>Alto</td>
                            </tr>
                            <tr>
                                <td><strong>Modelo de Utilidad</strong></td>
                                <td>Mejoras técnicas menores</td>
                                <td>10 años</td>
                                <td>Medio</td>
                            </tr>
                            <tr>
                                <td><strong>Diseño Industrial</strong></td>
                                <td>Apariencia estética</td>
                                <td>25 años</td>
                                <td>Medio</td>
                            </tr>
                            <tr>
                                <td><strong>Marca</strong></td>
                                <td>Signos distintivos</td>
                                <td>Indefinida (renovable)</td>
                                <td>Bajo-Medio</td>
                            </tr>
                            <tr>
                                <td><strong>Derecho de Autor</strong></td>
                                <td>Obras creativas</td>
                                <td>Vida + 100 años</td>
                                <td>Bajo (automático)</td>
                            </tr>
                            <tr>
                                <td><strong>Secreto Industrial</strong></td>
                                <td>Información confidencial</td>
                                <td>Indefinida</td>
                                <td>Variable (medidas)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-building"></i> Protección Empresarial</h3>
                <p>Las empresas deben implementar políticas internas de protección de PI:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-contract"></i>
                            <h4>Contratos Laborales</h4>
                        </div>
                        <p>Cláusulas de cesión de derechos sobre creaciones desarrolladas en el trabajo.</p>
                        <p class="example">Incluir: invenciones, software, diseños, mejoras</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-secret"></i>
                            <h4>NDAs</h4>
                        </div>
                        <p>Acuerdos de confidencialidad con empleados, proveedores y socios comerciales.</p>
                        <p class="example">Definir: información protegida, duración, excepciones</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-laptop-code"></i>
                            <h4>Políticas de Software</h4>
                        </div>
                        <p>Reglas sobre uso de código open source y desarrollo de software propietario.</p>
                        <p class="example">Auditorías de licencias, compatibilidad GPL</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-graduation-cap"></i>
                            <h4>Capacitación</h4>
                        </div>
                        <p>Formar al personal sobre la importancia y manejo de la PI de la empresa.</p>
                        <p class="example">Cursos, manuales, protocolos de seguridad</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> Protección Internacional</h3>
                <p>Para proteger PI en múltiples países, existen sistemas internacionales:</p>
                
                <ul>
                    <li><strong>PCT (Patent Cooperation Treaty):</strong> Solicitud única para patentes en más de 150 países</li>
                    <li><strong>Sistema de Madrid:</strong> Registro internacional de marcas en más de 120 países</li>
                    <li><strong>Sistema de La Haya:</strong> Protección de diseños industriales en múltiples jurisdicciones</li>
                    <li><strong>Convenio de Berna:</strong> Protección automática de derechos de autor sin registro</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Consideración Importante</h4>
                    <p>Aunque estos sistemas facilitan la solicitud, la <strong>protección sigue siendo territorial</strong>. Cada país examina y otorga los derechos según su propia ley. El costo de protección global puede ser muy alto.</p>
                </div>
            </div>
        `
    },
    
    'tema5-3': {
        title: '5.3 Herramientas de Registro',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-building"></i> 5.3.1 Instituto Mexicano de la Propiedad Industrial (IMPI)</h3>
                <p>El <strong>IMPI</strong> es la autoridad responsable de administrar el sistema de propiedad industrial en México. Depende de la Secretaría de Economía.</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-trademark"></i>
                            <h4>Marcas</h4>
                        </div>
                        <p>Registro, renovación y protección de marcas, avisos comerciales y nombres comerciales.</p>
                        <p class="example">Vigencia: 10 años renovables</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-lightbulb"></i>
                            <h4>Patentes</h4>
                        </div>
                        <p>Otorgamiento de patentes para invenciones y modelos de utilidad.</p>
                        <p class="example">Vigencia: 20 años (patentes), 10 años (modelos)</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-palette"></i>
                            <h4>Diseños Industriales</h4>
                        </div>
                        <p>Registro de dibujos y modelos industriales.</p>
                        <p class="example">Vigencia: 5 años, renovable hasta 25 años</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-gavel"></i>
                            <h4>Defensa</h4>
                        </div>
                        <p>Procedimientos de infracción, nulidad y cancelación.</p>
                        <p class="example">Visitas de inspección y sanciones</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-laptop"></i> Servicios en Línea del IMPI</h3>
                <p>El IMPI ofrece diversos servicios digitales:</p>
                
                <ul>
                    <li><strong>MARCANET:</strong> Base de datos de marcas registradas y en trámite</li>
                    <li><strong>SIGA:</strong> Sistema de gestión de solicitudes en línea</li>
                    <li><strong>VIDOC:</strong> Visor de documentos de expedientes</li>
                    <li><strong>Calculadora de tarifas:</strong> Estimación de costos de trámites</li>
                    <li><strong>Gaceta de la PI:</strong> Publicación oficial de solicitudes y registros</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-link"></i> Portal IMPI</h4>
                    <p>Acceso a todos los servicios en: <strong>www.gob.mx/impi</strong></p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-copyright"></i> 5.3.2 Instituto Nacional del Derecho de Autor (INDAUTOR)</h3>
                <p>El <strong>INDAUTOR</strong> es la autoridad encargada de proteger y fomentar el derecho de autor en México. Depende de la Secretaría de Cultura.</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-file-alt"></i> Servicios de Registro</h4>
                        <ul>
                            <li>Registro de obras literarias y artísticas</li>
                            <li>Registro de contratos (cesión, licencia)</li>
                            <li>Reservas de derechos al uso exclusivo</li>
                            <li>ISBN para publicaciones</li>
                            <li>ISSN para publicaciones periódicas</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-shield-alt"></i> Funciones de Protección</h4>
                        <ul>
                            <li>Procedimientos de infracción</li>
                            <li>Avenencia (mediación entre partes)</li>
                            <li>Arbitraje en materia de derechos de autor</li>
                            <li>Supervisión de sociedades de gestión colectiva</li>
                            <li>Expedición de constancias</li>
                        </ul>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Importante</h4>
                    <p>El registro ante INDAUTOR es <strong>declarativo, no constitutivo</strong>. El derecho de autor nace automáticamente al crear la obra; el registro solo sirve como prueba de titularidad y fecha de creación.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> 5.3.3 Organización Mundial de la Propiedad Intelectual (OMPI)</h3>
                <p>La <strong>OMPI</strong> (WIPO en inglés) es el organismo de las Naciones Unidas dedicado a promover y proteger la PI a nivel mundial.</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number"><i class="fas fa-file-signature"></i></div>
                        <h4>Sistema PCT</h4>
                        <p>Solicitud única de patente con efecto en más de 150 países. Simplifica el proceso internacional.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number"><i class="fas fa-trademark"></i></div>
                        <h4>Sistema de Madrid</h4>
                        <p>Registro internacional de marcas en más de 120 países con una sola solicitud.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number"><i class="fas fa-palette"></i></div>
                        <h4>Sistema de La Haya</h4>
                        <p>Registro internacional de diseños industriales en múltiples jurisdicciones.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number"><i class="fas fa-balance-scale"></i></div>
                        <h4>Centro de Arbitraje</h4>
                        <p>Resolución de disputas de PI, incluyendo conflictos de nombres de dominio.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-database"></i> Bases de Datos de la OMPI</h3>
                <p>La OMPI ofrece bases de datos gratuitas para búsqueda de PI:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Base de Datos</th>
                                <th>Contenido</th>
                                <th>Uso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>PATENTSCOPE</strong></td>
                                <td>Más de 100 millones de documentos de patentes</td>
                                <td>Búsqueda de estado de la técnica</td>
                            </tr>
                            <tr>
                                <td><strong>Global Brand Database</strong></td>
                                <td>Más de 50 millones de marcas</td>
                                <td>Verificar disponibilidad de marcas</td>
                            </tr>
                            <tr>
                                <td><strong>Hague Express</strong></td>
                                <td>Diseños industriales internacionales</td>
                                <td>Búsqueda de diseños registrados</td>
                            </tr>
                            <tr>
                                <td><strong>WIPO Lex</strong></td>
                                <td>Legislación de PI de todos los países</td>
                                <td>Consulta de leyes y tratados</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-search"></i> Búsquedas de Anterioridades</h4>
                    <p>Antes de solicitar una patente o marca, es esencial hacer <strong>búsquedas de anterioridades</strong> para verificar que no exista algo similar ya registrado. Esto evita rechazos y gastos innecesarios.</p>
                </div>
            </div>
        `
    },
    
    'tema5-4': {
        title: '5.4 Inteligencia Artificial y Propiedad Intelectual',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> 5.4.1 IA como Herramienta de Creación</h3>
                <p>La <strong>Inteligencia Artificial</strong> está revolucionando la creación de contenido, planteando nuevos desafíos para el sistema de propiedad intelectual.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-question-circle"></i> La Pregunta Central</h4>
                    <p>¿Quién es el "autor" de una obra generada por IA? ¿El programador? ¿El usuario que dio el prompt? ¿La empresa que desarrolló la IA? ¿O la IA misma?</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-palette"></i> Contenido Generado por IA</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-image"></i>
                            <h4>Imágenes</h4>
                        </div>
                        <p>Generadores como DALL-E, Midjourney, Stable Diffusion crean imágenes a partir de descripciones textuales.</p>
                        <p class="example">Uso: arte, publicidad, diseño, ilustraciones</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-alt"></i>
                            <h4>Texto</h4>
                        </div>
                        <p>Modelos como GPT-4, Claude, Gemini generan texto coherente sobre cualquier tema.</p>
                        <p class="example">Uso: artículos, código, traducciones, resúmenes</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-music"></i>
                            <h4>Música</h4>
                        </div>
                        <p>Herramientas como Suno, Udio, AIVA componen música en diversos estilos.</p>
                        <p class="example">Uso: fondos musicales, jingles, composiciones</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-code"></i>
                            <h4>Código</h4>
                        </div>
                        <p>Asistentes como GitHub Copilot, Cursor generan código funcional.</p>
                        <p class="example">Uso: desarrollo de software, automatización</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> 5.4.2 Protección de Creaciones de IA</h3>
                <p>El estatus legal de las obras generadas por IA es aún incierto y varía por jurisdicción:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Jurisdicción</th>
                                <th>Posición Actual</th>
                                <th>Implicaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Estados Unidos</strong></td>
                                <td>No hay protección sin autor humano</td>
                                <td>Obras 100% IA son dominio público</td>
                            </tr>
                            <tr>
                                <td><strong>Unión Europea</strong></td>
                                <td>Requiere "creación intelectual propia"</td>
                                <td>Debate sobre el rol del operador humano</td>
                            </tr>
                            <tr>
                                <td><strong>Reino Unido</strong></td>
                                <td>Protección para obras "computer-generated"</td>
                                <td>Autor = quien hace los arreglos necesarios</td>
                            </tr>
                            <tr>
                                <td><strong>México</strong></td>
                                <td>No hay legislación específica</td>
                                <td>Se aplican principios tradicionales de autoría</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-gavel"></i> Caso Thaler vs. USPTO (2023)</h4>
                    <p>Un tribunal de EE.UU. confirmó que una obra de arte generada por la IA "DABUS" no puede recibir registro de copyright porque carece de autoría humana. El fallo establece que "la autoría humana es un requisito fundamental".</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-database"></i> 5.4.3 Uso de Datos para Entrenar IA</h3>
                <p>El entrenamiento de modelos de IA usando obras protegidas genera controversias legales significativas:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-book"></i> Argumentos de los Creadores</h4>
                        <ul>
                            <li>El entrenamiento es una reproducción no autorizada</li>
                            <li>Los modelos pueden generar obras "al estilo de"</li>
                            <li>Se apropian del valor de millones de obras</li>
                            <li>Competencia desleal con creadores humanos</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-microchip"></i> Argumentos de las Empresas de IA</h4>
                        <ul>
                            <li>El entrenamiento es "fair use" (uso justo)</li>
                            <li>No se copian obras, solo se aprenden patrones</li>
                            <li>Es transformativo: crea algo nuevo</li>
                            <li>Beneficia a la sociedad con nuevas herramientas</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> Demandas en Curso</h3>
                <p>Diversos creadores han demandado a empresas de IA:</p>
                
                <ul>
                    <li><strong>Getty Images vs. Stability AI:</strong> Por usar millones de imágenes protegidas para entrenar Stable Diffusion</li>
                    <li><strong>Autores vs. OpenAI:</strong> Demandas de escritores (incluyendo Sarah Silverman, George R.R. Martin) por usar sus libros</li>
                    <li><strong>Artistas vs. Midjourney:</strong> Demanda colectiva de artistas visuales</li>
                    <li><strong>NYT vs. OpenAI:</strong> The New York Times demanda por uso de artículos periodísticos</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Riesgo para Usuarios</h4>
                    <p>Quienes usan contenido generado por IA pueden enfrentar riesgos si ese contenido infringe derechos de terceros. Algunas empresas de IA ofrecen indemnización, pero no todas.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-lightbulb"></i> Recomendaciones Prácticas</h3>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Revisar Licencias</h4>
                        <p>Verificar los términos de uso de cada herramienta de IA para entender qué derechos se obtienen sobre el contenido generado.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Aportación Humana</h4>
                        <p>Añadir creatividad y edición humana significativa al contenido generado por IA para fortalecer reclamaciones de autoría.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Documentar Proceso</h4>
                        <p>Guardar prompts, iteraciones y ediciones para demostrar la contribución creativa humana.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">4</div>
                        <h4>Considerar Alternativas</h4>
                        <p>Para usos críticos, considerar modelos entrenados solo con contenido con licencia o de dominio público.</p>
                    </div>
                </div>
            </div>
        `
    },
    
    'tema5-5': {
        title: '5.5 Infracción a la Propiedad Intelectual',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Tipos de Infracción</h3>
                <p>Las <strong>infracciones a la propiedad intelectual</strong> son actos que vulneran los derechos exclusivos del titular sin su autorización. Conocer los tipos de infracción es fundamental para proteger y defender los activos de PI.</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-copy"></i>
                            <h4>Piratería</h4>
                        </div>
                        <p>Reproducción, distribución o venta no autorizada de obras protegidas por derecho de autor.</p>
                        <p class="example">Ejemplos: copiar software sin licencia, distribuir películas ilegalmente, vender música pirata.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-secret"></i>
                            <h4>Plagio</h4>
                        </div>
                        <p>Presentar una obra ajena como propia, omitiendo la atribución al verdadero autor.</p>
                        <p class="example">Ejemplos: copiar textos académicos, usar código sin atribución, apropiarse de diseños.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-clone"></i>
                            <h4>Falsificación</h4>
                        </div>
                        <p>Uso no autorizado de marcas registradas para hacer pasar productos como originales.</p>
                        <p class="example">Ejemplos: bolsos falsos, relojes piratas, ropa deportiva falsificada.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cogs"></i>
                            <h4>Usurpación de Patentes</h4>
                        </div>
                        <p>Fabricar, usar o vender un producto o proceso patentado sin autorización del titular.</p>
                        <p class="example">Ejemplos: copiar tecnología patentada, fabricar medicamentos sin licencia.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-building"></i> Procedimientos Administrativos</h3>
                <p>En México, las autoridades administrativas pueden sancionar infracciones de PI:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-industry"></i> Ante IMPI</h4>
                        <ul>
                            <li>Solicitud de declaración de infracción</li>
                            <li>Visitas de inspección</li>
                            <li>Aseguramiento de productos</li>
                            <li>Multas hasta 500,000 UMAs</li>
                            <li>Clausura temporal o definitiva</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-copyright"></i> Ante INDAUTOR</h4>
                        <ul>
                            <li>Procedimiento de avenencia (mediación)</li>
                            <li>Procedimiento de infracción</li>
                            <li>Arbitraje especializado</li>
                            <li>Multas administrativas</li>
                            <li>Suspensión de actividades</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Acciones Civiles</h3>
                <p>La vía civil permite obtener reparación económica por daños:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de Daño</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Daño emergente</strong></td>
                                <td>Pérdidas directamente sufridas por la infracción</td>
                            </tr>
                            <tr>
                                <td><strong>Lucro cesante</strong></td>
                                <td>Ganancias dejadas de percibir</td>
                            </tr>
                            <tr>
                                <td><strong>Regalía razonable</strong></td>
                                <td>Lo que habría costado una licencia legítima</td>
                            </tr>
                            <tr>
                                <td><strong>Beneficios del infractor</strong></td>
                                <td>Ganancias obtenidas ilegalmente por el infractor</td>
                            </tr>
                            <tr>
                                <td><strong>Daño moral</strong></td>
                                <td>Afectación a la reputación y honor del titular</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> Vía Penal</h3>
                <p>Las infracciones graves pueden constituir <strong>delitos</strong> con penas de prisión:</p>
                
                <ul>
                    <li><strong>Piratería de obras:</strong> 2 a 10 años de prisión + multa</li>
                    <li><strong>Falsificación de marcas:</strong> 2 a 6 años de prisión + multa</li>
                    <li><strong>Revelación de secretos industriales:</strong> 2 a 6 años de prisión</li>
                    <li><strong>Usurpación de patentes:</strong> 2 a 6 años de prisión</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Delitos de Querella</h4>
                    <p>La mayoría de los delitos contra la PI son de <strong>querella</strong>, es decir, requieren que el titular presente formalmente la denuncia para iniciar la investigación.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Medidas Preventivas</h3>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Registrar</h4>
                        <p>Mantener registros actualizados de marcas, patentes, diseños y obras.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Vigilar</h4>
                        <p>Monitorear el mercado en busca de posibles infracciones.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Documentar</h4>
                        <p>Preservar evidencia de titularidad y de cualquier infracción detectada.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">4</div>
                        <h4>Actuar</h4>
                        <p>Responder rápidamente ante infracciones con las vías legales disponibles.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> Medidas en Frontera</h3>
                <p>La <strong>Aduana</strong> puede detener mercancías sospechosas de infringir derechos de PI:</p>
                
                <ul>
                    <li>El titular puede registrar sus derechos ante la autoridad aduanera</li>
                    <li>La aduana notifica al titular cuando detecta mercancía sospechosa</li>
                    <li>Si se confirma infracción, las mercancías pueden ser decomisadas y destruidas</li>
                    <li>Evita que productos falsificados entren al mercado nacional</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> Principio Fundamental</h4>
                    <p>La protección efectiva de la Propiedad Intelectual no solo beneficia a los titulares: fomenta la innovación, incentiva la creatividad, protege a los consumidores y contribuye al desarrollo económico de la sociedad.</p>
                </div>
            </div>
        `
    },
    
    'quiz5': {
        title: 'Cuestionario Unidad 5: PI y su Aplicación',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 5: PI y su Aplicación</p>
                </div>
                
                <div class="quiz-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor del cuestionario</strong>
                        <p>Este cuestionario representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="quiz-info">
                    <div class="info-item">
                        <i class="fas fa-question-circle"></i>
                        <span>10 preguntas</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span id="quiz5-time-limit">15 minutos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-redo"></i>
                        <span id="quiz5-max-attempts">2 intentos permitidos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-percentage"></i>
                        <span id="quiz5-passing-score">Calificación mínima: 60%</span>
                    </div>
                </div>
                
                <div class="quiz-instructions">
                    <h4><i class="fas fa-info-circle"></i> Instrucciones</h4>
                    <ul>
                        <li>Lee cuidadosamente cada pregunta antes de responder.</li>
                        <li>Selecciona la opción que consideres correcta para cada pregunta.</li>
                        <li>Una vez iniciado el cuestionario, el tiempo comenzará a correr.</li>
                        <li>Puedes revisar tus respuestas antes de enviar.</li>
                        <li>Al finalizar, recibirás retroalimentación inmediata.</li>
                    </ul>
                </div>
                
                <div id="quiz5-container" class="quiz-questions" style="display: none;">
                    <!-- Las preguntas se cargarán dinámicamente -->
                </div>
                
                <div id="quiz5-start" class="quiz-start-section">
                    <p>Asegúrate de haber revisado los temas 5.1 al 5.5 antes de iniciar.</p>
                    <div class="quiz-attempts-info" id="quiz5-attempts-info"></div>
                    <button class="btn-primary btn-large" id="quiz5-start-btn" onclick="startQuiz(5)">
                        <i class="fas fa-play"></i> Iniciar Cuestionario
                    </button>
                </div>
                
                <div id="quiz5-results" class="quiz-results" style="display: none;">
                    <!-- Los resultados se mostrarán aquí -->
                </div>
            </div>
        `
    }
};

// Exportar para uso global
window.courseContent = courseContent;
