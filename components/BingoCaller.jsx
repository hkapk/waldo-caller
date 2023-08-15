import React, { useState } from 'react';

const BingoCaller = () => {
    const [calledNumbers, setCalledNumbers] = useState([]);

    const letters = ['W', 'A', 'L', 'D', 'O'];

    const callBingoNumber = () => {
        const letterRanges = {
            'W': { min: 1, max: 15 },
            'A': { min: 16, max: 31 },
            'L': { min: 32, max: 46 },
            'D': { min: 47, max: 61 },
            'O': { min: 62, max: 75 },
        };

        let bingoNumber;
        do {
            const letterIndex = Math.floor(Math.random() * letters.length);
            const letter = letters[letterIndex];
            const { min, max } = letterRanges[letter];
            const number = Math.floor(Math.random() * (max - min + 1)) + min;
            bingoNumber = `${letter}·${number}`;
        } while (calledNumbers.includes(bingoNumber));

        // Update the state to include the new Bingo Call
        const newCalledNumbers = [...calledNumbers, bingoNumber];
        setCalledNumbers(newCalledNumbers);
    };

    return (
        <div className="p-6">
            <button className="flex flex-row relative justify-center mx-auto items-center py-4 px-6 outline rounded-3xl"
                onClick={callBingoNumber}>Draw</button>
            <div className="">
                <p className="sm:text-[64px] text-[50px] font-extrabold flex flex-row relative justify-center items-center py-4 px-6">{calledNumbers.length > 0 ? calledNumbers[calledNumbers.length - 1] : ' '}</p>
            </div>
            {letters.map((letter) => {
                const numbersForLetter = calledNumbers
                    .filter((bingoNumber) => bingoNumber.startsWith(letter))
                    .sort((a, b) => parseInt(a.split('·')[1]) - parseInt(b.split('·')[1])); // Sort numerically

                return (
                    <div className="grid grid-cols-2 gap-4 justify-center w-full pt-8" key={letter}>
                        <h2 className="sm:text-[64px] text-[25px] font-bold px-2">{letter}</h2>
                        <ul className="grid grid-cols-5 justify-center col-span-2 gap-8 px-4 py-4">
                            {numbersForLetter.map((bingoNumber, index) => (
                                <li key={index}>{bingoNumber}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default BingoCaller;
