import { useState } from 'react'
import './App.css'
import BoxTexto from './components/Boxtexto'

let pessoas =[]
function App() {
const [ nome, setNome] = useState("")
const[ idade, setIdade ] = useState("")

const handleClick = () => {
  pessoas.push({id:pessoas.length, nome, idade})
  console.log(pessoas)
  setNome("")
}
const handleNome = (e) => {
  setNome(e.target.value)
}
const handleIdade = (e) => {
  setIdade(e.target.value)
} 
  return (
    <>
    <div className='card'>
      
  </div>
  
      <br />
      <br />
      <h1 className='titulo'>Check list</h1>
      <br />
      <br />
      <BoxTexto produto={pessoas} handleClick={handleClick} handleNome={handleNome} handleIdade={handleIdade} nome={nome} idade={idade}/>
    
    </>
  )
}

export default App

