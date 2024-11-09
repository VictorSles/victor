{/* "PROPS" são propriedades de funções, como os parâmetros de funções em python */}
function Props(props){                  {/* O valor inserido pode ter qualquer nomenclatura textual (exceto metodos/funções do JSX) */}
    return(
        <div>
            <h1>Prazer, meu nome é {props.nome}. Tudo bem?</h1>
        </div>
    );
};
export default Props