import { React, useEffect, useState } from "react";{}
import { Calculate } from "../Calculate/Calculate";

function CalculatorContainer(){
    

    const [content,setContent] = useState('');
    const [displayValue,setDisplayValue] = useState('0');

    const [disableButton,setDisableButton] = useState(false)


    useEffect(() => {
        setDisplayValue(content)
    },[content])

    const handleClick = (e) => {
        
        if(e.target.textContent === '='){
            const answer = Calculate(content)
            console.log(answer);
            return setContent(answer);
        }
        let contents = content + e.target.textContent;
        setContent(contents);
    };

    
    return(
        <>
            <div className="w-full max-w-sm mx-auto mt-40 p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                    <div  className="mb-4 w-full h-12 bg-white rounded-lg shadow-inner text-right p-3 text-xl font-semibold">
                        {displayValue}
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">7</button>
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">8</button>
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">9</button>
                        <button onClick={() => {
                            setDisplayValue('');
                            setContent('');}
                        } className="p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700">C</button>

                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">4</button>
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">5</button>
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">6</button>
                        <button onClick={handleClick} className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700">/</button>

                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">1</button>
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">2</button>
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">3</button>
                        <button onClick={handleClick} className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700">*</button>

                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">0</button>
                        <button onClick={handleClick} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">.</button>
                        <button onClick={handleClick} className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700">+</button>
                        <button onClick={handleClick} className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700">=</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalculatorContainer;