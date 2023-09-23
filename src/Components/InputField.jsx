import React from 'react'

const InputField = ({destination,margin,options,curCurrency,changeCur,disabled,value,changeValue}) => {
  return (
    <div className="input-field" style={{
        marginTop : margin ? "10px" : "0px"
    }}>
        <div className="labels">
            <p>{destination}</p>
            <p>Currency Value</p>
        </div>
        <div className="lables2">
            <input type="number" disabled={disabled} value={value} onChange={(e)=>changeValue(e.target.value)}/>
            <select value={curCurrency} onChange={(e)=>changeCur(e.target.value)}>
                {
                    options.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                }
                
            </select>
        </div>
    </div>
  )
}

export default InputField