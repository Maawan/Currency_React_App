import React, { useEffect, useState } from 'react'
import InputField from './InputField'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
function Container() {
    const [from , setFrom] = useState("inr");
    const [to , setTo] = useState("usd");
    const [amount , setAmount] = useState(0.0);
    const [computedAmount , setComputedAmount] = useState(0.0);
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const convert = () => {
        console.log(amount + " " + currencyInfo[to] + " " + to);
        setComputedAmount(amount * currencyInfo[to]);
    }
    const swap = () => {
        setFrom(to);
        setTo(from);
        convert();
    }
    
  return (
    <div className="container glass">
        <InputField value={amount} changeValue={setAmount} destination={"From"} options={options} curCurrency ={from} changeCur={setFrom}/>
        <InputField destination={"To"} margin={true} options={options} curCurrency ={to} changeCur={setTo} disabled={true} value={computedAmount} changeValue={setComputedAmount}/>
        <button className='convert-button' onClick={convert}>Convert {from} to {to}</button>
        <button className='swap-btn' onClick={swap}>swap</button>

    </div>
  )
}

export default Container