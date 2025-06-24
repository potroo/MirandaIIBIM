import './Boxtexto.css'

function BoxTexto({ handleClick, handleNome, nome, listaTarefas, handleMateria, handleDays }) {
  return (
    <>
      <div className="top">
        <div>
        <input type="text"
          placeholder='digite aqui'
          onChange={handleNome}
          value={nome}
        />
        {/* <input type="text"
          placeholder='Descrição'
          onChange={handleIdade}
          value={idade} /> */}

        <label htmlFor="materias">selecione uma Materia</label>
        </div>
        <div>
        <select onChange={handleMateria}>

          <option value="Matematica">Matematica</option>
          <option value="português">português</option>
          <option value="biologia">biologia</option>
          <option value="Quimica">Quimica</option>
          <option value="Fisica">Fisica</option>
          <option value="Historia">Historia</option>
          <option value="Georafia">Georafia</option>

        </select>

        <label htmlFor="days">Dias da semana</label>
        </div>
        <div>
        <select onChange={handleDays}>

          <option value="segunda">Segunda-feira</option>
          <option value="terça">Terça-feira</option>
          <option value="quarta">Quarta-feira</option>
          <option value="quinta">Quinta-feira</option>
          <option value="sexta">Sexta-feira</option>
          <option value="sábado">Sábado</option>
          <option value="domingo">Domingo</option>

        </select>
        </div>

        < button onClick={handleClick}>clique aqui</button>
      </div >



      <div className='Box'>

        {listaTarefas.map(e => (
          <div className="Box2" key={e.id}>
            <p>nome: {e.nome}</p>
            <p>materia: {e.materia}</p>
            <p>dia: {e.day}</p>
          </div>

        ))}
      </div>
    </>
  )
}

export default BoxTexto