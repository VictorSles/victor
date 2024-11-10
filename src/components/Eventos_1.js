function Eventos_1(){
    function clicar(){
        alert("Cliquei no 'botão 1'")
    }
    return(
        <>
            <input type="text" placeholder="Digite..."></input>
            <button onClick={clicar}>Botão 1</button>
        </>
    )
}
export default Eventos_1