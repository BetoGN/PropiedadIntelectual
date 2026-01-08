// ============================================
// CONTENIDO DEL CURSO - PROPIEDAD INTELECTUAL
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
    // UNIDAD 2: DERECHOS DE AUTOR
    // =============================================
    
    'tema2-1': {
        title: '2.1 Concepto y Objeto del Derecho de Autor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-copyright"></i> ¿Qué son los Derechos de Autor?</h3>
                <p>Los derechos de autor son el conjunto de normas jurídicas que protegen las obras originales de autoría, desde el momento de su creación, sin necesidad de registro previo.</p>
                
                <p>Estos derechos protegen la forma de expresión de las ideas, no las ideas en sí mismas.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-palette"></i> Obras Protegidas</h3>
                <p>Los derechos de autor protegen una amplia variedad de obras:</p>
                
                <ul>
                    <li><strong>Literarias:</strong> Libros, artículos, ensayos, poesía, guiones</li>
                    <li><strong>Musicales:</strong> Composiciones con o sin letra</li>
                    <li><strong>Artísticas:</strong> Pinturas, esculturas, fotografías, dibujos</li>
                    <li><strong>Audiovisuales:</strong> Películas, videos, documentales</li>
                    <li><strong>Arquitectónicas:</strong> Diseños y planos de edificios</li>
                    <li><strong>Programas de cómputo:</strong> Software</li>
                    <li><strong>Bases de datos:</strong> Compilaciones originales</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-star"></i> Requisitos de Protección</h3>
                <p>Para que una obra sea protegida debe cumplir con:</p>
                <ul>
                    <li><strong>Originalidad:</strong> Debe ser una creación propia del autor</li>
                    <li><strong>Expresión:</strong> Debe estar materializada en algún soporte</li>
                    <li><strong>Creatividad:</strong> Debe reflejar la personalidad del autor</li>
                </ul>
            </div>
            
            <div class="highlight-box">
                <h4><i class="fas fa-exclamation-circle"></i> No se protegen:</h4>
                <p>Las ideas, procedimientos, métodos de operación, conceptos matemáticos, las noticias del día y los textos legislativos.</p>
            </div>
        `
    },
    
    'tema2-2': {
        title: '2.2 Derechos Morales y Patrimoniales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-heart"></i> Derechos Morales</h3>
                <p>Los derechos morales son aquellos que protegen la relación personal del autor con su obra. Son:</p>
                
                <ul>
                    <li><strong>Perpetuos:</strong> No tienen límite de tiempo</li>
                    <li><strong>Inalienables:</strong> No pueden venderse ni transferirse</li>
                    <li><strong>Irrenunciables:</strong> El autor no puede renunciar a ellos</li>
                    <li><strong>Inembargables:</strong> No pueden ser objeto de embargo</li>
                </ul>
                
                <p>Incluyen:</p>
                <ul>
                    <li><strong>Derecho de paternidad:</strong> Ser reconocido como autor de la obra</li>
                    <li><strong>Derecho de integridad:</strong> Oponerse a modificaciones que dañen su reputación</li>
                    <li><strong>Derecho de divulgación:</strong> Decidir si la obra se hace pública</li>
                    <li><strong>Derecho de retracto:</strong> Retirar la obra del comercio</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-coins"></i> Derechos Patrimoniales</h3>
                <p>Los derechos patrimoniales son los derechos económicos que permiten al autor explotar su obra:</p>
                
                <ul>
                    <li><strong>Reproducción:</strong> Hacer copias de la obra</li>
                    <li><strong>Distribución:</strong> Poner copias a disposición del público</li>
                    <li><strong>Comunicación pública:</strong> Representar, ejecutar o exhibir la obra</li>
                    <li><strong>Transformación:</strong> Traducir, adaptar o modificar la obra</li>
                    <li><strong>Puesta a disposición:</strong> Hacer accesible la obra en internet</li>
                </ul>
                
                <p>Estos derechos son <strong>temporales</strong> (duran la vida del autor más 100 años en México) y <strong>transferibles</strong>.</p>
            </div>
            
            <div class="highlight-box">
                <h4><i class="fas fa-balance-scale"></i> Diferencia clave</h4>
                <p>Los derechos morales protegen el honor y la reputación del autor, mientras que los derechos patrimoniales protegen sus intereses económicos.</p>
            </div>
        `
    },
    
    'tema2-3': {
        title: '2.3 Registro de Obras',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-file-signature"></i> ¿Es obligatorio el registro?</h3>
                <p>En México, el registro de obras ante el INDAUTOR <strong>no es obligatorio</strong> para obtener protección. Los derechos de autor nacen desde el momento de la creación de la obra.</p>
                
                <p>Sin embargo, el registro ofrece importantes ventajas:</p>
                <ul>
                    <li>Prueba de autoría y fecha de creación</li>
                    <li>Facilita la defensa en caso de plagio</li>
                    <li>Permite identificar al titular de los derechos</li>
                    <li>Da publicidad a la obra</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-list-ol"></i> Procedimiento de Registro</h3>
                <p>Para registrar una obra ante el INDAUTOR se requiere:</p>
                
                <ol>
                    <li>Llenar la solicitud de registro correspondiente</li>
                    <li>Presentar la obra en el formato adecuado</li>
                    <li>Pagar los derechos correspondientes</li>
                    <li>Esperar la revisión y emisión del certificado</li>
                </ol>
                
                <p>El trámite puede realizarse de forma presencial o en línea a través del portal del INDAUTOR.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-alt"></i> Documentos Necesarios</h3>
                <ul>
                    <li>Identificación oficial del autor</li>
                    <li>Comprobante de domicilio</li>
                    <li>Ejemplar de la obra</li>
                    <li>Comprobante de pago de derechos</li>
                    <li>Carta poder (si se presenta por representante)</li>
                </ul>
            </div>
        `
    },
    
    'tema2-4': {
        title: '2.4 Licencias y Cesión de Derechos',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-handshake"></i> Cesión de Derechos</h3>
                <p>La cesión de derechos es la transferencia total o parcial de los derechos patrimoniales de una obra a otra persona o entidad.</p>
                
                <ul>
                    <li>Debe constar por escrito</li>
                    <li>Solo puede cederse lo que expresamente se pacte</li>
                    <li>Tiene una duración máxima de 15 años (salvo excepciones)</li>
                    <li>Puede ser onerosa o gratuita</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-contract"></i> Licencias</h3>
                <p>Una licencia es una autorización que el titular de derechos otorga a terceros para usar su obra bajo ciertas condiciones:</p>
                
                <ul>
                    <li><strong>Exclusivas:</strong> Solo el licenciatario puede usar la obra</li>
                    <li><strong>No exclusivas:</strong> El titular puede otorgar licencias a múltiples personas</li>
                </ul>
                
                <p>Las licencias deben especificar:</p>
                <ul>
                    <li>Alcance de los derechos otorgados</li>
                    <li>Territorio de aplicación</li>
                    <li>Duración</li>
                    <li>Remuneración (si aplica)</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fab fa-creative-commons"></i> Creative Commons</h3>
                <p>Las licencias Creative Commons son un sistema alternativo que permite a los autores autorizar usos de sus obras de forma sencilla:</p>
                
                <ul>
                    <li><strong>CC BY:</strong> Atribución - permite cualquier uso dando crédito</li>
                    <li><strong>CC BY-SA:</strong> Atribución-CompartirIgual</li>
                    <li><strong>CC BY-NC:</strong> Atribución-NoComercial</li>
                    <li><strong>CC BY-ND:</strong> Atribución-SinDerivadas</li>
                    <li><strong>CC BY-NC-SA:</strong> Atribución-NoComercial-CompartirIgual</li>
                    <li><strong>CC BY-NC-ND:</strong> Atribución-NoComercial-SinDerivadas</li>
                </ul>
            </div>
        `
    },
    
    // Unidad 3: Propiedad Industrial
    'tema3-1': {
        title: '3.1 Patentes y Modelos de Utilidad',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-lightbulb"></i> ¿Qué es una Patente?</h3>
                <p>Una patente es un derecho exclusivo que se concede sobre una invención, permitiendo al titular impedir que terceros fabriquen, usen, vendan o importen el producto patentado sin su autorización.</p>
                
                <p>Para ser patentable, una invención debe cumplir tres requisitos:</p>
                <ul>
                    <li><strong>Novedad:</strong> No debe existir en el estado de la técnica</li>
                    <li><strong>Actividad inventiva:</strong> No debe ser obvia para un experto</li>
                    <li><strong>Aplicación industrial:</strong> Debe poder fabricarse o utilizarse</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-clock"></i> Duración de la Patente</h3>
                <p>En México, las patentes tienen una duración de <strong>20 años</strong> a partir de la fecha de solicitud, sin posibilidad de renovación.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-tools"></i> Modelos de Utilidad</h3>
                <p>Los modelos de utilidad protegen invenciones de menor nivel inventivo que las patentes. Se conocen como "pequeñas patentes" y protegen mejoras técnicas a objetos ya existentes.</p>
                
                <ul>
                    <li>Duración: 10 años (no renovable)</li>
                    <li>Requisitos menos estrictos que las patentes</li>
                    <li>Proceso de registro más rápido y económico</li>
                </ul>
            </div>
            
            <div class="highlight-box">
                <h4><i class="fas fa-ban"></i> No son patentables:</h4>
                <p>Los procesos biológicos naturales, el material genético tal como se encuentra en la naturaleza, las razas animales, el cuerpo humano, los métodos de tratamiento quirúrgico o terapéutico.</p>
            </div>
        `
    },
    
    'tema3-2': {
        title: '3.2 Marcas y Signos Distintivos',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-trademark"></i> ¿Qué es una Marca?</h3>
                <p>Una marca es un signo que permite distinguir los productos o servicios de una empresa de los de otras empresas. Puede consistir en:</p>
                
                <ul>
                    <li><strong>Denominativas:</strong> Palabras o frases</li>
                    <li><strong>Figurativas:</strong> Imágenes, logotipos, símbolos</li>
                    <li><strong>Mixtas:</strong> Combinación de elementos verbales y gráficos</li>
                    <li><strong>Tridimensionales:</strong> Formas de productos o envases</li>
                    <li><strong>Sonoras:</strong> Sonidos distintivos</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-registered"></i> Registro de Marcas</h3>
                <p>Para registrar una marca en México ante el IMPI:</p>
                
                <ol>
                    <li>Realizar una búsqueda de antecedentes</li>
                    <li>Presentar la solicitud con el signo a registrar</li>
                    <li>Indicar los productos/servicios a proteger (Clasificación de Niza)</li>
                    <li>Pagar los derechos correspondientes</li>
                    <li>Esperar el examen y publicación</li>
                </ol>
                
                <p>Duración: <strong>10 años</strong>, renovables indefinidamente.</p>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-tags"></i> Otros Signos Distintivos</h3>
                <ul>
                    <li><strong>Nombre comercial:</strong> Identifica a una empresa</li>
                    <li><strong>Aviso comercial:</strong> Frases publicitarias (eslóganes)</li>
                    <li><strong>Denominación de origen:</strong> Vincula un producto a su región geográfica</li>
                    <li><strong>Indicación geográfica:</strong> Similar pero con requisitos menos estrictos</li>
                </ul>
            </div>
        `
    },
    
    'tema3-3': {
        title: '3.3 Diseños Industriales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-pencil-ruler"></i> Concepto de Diseño Industrial</h3>
                <p>Un diseño industrial protege la apariencia estética u ornamental de un producto. Se divide en:</p>
                
                <ul>
                    <li><strong>Dibujos industriales:</strong> Configuraciones bidimensionales (patrones, colores, líneas)</li>
                    <li><strong>Modelos industriales:</strong> Configuraciones tridimensionales (formas, contornos)</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-check-circle"></i> Requisitos de Protección</h3>
                <p>Para registrar un diseño industrial debe ser:</p>
                
                <ul>
                    <li><strong>Nuevo:</strong> No divulgado previamente</li>
                    <li><strong>Original:</strong> Creación independiente del diseñador</li>
                    <li><strong>Industrialmente aplicable:</strong> Reproducible en serie</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-calendar-alt"></i> Duración y Protección</h3>
                <p>En México, los diseños industriales tienen una duración de <strong>25 años</strong> a partir de la fecha de presentación de la solicitud.</p>
                
                <p>Protege contra:</p>
                <ul>
                    <li>Fabricación de productos con diseño idéntico o similar</li>
                    <li>Importación de productos infractores</li>
                    <li>Comercialización no autorizada</li>
                </ul>
            </div>
            
            <div class="highlight-box">
                <h4><i class="fas fa-info-circle"></i> Diferencia con derechos de autor</h4>
                <p>Los diseños industriales protegen la apariencia de productos funcionales fabricados en serie, mientras que los derechos de autor protegen obras artísticas únicas.</p>
            </div>
        `
    },
    
    'tema3-4': {
        title: '3.4 Secretos Industriales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-user-secret"></i> ¿Qué es un Secreto Industrial?</h3>
                <p>Un secreto industrial es cualquier información de aplicación industrial o comercial que se mantiene confidencial y que representa una ventaja competitiva para quien la posee.</p>
                
                <p>Puede incluir:</p>
                <ul>
                    <li>Fórmulas y recetas</li>
                    <li>Procesos de fabricación</li>
                    <li>Listas de clientes</li>
                    <li>Estrategias comerciales</li>
                    <li>Información técnica</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Requisitos de Protección</h3>
                <p>Para que la información califique como secreto industrial debe:</p>
                
                <ul>
                    <li><strong>Ser secreta:</strong> No conocida ni fácilmente accesible</li>
                    <li><strong>Tener valor comercial:</strong> Por su carácter secreto</li>
                    <li><strong>Estar protegida:</strong> Mediante medidas razonables de confidencialidad</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-lock"></i> Medidas de Protección</h3>
                <p>Para mantener un secreto industrial se recomienda:</p>
                
                <ul>
                    <li>Acuerdos de confidencialidad con empleados y socios</li>
                    <li>Control de acceso físico y digital</li>
                    <li>Marcado de documentos como confidenciales</li>
                    <li>Políticas internas de manejo de información</li>
                    <li>Monitoreo y auditorías</li>
                </ul>
            </div>
            
            <div class="highlight-box">
                <h4><i class="fas fa-balance-scale"></i> Ventajas vs Patentes</h4>
                <p>A diferencia de las patentes, los secretos industriales no requieren registro, no tienen límite de tiempo y no se hacen públicos. Sin embargo, si el secreto se revela, la protección se pierde.</p>
            </div>
        `
    },
    
    // Unidad 4: Protección y Aplicación
    'tema4-1': {
        title: '4.1 Infracciones y Piratería',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Tipos de Infracciones</h3>
                <p>Las violaciones a los derechos de propiedad intelectual pueden clasificarse en:</p>
                
                <ul>
                    <li><strong>Plagio:</strong> Presentar obra ajena como propia</li>
                    <li><strong>Piratería:</strong> Reproducción no autorizada de obras protegidas</li>
                    <li><strong>Falsificación:</strong> Uso no autorizado de marcas registradas</li>
                    <li><strong>Usurpación:</strong> Apropiación de invenciones patentadas</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-skull-crossbones"></i> Piratería Digital</h3>
                <p>La piratería en el entorno digital incluye:</p>
                
                <ul>
                    <li>Descarga ilegal de música, películas y software</li>
                    <li>Streaming no autorizado de contenidos</li>
                    <li>Distribución de copias digitales sin permiso</li>
                    <li>Elusión de medidas tecnológicas de protección</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-chart-line"></i> Impacto Económico</h3>
                <p>Las infracciones a la PI tienen graves consecuencias:</p>
                
                <ul>
                    <li>Pérdidas millonarias para industrias creativas</li>
                    <li>Destrucción de empleos legítimos</li>
                    <li>Desincentivo a la innovación</li>
                    <li>Riesgos para los consumidores (productos falsificados)</li>
                    <li>Evasión fiscal</li>
                </ul>
            </div>
        `
    },
    
    'tema4-2': {
        title: '4.2 Medidas de Protección',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-shield-alt"></i> Medidas Preventivas</h3>
                <p>Para proteger la propiedad intelectual se recomienda:</p>
                
                <ul>
                    <li><strong>Registro:</strong> Inscribir obras, marcas y patentes</li>
                    <li><strong>Vigilancia:</strong> Monitorear el mercado en busca de infracciones</li>
                    <li><strong>Contratos:</strong> Establecer acuerdos claros de confidencialidad y licencias</li>
                    <li><strong>Avisos:</strong> Incluir símbolos © ® ™ en los productos</li>
                    <li><strong>Tecnología:</strong> Usar DRM y otras medidas de protección digital</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-digital-tachograph"></i> Medidas Tecnológicas</h3>
                <p>En el entorno digital existen diversas tecnologías de protección:</p>
                
                <ul>
                    <li><strong>DRM:</strong> Gestión de derechos digitales</li>
                    <li><strong>Marcas de agua:</strong> Identificadores invisibles en contenidos</li>
                    <li><strong>Cifrado:</strong> Protección de contenidos mediante encriptación</li>
                    <li><strong>Autenticación:</strong> Verificación de usuarios autorizados</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-users"></i> Gestión Colectiva</h3>
                <p>Las sociedades de gestión colectiva administran los derechos de sus miembros:</p>
                
                <ul>
                    <li>SACM (música)</li>
                    <li>SOGEM (escritores)</li>
                    <li>INDA (intérpretes)</li>
                    <li>DIRECTORES (audiovisual)</li>
                </ul>
            </div>
        `
    },
    
    'tema4-3': {
        title: '4.3 Procedimientos Legales',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-gavel"></i> Vías de Acción</h3>
                <p>Ante una infracción de PI existen diferentes vías legales:</p>
                
                <ul>
                    <li><strong>Vía administrativa:</strong> Ante IMPI o INDAUTOR</li>
                    <li><strong>Vía civil:</strong> Ante juzgados civiles para obtener indemnización</li>
                    <li><strong>Vía penal:</strong> Ante Ministerio Público para delitos graves</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-balance-scale"></i> Procedimiento Administrativo</h3>
                <p>El IMPI puede:</p>
                
                <ol>
                    <li>Recibir denuncias o solicitudes de declaración de infracción</li>
                    <li>Realizar visitas de inspección</li>
                    <li>Ordenar medidas provisionales</li>
                    <li>Imponer sanciones administrativas</li>
                    <li>Declarar la nulidad de registros obtenidos de mala fe</li>
                </ol>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-file-invoice-dollar"></i> Sanciones</h3>
                <p>Las sanciones por infracciones incluyen:</p>
                
                <ul>
                    <li>Multas de hasta 500,000 UMAs</li>
                    <li>Clausura temporal o definitiva</li>
                    <li>Decomiso de productos infractores</li>
                    <li>Prisión de 2 a 10 años en casos penales</li>
                    <li>Indemnización por daños y perjuicios</li>
                </ul>
            </div>
        `
    },
    
    'tema4-4': {
        title: '4.4 Casos Prácticos',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-briefcase"></i> Caso 1: Plagio de Software</h3>
                <p>Una empresa desarrolla un programa de gestión empresarial. Un ex-empleado crea una empresa competidora usando código fuente copiado.</p>
                
                <p><strong>Análisis:</strong></p>
                <ul>
                    <li>El software está protegido por derechos de autor</li>
                    <li>La copia del código constituye infracción</li>
                    <li>Posible violación de acuerdos de confidencialidad</li>
                    <li>Acciones: denuncia ante INDAUTOR, demanda civil</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-store"></i> Caso 2: Falsificación de Marca</h3>
                <p>Se detecta la venta de productos con una marca famosa falsificada en un mercado local.</p>
                
                <p><strong>Análisis:</strong></p>
                <ul>
                    <li>La marca está registrada ante el IMPI</li>
                    <li>La falsificación afecta la reputación de la marca</li>
                    <li>Los consumidores pueden ser engañados</li>
                    <li>Acciones: visita de inspección, decomiso, multas</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3><i class="fas fa-music"></i> Caso 3: Uso de Música sin Licencia</h3>
                <p>Un restaurante utiliza música de artistas famosos como ambientación sin pagar regalías.</p>
                
                <p><strong>Análisis:</strong></p>
                <ul>
                    <li>La ejecución pública requiere autorización</li>
                    <li>Debe obtenerse licencia de la sociedad de gestión</li>
                    <li>El establecimiento puede ser sancionado</li>
                    <li>Solución: contratar licencia blanket con SACM</li>
                </ul>
            </div>
            
            <div class="highlight-box">
                <h4><i class="fas fa-lightbulb"></i> Lección Clave</h4>
                <p>La prevención es siempre preferible a la acción legal. Registrar los derechos, usar contratos claros y respetar la PI de terceros evita costosos litigios.</p>
            </div>
        `
    },
    
    // Actividades (Cuestionarios tipo examen)
    'actividad1': {
        title: 'Cuestionario Unidad 1: Principios del Derecho y Regulación',
        type: 'quiz',
        content: `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h3><i class="fas fa-clipboard-check"></i> Cuestionario - Unidad 1</h3>
                    <p>Principios del Derecho y Regulación Jurídica en Materia Informática</p>
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
    
    'actividad2': {
        title: 'Actividad 2: Análisis de Caso - Derechos de Autor',
        type: 'activity',
        content: `
            <div class="activity-content">
                <div class="activity-header">
                    <h3>Actividad 2</h3>
                    <p>Unidad 2: Derechos de Autor</p>
                </div>
                
                <div class="activity-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor de la actividad</strong>
                        <p>Esta actividad representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="activity-instructions">
                    <h4><i class="fas fa-clipboard-list"></i> Instrucciones</h4>
                    <ol>
                        <li>Lee el siguiente caso:
                            <blockquote style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 10px 0;">
                                "María es una fotógrafa profesional que publicó sus fotos en su página de Instagram. Una revista digital tomó 5 de sus fotografías y las publicó en un artículo sin pedir permiso ni dar crédito. La revista argumenta que al estar en redes sociales, las fotos son de uso público."
                            </blockquote>
                        </li>
                        <li>Elabora un análisis que responda:
                            <ul>
                                <li>¿Se violaron los derechos de autor de María? Justifica tu respuesta.</li>
                                <li>¿Qué derechos específicos (morales y/o patrimoniales) fueron afectados?</li>
                                <li>¿Es válido el argumento de la revista? ¿Por qué?</li>
                                <li>¿Qué acciones legales puede tomar María?</li>
                                <li>¿Cómo podría haberse evitado esta situación?</li>
                            </ul>
                        </li>
                        <li>Extensión: mínimo 500 palabras, máximo 1000.</li>
                        <li>Incluye referencias a la legislación aplicable.</li>
                    </ol>
                </div>
                
                <div class="activity-form">
                    <h4><i class="fas fa-edit"></i> Tu Análisis</h4>
                    <textarea rows="10" placeholder="Escribe tu análisis aquí..."></textarea>
                    <button class="btn-primary" onclick="submitActivity(2)">
                        <i class="fas fa-paper-plane"></i> Enviar Actividad
                    </button>
                </div>
            </div>
        `
    },
    
    'actividad3': {
        title: 'Actividad 3: Simulación de Registro de Marca',
        type: 'activity',
        content: `
            <div class="activity-content">
                <div class="activity-header">
                    <h3>Actividad 3</h3>
                    <p>Unidad 3: Propiedad Industrial</p>
                </div>
                
                <div class="activity-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor de la actividad</strong>
                        <p>Esta actividad representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="activity-instructions">
                    <h4><i class="fas fa-clipboard-list"></i> Instrucciones</h4>
                    <ol>
                        <li>Imagina que vas a emprender un negocio y necesitas registrar tu marca.</li>
                        <li>Desarrolla los siguientes elementos:
                            <ul>
                                <li><strong>Nombre de la marca:</strong> Crea un nombre original</li>
                                <li><strong>Logotipo:</strong> Diseña un logo (puede ser simple)</li>
                                <li><strong>Tipo de marca:</strong> ¿Es denominativa, figurativa o mixta?</li>
                                <li><strong>Productos/servicios:</strong> Lista los productos o servicios que identificará</li>
                                <li><strong>Clase de Niza:</strong> Identifica la clase correspondiente</li>
                            </ul>
                        </li>
                        <li>Realiza una búsqueda simulada de antecedentes marcarios.</li>
                        <li>Llena el formato de solicitud de registro (descarga la plantilla).</li>
                        <li>Redacta una justificación de por qué tu marca es distintiva.</li>
                    </ol>
                </div>
                
                <div class="activity-form">
                    <h4><i class="fas fa-upload"></i> Entregar Actividad</h4>
                    <p>Sube un documento PDF que incluya todos los elementos solicitados.</p>
                    <input type="file" id="activity3File" accept=".pdf">
                    <textarea placeholder="Comentarios adicionales (opcional)..."></textarea>
                    <button class="btn-primary" onclick="submitActivity(3)">
                        <i class="fas fa-paper-plane"></i> Enviar Actividad
                    </button>
                </div>
            </div>
        `
    },
    
    'actividad4': {
        title: 'Actividad 4: Resolución de Caso Práctico',
        type: 'activity',
        content: `
            <div class="activity-content">
                <div class="activity-header">
                    <h3>Actividad 4</h3>
                    <p>Unidad 4: Protección y Aplicación</p>
                </div>
                
                <div class="activity-value">
                    <div class="value-badge">15%</div>
                    <div>
                        <strong>Valor de la actividad</strong>
                        <p>Esta actividad representa el 15% de tu calificación final</p>
                    </div>
                </div>
                
                <div class="activity-instructions">
                    <h4><i class="fas fa-clipboard-list"></i> Instrucciones</h4>
                    <ol>
                        <li>Elige UNO de los siguientes casos para analizar:
                            <ul>
                                <li><strong>Caso A:</strong> Una startup tecnológica descubre que su aplicación móvil ha sido clonada y se vende en otra tienda de apps.</li>
                                <li><strong>Caso B:</strong> Un artesano detecta que una tienda departamental vende productos que imitan sus diseños tradicionales.</li>
                                <li><strong>Caso C:</strong> Un músico independiente encuentra que su canción está siendo usada en comerciales de TV sin autorización.</li>
                            </ul>
                        </li>
                        <li>Desarrolla un análisis completo que incluya:
                            <ul>
                                <li>Identificación de los derechos de PI involucrados</li>
                                <li>Tipo de infracción cometida</li>
                                <li>Marco legal aplicable</li>
                                <li>Procedimiento legal recomendado (paso a paso)</li>
                                <li>Posibles resultados y sanciones</li>
                                <li>Recomendaciones preventivas para el futuro</li>
                            </ul>
                        </li>
                        <li>Extensión: 800-1200 palabras.</li>
                    </ol>
                </div>
                
                <div class="activity-form">
                    <h4><i class="fas fa-edit"></i> Tu Análisis</h4>
                    <select style="width: 100%; padding: 10px; margin-bottom: 15px; border: 2px solid #e2e8f0; border-radius: 8px;">
                        <option value="">Selecciona el caso que analizarás</option>
                        <option value="A">Caso A: Clonación de aplicación móvil</option>
                        <option value="B">Caso B: Imitación de diseños artesanales</option>
                        <option value="C">Caso C: Uso no autorizado de música</option>
                    </select>
                    <textarea rows="12" placeholder="Escribe tu análisis aquí..."></textarea>
                    <button class="btn-primary" onclick="submitActivity(4)">
                        <i class="fas fa-paper-plane"></i> Enviar Actividad
                    </button>
                </div>
            </div>
        `
    }
};

// Función para enviar actividades
function submitActivity(activityNumber) {
    alert(`Actividad ${activityNumber} enviada correctamente. Recibirás retroalimentación pronto.`);
}

// Exportar para uso global
window.courseContent = courseContent;
