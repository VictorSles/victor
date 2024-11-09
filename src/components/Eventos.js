function Eventos() {
    function Cadastrar(event){
        event.preventDefault()
        alert('Cadastro concluído!');
        
    }
    return (
        <div>
            <form onSubmit={Cadastrar}>
                <input type="text" placeholder="Escreva aqui"></input>
                <button>Enviar</button>
            </form>
        </div>
    );
};
export default Eventos