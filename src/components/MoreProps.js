function MoreProps(props){           {/* Posso criar varias props para serem chamadas no App.js se eu quiser */}
    const variavel = "1234";
    return(
        <div>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Sexo: {props.sexo}</p>
            <p>Variável Pré-Definida {props.variavel}</p>
        </div>
    );
};
export default MoreProps