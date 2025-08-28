import { useState } from "react"
import Boton from "./Boton"
import './PathNumber.css'

export default function PathNumber() {
    const [number, setNumber] = useState(0)
    const [valueOne, setValueOne] = useState(null)
    const [valueTwo, setValueTwo] = useState(null)
    const [operator, setOperator] = useState(null)
    const [click, setClick] = useState(false)
    const [initResult, setInitResult] = useState(false)
    const [verifyClick, setVerifyClick] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        //verifyClicked();
        if (e.target.textContent === 'X') setOperator('*');
        if (e.target.textContent === '/') setOperator('/');
        if (e.target.textContent === '+') setOperator('+');
        if (e.target.textContent === '-') setOperator('-');
        if (e.target.textContent === '%') setOperator('%');
        setClick(true);
        setInitResult(false);
    }

    const verifyClicked = () => {
        if (click) {
            //se coloca parentisis a la operación
            if (operator !== null) return;
            setValueTwo(`(${operator}`);
            setVerifyClick(true);
            console.log('entro');
        }
    }

    const handleResult = () => {
        if (valueOne && valueTwo && operator) {

            if (verifyClick) {
                const MenosXPlus = valueTwo[0] === '-' ? setOperator('+') && setValueTwo(valueTwo.slice(1)) : setOperator('-');
                console.log(MenosXPlus);
                setValueTwo(MenosXPlus);
            }

            const result = eval(`${valueOne} ${operator} ${valueTwo}`);
            //Si resultado es decimal fixed, sino entero
            if (result % 1 !== 0) {
                setNumber(result.toFixed(2));
            }else {
                setNumber(result);
            }
            setValueOne(result);
            setValueTwo(null);
            setOperator(null);
            setClick(false);
            setInitResult(true);
        }
    }

    const handleClear = () => {
        setNumber(0);
        setValueOne(null);
        setValueTwo(null);
        setOperator(null);
        setClick(false);
    }

    const handleNumber = (e) => {

        if (initResult) {
            handleClear();
            // Después de limpiar, establecer el primer valor directamente
            setValueOne(e.target.textContent);
            setNumber(e.target.textContent);
            setInitResult(false);
            return;
        }

        if (!click) {
            const newValueOne = valueOne ? valueOne + e.target.textContent : e.target.textContent;
            setValueOne(newValueOne);
            setNumber(newValueOne);
        } else {
            const newValueTwo = valueTwo ? valueTwo + e.target.textContent : e.target.textContent;
            setValueTwo(newValueTwo);
            // console.log(verifyClick);
            // if (verifyClick) {
            //     setNumber(`${valueOne} ${operator} ${newValueTwo})`);
            // } else {
            //     setNumber(`${valueOne} ${operator} ${newValueTwo}`);
            // }
            setNumber(`${valueOne} ${operator} ${newValueTwo}`);

        }
    }

    const handleInvert = () => {
        setNumber(-number);
        if (!click) {
            setValueOne(-valueOne);
        }
    }

    const handleCom = (e) => {
        if (!click) {
            if (e.target.textContent === '.') {
                if (!valueOne.includes('.')) {
                    const newValueOne = valueOne ? valueOne + '.' : '0.';
                    setValueOne(newValueOne);
                    setNumber(newValueOne);
                }
            }
        } else {
            if (e.target.textContent === '.') {
                if (!valueTwo.includes('.')) {
                    const newValueTwo = valueTwo ? valueTwo + '.' : '0.';
                    setValueTwo(newValueTwo);
                    setNumber(`${valueOne} ${operator} ${newValueTwo}`);
                }
            }
        }
    }

    return (
        //
        <>
            {/* pantalla de visualización de los numeros al apretarlos, por ejemplo 1234 */}
            <span className="inputCalculator">{number}</span>
            <div className="number">
                <Boton valueNumber="C" clase="calculatorButton" handleClick={handleClear} />
                <Boton valueNumber="+/-" clase="calculatorButton" handleClick={handleInvert} />
                <Boton valueNumber="%" clase="calculatorButton" handleClick={handleClick} />
                <Boton valueNumber="/" clase="operator" handleClick={handleClick} />
                <Boton valueNumber="7" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="8" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="9" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="X" clase="operator" handleClick={handleClick} />
                <Boton valueNumber="4" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="5" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="6" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="-" clase="operator" handleClick={handleClick} />
                <Boton valueNumber="1" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="2" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="3" clase="numberEnter" handleClick={handleNumber} />
                <Boton valueNumber="+" clase="operator" handleClick={handleClick} />
                <Boton valueNumber="0" clase="cero" handleClick={handleNumber} />
                <Boton valueNumber="." clase="numberEnter" handleClick={handleCom} />
                <Boton valueNumber="=" clase="operator" handleClick={handleResult} />
            </div>
        </>
    )
}