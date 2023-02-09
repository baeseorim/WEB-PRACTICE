import "./calculator.css";

const Calculator = () => {
    return (
        <div className="calculator_body">
            <div className="screen"></div>
            <div className="buttons">
                <button className="operator">C</button>
                <button className="operator">½</button>
                <button className="operator">%</button>
                <button className="operator">÷</button>

                <button className="number">7</button>
                <button className="number">8</button>
                <button className="number">9</button>
                <button className="operator">x</button>

                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                <button className="operator">-</button>

                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>
                <button className="operator">+</button>

                <button id="zero" className="number">0</button>
                <button className="number">.</button>
                <button id="result" className="operator">=</button>
            </div>
        </div>
    );
};

export default Calculator;