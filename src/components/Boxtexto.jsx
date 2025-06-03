import './Boxtexto.css'

function BoxTexto( {handleClick, handleNome, handleIdade, nome, idade, produto} ) {
    return (
        <>
        <div className="top">
        <input type="text"
        placeholder='digite aqui'
        onChange={handleNome}
        value={nome}
        />
      <input type="number" 
        placeholder='digite aqui'
        onChange={handleIdade}
        value={idade}/>

      < button onClick={handleClick}>clique aqui</button></div>   

            <div className='Box'>

            {produto.map(e=>(
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