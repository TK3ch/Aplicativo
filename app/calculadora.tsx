import { useState } from 'react';

    export default function Calculadora() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState<string | null>(null);
    const [firstOperand, setFirstOperand] = useState<number | null>(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

}