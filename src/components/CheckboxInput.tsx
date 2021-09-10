
import React from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface CheckboxInputProps {
  option: string[];
  title: string;
  children?: React.ReactNode;
}

const GreenCheckbox = withStyles({
    root: {
      color: '#835afd',
      '&$checked': {
        color: '#835afd',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export function CheckboxInput({ option, title }: CheckboxInputProps) {    

    const checkboxOptions = option.map((i) => (
        <FormControlLabel
        control={<GreenCheckbox />}
        label={i}
      />
    ));

  return (
    <div className="input-text" style={{marginTop: '1rem'}}>
      <p className="title">{title}</p>
      <div className="input-container">{checkboxOptions}</div>
    </div>
  );
}