import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/Illustration.svg'
import Logo from '../assets/images/Logo.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function NewRoom() {
   // const { user } = useAuth

    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustraçao de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={Logo} alt="Logo Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder='Nome da Sala'
                        />
                        <Button type='submit'>
                            Criar Sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
    }
