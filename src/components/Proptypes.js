import PropTypes from 'prop-types'

function Proptypes({ nome, idade, sexo }) {
    return (
        <>
            <h1>PropTypes</h1>
            <p>Olá meu nome é {nome}, e tenho {idade} anos, e sou so sexo {sexo}!</p>
        </>
    )
}
Proptypes.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number,
    sexo: PropTypes.string,

}

export default Proptypes

{/* O objetivo do PropTypes é padronizar um tipo específico de resultado que será retornado pela função */ }
{/* Como vemos, precisamos importar o PropTypes */ }