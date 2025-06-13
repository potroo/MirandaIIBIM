import './Boxtexto.css'

function BoxTexto({ handleClick, handleNome, handleIdade, nome, idade, produto, handleMateria, materia, handleDays }) {
  return (
    <>
      <div className="top">
        <input type="text"
          placeholder='digite aqui'
          onChange={handleNome}
          value={nome}
        />
        <input type="text"
          placeholder='Descrição'
          onChange={handleIdade}
          value={idade} />

        <label htmlFor="materias">selecione uma Materia</label>

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

        <select onChange={handleDays}>

        <option value="segunda">Segunda-feira</option>
        <option value="terça">Terça-feira</option>
        <option value="quarta">Quarta-feira</option>
        <option value="quinta">Quinta-feira</option>
        <option value="sexta">Sexta-feira</option>
        <option value="sábado">Sábado</option>
        <option value="domingo">Domingo</option>

        </select>

        < button onClick={handleClick}>clique aqui</button>
      </div >



      <div className='Box'>

        {produto.map(e => (
          <div className="Box2" key={e.nome}>
            <p>nome: {e.nome}</p>
            <p>idade: {e.idade}</p>
          </div>

        ))}
      </div>
    </>
  )
}

export default BoxTexto