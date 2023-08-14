//     return (
//         <div className="p-6">
//             <button
//                 className="flex flex-row relative justify-center mx-auto items-center py-4 px-6 outline rounded-3xl"
//                 onClick={callBingoNumber}>DRAW</button>

//             <div className="">
//                 <p className="sm:text-[64px] text-[50px] font-extrabold flex flex-row relative justify-center items-center py-4 px-6">{calledNumbers.length > 0 ? calledNumbers[calledNumbers.length - 1] : '-'}</p>
//             </div>
//             <ul className="">
//                 <div className="grid grid-cols-3 justify-center w-full gap-8 pt-8">
//                     {calledNumbers.map((bingoNumber, index) => (
//                         <li key={index}
//                             className="flex flex-col p-2 justify-center items-center text-black-100 hover:bg-white hover:text-black hover:shadow-md rounded-3xl">{bingoNumber}</li>
//                     ))}
//                 </div>
//             </ul>
//         </div>
//     );
// };

// export default BingoCaller;

import React, { useState } from 'react';

const BingoCaller = () => {
    const [calledNumbers, setCalledNumbers] = useState([]);

    const letters = ['B', 'I', 'N', 'G', 'O'];

    const callBingoNumber = () => {
        const letterRanges = {
            'B': { min: 1, max: 15 },
            'I': { min: 16, max: 31 },
            'N': { min: 32, max: 46 },
            'G': { min: 47, max: 61 },
            'O': { min: 62, max: 75 },
        };

        let bingoNumber;
        do {
            const letterIndex = Math.floor(Math.random() * letters.length);
            const letter = letters[letterIndex];
            const { min, max } = letterRanges[letter];
            const number = Math.floor(Math.random() * (max - min + 1)) + min;
            bingoNumber = `${letter}-${number}`;
        } while (calledNumbers.includes(bingoNumber));

        // Update the state to include the new Bingo Call
        const newCalledNumbers = [...calledNumbers, bingoNumber];
        setCalledNumbers(newCalledNumbers);
    };

    return (
        <div>
            <button onClick={callBingoNumber}>Call Bingo Number</button>
            <div className="">
                <p className="sm:text-[64px] text-[50px] font-extrabold flex flex-row relative justify-center items-center py-4 px-6">{calledNumbers.length > 0 ? calledNumbers[calledNumbers.length - 1] : '-'}</p>
            </div>
            {letters.map((letter) => {
                const numbersForLetter = calledNumbers
                    .filter((bingoNumber) => bingoNumber.startsWith(letter))
                    .sort((a, b) => parseInt(a.split('-')[1]) - parseInt(b.split('-')[1])); // Sort numerically

                return (
                    <div key={letter}>
                        <h2>{letter}</h2>
                        <ul>
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
