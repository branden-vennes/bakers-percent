import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const AddIngredient = (props: {onAdd: any}): React.JSX.Element => {
  const [name, setName] = React.useState('');
  const [percent, setPercent] = React.useState(0);

  const nameChanged = (event: any) => {
    setName(event.target.value);
  };

  const percentChanged = (event: any) => {
    setPercent(event.target.value);
  };

  const addClicked = () => {
    if (name && percent) {
      setName('');
      setPercent(0);
      props.onAdd(name, percent);
    }
  };

  return (
    <div>
      <h3>Add Ingredient</h3>
      <TextField label="Name" value={name} onChange={nameChanged} />
      <TextField
        label="Percent"
        type="number"
        value={percent}
        onChange={percentChanged}
      />
      <Button variant="contained" color="primary" onClick={addClicked}>
        Add
      </Button>
    </div>
  );
};
