import logoImg from "../assets/images/logo2.png";
import { InputText } from "../components/TextInput";
import { RoomCode } from "../components/RoomCode";

import "../styles/form-page.scss";
import { RadioInput } from "../components/RadioInput";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export function UserProfileForm() {
  const { user } = useAuth();
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push("/user/health");
  }, []);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
        </div>
      </header>
      <main>
        <div className="room-title"></div>

        <form className="profile-form">
          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Idade"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Cor"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Peso"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Altura"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Profissão"
          ></InputText>

          <RadioInput
            name="sex"
            title="Sexo"
            options={["Masculino", "Feminino"]}
          ></RadioInput>
        </form>
      </main>
      <footer>
        <div className="user-info">
          <img src={user?.avatar} alt={user?.name} />
          <span>{user?.name}</span>
        </div>
        <Button type="submit" onClick={onClick} disabled={!user}>
          Enviar resposta
        </Button>
      </footer>
    </div>
  );
}
