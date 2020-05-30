import React, { Component } from "react";
import "./styles/PseudoRandomNumbers.css";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import chi from "chi-squared";
import gamma from "gamma";
import LineChart from "../../components/LineChart";

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

function chiSqrt() {
  let ri = document.getElementById("ri").value.split(" ");

  if (ri.length === 1) {
    ReactDOM.render(
      <p>Incluye numeros validos</p>,
      document.getElementById("sol")
    );
    return;
  }

  let sum = 0;

  //Add the recomended m = sqrt(n)
  let m = Math.ceil(Math.sqrt(ri.length));

  /**
   ei: the expected number of events in a category, will be the same for each i 
   because we're expecting to be an uniform distribution since they are pseudo random numbers
   */
  let ei = ri.length / m;

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

  //X^2 = sum (O-E)^2/E
  for (let i = 0; i < m; i++) {
    sum += (oi[i] - ei) ** 2 / ei;
  }

  let uniform = chi.pdf(sum, m).toFixed(3);

  ReactDOM.render(
    <h5>
      Existe la confianza del {uniform}% de que el próximo número de la lista
      siga una distribución uniforme
    </h5>,
    document.getElementById("sol")
  );

  let getlabel = () => {
    let label = [0];
    let irs = ir;
    for (let i = 1; i < m; i++) {
      label.push((irs += ir).toFixed(2));
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
          fill: "none",
          backgroundColor: "blue",
          pointRadius: 2,
          //borderColor: 'red',
          borderWidth: 2,
          lineTension: 0,
          max: Math.max(...oi),
          min: 0,
        }}
        title="count"
        color="#B08EA2"
      />

      <LineChart
        type="line"
        data={{
          labels: ["", -3, -2, -1, "u", 1, 2, 3, ""],
          label: "Ocurrencias",
          datas: oi,
          fill: true,
          backgroundColor: "blue",
          pointRadius: 2,
          borderColor: "red",
          borderWidth: 2,
          lineTension: 0,
          max: Math.max(...oi),
          min: Math.min(...oi),
        }}
        title="count"
        color="#B08EA2"
      />

      <b>
        <p>Visualmente entre más recta es la línea más uniforme es.</p>
      </b>
      <p>
        Muy bien, hasta ahora sabemos el nivel de confianza de si es que sigue
        una distribución uniforme, pero quien quiere un {uniform}%? Los
        estadisticos hacen casi todo con el 95% porque nosotros no? pero
        recuerda números pseudo-aleatorios ≠ números aleatorios, tu generador de
        algoritmos pseudo aleatorios (PRNG) tiene que ser muy bueno para engañar
        la estadística.
      </p>
      <h5>La correlación</h5>
      <p>
        Ahora queremos saber que tan independientes son nuestros datos, para eso
        existen pruebas, como la de Chi cuadrada de Pearson por ejemplo, la cual
        dice que:
      </p>
      <div className="chi-eq">
        <i>
          x<sup>2</sup>
        </i>{" "}
        = &#8721;
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
        Lo que se traduce al resultado que debes de llegar de: {sum}, este
        resultado se debe de comparar con la tabla de chi cuadrado con el nivel
        de confianza de: {uniform / 100} y {m - 1} grados de libertad y lo
        tendrás, prueba {chi.pdf(Math.sqrt(sum), m - 1)}
      </p>
      <p>
        Chi pdf: {chi.cdf(9, 0.05)} \n Chi cdf: {chi.cdf(9, 0.05)} Gamma:{" "}
        {gamma(5)} Form:{" "}
        {(2 ** (-9 / 2) * Math.E ** (-0.95 / 2) * 0.95 ** (9 / 2 - 1)) /
          gamma(9 / 2)}{" "}
        Y = {18 * 16 ** (9 / 2 - 1) * Math.E ** (-16 / 2)}
      </p>
      <p>
        Otra:{" "}
        {(1 / (gamma(9 / 2) * 2 ** (9 / 2))) *
          (100 ** (9 / 2 - 1) * Math.E ** (-100 / 2))}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
        consequat gravida. Curabitur eu ante lobortis, venenatis diam in,
        efficitur ex. Phasellus a est quis felis dictum tristique. Curabitur id
        imperdiet elit. Aenean eget lacinia turpis, quis elementum quam.
        Suspendisse a leo nec dolor interdum rhoncus. Duis purus libero,
        vehicula cursus pretium nec, posuere ut nisl. Aenean ornare a ex nec
        varius. Quisque sollicitudin nisi atuctor ultriciesl ss.
      </p>
    </div>,
    document.getElementById("linechart")
  );
}

export default class PseudoRandomNumbers extends Component {
  render() {
    return (
      <div className="Rand">
        <div className="container">
          <div className="row">
            <div className="Rand__col col-12 col-md-8">
              <h1 className="Rand__title">Números Pseudo Aleatorios</h1>
              <br></br>
              <p>
                Los números pseudo-aleatorios son creados a partir de algoritmos
                matemáticos, por lo que no se puede decir que son realmente
                aleatorios, por eso el pseudo, algunos algoritmos hacen muy bien
                el trabajo de simular las propiedades de los números aleatorios
                y otros caen en el bucle de repetirse infinitamete.
              </p>
              <p>
                Para que una secuencia de números sea catalogada como aleatoria,
                es necesario que tengan una distribución uniforme y que no tenga
                correlación, es decir, que tengan la misma probabilidad de ser
                elegido y que la elección de uno no dependa del otro.
              </p>
              <div className="App">
                <h5>¿Qué tan uniforme es tu lista de números?</h5>
                <p>
                  Introduce números que sean entre 0 y 1 separados por espacios,
                  intenta cuantos números quieras, entre más números mejor.
                </p>
                <input type="text" name="randomnumbers" id="ri"></input>
                <button onClick={chiSqrt}>Calcular</button>
                <div id="sol"></div>
                <div id="linechart"></div>
                <div id="linechart2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
