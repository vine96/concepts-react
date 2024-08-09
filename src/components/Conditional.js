import { useState } from "react"

function Conditional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    const [placeholder, setPlaceholder] = useState('Digite o seu e-mail')

    function sendEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function cleanEmail(e){
        e.preventDefault()
        setUserEmail('')
        setPlaceholder('')
        setEmail('')
    }

    return(
        <>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    value={email}
                />
                <button type="submit" onClick={sendEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={cleanEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </>
    )
}

export default Conditional