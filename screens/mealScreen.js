import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const MealScreen = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/meals', { params: { calories: 2000 } });
        setMeals(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.recipe.uri}
        renderItem={({ item }) => (
          <View>
            <Text>{item.recipe.label}</Text>
            <Text>{item.recipe.calories.toFixed(2)} kcal</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MealScreen;
