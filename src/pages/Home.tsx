import {useHistory} from "react-router-dom";

import illustrationImg from '../assets/images/illustration.svg';
import logoImgPPS from '../assets/images/logo2.png';
import googleIconImg from '../assets/images/google-icon.svg';

import {Button} from "../components/Button";
import { useAuth } from "../hooks/useAuth";

import '../styles/auth.scss';
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

export function Home() {
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle()
        }

        history.push("/rooms/new"); 
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();
        if (roomCode.trim() == "") {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert("Room does not exists.");
            return;
        }

        if (roomRef.val().endedAt) {
          alert("Room already closed.");
          return;
      }

        history.push(`/room/${roomCode}`)
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>O melhor remédio é a prevenção</strong>
                <p>Cuide da sua saúde, previna-se e procure um médico.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImgPPS} alt="Projeto de Prevenção"/>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt=""/>
                        Faça login com o Google
                    </button>
                    <div className="separator">Ou entre sem login</div>
                    <form action="">
                        <input
                          type="text"
                          placeholder="Digite seu nome"
                          onChange={event => setRoomCode(event.target.value)}
                          value = {roomCode}
                        />
                        <Button type="submit">
                          Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>           
    )
}

