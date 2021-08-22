import { Layout, Collapse, Typography, Card, Col, Row, Carousel, Image } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;
const { Panel } = Collapse;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout className="" style={{ background: 'black' }}>
        <Header style={{ color: 'white', textShadow: '0px 2px 8px black' }} className="Encabezado"><Title style={{ color: 'white' }}>Atributos de calidad</Title></Header>
        <Content>
          <div style={{ backgroundImage: `url('./Fondo_52.jpg')` }} className="Fantasma">
            <Title style={{ color: 'white', marginTop: '70px', textShadow: '0px 2px 15px black'}}>Disponibiidad</Title>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Concepto">
              <p>
                La disponibilidad referente a criterios de calidad hace referencia al hecho de que el sistema tenga la capacidad de estar disponible
                para su uso, no solo esto, mas especificamente que tenga esa capacidad de estar disponible una vez se halla producido algun fallo...
                El sistema debe reconocer dicho fallo o en su defecto evitarlo... Al reconocer el fallo el sistema debera responder de alguna forma.
              </p>
            </Card>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Escenario">
              <p>
                Cuando se plantea diseñar un sistema de alta disponibilidad se tiene el concepto erroneo de pensar que "El fracaso no es una opciones",
                dado que realmente el fracaso el inevitable... Es a partir de este axioma que se debe diseñar un sistema el cual contemple la maxima cantidad
                de fallos posibles. 
              </p>
              <li>Fuente: Interna o externa al sistema</li>
              <li>Estimulo [Fallo]: omisión, colisión, tiempo incorrecto, respuesta incorrecta</li>
              <li>Artefacto: Procesadores, canales de comunicación, almacenamiento persistente, procesos</li>
              <li>Entorno: Funcionamiento normal, puesta en marcha, apagado, modo de reparación, funcionamiento degradado</li>
              <li>Respuesta: Evitar que el fallo se convierta en una avería [Detectar el fallo, Recuperarse del fallo]</li>
              <li>
                Medida de respuesta: Tiempo o intervalo de tiempo en que el sistema debe estar disponible, Porcentaje de disponibilidad
                Tiempo para detectar el fallo, Tiempo para reparar el fallo, Tiempo o intervalo de tiempo en el que el sistema puede estar en modo degradado
              </li>
            </Card>
          </div>
          <div style={{ backgroundImage: `url('./Interoperabilidad.jpg')` }} className="Fantasma">
            <Title style={{ color: 'white', marginTop: '70px'}}>Interoperabilidad</Title>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Concepto">
              <p>
                La interoperabilidad tiene como objetivo principal controlar la capacidad de los sistemas para intercambiar informacion de forma util,
                independientemente de la razon del sistema, es decir, si el sistema ha sido construido con el objetivo de intercambiar informacion, o es
                un sistema existente que requiere el intercambio de informacion.
              </p>
            </Card>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Escenario">
              <p>
                En sistemas complejos se llegan a tener diversos sistemas que interoperan entre si con un proposito determinado, a este evente se le denomina
                "sistema de sistemas [SoS]"... Esto surge a raiz de la una union de diversos sistemas independientes que se integran a un sistema mayor.  
              </p>
              <li>Fuente: Un sistema inicia una solicitud para interoperar con otro sistema</li>
              <li>Estimulo: Una solicitud de intercambio de información entre sistemas</li>
              <li>Artefacto: Los sistemas que desean interoperar</li>
              <li>Entorno: Los sistemas que desean interoperar se descubren en tiempo de ejecución o se conocen antes del tiempo de ejecución.</li>
              <li>Respuesta: Solicitud rechazada, solicitud aceptada</li>
              <li>Medida de respuesta: Porcentaje de intercambios de información correctamente procesados, porcentaje de intercambios de información correctamente rechazados</li>
            </Card>
          </div>
          <div style={{ backgroundImage: `url('./Fondo_89.jpg')` }} className="Fantasma">
            <Title style={{ color: 'white', marginTop: '70px'}}>Modificabilidad</Title>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Concepto">
              <p>
                La modificabilidad tiene como proposito controlar los cambios en un sistema determinado asi como el coste en tiempo y dinero para realizar dichos
                cambios, incluyendo los efectos que traeran dichos cambios a otras funciones o atributos de calidad.
              </p>
            </Card>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Escenario">
              <p>
                En el campo de la tecnologia se tiene un principio muy elemental que es la evolucion, es decir, que en el campo de la tecnolgia hay una sola
                constante que es el "cambio", es la necesidad de cambio que da curso a la modificabilidad. 
              </p>
              <li>Fuente: Desarrollador, Administrador, Usuario final</li>
              <li>Estimulo: Adicion, modificacion, eliminacion</li>
              <li>Artefacto: Componentes, modulos, plataforma del sistema, interfaz de usuario</li>
              <li>Entorno: Cuando se realiza, tiempo de diseño, tiempo de compilacion</li>
              <li>Respuesta: Hacer la modificación, Probar la modificación, Desplegar la modificación</li>
              <li>Medida de respuesta: Número, tamaño, complejidad de los artefactos afectados, esfuerzo, tiempo de calendario, dinero</li>
            </Card>
          </div>
          <div style={{ backgroundImage: `url('./Fondo_90.jpg')` }} className="Fantasma">
            <Title style={{ color: 'white', marginTop: '70px'}}>Rendimiento</Title>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Concepto">
              <p>Respecto al criterio de calidad de rendimiento, el principal objetivo de este es la administracion de los recursos de sistema, es decir, que el principal objetivo es definir que recurso requiere mas atencion, mas tiempo, mayor control, o en su defecto si dicho recurso requiere un cambio, configuracion con la finalidad de optimizar el sistema.</p>
              <p>La forma en que se puede tener una visualizacion del rendimiento es mediante "tiempo de rendimiento" y "latencia".</p>
            </Card>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Escenario">
              <p>
                Dentro de uns sitema se producen diversos eventos dichos eventos forman patrones los cuales pueden ser predecibles o impredecibles.
                Los patrones se pueden categorizar por: periodicos, estocástico o esporádico [Es la capacidad que tiene el sistema de llevar a cabo
                diversos eventos al tiempo... De ello surge el rendimiento]. 
              </p>
              <li>Fuente: Interna o externa al sistema</li>
              <li>Estimulo: Evento periodico, esporadico o estocastico</li>
              <li>Artefacto: El sistema o uno o mas componentes del sistema</li>
              <li>Entorno: Modo operativo: normal, emergencia, pico de carga, sobrecarga</li>
              <li>Respuesta: Eventos de proceso, cambio de nivel de servicio</li>
              <li>Medida de respuesta: Latencia, plazo, rendimiento, fluctuación, tasa de fallos</li>
            </Card>
          </div>
          <div style={{ backgroundImage: `url('./Fondo_91.jpg')` }} className="Fantasma">
            <Title style={{ color: 'white', marginTop: '70px'}}>Seguridad</Title>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Concepto">
              <p>
                Este atributo es realmente sensible dado el tipo de informacion, es decir, en el atributo de seguridad se tiene como objetivo prevenir
                ataques contra la confidencialidad, la integridad, o la disponibilidad de un sistema o de sus datos [Se deben controlar los niveles de
                acceso, aurorizaciones, accesibilidad... Entre otros factores]. 
              </p>
            </Card>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Escenario">
              <p>
                Al definir los parametros de seguridad se deben cubrir todos los ambitos, es decir, seguridad fisica [En este tipo de instlaciones se debe tener
                acceso limitado], mecanismos de recuperaciones [Copias de seguridad externas], mecanismos de reaccion. 
              </p>
              <li>Fuente: Humana u otro sistema que puede haber sido previamente identificado</li>
              <li>Estimulo: Se intenta mostrar datos sin autorización, cambiar o borrar datos, acceder a los servicios del sistema, 
                cambiar el comportamiento del sistema o reducir la disponibilidad.</li>
              <li>Artefacto: Servicios del sistema, datos dentro del sistema, un componente o recursos del sistema</li>
              <li>Entorno: El sistema está en línea o fuera de línea; conectado o desconectado de una red; detrás de un cortafuegos o abierto a una red</li>
              <li>Respuesta: Los datos o servicios estén protegidos del acceso no autorizado, Los datos o servicios no se manipulan sin autorización. 
                Las partes de una transacción se identifican con seguridad</li>
              <li>
                Medida de respuesta: Qué parte del sistema se ve comprometida cuando un determinado componente o valor de datos está comprometido,
                Cuánto tiempo pasó antes de que se detectara un ataque, Cuántos ataques fueron resistidos, Cuánto tiempo se tarda en recuperarse de un ataque exitoso
              </li>
            </Card>
          </div>
          <div style={{ backgroundImage: `url('./Fondo_69.jpg')` }} className="Fantasma">
            <Title style={{ color: 'white', marginTop: '70px'}}>Testeabilidad</Title>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Concepto">
              <p>
                En el desarrollo de un sistema se debe garantizar la fiabilidad del mismo, es por ello que el principal objetivo del atributo de testeabilidad es garantizar
                el correcto funcionamiento del sistema y preever costes de pruebas... Una de las principales tacticas de comprobacion son: el control y observacion.
              </p>
            </Card>
            <Card style={{ textShadow: '0px 0px 2px black', textAlign: 'justify', padding: '30px', margin: '70px' }} className="Shadow-Small" title="Escenario">
              <p>
                La forma mas eficiente de control y observacion [En el desarrollo de software] es propocionar a un componente un conjunto de entradas, las cuales
                al ser procesadas arrojan un resultado determinado [Es en este punto donde se puede observar si la entrada es congruente con la salida despues de 
                haber sido procesada]. 
              </p>
              <li>Interfaces especializadas: Metodo set y get, Un método de informe que devuelva el estado completo del objeto
              Un método de reinicio para establecer el estado interno a un estado interno especificado.
              </li>
              <li>Grabacion/Reproduccion: Grabar el estado cuando atraviesa una interfaz permite utilizar ese estado para "reproducir el sistema" y recrear el fallo.</li>
              <li>Localizar el almacenamiento del estado: este almacenamiento debe ser identificable</li>
              <li>Fuentes de datos abstractas: Abstraer las interfaces permite sustituir los datos de prueba más fácilmente.</li>
              <li>Sandbox. "Sandboxing": Aislar una instancia del sistema de del mundo real para permitir llevar a cabo el experimento</li>
              <li>Aserciones ejecutables: comprobar que los valores de los datos satisfacen las restricciones especificadas</li>
            </Card>
          </div>
        </Content>
        <Footer className="PiePagina">
          <div style={{ color: 'white', textShadow: '0px 1px 5px white' }}>ADSI [SENA] - ©2021 - Creado por: Shihan</div>
          
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
