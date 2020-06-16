import React from "react";
import "./styles/PseudoRandomNumbers.css";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import chi from "chi-squared";
import LineChart from "../../components/LineChart";
import { DiscussionEmbed } from "disqus-react";

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

function chiSqrt() {
  let ri = document.getElementById("ri").value.split(" ");

  function chiSqrtTest(obtained, expected) {
    let sum = 0;
    //(Oi-ei)^2/ei
    for (let i = 0; i < obtained.length; i++) {
      sum += (obtained[i] - expected[i]) ** 2 / expected[i];
    }
    return sum;
  }

  if (ri.length === 1) {
    ReactDOM.render(
      <p>Incluye números validos</p>,
      document.getElementById("sol")
    );
    return;
  }

  //Add the recomended m = sqrt(n)
  let m = Math.ceil(Math.sqrt(ri.length));

  /**
   ei: the expected number of events in a category, will be the same for each i 
   because we're expecting to be an uniform distribution since they are pseudo random numbers
   */
  let ei = new Array(m).fill(ri.length / m);

  //oi: the observable number of events in a category
  let oi = new Array(m).fill(null);

  /**
    As Math.random only return numbers between 0 and 1, excluding 1, 
    ir: is the range of each interval
  */
  let ir = 1 / m;

  // suit the numbers of observable event to the Oi range they belong
  for (let i = 0; i < ri.length; i++) {
    for (let j = 0; j < m; j++) {
      if (ri[i] < ir * (j + 1)) {
        oi[j] += 1;
        break;
      }
    }
  }

  const sum = chiSqrtTest(oi, ei);
  let uniform = (1 - chi.cdf(sum, m - 1)) * 100;
  if (uniform > 5) {
    ReactDOM.render(
      <div className="res">
        <input type="checkbox" id="resUniformInput" defaultChecked={true} />
        <h5>Los datos son uniformes</h5>
      </div>,
      document.getElementById("resUniform")
    );
    document.getElementById("resUniformInput").checked = true;
  } else {
    ReactDOM.render(
      <div className="res">
        <input type="checkbox" id="resUniformInput" defaultChecked={false} />
        <h5>Los datos no son uniformes</h5>
      </div>,
      document.getElementById("resUniform")
    );
    document.getElementById("resUniformInput").checked = false;
  }
  //Dependent Test with Streak
  let postiveStreak = 0;
  let negativeStreak = 0;
  let streak = [];
  for (let i = 0; i < ri.length; i++) {
    if (ri[i] > ri[i + 1]) {
      if (negativeStreak != 0) {
        streak.push(negativeStreak);
        negativeStreak = 0;
      }
      postiveStreak++;
    } else {
      if (postiveStreak != 0) {
        streak.push(postiveStreak);
        postiveStreak = 0;
      }
      negativeStreak++;
    }
  }
  let getlabel = () => {
    let label = [0];
    let irs = 0;
    let n1 = 0;
    let n2 = 0;
    let lab = "";
    for (let i = 1; i < m; i++) {
      irs += ir;
      n1 = irs.toFixed(2);
      n2 = irs + ir;
      n2 = n2.toFixed(2);
      lab = n1 + " - " + n2;
      label.push(lab);
    }
    return label;
  };

  ReactDOM.render(
    <div>
      <LineChart
        type="line"
        data={{
          labels: getlabel(),
          label: "Ocurrencias",
          datas: oi,
          fill: false,
          backgroundColor: "blue",
          pointRadius: 2,
          borderColor: "#cfcfcf",
          borderWidth: 2,
          lineTension: 0,
          max: Math.max(...oi),
          min: 0,
        }}
        title="count"
        color="#ccc"
      />
      <b>
        <p>Visualmente entre más recta es la línea más uniforme es.</p>
      </b>
      <p></p>
    </div>,
    document.getElementById("linechart")
  );

  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  //Obtained
  let count = [];
  streak.forEach(function (i) {
    count[i - 1] = (count[i - 1] || 0) + 1;
  });

  let max = (2 * ri.length - 1) / 3;
  let desviacion = Math.sqrt((16 * ri.length - 29) / 90);
  let z = Math.abs((streak.length - max) / desviacion);
  if (z < 1.96) {
    ReactDOM.render(
      <div className="res">
        <input type="checkbox" id="resIndependentInput" defaultChecked={true} />
        <h5>Los datos son independientes</h5>
      </div>,
      document.getElementById("resIndependent")
    );
    document.getElementById("resIndependentInput").checked = true;
  } else {
    ReactDOM.render(
      <div className="res">
        <input
          type="checkbox"
          id="resIndependentInput"
          defaultChecked={false}
        />
        <h5>Los datos no son independientes</h5>
      </div>,
      document.getElementById("resIndependent")
    );
    document.getElementById("resIndependentInput").checked = false;
  }

  //Expected
  let expected = [];
  for (let i = 1; i <= count.length; i++) {
    expected.push(
      (2 / factorial(i + 3)) *
        (ri.length * (i ** 2 + 3 * i + i) - (i ** 3 + 3 * i ** 2 - i - 4))
    );
  }
  while (expected[expected.length - 1] < 5) {
    expected[expected.length - 2] += expected[expected.length - 1];
    expected.pop();
  }
  while (count[count.length - 1] < 5) {
    count[count.length - 2] += count[count.length - 1];
    count.pop();
  }

  if (count.length != expected.length) {
    ReactDOM.render(
      <div className="res">
        <input type="checkbox" id="resStreakInput" defaultChecked={false} />
        <h5>Los datos no cumplen los requisitos para realizar esta prueba</h5>
      </div>,
      document.getElementById("resStreak")
    );
    document.getElementById("resStreakInput").checked = false;
  } else {
    const result = chiSqrtTest(count, expected);
    if (count.length <= 0) {
      ReactDOM.render(
        <div className="res">
          <input type="checkbox" id="resStreakInput" defaultChecked={false} />
          <h5>Los datos no cumplen los requisitos para realizar esta prueba</h5>
        </div>,
        document.getElementById("resStreak")
      );
      document.getElementById("resStreakInput").checked = false;
      return;
    }
    let uniformTest = (1 - chi.cdf(result, count.length)) * 100;
    if (uniformTest > 5) {
      ReactDOM.render(
        <div className="res">
          <input type="checkbox" id="resStreakInput" defaultChecked={true} />
          <h5>Las longitudes de las rachas cumplen con los datos esperados</h5>
        </div>,
        document.getElementById("resStreak")
      );
      document.getElementById("resStreakInput").checked = true;
    } else {
      ReactDOM.render(
        <div className="res">
          <input type="checkbox" id="resStreakInput" defaultChecked={false} />
          <h5>
            Las longitudes de las rachas no cumplen con los datos esperados
          </h5>
        </div>,
        document.getElementById("resStreak")
      );
      document.getElementById("resStreakInput").checked = false;
    }
  }

  ReactDOM.render(
    <h5>
      Existe la confianza del {uniform}% de que el próximo número de la lista
      siga una distribución uniforme
    </h5>,
    document.getElementById("sol")
  );
}

const PseudoRandomNumbers = () => {
  return (
    <div className="Rand">
      <div className="container">
        <div className="row">
          <div className="Rand__col col-12 col-md-8">
            <h1 className="Rand__title">Números Pseudo Aleatorios</h1>
            <p>
              Esta entrada es posible gracias a la aleatoriedad de Math.random()
              de JavaScript, que surge tras programar el paquete de node{" "}
              <a
                href="https://github.com/MarcoMadera/random-messages-names"
                target="_blank"
                rel="noopener"
              >
                random-messages-names
              </a>{" "}
              el cual como su nombre lo dice retorna mensajes y nombres
              aleatorios. Tiene 1000 apellidos y 2788 nombres diferentes. Al
              estar probando me di cuenta que había veces que ocurrían rachas
              seguidas de nombres repetidos, 3 o 4 veces el mismo nombre, lo que
              me dio por comprobar si la aleatoriedad de Math.Random() es
              legítima a través de unas pruebas estadísticas.
            </p>
            <p>
              Primero hay que saber qué es Math.Random(), la definición de la
              especificación estándar del lenguaje, ECMAScript 2015 dice:
              <cite>
                Devuelve un número con signo positivo, mayor o igual que 0 pero
                menor que 1,{" "}
                <b>
                  elegido aleatoriamente o seudoaleatoriamente con una
                  distribución aproximadamente uniforme
                </b>{" "}
                en ese rango, utilizando un algoritmo o estrategia dependiente
                de la implementación. Esta función no toma argumentos. Cada
                función Math.random creada para ambientes de código distintos
                debe producir una secuencia distinta de valores a partir de
                llamadas sucesivas.
              </cite>{" "}
              Dato importante que sacamos de está definición es que ECMAScript
              no provee el algoritmo ni la forma de implementarlo, depende del
              ambiente que utilizamos, en mi caso, utilizo NodeJs y Chrome para
              desarrollar, el cual ambos utilizan el motor V8 para correr
              JavaScript, por otro lado Firefox utliza SpiderMonkey y Safari usa
              Nitro, y aunque los tres usen el algoritmo xorshift128 +, los
              resultados valdrán solo para V8 pues la implementación puede ser
              diferente, ya que éste se encarga de escoger la semilla que genera
              los números.
            </p>
            <h3>¿Qué son los números pseudo-aleatorios?</h3>
            <p>
              Los números pseudo-aleatorios son creados a partir de algoritmos
              matemáticos, por lo que no se puede decir que son realmente
              aleatorios, por eso el pseudo, algunos algoritmos hacen muy bien
              el trabajo de simular las propiedades de los números aleatorios y
              otros caen en el bucle de repetirse infinitamente.
            </p>
            <p>
              Para que una secuencia de números sea catalogada como aleatoria,
              es necesario que tengan una distribución uniforme y que no tenga
              correlación, es decir, que tengan la misma probabilidad de ser
              elegido y que la elección de uno no dependa del otro.
            </p>
            <h2>Distribución uniforme</h2>
            <p>
              La uniformidad en el caso de los números aleatorios, significa que
              en un rango [a,b] cada intervalo tenga la misma probabilidad de
              ocurrir, una distribución 100% uniforme luce de la siguiente
              forma:
            </p>
            <LineChart
              type="line"
              data={{
                labels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                label: "Ocurrencias",
                datas: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                fill: false,
                backgroundColor: "black",
                pointRadius: 2,
                borderColor: "#cfcfcf",
                borderWidth: 2,
                lineTension: 0,
                max: 2,
                min: 0,
              }}
              title="count"
              color="#ccc"
            />
            <p>
              Una de las pruebas para determinar este comportamiento es la de
              chi-cuadrada (x<sup>2</sup>):
            </p>
            <div className="chi-eq">
              <i>
                x<sup>2</sup>= &#8721;
              </i>{" "}
              <div className="fraction">
                <span className="fup">
                  <i>
                    ( &#959;<sub>i</sub>
                  </i>{" "}
                  &#8722;{" "}
                  <i>
                    e<sub>i</sub> )<sup>2</sup>
                  </i>
                </span>
                <span className="bar">/</span>
                <span className="fdn">
                  <i>
                    e<sub>i</sub>
                  </i>
                </span>
              </div>
            </div>
            <p>
              Donde: <br />o<sub>i</sub>: datos obtenidos
              <br />e<sub>i</sub>: datos esperados
            </p>
            <ol>
              <li>
                Primero formulamos nuestra hipótesis nula (h<sub>0</sub>) e
                hipótesis alternativa (h<sub>1</sub>).
                <div className="Rand__col__table">
                  <table>
                    <colgroup span="2"></colgroup>
                    <thead>
                      <tr>
                        <th colSpan="2" scope="colgroup">
                          Hipótesis
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          H<sub>0</sub>
                        </td>
                        <td>Los datos son uniformes</td>
                      </tr>
                      <tr>
                        <td>
                          H<sub>1</sub>
                        </td>
                        <td>Los datos no son uniformes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>
                Sea n el número de datos que vamos a evaluar, determinamos el
                número de intervalos que vamos a utilizar de la siguiente
                manera: √n, por ejemplo, si tenemos 100 números, nuestro
                intervalo va a ser de 10, si tenemos 200 será 15 redondeando
                hacia arriba.
              </li>
              <li>
                Los datos obtenidos son los datos que vamos a evaluar. Como lo
                que estamos evaluando son números aleatorios, esperamos tener
                una distribución de tipo y=a donde a=[0,1] como en la gráfica
                mostrada anteriormente, entonces el número esperado de eventos
                en una categoría sería, el número de datos a evaluar sobre el
                número de intervalos, en caso de tener 100 números será 10 casos
                esperados en cada categoría, en caso de tener 200, 14.28, en
                caso de tener 300, 16.666.
                <br />
              </li>
              <li>
                Para determinar el valor del rango de cada categoría en nuestro
                caso sería uno sobre el número de intervalos que tenemos.
              </li>
              <li>
                Para determinar las ocurrencias posicionamos nuestros números
                aleatorios a la categoría que pertenecen
              </li>
            </ol>
            <p>
              Por ahora si tomamos como muestra{" "}
              <a
                href="https://marcomadera.github.io/assets/blog/numerosAleatorios.txt"
                target="_blank"
                rel="noopener"
              >
                esta lista
              </a>{" "}
              de 300 números nuestro progreso sería el siguiente:
            </p>
            <LineChart
              type="line"
              data={{
                labels: [
                  "0",
                  "0.11",
                  "0.17",
                  "0.22",
                  "0.28",
                  "0.33",
                  "0.44",
                  "0.50",
                  "0.56",
                  "0.61",
                  "0.67",
                  "0.72",
                  "0.78",
                  "0.83",
                  "0.89",
                  "0.94",
                  "1.00",
                ],
                label: "Ocurrencias",
                datas: [
                  15,
                  17,
                  17,
                  23,
                  14,
                  11,
                  21,
                  24,
                  14,
                  23,
                  6,
                  15,
                  10,
                  16,
                  15,
                  12,
                  24,
                ],
                fill: false,
                backgroundColor: "black",
                pointRadius: 2,
                borderColor: "#cfcfcf",
                borderWidth: 2,
                lineTension: 0,
                max: 28,
                min: 0,
              }}
              title="count"
              color="#ccc"
            />
            <b>
              <p>
                Muestra generada a partir de Math.Random() en la consola de
                Google Chrome
              </p>
            </b>
            <p>
              Visualmente entre más recta es la línea, más uniforme es, por lo
              que a simple vista ya podemos intuir un resultado.
            </p>
            <p>
              Para corroborar lo que vemos, necesitamos, el valor de
              chi-cuadrada(x<sup>2</sup>), los grados de libertad (K) y un nivel
              de confianza (&#945;).
            </p>
            <ul>
              <li>
                Al aplicar la formula: x<sup>2</sup>=28.92
              </li>
              <li>
                Para calcular K = Número de intervalos - 1, en este caso K=17.
              </li>
              <li>
                El nivel de confianza (&#945;) que usaré es de 0.05, pero puede
                ser diferente ya que este es decidido por la persona encargada
                de la investigación, es el riesgo que se toma.
              </li>
            </ul>
            <p>
              Esto lo podemos hacer de dos formas, en una tabla de
              probabilidades de chi-cuadrada con el área a la derecha, buscamos
              los grados de libertad de 17 y el valor que más se acerque a
              nuestro resultado, en esa fila en este caso está entre la columna
              0.05 y 0.025, la cual esa va a ser nuestra probabilidad, que
              exactamente es: 0.03527, multiplicado por 100 es 3.527% de que
              nuestra hipótesis nula esté correcta, de que nuestros datos sigan
              una distribución uniforme, como 5% {"<"} 3.527% no se cumple,
              rechazamos nuestra hipótesis nula y aceptamos la hipótesis
              alternativa de que no son números uniformes como se mira a simple
              vista en la gráfica.
            </p>
            <p>
              La otra forma de hacer esto es buscando directamente nuestro valor
              &#945; en la columna correspondiente, vamos a la intersección
              k=17,&#945;=0.05=27.587. <br /> Si el resultado de nuestra x
              <sup>2</sup> es menor que el resultado de la intersección se
              acepta la hipótesis nula de lo contrario se rechaza. Como 28.32666{" "}
              {"<"} 27.587 no se cumple, se rechaza la hipótesis nula y se
              acepta la hipótesis alternativa.
            </p>
            <h2>Prueba de independencia</h2>
            <p>
              Como lo mencione antes, obtuve rachas de 3 o 4 nombres seguidos,
              utilizaré la prueba de rachas ascendentes y descendientes para
              determinar el número esperado máximo y mínimo de rachas que pueden
              existir en una secuencia aleatoria, dependiendo de la longitud de
              los números evaluados.
            </p>
            <span>
              Para aplicar esta prueba necesitamos de los siguientes
              estadísticos:
            </span>
            <div className="eq">
              <div className="eq__mean">
                <i>
                  &#956;<sub>R</sub>={" "}
                </i>{" "}
                <div className="fraction">
                  <span className="fup">2n - 1</span>
                  <span className="bar">/</span>
                  <span className="fdn">3</span>
                </div>
              </div>
              <div className="eq__stdDev">
                <i>
                  &#963;<sup>2</sup>
                  <sub>R</sub> ={" "}
                </i>{" "}
                <div className="fraction">
                  <span className="fup">16n - 29</span>
                  <span className="bar">/</span>
                  <span className="fdn">90</span>
                </div>
              </div>
              <div className="eq__z">
                <i>Z = </i>{" "}
                <div className="fraction">
                  <span className="fup">
                    R - &#956;<sub>R</sub>
                  </span>
                  <span className="bar">/</span>
                  <span className="fdn">
                    &#963;<sub>R</sub>
                  </span>
                </div>
              </div>
            </div>
            <p>
              Donde: <br />
              R: El número esperado de rachas <br /> n: El número de datos a
              evaluar.
              <br /> &#956;<sub>R</sub>:La media de rachas que esperamos tener.{" "}
              <br />
              &#963;<sup>2</sup>
              <sub>R</sub>: La varianza del número esperado de rachas.
              <br />
              Z: Valor estándar de la distribución normal para la prueba.
            </p>
            <ol>
              <li>
                <p>
                  Igual que antes establecemos primero nuestra hipótesis nula (h
                  <sub>0</sub>) e hipótesis alternativa (h<sub>1</sub>).
                </p>
                <div className="Rand__col__table">
                  <table>
                    <colgroup span="2"></colgroup>
                    <thead>
                      <tr>
                        <th colSpan="2" scope="colgroup">
                          Hipótesis
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          H<sub>0</sub>
                        </td>
                        <td>Los datos son independientes</td>
                      </tr>
                      <tr>
                        <td>
                          H<sub>1</sub>
                        </td>
                        <td>Los datos no son independientes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>
                <span>
                  Clasificamos los números como bien el nombre lo indica, como
                  racha ascendente o descendente. Ejemplo: <br /> Dada la
                  siguiente lista: 0.1, 0.2, 0.3, 0.4, 0.2, 0.3, 0.1, 0.2, 0.3.{" "}
                  <br />
                  Vemos que los primeros cuatro números tienen una racha
                  ascendiente, intercala 3 números y vuelve a ascender. Como lo
                  siguiente:{" "}
                  <span className="Rand__arrows">
                    &#8593; &#8593; &#8593; &#8593; &#8595; &#8593; &#8595;
                    &#8593; &#8593;
                  </span>
                </span>{" "}
                <br />
                <p>Tenemos lo siguiente:</p>
                <div className="Rand__streakTables">
                  <table>
                    <thead>
                      <tr>
                        <th>Racha</th>
                        <th>Longitud</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <p>
                      Transponemos nuestra tabla de tal manera que ahora
                      clasificamos según la longitud de la tabla:
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Longitud de Rachas</th>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Número de Rachas</th>
                          <td>3</td>
                          <td>1</td>
                          <td>0</td>
                          <td>1</td>
                          <td>5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
              <li>
                <p>
                  Si aplicamos lo que sabemos hasta ahora a la lista de nuestros
                  300 números iniciales, quedaría de la siguiente manera:
                </p>
                <div className="Rand__col__streakTable">
                  <table>
                    <thead>
                      <tr>
                        <th>Longitud de Rachas</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Número de Rachas</th>
                        <td>116</td>
                        <td>55</td>
                        <td>19</td>
                        <td>4</td>
                        <td>194</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Ahora que ya sabemos que son 194 rachas, tenemos lo necesario
                  para calcular los tres estadísticos:
                </p>
                <p>
                  &#956;<sub>R</sub> = 199.666 El número esperado de rachas
                  <br />
                  &#963;<sup>2</sup>
                  <sub>R</sub> = 52.01 La varianza
                  <br />Z = -0.108 El valor de la distribución normal
                </p>
              </li>
              <li>
                <p>
                  Para determinar la independencia, igualmente buscaríamos ahora
                  en una tabla de distribución normal el valor &#945;/2 seguiré
                  usando 0.05, por lo que buscaré el valor de 0.025, si vamos a
                  los valores de los laterales encontramos que la desviación
                  normal es de 1.96, si nuestro valor &#945; fuera 0.1 para
                  tener una confianza del 90% la desviación normal sería de
                  1.65.
                </p>
                <p>
                  Para saber si aceptamos nuestra hipótesis nula evaluamos si el
                  valor absoluto de nuestra Z es menor a la desviación normal de
                  la tabla, de lo contrario se rechaza
                  <br />
                  |-0.108|{"<"}1.96 como esto es verdadero, se acepta nuestra
                  hipótesis nula de que las rachas son independientes.
                </p>
              </li>
            </ol>
            <h3>Distribución de la longitud de las rachas</h3>
            <p>
              De forma adicional podemos calcular si la longitud de las rachas
              son adecuadas con la formula de chi-cuadrada utilizada
              anteriormente.
            </p>
            <div className="chi-eq">
              <i>
                x<sup>2</sup>= &#8721;
              </i>{" "}
              <div className="fraction">
                <span className="fup">
                  <i>
                    ( &#959;<sub>i</sub>
                  </i>{" "}
                  &#8722;{" "}
                  <i>
                    e<sub>i</sub> )<sup>2</sup>
                  </i>
                </span>
                <span className="bar">/</span>
                <span className="fdn">
                  <i>
                    e<sub>i</sub>
                  </i>
                </span>
              </div>
            </div>
            <p>
              Donde: <br />o<sub>i</sub>: datos obtenidos
              <br />e<sub>i</sub>: datos esperados
            </p>
            <p>
              Lo que cambia es que ahora nuestros números esperados los
              calcularíamos de con la siguiente ecuación.
            </p>
            <div className="chi-eq">
              <i>
                e<sub>i</sub> =
              </i>{" "}
              <div className="fraction">
                <span className="fup">
                  <i>2</i>
                </span>
                <span className="bar">/</span>
                <span className="fdn">
                  <i>
                    <i>(i + 3)!</i>
                  </i>
                </span>
              </div>
              <i>
                [n(i<sup>2</sup> + 3<sub>i</sub> + 1) - (i<sup>3</sup> + 3
                <sub>i</sub>
                <sup>2</sup> - i - 4)]
              </i>
            </div>
            <p>
              Así que retomando nuestros datos de rachas obtenidas tenemos 4
              diferentes longitudes de rachas:
            </p>
            <div className="Rand__col__streakTable">
              <table>
                <thead>
                  <tr>
                    <th>Longitud de Rachas</th>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Número de Rachas</th>
                    <td>116</td>
                    <td>55</td>
                    <td>19</td>
                    <td>4</td>
                    <td>194</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Para calcular las rachas esperadas, remplazamos en la ecuación n:
              300 e i para cada longitud de racha.
            </p>
            <div className="chi-eq">
              <i>
                e<sub>1</sub> =
              </i>{" "}
              <div className="fraction">
                <span className="fup">
                  <i>2</i>
                </span>
                <span className="bar">/</span>
                <span className="fdn">
                  <i>
                    <i>(1 + 3)!</i>
                  </i>
                </span>
              </div>
              <i>
                [300(1<sup>2</sup> + 3(1) + 1) - (1<sup>3</sup> + 3(1
                <sup>2</sup>) - 1 - 4)] = 125.083
              </i>
            </div>
            <div className="chi-eq">
              <i>
                e<sub>2</sub> =
              </i>{" "}
              <div className="fraction">
                <span className="fup">
                  <i>2</i>
                </span>
                <span className="bar">/</span>
                <span className="fdn">
                  <i>
                    <i>(2 + 3)!</i>
                  </i>
                </span>
              </div>
              <i>
                [300(2<sup>2</sup> + 3(2) + 1) - (2<sup>3</sup> + 3(2
                <sup>2</sup>) - 2 - 4)] = 59.766
              </i>
            </div>
            <div className="chi-eq">
              <i>
                e<sub>3</sub> =
              </i>{" "}
              <div className="fraction">
                <span className="fup">
                  <i>2</i>
                </span>
                <span className="bar">/</span>
                <span className="fdn">
                  <i>
                    <i>(3 + 3)!</i>
                  </i>
                </span>
              </div>
              <i>
                [300(3<sup>2</sup> + 3(3) + 1) - (3<sup>3</sup> + 3(3
                <sup>2</sup>) - 3 - 4)] = 17.369
              </i>
            </div>
            <div className="chi-eq">
              <i>
                e<sub>4</sub> =
              </i>{" "}
              <div className="fraction">
                <span className="fup">
                  <i>2</i>
                </span>
                <span className="bar">/</span>
                <span className="fdn">
                  <i>
                    <i>(4 + 3)!</i>
                  </i>
                </span>
              </div>
              <i>
                [300(4<sup>2</sup> + 3(4) + 1) - (4<sup>3</sup> + 3(4
                <sup>2</sup>) - 4 - 4)] = 3.768
              </i>
            </div>
            <p>Lo cual son números similares a los obtenidos. </p>
            <p>
              Existe la restricción de que los números observados y esperados no
              pueden ser menor que 5, por lo que e4 se le sumaría a e3 quedando
              de la siguiente manera:
            </p>
            <div className="Rand__col__streakTable">
              <table>
                <thead>
                  <tr>
                    <th>Observados</th>
                    <td>116</td>
                    <td>55</td>
                    <td>23</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Esperados</th>
                    <td>125.083</td>
                    <td>59.766</td>
                    <td>21.137</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Con estos datos calculamos chi-cuadrada (X<sup>2</sup>) = 1.2038{" "}
              <br />k = 4-1 = 3<br />
              p=0.7521 (valor de la tabla de chi cuadrada)
            </p>
            <p>
              De igual forma determinamos nuestra hipótesis de la misma forma
              donde si &#945;{"<"} p<sub>(1.2038,3)</sub> aceptamo nuestra
              hipótesis nula de lo contrario aceptamos la hipótesis alternativa
            </p>
            <p>
              Como 0.05 {"<"} 0.7521 se acepta la hipótesis nula de que existe
              independencia en las rachas
            </p>
            <br />
            <p>
              Esta muestra nos dio que los números no son uniformes pero sí
              independientes
            </p>
            <hr />
            <h2>Resultados</h2>
            <h5>Test 1</h5>
            <p>
              En 100 pruebas de 100 números cada una, se obtuvieron los
              siguientes resultados:
            </p>
            <div className="Rand__col__streakTable">
              <table>
                <thead>
                  <tr>
                    <th>Numero de pruebas correctas</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Valores</td>
                    <td>11</td>
                    <td>21</td>
                    <td>68</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              De las 100 pruebas: <br />
              68 pruebas cumplieron con la uniformidad, independencia y
              longitud.
              <br />1 Pruebas que no cumplieron la uniformidad e independencia
              pero sí la longitud de rachas.
              <br />
              6 Pruebas que no cumplieron la uniformidad y longitud pero sí la
              independencia.
              <br />
              2 Pruebas que cumplieron la uniformidad y la longitud pero no la
              independencia.
              <br />
              18 Pruebas que cumplieron la uniformidad e independencia pero no
              la longitud de rachas.
              <br />
              1 Pruebas que no cumplieron la uniformidad pero sí la longitud y
              la independencia.
              <br />4 Pruebas que cumplieron la uniformidad pero no la
              independencia ni longitud de rachas.
            </p>
            <h5>Test 2</h5>
            <p>
              En 100 pruebas de 3000 números cada una, se obtuvieron los
              siguientes resultados:
            </p>
            <div className="Rand__col__streakTable">
              <table>
                <thead>
                  <tr>
                    <th>Número de pruebas correctas</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Valores</td>
                    <td>3</td>
                    <td>48</td>
                    <td>49</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              De las 100 pruebas: <br />
              49 pruebas cumplieron con la uniformidad, independencia y
              longitud.
              <br />0 Pruebas que no cumplieron la uniformidad e independencia
              pero sí la longitud de rachas.
              <br />
              2 Pruebas que no cumplieron la uniformidad y longitud pero sí la
              independencia.
              <br />
              2 Pruebas que cumplieron la uniformidad y la longitud pero no la
              independencia.
              <br />
              42 Pruebas que cumplieron la uniformidad e independencia pero no
              la longitud de rachas.
              <br />
              4 Pruebas que no cumplieron la uniformidad pero sí la longitud y
              la independencia.
              <br />1 Pruebas que cumplieron la uniformidad pero no la
              independencia ni longitud de rachas.
            </p>
            <h5>Conclusión</h5>
            <p>
              Si recordamos, para que una secuencia de números sea catalogada
              como aleatoria, es necesario que tenga distribución uniforme y que
              sea independiente, por lo que podríamos decir que que los 18
              números y 42 números, que no cumplieron la prueba de longitud de
              rachas, pero sí las de uniformidad e independencia, del test 1 y 2
              respectivamente, también se comportan como números aleatorios.
            </p>
            <p>
              Podríamos decir que para el test 1 de 100 pruebas de 100 números
              cada una, 86 son aleatorias y de esas 86, 18 no cumplen la
              longitud de rachas.
            </p>
            <p>
              Para test 2 de 100 pruebas de 3000 números cada una, 91 son
              aleatorias y de esas 91, 42 no cumplen la longitud de rachas.
            </p>
            <p>
              En cuanto al problema inicial puedo decir que sí, los números en
              la mayoría de los casos son legítimamente aleatorios, y que es
              normal que siga viendo nombres que aparezcan ocasionalmente en
              racha seguidas.
            </p>
            <hr />
            <div className="App">
              <h2>¿Tus números son aleatorios?</h2>
              <p>
                Puedes probar la herramienta de abajo para evaluar tus números
                aleatorios. Ya que sabes los procedimientos de las pruebas de
                números aleatorios, te invito a contribuir en{" "}
                <a
                  href="https://github.com/MarcoMadera/Chi-Sqrt-Uniform-Test"
                  target="_blank"
                  rel="noopener"
                >
                  este repositorio
                </a>{" "}
                donde encontrarás el código que he estado escribiendo al mismo
                tiempo de escribir este post.
              </p>
              <p>
                Introduce números que sean entre 0 y 1 separados por espacios,
                intenta cuantos números quieras, entre más números mejor. El
                Alpha que tomará la prueba es de 0.05.
              </p>
              <div className="Rand__col__input">
                <input
                  type="text"
                  name="randomnumbers"
                  id="ri"
                  className="form-control-sm"
                ></input>
                <button onClick={chiSqrt} className="btn btn-primary btn-sm">
                  Calcular
                </button>
              </div>
              <div id="sol"></div>
              <div id="linechart"></div>
              <div id="resUniform"></div>
              <div id="resIndependent"></div>
              <div id="resStreak"></div>
              <hr />
              <DiscussionEmbed
                shortname="marcomadera"
                config={
                  ({ url: `https://marcomadera.github.io/blog/2` },
                  { identifier: 2 },
                  { title: "Numeros pseudo Aleatorios" })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PseudoRandomNumbers;
