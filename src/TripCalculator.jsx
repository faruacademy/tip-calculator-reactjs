import { useState } from 'react';

function TripCalculator() {
  const [totalAmount, setTotalAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [isSplitEvenly, setIsSplitEvenly] = useState(true);
  const [splitAmounts, setSplitAmounts] = useState([]);

  const handleCalculate = () => {
    const total = parseFloat(totalAmount);
    const numPeople = parseInt(numberOfPeople, 10);
    const tip = (total * tipPercentage) / 100;
    const totalWithTip = total + tip;

    if (!total || !numPeople || numPeople <= 0) {
      alert('Please enter valid values.');
      return;
    }

    if (isSplitEvenly) {
      const evenSplit = (totalWithTip / numPeople).toFixed(2);
      setSplitAmounts(new Array(numPeople).fill(evenSplit));
    } else {
      setSplitAmounts([]);
    }
  };

  const handleToggleSplit = () => {
    setIsSplitEvenly(!isSplitEvenly);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-4">Trip Cost Calculator</h1>
      
      {/* Total Amount Input */}
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="totalAmount">
          Total Amount ($)
        </label>
        <input
          type="number"
          id="totalAmount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
          placeholder="Enter total cost of the trip"
        />
      </div>
      
      {/* Number of People Input */}
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="numberOfPeople">
          Number of People
        </label>
        <input
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
          placeholder="Enter number of participants"
        />
      </div>
      
      {/* Tip Percentage Dropdown */}
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="tipPercentage">
          Tip Percentage (%)
        </label>
        <select
          id="tipPercentage"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
        >
          <option value="0">No Tip</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
          <option value="25">25%</option>
        </select>
      </div>
      
      {/* Split Evenly Checkbox */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="splitEvenly"
          checked={isSplitEvenly}
          onChange={handleToggleSplit}
          className="mr-2"
        />
        <label htmlFor="splitEvenly" className="font-medium">
          Split the cost evenly
        </label>
      </div>
      
      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
      >
        Calculate
      </button>

      {/* Display Split Amounts */}
      {splitAmounts.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Split Amounts:</h2>
          <ul className="list-disc pl-5">
            {splitAmounts.map((amount, index) => (
              <li key={index}>Person {index + 1}: ${amount}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TripCalculator;
