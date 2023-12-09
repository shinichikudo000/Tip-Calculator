import { useState } from 'react'
import './App.css'

function App() {
  const [tipAmount, setTipAmount] = useState<string>('0.00')
  const [totalPerPerson, setTotalPerPerson] = useState<string>('0.00')
  const [billAmount, setBillAmount] = useState<string>('0.00')
  const [numberOfPeople, setNumberOfPeople] = useState<string>('0')
  const [tipPercentage, setTipPercentage] = useState<string>('')

  const tipPercentageChange = (e: any) => {
    setTipPercentage(e.target.value)
    console.log(e.target.value)
  }

  const calculateTipValue = () => {
    if(numberOfPeople === '' || parseInt(numberOfPeople, 10) === 0 || billAmount === '' || parseInt(billAmount, 10) === 0) {
      console.log('Number of People and Bill Amount can\'t be equal to zero')
    }
    if (billAmount !== '' && tipPercentage && numberOfPeople !== '' && numberOfPeople !== '0') {
      const tipAmountValue = (parseInt(billAmount, 10) * (parseFloat(tipPercentage) / 100))
      setTipAmount(tipAmountValue.toFixed(2))
  
      const totalPerPersonValue = ((parseInt(billAmount, 10) + tipAmountValue) / parseInt(numberOfPeople, 10)).toFixed(2)
      setTotalPerPerson(totalPerPersonValue)
    }
  }

  return (
    <>
      <div className="wrapper">

        <div className="tip-amount">
            <div className="label">Tip Amount</div>
            <div className="dollars"><sup>$</sup><span id="tip-amount">{tipAmount}</span></div>
        </div>
        <div className="total-per-person">
            <div className="label">Total Per Person</div>
            <div className="dollars"><sup>$</sup><span id="total-per-person">{totalPerPerson}</span></div>
        </div>

        <div className="input-fields">
            <div className="bill-amount">
                <div className="field">
                    <input type="text" id="bill-amount" name="bill-amount" value={billAmount} onChange={(e) => {
                      const value = e.target.value
                      if(/^\d+(\.\d{0,2})?$/.test(value) || value === ''){
                        setBillAmount(e.target.value)
                      }
                    }
                    }
                    />
                </div>
                <div className="label">Bill Amount</div>
            </div>
            <div className="number-of-people">
                <div className="field">
                    <input type="text" id="number-of-people" name="number-of-people" value={numberOfPeople} onChange={(e) => {
                      const value = e.target.value
                      if(/^\d+$/.test(value) || value === ''){
                        setNumberOfPeople(e.target.value)
                      }
                    }
                    }/>
                </div>
                <div className="label">Number of People</div>
            </div>
        </div>

        <div className="tip-percentages">
            <div>
                <input type="radio" name="tip" value="5%" id="five-percent" onChange={tipPercentageChange}/>
                <label htmlFor="five-percent">
                    5%
                </label>
            </div>
            <div>
                <input type="radio" name="tip" value="10%" id="ten-percent" onChange={tipPercentageChange}/>
                <label htmlFor="ten-percent">
                    10%
                </label>
            </div>
            <div>
                <input type="radio" name="tip" value="15%" id="fifteen-percent" onChange={tipPercentageChange}/>
                <label htmlFor="fifteen-percent">
                    15%
                </label>
            </div>
            <div>
                <input type="radio" name="tip" value="20%" id="twenty-percent" onChange={tipPercentageChange}/>
                <label htmlFor="twenty-percent">
                    20%
                </label>
            </div>
        </div>
        <div className="button-wrapper" onClick={calculateTipValue}>
            <button id="calculate">Calculate</button>
        </div>
        </div>
    </>
  )
}

export default App
