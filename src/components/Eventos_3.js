function Eventos_3(){
    function clicar(event){
        event.preventDefault()
        console.log('Usuário Cadastrado!');
    }
    return(
        <form onSubmit={clicar}>
        <input type="text" placeholder="Digite"/>
        <input type="submit" value='Botão 4'/>
        </form>
    );
};
export default Eventos_3;

{/* A função '.preventDefault()' associada ao evento 'event' perimte que a página Congele o resultado esperado no Console Log e não permite a páginar dar um refresh (Visto que se trata de um Submit) */}