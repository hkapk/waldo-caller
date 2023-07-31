import React, { useState } from 'react';

const BingoCaller = () => {
    const [calledNumbers, setCalledNumbers] = useState([]);

    const callBingoNumber = () => {
        const letters = ['W', 'A', 'L', 'D', 'O'];
        const minNumber = 1;
        const maxNumber = 75;

        // Generate a new Bingo Call that hasn't been called before
        let bingoNumber;
        do {
            const letterIndex = Math.floor(Math.random() * letters.length);
            const number = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            bingoNumber = letters[letterIndex] + number;
        } while (calledNumbers.includes(bingoNumber));

        // Update the state to include the new Bingo Call
        setCalledNumbers([...calledNumbers, bingoNumber]);
    };

    return (
        <div>
            <button onClick={callBingoNumber}>Call Bingo Number</button>
            <p>Last Called Bingo Number: {calledNumbers.length > 0 ? calledNumbers[calledNumbers.length - 1] : '-'}</p>
            <ul>
                {calledNumbers.map((bingoNumber, index) => (
                    <li key={index}>{bingoNumber}</li>
                ))}
            </ul>
        </div>
    );
};

export default BingoCaller;
