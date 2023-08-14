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

    const letters = ['W', 'A', 'L', 'D', 'O'];

    const callBingoNumber = () => {
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
        const newCalledNumbers = [...calledNumbers, bingoNumber];
        setCalledNumbers(newCalledNumbers);
    };

    return (
        <div className="p-6">
            <button className="flex flex-row relative justify-center mx-auto items-center py-4 px-6 outline rounded-3xl" onClick={callBingoNumber}>DRAW</button>
            <div className="">
                <p className="sm:text-[64px] text-[50px] font-extrabold flex flex-row relative justify-center items-center py-4 px-6">{calledNumbers.length > 0 ? calledNumbers[calledNumbers.length - 1] : '-'}</p>
            </div>

            {letters.map((letter) => {
                const numbersForLetter = calledNumbers
                    .filter((bingoNumber) => bingoNumber.charAt(0) === letter)
                    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1))); // Sort numerically

                return (
                    <div className="grid grid-cols-3 justify-center w-full gap-8 pt-8" key={letter}>
                        <h2 className="sm:text-[64px] text-[50px] font-extrabold flex flex-row relative justify-center items-center py-4 px-6">{letter}</h2>
                        <ul className="flex flex-col p-2 justify-center items-center text-black-100 hover:bg-white hover:text-black hover:shadow-md rounded-3xl">
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