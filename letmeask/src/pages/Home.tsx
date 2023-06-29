import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

import illustrationImg from '../assets/images/Illustration.svg'
import Logo from '../assets/images/Logo.svg'
import googleLogo from '../assets/images/googleIcon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function Home() {
    const navigate = useNavigate()
    const { user, signInWithGoogle} = useAuth()

    async function handleCreateRoom() {
        if(!user) {
          await signInWithGoogle()
        }

        navigate('/rooms/new')
    }
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustraçao de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={Logo} alt="Logo Letmeask" />
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleLogo} alt="" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder='Digite o codigo da sala'
                        />
                        <Button type='submit'>
                            Entrar na Sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}