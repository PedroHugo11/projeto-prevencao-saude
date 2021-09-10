import logoImg from "../assets/images/logo2.png";
import { InputText } from "../components/TextInput";

import "../styles/form-page.scss";
import { RadioInput } from "../components/RadioInput";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export function UserHealthForm() {
  const { user } = useAuth();
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push("/user/family");
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
            title="Medicamentos em uso atual"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Doenças Crônicas"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Tipo de Diabetes"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Tempo de diagnóstico"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Medicamentos"
          ></InputText>

          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Cirurgias"
          ></InputText>
          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Doenças Associadas"
          ></InputText>
          <RadioInput
            name="insulina"
            title="Faz uso de Insulina"
            options={["Sim", "Não"]}
          ></RadioInput>
          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Quantidade"
          ></InputText>
          <InputText
            placeHolder="Informe a resposta referente a você"
            title="Frequência"
          ></InputText>
          <RadioInput
            name="blood"
            title="Exame de sangue recente"
            options={["Sim", "Não"]}
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
