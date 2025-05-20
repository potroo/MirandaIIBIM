import './Boxtexto.css'

function Box( {produto} ) {
    return (
        <>
        <div className="top"></div>
            <div className='Box'>
                <div className='Texto'>
                    <p> {produto} </p>
                </div>
            </div>
        </>
    )
}

export default Box