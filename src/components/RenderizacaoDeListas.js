function RenderizacaoDeListas({itens}) {
    return (
        <div>
            <h1>Meus Itens da Lista</h1>
            {itens.length > 0 ? (
                itens.map((item) => (
                <p>{item}</p>
            ))
        ) : (
                <p>Lista não encontrada!</p>
            )}
        </div>
    )
}
export default RenderizacaoDeListas

{/* 1) Notar sempre que o parametro da função (lista) deve estar entre chaves, como se fosse um structure */}
{/* 2) O parÂmetro de Map deve ser o variável que representa cada um dos itens da lista, como o 'x' de 'for x in lista' */}
{/* 3) O MAP (mapeamento) de a função de mapear os itens de uma lista em um 'laço for' */}