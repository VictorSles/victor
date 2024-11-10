import PropTypes from "prop-types";
function Eventos_2({ parametro_1, parametro_2 }) {
    function clicar() {
        alert(`Digitou a palavra ${parametro_1}`);
    }
    function clicar_2() {
        alert(`Digitou a palavra ${parametro_2}`);
        
    }
    Eventos_2.propTypes = {
        parametro_1: PropTypes.string,
        parametro_2: PropTypes.number,
    }
    return (
        <>
            <form onSubmit={clicar}>
                <div>
                    <input type="submit" value='Botão 2'/>
                </div>
            </form>
            <form onSubmit={clicar_2}>
                <div>
                    <input type="submit" value='Botão 3'/>
                </div>
            </form>
        </>
    );
};
export default Eventos_2;

{/* Uma coisa importante é notar que eu uso creses para específicar o parâmetro no alert, e não aspas simples nem duplas */}