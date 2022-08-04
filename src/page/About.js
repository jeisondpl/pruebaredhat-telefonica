import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../logo.svg'

const URL_RICK = process.env.REACT_APP_API_RICK

const About = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch(URL_RICK)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
        setdata(response.results)
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>DDDDD jeison src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        {data.map((item) => {
          return <div>{item.name}</div>
        })}
      </header>
    </div>
  )
}

export default About
