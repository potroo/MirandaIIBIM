import { useState } from 'react'
import './App.css'
import BoxTexto from './components/Boxtexto'

let tarefas =[]
function App() {
const [ nome, setNome] = useState("")
const[ day, setDays ] = useState("segunda")
const[ materia, setMateria ] = useState("Matematica")
// let newArray = tarefas.filter( item => materia===item.materia)
// let newVariedades = tarefas.filter( item => day===item.days)


const handleClick = () => {
  tarefas.push({id:tarefas.length,materia, nome, day})
  // console.log(tarefas)
  setNome("")
  setDays("")
}
const handleNome = (e) => {
  setNome(e.target.value)
}
const handleMateria = (e) => {
  setMateria(e.target.value)
}
const handleDays = (e) => {
  console.log("")
  setDays(e.target.value)
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
      <BoxTexto listaTarefas={tarefas} handleClick={handleClick} handleNome={handleNome} nome={nome}  handleMateria={handleMateria} materia={materia} handleDays={handleDays} days={day}/>
    
    </>
  )
}

export default App

