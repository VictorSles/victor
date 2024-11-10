import { useState } from "react";
function RederizacaoCondicional() {
    const [email, setEmail] = useState()
    function Renderizacao() {
        alert(`Seu Email é ${email}`);
    };
    return (
        <fieldset>
            <legend>Renderização Condicional</legend>
            <form>
                <div>
                    <input
                        type="text"
                        htmlFor='email'
                        placeholder="Digite..."
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button type="submit" onClick={Renderizacao}>Botao 6</button>
                </div>
                
            </form>
        </fieldset>
    );
};
export default RederizacaoCondicional;