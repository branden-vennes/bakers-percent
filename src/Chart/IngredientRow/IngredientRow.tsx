import * as React from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// eslint-disable-next-line no-unused-vars
import {Ingredient} from '../Ingredient';

export const IngredientRow = (props: {
  ingredient: Ingredient;
  onPercentChange: any;
  onAmountChange: any;
  onRemoved: any;
}): React.JSX.Element => {
  const onPercentChange = (event: any) => {
    const newPercent: number = event.target.value;
    props.onPercentChange(props.ingredient.name, newPercent);
  };

  const onAmountChange = (event: any) => {
    const newAmount: number = event.target.value;
    props.onAmountChange(props.ingredient.name, newAmount);
  };

  const removeClicked = () => {
    props.onRemoved(props.ingredient.name);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.ingredient.name}
        {props.ingredient.name !== 'flour' && 
        <Button
          color="primary"
          onClick={removeClicked}>
            remove
        </Button>}
      </TableCell>
      <TableCell align="right">
        {props.ingredient.name === 'flour' ?
          <p>100</p>:
          <TextField
            id="filled-basic"
            type="number"
            slotProps={{ htmlInput: { min: '1', max: '100', step: '1'} }}
            label="Percent"
            onChange={onPercentChange}
            value={props.ingredient.percent}
          />}
      </TableCell>
      <TableCell align="right">
        {props.ingredient.name === 'flour' ?
          <TextField
            id="filled-basic"
            type="number"
            slotProps={{ htmlInput: {min: '0', step: '0.5'}}}
            label="Amount"
            onChange={onAmountChange}
            value={props.ingredient.amount}
          />:
          <p>{props.ingredient.amount.toFixed(2)}</p>
        }
      </TableCell>
    </TableRow>
  );
};
