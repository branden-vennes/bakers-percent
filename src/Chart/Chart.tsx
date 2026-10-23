import * as React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

// eslint-disable-next-line no-unused-vars
import {Ingredient} from './Ingredient';
import {IngredientRow} from './IngredientRow/IngredientRow';
import {AddIngredient} from './AddIngredient';

export const Chart = (): React.JSX.Element => {
  const initialIngredients: Array<Ingredient> = [
    {
      name: 'flour',
      percent: 100,
      amount: 10,
    },
  ];

  const [ingredients, setIngredients] = React.useState(initialIngredients);

  const percentChange = (name: string, percent: number) => {
    if (!percent || percent <= 0) {
      return;
    }

    const flourAmount = ingredients.find((x) => x.name === 'flour')?.amount;

    if (!flourAmount) {
      return;
    }

    const newIngredients = ingredients.map((x) => {
      if (x.name === name) {
        const newAmount = (percent * flourAmount) / 100;

        return {
          name: name,
          percent: percent,
          amount: newAmount,
        } as Ingredient;
      }

      return x;
    });

    setIngredients(newIngredients);
  };

  const amountChange = (name: string, amount: number) => {
    if (!amount || amount <= 0) {
      return;
    }

    const newIngredients = ingredients.map((x) => {
      return {
        name: x.name,
        percent: x.percent,
        amount: (x.percent * amount) / 100,
      } as Ingredient;
    });

    setIngredients(newIngredients);
  };

  const ingredientAdded = (name: string, percent: number) => {
    if (ingredients.find((x) => x.name === name)) {
      return;
    }

    const flourAmount = ingredients.find((x) => x.name === 'flour')?.amount;

    const newIngredient = {
      name: name,
      percent: percent,
      amount: ((flourAmount || 0) * percent) / 100,
    } as Ingredient;

    const newIngredients = ingredients.concat([newIngredient]);

    setIngredients(newIngredients);
  };

  const ingredientRemoved = (name: string) => {
    const newIngredients = ingredients.filter((x) => x.name !== name);
    setIngredients(newIngredients);
  };

  return (
    <div className="chart-container">
      <AddIngredient onAdd={ingredientAdded} />
      <TableContainer component={Paper}>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell align="right">Percent (%)</TableCell>
              <TableCell align="right">Weight (grams)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredients.map((ingredient: Ingredient) => (
              <IngredientRow
                key={ingredient.name}
                ingredient={ingredient}
                onPercentChange={percentChange}
                onAmountChange={amountChange}
                onRemoved={ingredientRemoved}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
