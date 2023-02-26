import React from 'react';
import styles from '../../Styles.module.css';
import Card from '../UI/Card';
import MealItem from './mealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const mappedList = ({ id, name, description, price }) => (
  <MealItem key={id} id={id} name={name} description={description} price={price} />
);

const AvailableMeals = () => {
  const availableMeals = DUMMY_MEALS.map(mappedList);
  return (
    <section className={styles.meals}>
      <h1>Today's Menu</h1>
      <Card>
        <ul>{availableMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
