function Structure({nome, idade, sexo}){               {/* Posso definir as variáveis previamente como props da função, no lugar de definir varias props para variáveis diferentes. Mas no final executará a mesma função que Props.js, porém de forma mais simples */}
    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Sexo: {sexo}</p>
        </div>
    )
}
export default Structure

{/* Os props precisam estar dentro de chaves */}