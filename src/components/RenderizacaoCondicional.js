import { useState } from "react";
function RederizacaoCondicional() {
    const [email, setEmail] = useState( )
    function Renderizacao(event) {
        event.preventDefault()
        alert(`Seu Email é ${email}`);
    };
    function Resetar(){
        setEmail("")
    }
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
                    {email&&(
                        <div>
                            <h2>Resultado</h2>
                            <p>O seu Email é {email}</p>
                            <br/>
                            <button type="reset" onClick={Resetar}>Resetar Valore</button>
                        </div>
                    )}
                </div>
            </form>
        </fieldset>
    );
};
export default RederizacaoCondicional;