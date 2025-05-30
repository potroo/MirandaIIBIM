import './Boxtexto.css'

function BoxTexto( {handleClick, handleNome, handleIdade, nome, idade, produto} ) {
    return (
        <>
        <div className="top"><input type="text"
        placeholder='digite aqui'
        onChange={handleNome}
        value={nome}/>
      <input type="number" 
        placeholder='digite aqui'
        onChange={handleIdade}
        value={idade}/>
      <button onClick={handleClick}>clique aqui</button></div>

            <div className='Box'>
                <div className='Texto'>
                    <p> {produto} </p>
                </div>
            </div>
        </>
    )
}

export default BoxTexto