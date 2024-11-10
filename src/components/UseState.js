import { useState } from "react";
function UseState() {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    function Submit(event) {
        event.preventDefault()
        alert(`O meu Cadastro é ${login} e minha senha é ${password}`);
    }
    return (
        <fieldset>
            <legend>Use State</legend>
            <form onSubmit={Submit}>
                <div>
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        placeholder="Digite..."
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        placeholder="digite..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value='Botão 5' />
                </div>
            </form>
        </fieldset>
    )
}
export default UseState

{/* Login: Nomenclatura usada para associar-se a 'SetLogin'.... SetLogin: Variável.... UseState("") Valor inicial do estado, nesse caso é vazio ("") */ }