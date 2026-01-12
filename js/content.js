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
    // UNIDAD 3: PROPIEDAD INDUSTRIAL
    // =============================================
    
    'tema3-1': {
        title: '3.1 Panorama General de la Propiedad Industrial',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-industry"></i> Introducción a la Propiedad Industrial</h3>
                <p>La <strong>Propiedad Industrial</strong> es la rama de la Propiedad Intelectual que protege las invenciones, los diseños y los signos distintivos utilizados en la industria y el comercio. Se enfoca en la protección de creaciones que tienen una <strong>aplicación técnica o comercial</strong>.</p>
                
                <p>A diferencia del Derecho de Autor (que protege la expresión creativa), la Propiedad Industrial protege:</p>
                <ul>
                    <li>Las <strong>invenciones técnicas</strong> (patentes, modelos de utilidad)</li>
                    <li>Los <strong>aspectos estéticos</strong> de productos industriales (diseños industriales)</li>
                    <li>Los <strong>signos distintivos</strong> (marcas, nombres comerciales)</li>
                    <li>La <strong>información confidencial</strong> de valor comercial (secretos industriales)</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-building"></i> Marco Institucional en México</h3>
                <p>El <strong>Instituto Mexicano de la Propiedad Industrial (IMPI)</strong> es el organismo descentralizado encargado de administrar y proteger los derechos de Propiedad Industrial en México.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-gavel"></i> Marco Legal</h4>
                    <p>La Propiedad Industrial en México se rige principalmente por:</p>
                    <ul>
                        <li><strong>Ley Federal de Protección a la Propiedad Industrial (LFPPI)</strong> - Vigente desde 2020</li>
                        <li><strong>Reglamento de la LFPPI</strong></li>
                        <li><strong>Tratados internacionales</strong> (Convenio de París, ADPIC, PCT)</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-table"></i> Comparativa de Figuras de Propiedad Industrial</h3>
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Figura</th>
                                <th>Objeto de Protección</th>
                                <th>Duración</th>
                                <th>Requisito Principal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Patente</strong></td>
                                <td>Invención técnica novedosa</td>
                                <td>20 años</td>
                                <td>Novedad, actividad inventiva, aplicación industrial</td>
                            </tr>
                            <tr>
                                <td><strong>Modelo de Utilidad</strong></td>
                                <td>Mejora funcional a objetos</td>
                                <td>15 años</td>
                                <td>Novedad y aplicación industrial</td>
                            </tr>
                            <tr>
                                <td><strong>Diseño Industrial</strong></td>
                                <td>Apariencia estética</td>
                                <td>25 años</td>
                                <td>Novedad y originalidad</td>
                            </tr>
                            <tr>
                                <td><strong>Marca</strong></td>
                                <td>Signos distintivos</td>
                                <td>10 años (renovable)</td>
                                <td>Distintividad</td>
                            </tr>
                            <tr>
                                <td><strong>Secreto Industrial</strong></td>
                                <td>Información confidencial</td>
                                <td>Indefinida</td>
                                <td>Confidencialidad activa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    
    'tema3-2': {
        title: '3.2 Patentes',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-lightbulb"></i> ¿Qué es una Patente?</h3>
                <p>Una <strong>patente</strong> es un título de propiedad otorgado por el Estado que confiere a su titular el <strong>derecho exclusivo de explotar una invención</strong> por un tiempo determinado. Es el mecanismo por excelencia para proteger las innovaciones técnicas.</p>
                
                <p>A cambio de este monopolio temporal, el inventor debe <strong>divulgar públicamente su invención</strong>, contribuyendo así al acervo del conocimiento técnico mundial (estado de la técnica).</p>
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
                            <li>Métodos de tratamiento quirúrgico/terapéutico</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-alt"></i> La Solicitud de Patente</h3>
                <p>Una solicitud de patente debe contener:</p>
                <ul>
                    <li><strong>Descripción:</strong> Explicación clara y completa de la invención</li>
                    <li><strong>Reivindicaciones:</strong> Definen el alcance de la protección solicitada</li>
                    <li><strong>Resumen:</strong> Síntesis de la invención</li>
                    <li><strong>Dibujos:</strong> Cuando sean necesarios para comprender la invención</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-clock"></i> Vigencia de la Patente</h4>
                    <p>En México, las patentes tienen una vigencia de <strong>20 años improrrogables</strong> contados a partir de la fecha de presentación de la solicitud. Durante este tiempo, el titular tiene el derecho exclusivo de explotación.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> Patentes en Inteligencia Artificial</h3>
                <p>En el campo de la IA, las patentes pueden proteger:</p>
                <ul>
                    <li>Algoritmos con <strong>aplicación técnica específica</strong></li>
                    <li>Arquitecturas de redes neuronales novedosas</li>
                    <li>Métodos de entrenamiento de modelos</li>
                    <li>Aplicaciones técnicas concretas de machine learning</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Desafío Actual</h4>
                    <p>La patentabilidad de invenciones generadas por IA es un tema de debate. Actualmente, la mayoría de jurisdicciones requieren que el <strong>inventor sea una persona natural</strong>, no una máquina.</p>
                </div>
            </div>
        `
    },
    
    'tema3-3': {
        title: '3.3 Modelos de Utilidad',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-tools"></i> ¿Qué es un Modelo de Utilidad?</h3>
                <p>El <strong>modelo de utilidad</strong> es una figura de propiedad industrial que protege invenciones consistentes en la <strong>forma, configuración o disposición de elementos</strong> de un objeto que le proporcionen una mejora funcional o ventaja técnica.</p>
                
                <p>Se conocen comúnmente como <strong>"pequeñas patentes"</strong> o <strong>"patentes de innovación"</strong> porque protegen mejoras técnicas con un nivel inventivo menor que el requerido para las patentes.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Diferencias con las Patentes</h3>
                
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
                                <td>Solo objetos/utensilios/herramientas</td>
                            </tr>
                            <tr>
                                <td><strong>Vigencia</strong></td>
                                <td>20 años</td>
                                <td>15 años (México)</td>
                            </tr>
                            <tr>
                                <td><strong>Examen</strong></td>
                                <td>Examen de fondo riguroso</td>
                                <td>Examen simplificado</td>
                            </tr>
                            <tr>
                                <td><strong>Costo y tiempo</strong></td>
                                <td>Mayor costo, proceso más largo</td>
                                <td>Menor costo, proceso más rápido</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-circle"></i> Requisitos de Registro</h3>
                <p>Para registrar un modelo de utilidad se requiere:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-star"></i>
                            <h4>Novedad</h4>
                        </div>
                        <p>El modelo no debe existir previamente en el estado de la técnica.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-industry"></i>
                            <h4>Aplicación Industrial</h4>
                        </div>
                        <p>Debe ser susceptible de producción o uso industrial.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Nota Importante</h4>
                    <p>A diferencia de las patentes, los modelos de utilidad <strong>no requieren actividad inventiva</strong>. Basta con que representen una mejora funcional o ventaja técnica sobre lo existente.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-wrench"></i> Ejemplos de Modelos de Utilidad</h3>
                <ul>
                    <li>Una nueva forma de mango para herramientas que mejora el agarre</li>
                    <li>Un diseño de envase que facilita el vertido</li>
                    <li>Una mejora en la estructura de un mueble para mayor resistencia</li>
                    <li>Un accesorio para dispositivos electrónicos con función práctica mejorada</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-lightbulb"></i> Estrategia de Protección</h3>
                <p>El modelo de utilidad es ideal para:</p>
                <ul>
                    <li>Pequeñas y medianas empresas con innovaciones incrementales</li>
                    <li>Mejoras a productos existentes</li>
                    <li>Protección rápida mientras se evalúa una patente</li>
                    <li>Innovaciones con ciclo de vida comercial corto</li>
                </ul>
            </div>
        `
    },
    
    'tema3-4': {
        title: '3.4 Diseños Industriales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-pencil-ruler"></i> ¿Qué es un Diseño Industrial?</h3>
                <p>El <strong>diseño industrial</strong> protege la apariencia estética u ornamental de productos industriales. No protege la función técnica, sino el <strong>aspecto visual</strong> que hace atractivo un producto.</p>
                
                <p>Comprende dos categorías:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-image"></i>
                            <h4>Dibujos Industriales</h4>
                        </div>
                        <p>Configuraciones <strong>bidimensionales</strong> aplicadas a productos.</p>
                        <p class="example">Ejemplos: patrones textiles, diseños gráficos en envases, estampados decorativos.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cube"></i>
                            <h4>Modelos Industriales</h4>
                        </div>
                        <p>Configuraciones <strong>tridimensionales</strong> de productos.</p>
                        <p class="example">Ejemplos: forma de un automóvil, diseño de muebles, forma de electrodomésticos.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-double"></i> Requisitos de Protección</h3>
                <p>Para registrar un diseño industrial debe cumplir con:</p>
                
                <ul>
                    <li><strong>Novedad:</strong> No haber sido divulgado públicamente antes de la solicitud</li>
                    <li><strong>Originalidad:</strong> Ser creación independiente del diseñador</li>
                    <li><strong>Aplicación Industrial:</strong> Ser reproducible en serie por medios industriales</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-clock"></i> Vigencia</h4>
                    <p>En México, los diseños industriales tienen una vigencia de <strong>25 años improrrogables</strong> contados desde la fecha de presentación de la solicitud.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-ban"></i> Exclusiones</h3>
                <p>No pueden registrarse como diseños industriales:</p>
                <ul>
                    <li>Diseños contrarios al orden público o la moral</li>
                    <li>Diseños que carezcan de novedad u originalidad</li>
                    <li>Formas dictadas exclusivamente por la función técnica</li>
                    <li>Diseños que puedan inducir a error sobre el origen o calidad del producto</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-laptop"></i> Diseños Industriales en Tecnología</h3>
                <p>En el sector tecnológico, los diseños industriales protegen:</p>
                <ul>
                    <li>Interfaces gráficas de usuario (GUI)</li>
                    <li>Iconos de aplicaciones</li>
                    <li>Diseño de dispositivos electrónicos</li>
                    <li>Apariencia de wearables y gadgets</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Caso Emblemático</h4>
                    <p>El litigio <strong>Apple vs. Samsung</strong> es un ejemplo icónico de la importancia de los diseños industriales en tecnología. Apple obtuvo protección sobre el diseño rectangular con esquinas redondeadas del iPhone, demostrando el valor estratégico de esta figura.</p>
                </div>
            </div>
        `
    },
    
    'tema3-5': {
        title: '3.5 Marcas',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-trademark"></i> ¿Qué es una Marca?</h3>
                <p>Una <strong>marca</strong> es un signo distintivo que sirve para identificar y diferenciar productos o servicios de una empresa respecto de los de sus competidores. Es uno de los activos intangibles más valiosos para las empresas.</p>
                
                <p>La marca cumple funciones esenciales:</p>
                <ul>
                    <li><strong>Distintiva:</strong> Diferencia productos/servicios en el mercado</li>
                    <li><strong>Indicadora de origen:</strong> Señala la procedencia empresarial</li>
                    <li><strong>Garantía de calidad:</strong> Genera expectativas sobre el producto</li>
                    <li><strong>Publicitaria:</strong> Herramienta de marketing y posicionamiento</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-th-list"></i> Tipos de Marcas</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-font"></i>
                            <h4>Nominativas</h4>
                        </div>
                        <p>Consisten únicamente en <strong>palabras o letras</strong> sin diseño especial.</p>
                        <p class="example">Ejemplo: "GOOGLE", "MICROSOFT"</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-image"></i>
                            <h4>Figurativas</h4>
                        </div>
                        <p>Consisten en <strong>figuras, símbolos o logotipos</strong> sin texto.</p>
                        <p class="example">Ejemplo: La manzana de Apple, el swoosh de Nike</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-object-group"></i>
                            <h4>Mixtas</h4>
                        </div>
                        <p>Combinan <strong>elementos verbales y gráficos</strong>.</p>
                        <p class="example">Ejemplo: Logo de Coca-Cola con su tipografía característica</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cube"></i>
                            <h4>Tridimensionales</h4>
                        </div>
                        <p>Protegen la <strong>forma distintiva</strong> de productos o envases.</p>
                        <p class="example">Ejemplo: Botella de Coca-Cola, forma del chocolate Toblerone</p>
                    </div>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-music"></i>
                            <h4>Sonoras</h4>
                        </div>
                        <p>Consisten en <strong>sonidos distintivos</strong>.</p>
                        <p class="example">Ejemplo: El rugido del león de MGM, el sonido de Netflix</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-palette"></i>
                            <h4>De Color</h4>
                        </div>
                        <p>Protegen un <strong>color específico</strong> asociado a una marca.</p>
                        <p class="example">Ejemplo: El azul Tiffany, el rojo de Christian Louboutin</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-signature"></i> Registro de Marcas</h3>
                <p>Para registrar una marca ante el IMPI:</p>
                
                <ol>
                    <li><strong>Búsqueda de antecedentes:</strong> Verificar disponibilidad</li>
                    <li><strong>Clasificación:</strong> Determinar las clases de Niza aplicables</li>
                    <li><strong>Solicitud:</strong> Presentar ante el IMPI</li>
                    <li><strong>Examen:</strong> Verificación de requisitos legales</li>
                    <li><strong>Publicación:</strong> En la Gaceta de Propiedad Industrial</li>
                    <li><strong>Expedición del título:</strong> Si no hay oposiciones</li>
                </ol>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-clock"></i> Vigencia</h4>
                    <p>Las marcas tienen vigencia de <strong>10 años</strong> a partir de su otorgamiento, <strong>renovables indefinidamente</strong> por períodos iguales. Es el único derecho de PI que puede ser perpetuo.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-tags"></i> Otros Signos Distintivos</h3>
                <ul>
                    <li><strong>Nombre Comercial:</strong> Identifica a una empresa o establecimiento</li>
                    <li><strong>Aviso Comercial:</strong> Frases u oraciones publicitarias (eslóganes)</li>
                    <li><strong>Denominación de Origen:</strong> Vincula productos a una región geográfica específica</li>
                    <li><strong>Indicación Geográfica:</strong> Similar pero con requisitos menos estrictos</li>
                    <li><strong>Marca Colectiva:</strong> Identifica productos de una asociación</li>
                    <li><strong>Marca de Certificación:</strong> Garantiza cumplimiento de normas</li>
                </ul>
            </div>
        `
    },
    
    'tema3-6': {
        title: '3.6 Secretos Industriales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-user-secret"></i> ¿Qué es un Secreto Industrial?</h3>
                <p>Un <strong>secreto industrial</strong> (también llamado secreto empresarial o comercial) es cualquier información de aplicación industrial o comercial que una empresa mantiene <strong>confidencial</strong> porque le otorga una ventaja competitiva.</p>
                
                <p>A diferencia de otros derechos de PI, el secreto industrial <strong>no requiere registro</strong> y puede tener <strong>duración indefinida</strong>, siempre que se mantenga la confidencialidad.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-folder-open"></i> Tipos de Información Protegible</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-flask"></i>
                            <h4>Información Técnica</h4>
                        </div>
                        <ul>
                            <li>Fórmulas químicas</li>
                            <li>Procesos de fabricación</li>
                            <li>Diseños y planos</li>
                            <li>Algoritmos y código fuente</li>
                            <li>Datos de entrenamiento de IA</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-chart-pie"></i>
                            <h4>Información Comercial</h4>
                        </div>
                        <ul>
                            <li>Listas de clientes y proveedores</li>
                            <li>Estrategias de precios</li>
                            <li>Planes de negocios</li>
                            <li>Estudios de mercado</li>
                            <li>Know-how organizacional</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-double"></i> Requisitos para la Protección</h3>
                <p>Para que la información califique como secreto industrial debe cumplir <strong>tres requisitos</strong>:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Ser Secreta</h4>
                        <p>No debe ser generalmente conocida ni fácilmente accesible para personas que normalmente manejan ese tipo de información.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Tener Valor Comercial</h4>
                        <p>Debe proporcionar una ventaja competitiva precisamente por su carácter secreto.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Medidas de Protección</h4>
                        <p>El titular debe haber tomado medidas razonables para mantenerla secreta.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Medidas de Protección</h3>
                <p>Las empresas deben implementar medidas para proteger sus secretos:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-file-contract"></i> Medidas Legales</h4>
                        <ul>
                            <li>Acuerdos de confidencialidad (NDA)</li>
                            <li>Cláusulas de no competencia</li>
                            <li>Contratos laborales con cláusulas de PI</li>
                            <li>Políticas internas de manejo de información</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-lock"></i> Medidas Técnicas</h4>
                        <ul>
                            <li>Control de acceso físico</li>
                            <li>Sistemas de seguridad informática</li>
                            <li>Encriptación de datos</li>
                            <li>Marcado de documentos confidenciales</li>
                            <li>Auditorías y monitoreo</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Secreto Industrial vs. Patente</h3>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Aspecto</th>
                                <th>Secreto Industrial</th>
                                <th>Patente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Registro</strong></td>
                                <td>No requiere</td>
                                <td>Obligatorio</td>
                            </tr>
                            <tr>
                                <td><strong>Duración</strong></td>
                                <td>Potencialmente indefinida</td>
                                <td>20 años máximo</td>
                            </tr>
                            <tr>
                                <td><strong>Divulgación</strong></td>
                                <td>Debe mantenerse secreto</td>
                                <td>Se publica completamente</td>
                            </tr>
                            <tr>
                                <td><strong>Costo</strong></td>
                                <td>Costos de protección</td>
                                <td>Tasas de registro y mantenimiento</td>
                            </tr>
                            <tr>
                                <td><strong>Riesgo</strong></td>
                                <td>Pérdida si se divulga</td>
                                <td>Protección garantizada</td>
                            </tr>
                            <tr>
                                <td><strong>Ingeniería inversa</strong></td>
                                <td>No protege contra ella</td>
                                <td>Sí protege</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> Secretos Industriales en IA</h3>
                <p>En proyectos de Inteligencia Artificial, el secreto industrial es especialmente valioso para proteger:</p>
                <ul>
                    <li><strong>Datasets propietarios</strong> de entrenamiento</li>
                    <li><strong>Arquitecturas de modelos</strong> específicas</li>
                    <li><strong>Hiperparámetros</strong> optimizados</li>
                    <li><strong>Pipelines de procesamiento</strong> de datos</li>
                    <li><strong>Know-how</strong> de implementación</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-circle"></i> Ejemplo Clásico</h4>
                    <p>La fórmula de <strong>Coca-Cola</strong> es el secreto industrial más famoso del mundo. Ha permanecido confidencial por más de 130 años, demostrando que un secreto bien protegido puede ser más valioso que cualquier patente.</p>
                </div>
            </div>
        `
    },
    
    'quiz3': {
        title: 'Cuestionario Unidad 3: Propiedad Industrial',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 3: Propiedad Industrial</p>
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
                    <p>Asegúrate de haber revisado los temas 3.1 al 3.6 antes de iniciar.</p>
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
    // UNIDAD 4: DERECHOS DE AUTOR
    // =============================================
    
    'tema4-1': {
        title: '4.1 Concepto y Objeto del Derecho de Autor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-copyright"></i> ¿Qué es el Derecho de Autor?</h3>
                <p>El <strong>Derecho de Autor</strong> es el conjunto de normas jurídicas que protegen las <strong>obras originales de autoría</strong> desde el momento de su creación. A diferencia de la Propiedad Industrial, el Derecho de Autor surge automáticamente con la creación de la obra, sin necesidad de registro previo.</p>
                
                <p>Esta rama de la Propiedad Intelectual protege la <strong>forma de expresión de las ideas</strong>, no las ideas en sí mismas. Mientras la idea de escribir una novela sobre robots no es protegible, la forma específica en que un autor desarrolla esa idea sí lo es.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-building"></i> Marco Institucional en México</h4>
                    <p>El <strong>Instituto Nacional del Derecho de Autor (INDAUTOR)</strong> es la autoridad administrativa responsable de proteger y fomentar el derecho de autor en México, dependiente de la Secretaría de Cultura.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-palette"></i> Obras Protegidas</h3>
                <p>El Derecho de Autor protege una amplia variedad de obras del intelecto humano:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-book"></i>
                            <h4>Obras Literarias</h4>
                        </div>
                        <ul>
                            <li>Libros, artículos, ensayos</li>
                            <li>Poesía y obras dramáticas</li>
                            <li>Guiones cinematográficos</li>
                            <li>Discursos y conferencias</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-music"></i>
                            <h4>Obras Musicales</h4>
                        </div>
                        <ul>
                            <li>Composiciones con o sin letra</li>
                            <li>Arreglos musicales</li>
                            <li>Fonogramas</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-paint-brush"></i>
                            <h4>Obras Artísticas</h4>
                        </div>
                        <ul>
                            <li>Pinturas, esculturas, dibujos</li>
                            <li>Fotografías</li>
                            <li>Obras arquitectónicas</li>
                            <li>Obras de arte aplicado</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-film"></i>
                            <h4>Obras Audiovisuales</h4>
                        </div>
                        <ul>
                            <li>Películas cinematográficas</li>
                            <li>Videos y documentales</li>
                            <li>Videojuegos</li>
                            <li>Contenido multimedia</li>
                        </ul>
                    </div>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-code"></i>
                            <h4>Software y Bases de Datos</h4>
                        </div>
                        <ul>
                            <li>Programas de computación</li>
                            <li>Código fuente y código objeto</li>
                            <li>Bases de datos originales</li>
                            <li>Interfaces de usuario</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-layer-group"></i>
                            <h4>Obras Derivadas</h4>
                        </div>
                        <ul>
                            <li>Traducciones</li>
                            <li>Adaptaciones</li>
                            <li>Compilaciones y antologías</li>
                            <li>Arreglos y transformaciones</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-star"></i> Requisitos de Protección</h3>
                <p>Para que una obra sea protegida por Derecho de Autor debe cumplir con:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Originalidad</h4>
                        <p>Debe ser una creación propia del autor, que refleje su personalidad y aporte creativo. No se requiere novedad absoluta, solo que no sea una copia.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Fijación</h4>
                        <p>Debe estar materializada o fijada en un soporte perceptible (papel, disco, archivo digital, etc.). Las ideas no fijadas no están protegidas.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Expresión Creativa</h4>
                        <p>Debe reflejar un mínimo de creatividad. Los datos puramente fácticos o las copias mecánicas no califican.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-ban"></i> Exclusiones de Protección</h3>
                <p>El Derecho de Autor <strong>NO protege</strong>:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-times-circle"></i> No son obras protegibles:</h4>
                        <ul>
                            <li>Las ideas, conceptos o teorías abstractas</li>
                            <li>Los procedimientos, métodos o sistemas</li>
                            <li>Los descubrimientos científicos</li>
                            <li>Los contenidos informativos de noticias del día</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-globe"></i> Dominio público:</h4>
                        <ul>
                            <li>Leyes, reglamentos y textos oficiales</li>
                            <li>Tratados internacionales</li>
                            <li>Resoluciones judiciales</li>
                            <li>Obras cuyo plazo de protección ha expirado</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    
    'tema4-2': {
        title: '4.2 Derechos Morales y Patrimoniales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-heart"></i> Derechos Morales</h3>
                <p>Los <strong>derechos morales</strong> protegen la relación personal e íntima entre el autor y su obra. Reconocen el vínculo espiritual que existe entre el creador y su creación.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Características de los Derechos Morales</h4>
                    <ul>
                        <li><strong>Perpetuos:</strong> No tienen límite de tiempo</li>
                        <li><strong>Inalienables:</strong> No pueden venderse ni transferirse</li>
                        <li><strong>Irrenunciables:</strong> El autor no puede renunciar a ellos</li>
                        <li><strong>Inembargables:</strong> No pueden ser objeto de embargo</li>
                        <li><strong>Imprescriptibles:</strong> No se pierden por el paso del tiempo</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-list"></i> Tipos de Derechos Morales</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-user-tag"></i>
                            <h4>Derecho de Paternidad</h4>
                        </div>
                        <p>Derecho a ser reconocido como el <strong>autor de la obra</strong> y a que su nombre aparezca vinculado a ella.</p>
                        <p class="example">También incluye el derecho a usar seudónimo o permanecer anónimo.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-shield-alt"></i>
                            <h4>Derecho de Integridad</h4>
                        </div>
                        <p>Derecho a <strong>oponerse a modificaciones</strong> que puedan dañar el honor o reputación del autor, o que demeriten la obra.</p>
                        <p class="example">Protege contra mutilaciones, deformaciones o alteraciones no autorizadas.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-bullhorn"></i>
                            <h4>Derecho de Divulgación</h4>
                        </div>
                        <p>Derecho a <strong>decidir si la obra se hace pública</strong> y en qué forma, o a mantenerla inédita.</p>
                        <p class="example">El autor controla cuándo y cómo se da a conocer su obra al público.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-undo"></i>
                            <h4>Derecho de Retracto</h4>
                        </div>
                        <p>Derecho a <strong>retirar la obra del comercio</strong> cuando ya no represente su convicción intelectual o moral.</p>
                        <p class="example">Requiere indemnizar previamente a quien tenga derechos de explotación.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-coins"></i> Derechos Patrimoniales</h3>
                <p>Los <strong>derechos patrimoniales</strong> (también llamados derechos económicos) permiten al autor explotar económicamente su obra y obtener beneficios de ella.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Características de los Derechos Patrimoniales</h4>
                    <ul>
                        <li><strong>Temporales:</strong> Tienen una duración limitada por ley</li>
                        <li><strong>Transferibles:</strong> Pueden cederse, licenciarse o venderse</li>
                        <li><strong>Renunciables:</strong> El autor puede renunciar a ellos</li>
                        <li><strong>Embargables:</strong> Pueden ser objeto de medidas cautelares</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-th-list"></i> Tipos de Derechos Patrimoniales</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-copy"></i>
                            <h4>Reproducción</h4>
                        </div>
                        <p>Derecho a autorizar o prohibir la <strong>realización de copias</strong> de la obra por cualquier medio.</p>
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
                        <p>Derecho a autorizar <strong>traducciones, adaptaciones o modificaciones</strong> de la obra.</p>
                    </div>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-globe"></i>
                            <h4>Puesta a Disposición</h4>
                        </div>
                        <p>Derecho a hacer la obra <strong>accesible en Internet</strong>, permitiendo que el público acceda desde cualquier lugar.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-plane"></i>
                            <h4>Importación</h4>
                        </div>
                        <p>Derecho a autorizar o prohibir la <strong>importación de copias</strong> hechas sin autorización.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clock"></i> Vigencia de los Derechos Patrimoniales</h3>
                
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
                                <td>Obras póstumas</td>
                                <td>100 años desde la primera publicación</td>
                            </tr>
                            <tr>
                                <td>Programas de computación</td>
                                <td>Vida del autor + 100 años</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Importante</h4>
                    <p>México tiene uno de los <strong>plazos más largos del mundo</strong> (vida del autor + 100 años). En otros países como Estados Unidos es vida + 70 años, y en algunos países europeos vida + 70 años también.</p>
                </div>
            </div>
        `
    },
    
    'tema4-3': {
        title: '4.3 Limitaciones y Excepciones',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> El Equilibrio del Derecho de Autor</h3>
                <p>El sistema de Derecho de Autor busca un <strong>equilibrio</strong> entre los derechos exclusivos del autor y el interés público de acceder al conocimiento y la cultura. Las <strong>limitaciones y excepciones</strong> son mecanismos que permiten ciertos usos sin autorización del titular.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Fundamento</h4>
                    <p>Las excepciones reconocen que en ciertos casos, el beneficio social de permitir el uso supera el interés del titular en controlarlo. Están consagradas en tratados internacionales y en la legislación nacional.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-circle"></i> La Prueba de los Tres Pasos</h3>
                <p>El <strong>Convenio de Berna</strong> y el <strong>Acuerdo ADPIC</strong> establecen que las excepciones deben cumplir tres condiciones:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Casos Especiales</h4>
                        <p>La excepción debe estar limitada a casos especiales, definidos de manera precisa y concreta.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>No Conflicto con Explotación Normal</h4>
                        <p>El uso no debe entrar en conflicto con la explotación normal de la obra por parte del titular.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>No Perjuicio Injustificado</h4>
                        <p>El uso no debe causar un perjuicio injustificado a los intereses legítimos del autor.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-list-alt"></i> Principales Excepciones en México</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-quote-right"></i>
                            <h4>Cita</h4>
                        </div>
                        <p>Reproducción de <strong>fragmentos breves</strong> de obras ajenas con fines de crítica, comentario, información o ilustración.</p>
                        <p class="example">Requisito: citar la fuente y no alterar la obra.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-graduation-cap"></i>
                            <h4>Uso Educativo</h4>
                        </div>
                        <p>Reproducción para <strong>fines de enseñanza</strong>, siempre que no haya lucro y se cite la fuente.</p>
                        <p class="example">Incluye compilaciones para uso académico.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-home"></i>
                            <h4>Copia Privada</h4>
                        </div>
                        <p>Reproducción de una obra para <strong>uso personal y privado</strong>, sin fines de lucro.</p>
                        <p class="example">No aplica a software ni bases de datos.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-newspaper"></i>
                            <h4>Información</h4>
                        </div>
                        <p>Reproducción de noticias del día, discursos públicos y obras en lugares públicos con <strong>fines informativos</strong>.</p>
                    </div>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-theater-masks"></i>
                            <h4>Parodia</h4>
                        </div>
                        <p>Creación de obras que <strong>imitan o satirizan</strong> una obra original con fines humorísticos o críticos.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-book-reader"></i>
                            <h4>Bibliotecas y Archivos</h4>
                        </div>
                        <p>Reproducción para <strong>preservación, investigación o préstamo</strong> interbibliotecario.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-flag-usa"></i> Fair Use (Uso Justo) - Modelo Estadounidense</h3>
                <p>A diferencia del sistema de excepciones cerradas de México, Estados Unidos utiliza el <strong>Fair Use</strong>, una doctrina más flexible que evalúa caso por caso cuatro factores:</p>
                
                <ol>
                    <li><strong>Propósito y carácter del uso:</strong> ¿Es transformativo? ¿Comercial o educativo?</li>
                    <li><strong>Naturaleza de la obra:</strong> ¿Es factual o creativa? ¿Publicada o inédita?</li>
                    <li><strong>Cantidad usada:</strong> ¿Cuánto se tomó en relación al todo?</li>
                    <li><strong>Efecto en el mercado:</strong> ¿Afecta el valor comercial de la obra original?</li>
                </ol>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Precaución</h4>
                    <p>El Fair Use <strong>no aplica en México</strong>. Los ingenieros que trabajen en proyectos globales deben conocer las diferencias entre jurisdicciones para evitar infracciones.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> Excepciones y la Inteligencia Artificial</h3>
                <p>El entrenamiento de modelos de IA con obras protegidas plantea nuevos desafíos:</p>
                
                <ul>
                    <li>¿Constituye el entrenamiento una "reproducción" que requiere autorización?</li>
                    <li>¿Aplica alguna excepción como la de minería de datos (text and data mining)?</li>
                    <li>¿Quién es responsable si el modelo genera contenido que infringe derechos de autor?</li>
                </ul>
                
                <p>Estas preguntas están en el centro del debate legal actual, con litigios en curso como <strong>Getty Images vs. Stability AI</strong> y <strong>The New York Times vs. OpenAI</strong>.</p>
            </div>
        `
    },
    
    'tema4-4': {
        title: '4.4 Registro y Gestión de Derechos de Autor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-file-signature"></i> El Registro de Obras</h3>
                <p>En México, el registro de obras ante el <strong>INDAUTOR</strong> es <strong>declarativo, no constitutivo</strong>. Esto significa que los derechos nacen con la creación de la obra, no con el registro. Sin embargo, el registro ofrece importantes beneficios:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-certificate"></i>
                            <h4>Prueba de Autoría</h4>
                        </div>
                        <p>El certificado de registro es <strong>prueba fehaciente</strong> de la autoría y fecha de creación en un juicio.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-gavel"></i>
                            <h4>Facilita la Defensa</h4>
                        </div>
                        <p>Simplifica los <strong>procedimientos legales</strong> contra infractores al tener documentación oficial.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-bullhorn"></i>
                            <h4>Publicidad</h4>
                        </div>
                        <p>Da <strong>publicidad</strong> a la obra y permite identificar al titular de los derechos.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-globe"></i>
                            <h4>Reconocimiento Internacional</h4>
                        </div>
                        <p>Facilita el reconocimiento de derechos en otros países signatarios del <strong>Convenio de Berna</strong>.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clipboard-list"></i> Procedimiento de Registro</h3>
                <p>Para registrar una obra ante INDAUTOR:</p>
                
                <ol>
                    <li><strong>Llenar la solicitud:</strong> Formato específico según el tipo de obra</li>
                    <li><strong>Presentar la obra:</strong> En el formato adecuado (impreso, digital, fonograma, etc.)</li>
                    <li><strong>Documentos de identidad:</strong> Identificación oficial del autor</li>
                    <li><strong>Pago de derechos:</strong> Tarifa establecida por INDAUTOR</li>
                    <li><strong>Esperar resolución:</strong> El Instituto revisa y emite el certificado</li>
                </ol>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-laptop"></i> Registro en Línea</h4>
                    <p>INDAUTOR ofrece el sistema <strong>e-INDAUTOR</strong> para realizar trámites en línea, agilizando el proceso de registro.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-users"></i> Gestión Colectiva de Derechos</h3>
                <p>Las <strong>sociedades de gestión colectiva</strong> son organizaciones sin fines de lucro que administran los derechos de sus miembros, facilitando el licenciamiento y la recaudación de regalías.</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Sociedad</th>
                                <th>Tipo de Obras</th>
                                <th>Funciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>SACM</strong></td>
                                <td>Música (compositores)</td>
                                <td>Recauda regalías por ejecución pública</td>
                            </tr>
                            <tr>
                                <td><strong>SOGEM</strong></td>
                                <td>Obras literarias y dramáticas</td>
                                <td>Administra derechos de escritores</td>
                            </tr>
                            <tr>
                                <td><strong>INDA</strong></td>
                                <td>Intérpretes y ejecutantes</td>
                                <td>Protege derechos conexos</td>
                            </tr>
                            <tr>
                                <td><strong>DIRECTORES</strong></td>
                                <td>Obras audiovisuales</td>
                                <td>Representa a directores de cine</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-handshake"></i> Cesión y Licenciamiento</h3>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-file-contract"></i> Cesión de Derechos</h4>
                        <p>La <strong>cesión</strong> es la transferencia de la titularidad de los derechos patrimoniales:</p>
                        <ul>
                            <li>Debe constar por escrito</li>
                            <li>Solo se cede lo expresamente pactado</li>
                            <li>Duración máxima: 15 años (salvo excepciones)</li>
                            <li>Puede ser onerosa o gratuita</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-key"></i> Licencia</h4>
                        <p>La <strong>licencia</strong> es una autorización de uso sin transferir la titularidad:</p>
                        <ul>
                            <li><strong>Exclusiva:</strong> Solo el licenciatario puede usar</li>
                            <li><strong>No exclusiva:</strong> Múltiples licenciatarios</li>
                            <li>Define alcance, territorio y duración</li>
                            <li>Generalmente incluye remuneración</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fab fa-creative-commons"></i> Licencias Creative Commons</h3>
                <p>Las licencias <strong>Creative Commons (CC)</strong> permiten a los autores compartir sus obras de forma estandarizada, indicando qué usos permiten:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Licencia</th>
                                <th>Condiciones</th>
                                <th>Uso Comercial</th>
                                <th>Obras Derivadas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>CC BY</strong></td>
                                <td>Solo atribución</td>
                                <td>✓ Sí</td>
                                <td>✓ Sí</td>
                            </tr>
                            <tr>
                                <td><strong>CC BY-SA</strong></td>
                                <td>Atribución + CompartirIgual</td>
                                <td>✓ Sí</td>
                                <td>✓ Bajo misma licencia</td>
                            </tr>
                            <tr>
                                <td><strong>CC BY-NC</strong></td>
                                <td>Atribución + NoComercial</td>
                                <td>✗ No</td>
                                <td>✓ Sí</td>
                            </tr>
                            <tr>
                                <td><strong>CC BY-ND</strong></td>
                                <td>Atribución + SinDerivadas</td>
                                <td>✓ Sí</td>
                                <td>✗ No</td>
                            </tr>
                            <tr>
                                <td><strong>CC BY-NC-SA</strong></td>
                                <td>Atribución + NC + SA</td>
                                <td>✗ No</td>
                                <td>✓ Bajo misma licencia</td>
                            </tr>
                            <tr>
                                <td><strong>CC BY-NC-ND</strong></td>
                                <td>La más restrictiva</td>
                                <td>✗ No</td>
                                <td>✗ No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    
    'tema4-5': {
        title: '4.5 Licenciamiento de Software',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-code"></i> El Software como Obra Protegida</h3>
                <p>El <strong>software</strong> está protegido por Derecho de Autor como obra literaria. Esta protección cubre el <strong>código fuente</strong> y el <strong>código objeto</strong>, pero no los conceptos, algoritmos o funcionalidades subyacentes.</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Protección Dual</h4>
                    <p>El software puede recibir protección complementaria:</p>
                    <ul>
                        <li><strong>Derecho de Autor:</strong> Protege la expresión del código</li>
                        <li><strong>Patentes:</strong> Protegen invenciones técnicas implementadas en software</li>
                        <li><strong>Secreto Industrial:</strong> Protege algoritmos y código no divulgado</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-th-list"></i> Tipos de Licencias de Software</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-lock"></i>
                            <h4>Software Propietario</h4>
                        </div>
                        <p>El código fuente <strong>no está disponible</strong>. El usuario adquiere una licencia de uso limitado.</p>
                        <p class="example">Ejemplos: Microsoft Office, Adobe Photoshop, Windows</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-unlock"></i>
                            <h4>Software Libre</h4>
                        </div>
                        <p>Garantiza las <strong>cuatro libertades</strong>: usar, estudiar, modificar y redistribuir.</p>
                        <p class="example">Ejemplos: Linux, Firefox, LibreOffice</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-code-branch"></i>
                            <h4>Open Source</h4>
                        </div>
                        <p>El código fuente está <strong>disponible públicamente</strong>. Enfoque más pragmático que el software libre.</p>
                        <p class="example">Ejemplos: Apache, MySQL, Python</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-gift"></i>
                            <h4>Freeware</h4>
                        </div>
                        <p>Gratuito pero <strong>sin acceso al código</strong>. El autor mantiene todos los derechos.</p>
                        <p class="example">Ejemplos: Skype, WhatsApp Desktop</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-alt"></i> Licencias Open Source Principales</h3>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Licencia</th>
                                <th>Tipo</th>
                                <th>Copyleft</th>
                                <th>Uso en Proyectos Comerciales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>MIT</strong></td>
                                <td>Permisiva</td>
                                <td>No</td>
                                <td>✓ Sin restricciones</td>
                            </tr>
                            <tr>
                                <td><strong>Apache 2.0</strong></td>
                                <td>Permisiva</td>
                                <td>No</td>
                                <td>✓ Sin restricciones</td>
                            </tr>
                            <tr>
                                <td><strong>BSD</strong></td>
                                <td>Permisiva</td>
                                <td>No</td>
                                <td>✓ Sin restricciones</td>
                            </tr>
                            <tr>
                                <td><strong>GPL v3</strong></td>
                                <td>Copyleft fuerte</td>
                                <td>Sí</td>
                                <td>⚠ Requiere liberar código derivado</td>
                            </tr>
                            <tr>
                                <td><strong>LGPL</strong></td>
                                <td>Copyleft débil</td>
                                <td>Parcial</td>
                                <td>✓ Permite enlazar sin liberar</td>
                            </tr>
                            <tr>
                                <td><strong>AGPL</strong></td>
                                <td>Copyleft fuerte</td>
                                <td>Sí (SaaS)</td>
                                <td>⚠ Aplica también a uso en red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-share-alt"></i> El Concepto de Copyleft</h3>
                <p>El <strong>copyleft</strong> es un mecanismo legal que usa el Derecho de Autor para garantizar que una obra y sus derivados permanezcan libres:</p>
                
                <ul>
                    <li>Si usas código con copyleft, <strong>debes compartir tu código</strong> bajo la misma licencia</li>
                    <li>Las licencias <strong>permisivas</strong> (MIT, Apache) no tienen esta restricción</li>
                    <li>La <strong>GPL</strong> es la licencia copyleft más conocida</li>
                    <li>La <strong>AGPL</strong> extiende el copyleft al uso en servicios en red (SaaS)</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Precaución para Empresas</h4>
                    <p>Usar código GPL en un proyecto propietario puede obligar a liberar todo el código del proyecto. Es esencial realizar <strong>auditorías de licencias</strong> antes de incorporar dependencias open source.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-robot"></i> Licenciamiento en Proyectos de IA</h3>
                <p>Los proyectos de IA tienen consideraciones especiales de licenciamiento:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-code"></i> Código</h4>
                        <ul>
                            <li>Frameworks (TensorFlow, PyTorch): Apache 2.0</li>
                            <li>Librerías auxiliares: Verificar cada una</li>
                            <li>Código propio: Elegir licencia estratégicamente</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-brain"></i> Modelos y Datos</h4>
                        <ul>
                            <li>Pesos del modelo: ¿Obra derivada?</li>
                            <li>Datos de entrenamiento: Derechos sobre datos</li>
                            <li>Licencias específicas (Hugging Face, etc.)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-balance-scale"></i> Licencias de IA Emergentes</h4>
                    <p>Han surgido licencias específicas para modelos de IA como:</p>
                    <ul>
                        <li><strong>OpenRAIL:</strong> Permite uso pero prohíbe ciertos usos dañinos</li>
                        <li><strong>Llama 2 License:</strong> Uso comercial con restricciones de escala</li>
                        <li><strong>CC-BY-NC:</strong> Común para datasets de investigación</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    'quiz4': {
        title: 'Cuestionario Unidad 4: Derechos de Autor',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 4: Derechos de Autor</p>
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
    // UNIDAD 5: PROTECCIÓN Y APLICACIÓN DE LA PI
    // =============================================
    
    'tema5-1': {
        title: '5.1 Infracciones a la Propiedad Intelectual',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Tipos de Infracciones</h3>
                <p>Las <strong>infracciones a la propiedad intelectual</strong> son actos que vulneran los derechos exclusivos del titular sin su autorización. Estas violaciones pueden afectar tanto derechos de autor como derechos de propiedad industrial, y tienen consecuencias legales significativas.</p>
                
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
                        <p class="example">Ejemplos: bolsos "Louis Vuitton" falsos, relojes "Rolex" piratas, ropa deportiva falsificada.</p>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cogs"></i>
                            <h4>Usurpación de Patentes</h4>
                        </div>
                        <p>Fabricar, usar o vender un producto o proceso patentado sin autorización del titular.</p>
                        <p class="example">Ejemplos: copiar tecnología patentada, fabricar medicamentos genéricos sin licencia.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> Piratería Digital</h3>
                <p>En el entorno digital, las infracciones adquieren nuevas dimensiones:</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-download"></i> Formas Comunes</h4>
                        <ul>
                            <li><strong>Descargas ilegales:</strong> torrents, sitios de descarga directa</li>
                            <li><strong>Streaming no autorizado:</strong> sitios que retransmiten contenido sin licencia</li>
                            <li><strong>Distribución P2P:</strong> compartir archivos protegidos</li>
                            <li><strong>Cracking:</strong> eliminar protecciones de software</li>
                            <li><strong>Keygens:</strong> generadores de claves de licencia falsas</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-chart-line"></i> Impacto Económico</h4>
                        <ul>
                            <li>Pérdidas globales estimadas en <strong>$500 mil millones USD anuales</strong></li>
                            <li>Destrucción de empleos en industrias creativas</li>
                            <li>Desincentivo a la innovación y creación</li>
                            <li>Riesgos de seguridad (malware en software pirata)</li>
                            <li>Evasión fiscal a gran escala</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Responsabilidad por Infracciones</h3>
                <p>La responsabilidad por infracciones puede recaer en diferentes actores:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de Responsable</th>
                                <th>Descripción</th>
                                <th>Ejemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Infractor Directo</strong></td>
                                <td>Quien realiza directamente la infracción</td>
                                <td>El que copia y vende software pirata</td>
                            </tr>
                            <tr>
                                <td><strong>Infractor Contributivo</strong></td>
                                <td>Quien facilita o contribuye a la infracción de otro</td>
                                <td>Sitio web que hospeda enlaces a contenido pirata</td>
                            </tr>
                            <tr>
                                <td><strong>Infractor Vicario</strong></td>
                                <td>Quien tiene capacidad de control y beneficio económico</td>
                                <td>Plataforma que lucra con publicidad de contenido infractor</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-gavel"></i> Caso MGM vs. Grokster (2005)</h4>
                    <p>La Corte Suprema de EE.UU. estableció que los proveedores de tecnología pueden ser responsables si <strong>inducen activamente</strong> a los usuarios a infringir derechos de autor, incluso si la tecnología tiene usos legítimos.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Infracciones en el Ámbito Empresarial</h3>
                <p>Las empresas enfrentan riesgos específicos de infracción:</p>
                
                <ul>
                    <li><strong>Uso de software sin licencia:</strong> Auditorías de BSA/Software Alliance</li>
                    <li><strong>Uso de imágenes de stock sin pagar:</strong> Getty Images, Shutterstock</li>
                    <li><strong>Uso de fuentes tipográficas sin licencia:</strong> Adobe, Monotype</li>
                    <li><strong>Código open source mal utilizado:</strong> Violaciones de GPL</li>
                    <li><strong>Uso de música en publicidad:</strong> Sin licencia de sincronización</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Riesgo Corporativo</h4>
                    <p>Una auditoría de software puede resultar en multas de <strong>millones de pesos</strong>, además de obligar a comprar las licencias faltantes. Las empresas deben mantener registros de todas sus licencias.</p>
                </div>
            </div>
        `
    },
    
    'tema5-2': {
        title: '5.2 Procedimientos Administrativos',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-building"></i> Autoridades Competentes en México</h3>
                <p>En México, diferentes autoridades administrativas tienen competencia para conocer de infracciones a la PI:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-industry"></i>
                            <h4>IMPI</h4>
                        </div>
                        <p><strong>Instituto Mexicano de la Propiedad Industrial</strong></p>
                        <ul>
                            <li>Marcas y avisos comerciales</li>
                            <li>Patentes y modelos de utilidad</li>
                            <li>Diseños industriales</li>
                            <li>Secretos industriales</li>
                            <li>Denominaciones de origen</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-copyright"></i>
                            <h4>INDAUTOR</h4>
                        </div>
                        <p><strong>Instituto Nacional del Derecho de Autor</strong></p>
                        <ul>
                            <li>Obras literarias y artísticas</li>
                            <li>Programas de computación</li>
                            <li>Bases de datos</li>
                            <li>Derechos conexos</li>
                            <li>Reservas de derechos</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clipboard-list"></i> Procedimiento de Declaración Administrativa ante IMPI</h3>
                <p>El procedimiento administrativo ante el IMPI sigue estas etapas:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Solicitud</h4>
                        <p>El titular presenta solicitud de declaración administrativa de infracción, acompañada de pruebas y documentación que acredite su derecho.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Admisión</h4>
                        <p>El IMPI analiza la solicitud y, si cumple requisitos, la admite y emplaza al presunto infractor para que conteste.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Contestación</h4>
                        <p>El presunto infractor tiene 10 días hábiles para contestar, ofrecer pruebas y presentar sus argumentos de defensa.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">4</div>
                        <h4>Pruebas</h4>
                        <p>Se abre un período probatorio de 20 días para el desahogo de pruebas ofrecidas por las partes.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">5</div>
                        <h4>Alegatos</h4>
                        <p>Las partes presentan sus alegatos finales por escrito.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">6</div>
                        <h4>Resolución</h4>
                        <p>El IMPI emite resolución declarando o no la existencia de infracción, e imponiendo las sanciones correspondientes.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-search"></i> Visitas de Inspección</h3>
                <p>El IMPI tiene facultades para realizar <strong>visitas de inspección</strong> a establecimientos donde se sospeche que se cometen infracciones:</p>
                
                <ul>
                    <li>Se requiere <strong>orden de visita</strong> emitida por el IMPI</li>
                    <li>Pueden realizarse con o sin aviso previo al presunto infractor</li>
                    <li>Los inspectores pueden revisar mercancías, documentos y equipo</li>
                    <li>Pueden <strong>asegurar</strong> productos presuntamente infractores</li>
                    <li>El acta de inspección es prueba fundamental en el procedimiento</li>
                </ul>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Importante</h4>
                    <p>El titular de derechos puede solicitar visitas de inspección como medida preliminar, antes de iniciar el procedimiento formal de declaración de infracción.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> Sanciones Administrativas</h3>
                <p>Las sanciones que puede imponer el IMPI incluyen:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Sanción</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Multa</strong></td>
                                <td>Hasta <strong>500,000 UMAs</strong> (aproximadamente $54 millones de pesos)</td>
                            </tr>
                            <tr>
                                <td><strong>Clausura temporal</strong></td>
                                <td>Hasta 90 días del establecimiento infractor</td>
                            </tr>
                            <tr>
                                <td><strong>Clausura definitiva</strong></td>
                                <td>En casos de reincidencia grave</td>
                            </tr>
                            <tr>
                                <td><strong>Decomiso</strong></td>
                                <td>De productos, empaques, etiquetas infractores</td>
                            </tr>
                            <tr>
                                <td><strong>Destrucción</strong></td>
                                <td>De productos decomisados (a costa del infractor)</td>
                            </tr>
                            <tr>
                                <td><strong>Arresto administrativo</strong></td>
                                <td>Hasta 36 horas en caso de desacato</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Medidas Provisionales</h3>
                <p>El titular puede solicitar <strong>medidas provisionales</strong> urgentes antes o durante el procedimiento:</p>
                
                <ul>
                    <li><strong>Cese inmediato</strong> de los actos que constituyan la infracción</li>
                    <li><strong>Retiro de circulación</strong> de productos infractores</li>
                    <li><strong>Aseguramiento</strong> de bienes relacionados con la infracción</li>
                    <li><strong>Suspensión</strong> de servicios o contenidos en línea</li>
                    <li><strong>Prohibición</strong> de importación de productos infractores</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Requisitos</h4>
                    <p>Para obtener medidas provisionales, el solicitante debe demostrar: 1) titularidad del derecho, 2) existencia de la infracción, y 3) posibilidad de daño irreparable. Generalmente se requiere otorgar una <strong>fianza</strong>.</p>
                </div>
            </div>
        `
    },
    
    'tema5-3': {
        title: '5.3 Acciones Civiles y Penales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Vía Civil</h3>
                <p>La <strong>vía civil</strong> permite al titular obtener una reparación económica por los daños causados por la infracción. Se tramita ante juzgados civiles federales.</p>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-hand-holding-usd"></i> Tipos de Indemnización</h4>
                        <ul>
                            <li><strong>Daño emergente:</strong> Pérdida sufrida directamente</li>
                            <li><strong>Lucro cesante:</strong> Ganancia dejada de percibir</li>
                            <li><strong>Daño moral:</strong> Afectación a reputación y honor</li>
                            <li><strong>Regalías hipotéticas:</strong> Lo que habría costado la licencia</li>
                            <li><strong>Beneficios del infractor:</strong> Ganancias obtenidas ilegalmente</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-file-invoice-dollar"></i> Otras Prestaciones</h4>
                        <ul>
                            <li><strong>Destrucción</strong> de productos infractores</li>
                            <li><strong>Publicación</strong> de la sentencia</li>
                            <li><strong>Costas procesales:</strong> Honorarios de abogados</li>
                            <li><strong>Gastos de investigación:</strong> Detectives, peritos</li>
                            <li><strong>Intereses legales:</strong> Sobre las cantidades adeudadas</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-calculator"></i> Cuantificación de Daños</h3>
                <p>La cuantificación de daños en PI es compleja y puede hacerse por diferentes métodos:</p>
                
                <div class="phases-container">
                    <div class="phase-box">
                        <div class="phase-number">1</div>
                        <h4>Ganancias Perdidas</h4>
                        <p>Ventas que el titular habría realizado de no existir la infracción. Requiere demostrar causalidad directa.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">2</div>
                        <h4>Regalía Razonable</h4>
                        <p>Monto que un licenciatario habría pagado por usar legalmente el derecho. Se usa cuando las ganancias perdidas son difíciles de probar.</p>
                    </div>
                    
                    <div class="phase-box">
                        <div class="phase-number">3</div>
                        <h4>Beneficios del Infractor</h4>
                        <p>Ganancias obtenidas por el infractor gracias a la violación. El titular solo debe probar los ingresos; el infractor debe demostrar sus costos.</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Daños Estatutarios</h4>
                    <p>En algunos países (como EE.UU.) existen <strong>daños estatutarios</strong> que permiten reclamar montos fijos sin necesidad de probar el daño real. En México, esta figura no existe, por lo que siempre debe probarse el daño.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> Vía Penal</h3>
                <p>Las infracciones graves a la PI pueden constituir <strong>delitos</strong> perseguibles penalmente. Se tramitan ante el Ministerio Público Federal y juzgados penales.</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Delito</th>
                                <th>Conducta</th>
                                <th>Pena (Código Penal Federal)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Piratería de obras</strong></td>
                                <td>Reproducir, distribuir o vender obras sin autorización</td>
                                <td>2 a 10 años de prisión + multa</td>
                            </tr>
                            <tr>
                                <td><strong>Falsificación de marcas</strong></td>
                                <td>Usar marcas registradas sin autorización con fines de lucro</td>
                                <td>2 a 6 años de prisión + multa</td>
                            </tr>
                            <tr>
                                <td><strong>Revelación de secretos</strong></td>
                                <td>Divulgar secretos industriales ajenos</td>
                                <td>2 a 6 años de prisión + multa</td>
                            </tr>
                            <tr>
                                <td><strong>Usurpación de patentes</strong></td>
                                <td>Fabricar productos patentados sin autorización</td>
                                <td>2 a 6 años de prisión + multa</td>
                            </tr>
                            <tr>
                                <td><strong>Elusión de MTP</strong></td>
                                <td>Romper medidas tecnológicas de protección</td>
                                <td>3 a 10 años de prisión + multa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-users"></i> Delincuencia Organizada</h3>
                <p>Cuando la piratería o falsificación se comete de forma organizada, pueden aplicarse las disposiciones de la <strong>Ley Federal contra la Delincuencia Organizada</strong>:</p>
                
                <ul>
                    <li>Penas aumentadas hasta en <strong>50%</strong></li>
                    <li>Aplicación de <strong>extinción de dominio</strong></li>
                    <li>Intervención de comunicaciones y técnicas especiales de investigación</li>
                    <li>Posibilidad de testigos protegidos y colaboradores</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Requisitos de Procedibilidad</h4>
                    <p>La mayoría de los delitos contra la PI son de <strong>querella</strong>, es decir, requieren que el titular del derecho presente formalmente la denuncia. Solo algunos casos muy graves se persiguen de oficio.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> Medidas en Frontera</h3>
                <p>La <strong>Aduana</strong> puede detener mercancías sospechosas de infringir derechos de PI:</p>
                
                <ul>
                    <li>El titular puede registrar sus derechos ante la autoridad aduanera</li>
                    <li>La aduana notifica al titular cuando detecta mercancía sospechosa</li>
                    <li>El titular tiene plazo corto para confirmar si hay infracción</li>
                    <li>Si se confirma, las mercancías pueden ser destruidas</li>
                    <li>Evita que productos falsificados entren al mercado</li>
                </ul>
            </div>
        `
    },
    
    'tema5-4': {
        title: '5.4 Medidas Tecnológicas de Protección',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-lock"></i> ¿Qué son las Medidas Tecnológicas de Protección?</h3>
                <p>Las <strong>Medidas Tecnológicas de Protección (MTP)</strong> son mecanismos técnicos diseñados para controlar el acceso y uso de obras protegidas por derecho de autor. También se conocen como <strong>DRM</strong> (Digital Rights Management).</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> Protección Legal</h4>
                    <p>La <strong>elusión</strong> (burlar, hackear, crackear) de medidas tecnológicas está prohibida por ley, independientemente de si se comete otra infracción. En México está tipificada en la Ley Federal del Derecho de Autor.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-th-list"></i> Tipos de Medidas Tecnológicas</h3>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-key"></i>
                            <h4>Control de Acceso</h4>
                        </div>
                        <p>Impiden acceder al contenido sin autorización.</p>
                        <ul>
                            <li>Cifrado de contenido</li>
                            <li>Contraseñas y autenticación</li>
                            <li>Códigos de región (DVDs, consolas)</li>
                            <li>Tokens de hardware</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-ban"></i>
                            <h4>Control de Uso</h4>
                        </div>
                        <p>Restringen lo que se puede hacer con el contenido.</p>
                        <ul>
                            <li>Impedir copia</li>
                            <li>Limitar reproducciones</li>
                            <li>Bloquear impresión</li>
                            <li>Fechas de expiración</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-fingerprint"></i>
                            <h4>Marcas de Agua</h4>
                        </div>
                        <p>Identificadores invisibles o visibles en el contenido.</p>
                        <ul>
                            <li>Watermarks en imágenes</li>
                            <li>Fingerprints en audio</li>
                            <li>Códigos ocultos en video</li>
                            <li>Metadatos embebidos</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-cloud"></i>
                            <h4>Verificación en Línea</h4>
                        </div>
                        <p>Requieren conexión a servidores para funcionar.</p>
                        <ul>
                            <li>Activación de software</li>
                            <li>Licencias flotantes</li>
                            <li>Always-online DRM</li>
                            <li>Validación periódica</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-gamepad"></i> DRM en la Industria</h3>
                <p>Diferentes industrias usan distintos sistemas de DRM:</p>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Industria</th>
                                <th>Sistema DRM</th>
                                <th>Características</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Música</strong></td>
                                <td>FairPlay (Apple), Widevine</td>
                                <td>Streaming limitado, descargas con restricciones</td>
                            </tr>
                            <tr>
                                <td><strong>Video</strong></td>
                                <td>Widevine, PlayReady, HDCP</td>
                                <td>Resolución limitada según dispositivo, anti-captura</td>
                            </tr>
                            <tr>
                                <td><strong>Videojuegos</strong></td>
                                <td>Denuvo, Steam DRM, Always-Online</td>
                                <td>Verificación de licencia, anti-manipulación</td>
                            </tr>
                            <tr>
                                <td><strong>E-books</strong></td>
                                <td>Amazon DRM, Adobe DRM</td>
                                <td>Dispositivos autorizados, no impresión</td>
                            </tr>
                            <tr>
                                <td><strong>Software</strong></td>
                                <td>Dongles, licencias flotantes</td>
                                <td>Activación, verificación periódica</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Debate sobre el DRM</h3>
                
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-thumbs-up"></i> Argumentos a Favor</h4>
                        <ul>
                            <li>Protege las inversiones de los creadores</li>
                            <li>Permite nuevos modelos de negocio (suscripción, renta)</li>
                            <li>Reduce la piratería casual</li>
                            <li>Facilita la distribución digital segura</li>
                        </ul>
                    </div>
                    
                    <div class="column-box">
                        <h4><i class="fas fa-thumbs-down"></i> Argumentos en Contra</h4>
                        <ul>
                            <li>Limita los derechos de los usuarios legítimos</li>
                            <li>Puede impedir usos legales (copia privada, accesibilidad)</li>
                            <li>Problemas de interoperabilidad</li>
                            <li>Obsolescencia tecnológica (servidores que cierran)</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-unlock-alt"></i> Excepciones a la Protección Anti-Elusión</h3>
                <p>La ley contempla algunas <strong>excepciones</strong> donde eludir MTP es legal:</p>
                
                <ul>
                    <li><strong>Investigación en criptografía:</strong> Para analizar vulnerabilidades</li>
                    <li><strong>Ingeniería inversa:</strong> Para lograr interoperabilidad (limitada)</li>
                    <li><strong>Seguridad informática:</strong> Para probar sistemas de seguridad</li>
                    <li><strong>Accesibilidad:</strong> Para personas con discapacidad</li>
                    <li><strong>Bibliotecas y archivos:</strong> Para preservación</li>
                </ul>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-exclamation-triangle"></i> Precaución</h4>
                    <p>Estas excepciones son <strong>muy limitadas</strong> y específicas. Eludir DRM "para uso personal" o "porque ya pagué" generalmente <strong>no está permitido</strong>.</p>
                </div>
            </div>
        `
    },
    
    'tema5-5': {
        title: '5.5 Casos Prácticos y Estrategias de Protección',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-briefcase"></i> Caso 1: Startup de Software</h3>
                <div class="highlight-box">
                    <h4>Situación</h4>
                    <p>Una startup mexicana desarrolla una aplicación móvil innovadora. Meses después de su lanzamiento, descubren que una empresa china ha copiado la app casi idénticamente y la vende en tiendas de apps alternativas.</p>
                </div>
                
                <h4>Análisis Legal:</h4>
                <ul>
                    <li><strong>Derechos afectados:</strong> Derecho de autor sobre el código, diseño de interfaz, posible marca registrada del nombre</li>
                    <li><strong>Jurisdicción:</strong> El infractor está en China, complicando la aplicación de leyes mexicanas</li>
                    <li><strong>Evidencia:</strong> Capturas de pantalla, comparativa de código si es posible, fechas de publicación</li>
                </ul>
                
                <h4>Estrategia Recomendada:</h4>
                <ol>
                    <li><strong>Notificación a plataformas:</strong> Reportar a las tiendas de apps (DMCA takedown)</li>
                    <li><strong>Registro de marca:</strong> Registrar marca en China si se planea operar allí</li>
                    <li><strong>Documentación:</strong> Preservar toda evidencia de la infracción</li>
                    <li><strong>Asesoría local:</strong> Contratar abogado en China para acciones locales</li>
                </ol>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-store"></i> Caso 2: Falsificación de Productos</h3>
                <div class="highlight-box">
                    <h4>Situación</h4>
                    <p>Una empresa detecta que en un mercado popular se venden productos con su marca registrada pero de calidad muy inferior. Los vendedores los ofrecen como "originales" a precios reducidos.</p>
                </div>
                
                <h4>Análisis Legal:</h4>
                <ul>
                    <li><strong>Infracción:</strong> Uso no autorizado de marca registrada, competencia desleal</li>
                    <li><strong>Riesgos adicionales:</strong> Daño a reputación, posibles riesgos de seguridad para consumidores</li>
                    <li><strong>Autoridad competente:</strong> IMPI para vía administrativa</li>
                </ul>
                
                <h4>Estrategia Recomendada:</h4>
                <ol>
                    <li><strong>Compra de muestra:</strong> Adquirir producto infractor como evidencia</li>
                    <li><strong>Solicitar visita de inspección:</strong> Al IMPI para asegurar mercancía</li>
                    <li><strong>Denuncia penal:</strong> Si la falsificación es a escala comercial</li>
                    <li><strong>Campaña de concientización:</strong> Informar a consumidores cómo identificar originales</li>
                </ol>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-music"></i> Caso 3: Uso de Música en Publicidad</h3>
                <div class="highlight-box">
                    <h4>Situación</h4>
                    <p>Un músico independiente encuentra que una empresa de telecomunicaciones está usando su canción en un comercial de televisión nacional, sin haberle pedido permiso ni pagado regalías.</p>
                </div>
                
                <h4>Análisis Legal:</h4>
                <ul>
                    <li><strong>Derechos afectados:</strong> Derechos patrimoniales (reproducción, comunicación pública), derechos morales (paternidad)</li>
                    <li><strong>Tipo de licencia requerida:</strong> Licencia de sincronización (no cubierta por sociedades de gestión)</li>
                    <li><strong>Cuantificación:</strong> Valor de mercado de una licencia similar</li>
                </ul>
                
                <h4>Estrategia Recomendada:</h4>
                <ol>
                    <li><strong>Carta de cese:</strong> Enviar notificación formal exigiendo retiro del comercial</li>
                    <li><strong>Negociación:</strong> Ofrecer licencia retroactiva con compensación</li>
                    <li><strong>Demanda civil:</strong> Si no hay respuesta, demandar daños y perjuicios</li>
                    <li><strong>INDAUTOR:</strong> Presentar denuncia administrativa</li>
                </ol>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Estrategias Preventivas de Protección</h3>
                <p>La mejor estrategia es <strong>prevenir</strong> las infracciones antes de que ocurran:</p>
                
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-signature"></i>
                            <h4>Registro</h4>
                        </div>
                        <ul>
                            <li>Registrar marcas, patentes y obras ante las autoridades</li>
                            <li>Mantener registros actualizados (renovaciones)</li>
                            <li>Extender protección a países donde se opere</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-file-contract"></i>
                            <h4>Contratos</h4>
                        </div>
                        <ul>
                            <li>Acuerdos de confidencialidad (NDA) con empleados</li>
                            <li>Cláusulas de PI en contratos de trabajo</li>
                            <li>Licencias claras con terceros</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-eye"></i>
                            <h4>Vigilancia</h4>
                        </div>
                        <ul>
                            <li>Monitorear el mercado en busca de infractores</li>
                            <li>Usar servicios de vigilancia de marcas</li>
                            <li>Alertas de Google para detectar usos no autorizados</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-graduation-cap"></i>
                            <h4>Capacitación</h4>
                        </div>
                        <ul>
                            <li>Educar empleados sobre políticas de PI</li>
                            <li>Procedimientos para manejar información confidencial</li>
                            <li>Protocolos de respuesta ante infracciones</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-lightbulb"></i> Recomendaciones Finales</h3>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-check-circle"></i> Para Creadores e Inventores</h4>
                    <ul>
                        <li>Documenta tu proceso creativo desde el inicio</li>
                        <li>Registra tus creaciones antes de divulgarlas</li>
                        <li>Usa contratos claros cuando colabores con terceros</li>
                        <li>Respeta la PI de otros para exigir respeto a la tuya</li>
                    </ul>
                </div>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-building"></i> Para Empresas</h4>
                    <ul>
                        <li>Realiza auditorías periódicas de activos de PI</li>
                        <li>Implementa políticas claras de gestión de PI</li>
                        <li>Asegúrate de tener licencias para todo el software y contenido que usas</li>
                        <li>Designa responsables de vigilancia y respuesta</li>
                    </ul>
                </div>
                
                <div class="highlight-box warning">
                    <h4><i class="fas fa-balance-scale"></i> Principio Fundamental</h4>
                    <p>La protección efectiva de la Propiedad Intelectual no solo beneficia a los titulares: fomenta la innovación, incentiva la creatividad, protege a los consumidores y contribuye al desarrollo económico de la sociedad.</p>
                </div>
            </div>
        `
    },
    
    'quiz5': {
        title: 'Cuestionario Unidad 5: Protección y Aplicación',
        type: 'quiz',
        content: `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario de Evaluación</h3>
                    <p>Unidad 5: Protección y Aplicación de la PI</p>
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
