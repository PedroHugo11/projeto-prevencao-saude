import "./styles.scss";

interface InputTextProps {
  title: string;
  placeHolder: string;
  children?: React.ReactNode;
}

export function InputText({ title, placeHolder }: InputTextProps) {
  return (
    <div className="input-text">
      <p className="title">{title}</p>
      <input className="input" type="text" placeholder={placeHolder}></input>
    </div>
  );
}
