import logoImg from "../assets/images/logo2.png";

import "../styles/form-page.scss";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { CheckboxInput } from "../components/CheckboxInput";

export function UserFamilyForm() {
  const { user } = useAuth();
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push("/rooms/new");
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

        <form className="">
            <CheckboxInput
                option={["Pai", "Mãe", "Irmãos", "Avós", "Filhos"]}
                title="Diabetes - Relatos de casos na família"
            ></CheckboxInput>
            <CheckboxInput
                option={["Pai", "Mãe", "Irmãos", "Avós", "Filhos"]}
                title="HAS - Pressão Alta"
            ></CheckboxInput>
            <CheckboxInput
                option={["Pai", "Mãe", "Irmãos", "Avós", "Filhos"]}
                title="Colesterol Alto"
            ></CheckboxInput>
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
