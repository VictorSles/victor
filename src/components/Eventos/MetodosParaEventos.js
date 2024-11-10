import Botao from "./Botao"
function MetodosParaEventos() {
    function evento_1() {
        alert("Meu primeiro metodo com evento aplicado em uma função com o Botao, feito com sucesso!!! P1");
    }
    function evento_2(){
        alert("Meu primeiro metodo com evento aplicado em uma função com o Botao, feito com sucesso!!! P2")
    }
    return (
        <>
            <Botao text='ButtonWithEvent_1' event={evento_1} />
            <Botao text='ButtonWithEvent_2' event={evento_2} />
        </>
    )
}
export default MetodosParaEventos

{/* Com essa função, posso aplicar  metodos para inputs e botões executarem funções específicas, alem de dividir o script por partes e não com tudo dentro do mesmo script */}