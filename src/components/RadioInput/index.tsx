import "./styles.scss";

interface InputRadioInput {
  name: string;
  title: string;
  options: string[];
  children?: React.ReactNode;
}

export function RadioInput({ title, name, options }: InputRadioInput) {
  const inputOptions = options.map((i) => (
    <div className="input-item">
      <input id={i} type="radio" name={name} value="fsdfsf"></input>
      <label htmlFor={i}>{i}</label>
    </div>
  ));
  return (
    <div className="radio-input">
      <p className="title"> {title}</p>

      <div className="input-container">{inputOptions}</div>
    </div>
  );
}
