import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positive
}) => {
  if (total < 1) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="positive" value={positive} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = e => {
    const newGood = good + 1
    const newTotal = total + 1
    const newPositive = newGood / newTotal * 100

    setGood(newGood)
    setTotal(newTotal)
    setPositive(newPositive)
  }

  const handleNeutralClick = e => {
    const newTotal = total + 1
    const newPositive = good / newTotal * 100

    setNeutral(neutral + 1)
    setTotal(newTotal)
    setPositive(newPositive)
  }

  const handleBadClick = e => {
    const newTotal = total + 1
    const newPositive = good / newTotal * 100

    setBad(bad + 1)
    setTotal(newTotal)
    setPositive(newPositive)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positive={positive}
      />
    </div>
  )
}

export default App