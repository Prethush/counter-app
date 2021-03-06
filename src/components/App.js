import { useState, useEffect } from "react";

function App() {

  let [counter, setCounter] = useState(0);
  let [step, setStep] = useState(1);
  let [max, setMax] = useState(Infinity);

  useEffect(() => {
    let newCounter = counter > max ? max : counter;
    setCounter(newCounter);
  }, [max, counter])

  return <main className="py-12 px-8 sm:p-12">
    <h1 className="text-center text-5xl font-bold text-blue-900 mt-8">Counter App</h1>
    
    {/* Counter */}
    <h2 className="text-3xl font-bold text-center mt-8 mb-6">{counter}</h2>
    <div className="mb-6 flex flex-col sm:flex-row sm:justify-center">
      <div className="flex flex-col items-center mx-12">

        {/* Steps */}
        <h4 className="text-2xl font-bold my-4">Steps</h4>
        <div className="flex">
          <button className={"text-xl text-white font-bold py-2 px-4 rounded-md mx-2" + (step === 5 ? " bg-red-500" : " bg-green-500")} onClick={() => setStep(5)}>5</button>
          <button className={"text-xl text-white font-bold py-2 px-4 rounded-md mx-2" + (step === 10 ? " bg-red-500" : " bg-green-500")} onClick={() => setStep(10)}>10</button>
          <button className={"text-xl text-white font-bold py-2 px-4 rounded-md mx-2" + (step === 15 ? " bg-red-500" : " bg-green-500")} onClick={() => setStep(15)}>15</button>
        </div>
      </div>

      {/* Max Limit Part */}
      <div className="flex flex-col items-center mx-12">
        <h4 className="text-2xl font-bold my-4">Max</h4>
        <div className="flex">
          <button className={"text-xl text-white font-bold py-2 px-4 rounded-md mx-2" + (max === 15 ? " bg-red-500" : " bg-green-500")} onClick={() =>{ setMax(15) }}>15</button>
          <button className={"text-xl text-white font-bold py-2 px-4 rounded-md mx-2" + (max === 100 ? " bg-red-500" : " bg-green-500")} onClick={() => setMax(100)}>100</button>
          <button className={"text-xl text-white font-bold py-2 px-4 rounded-md mx-2" + (max === 200 ? " bg-red-500" : " bg-green-500")} onClick={() => setMax(200)}>200</button>
        </div>
      </div>
    </div>

    {/* Increment/Decrement/Reset */}
    <div className="flex justify-center">
      <button className="text-xl bg-blue-500 text-white font-bold py-2 px-2 sm:px-4 rounded-md mx-2" onClick={() => {
        if (counter + step > max) {
          alert("Limit is reached");
        }
        setCounter(counter = counter + step <= max ? counter + step : counter)
      }
      }>Increment</button>
      <button className="text-xl bg-blue-500 text-white font-bold py-2 px-2 sm:px-4 rounded-md mx-2" onClick={() => setCounter(counter - step)}>Decrement</button>
      <button className="text-xl bg-blue-500 text-white font-bold py-2 px-2 sm:px-4 rounded-md mx-2" onClick={() => setCounter(0)}>Reset</button>
    </div>
  </main>
}

export default App;