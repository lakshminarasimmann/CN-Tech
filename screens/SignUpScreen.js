import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        email, password, name, age, weight, height, dietaryPreferences, fitnessGoals
      });
      if (response.status === 201) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput placeholder="Weight" value={weight} onChangeText={setWeight} keyboardType="numeric" />
      <TextInput placeholder="Height" value={height} onChangeText={setHeight} keyboardType="numeric" />
      <TextInput placeholder="Dietary Preferences" value={dietaryPreferences} onChangeText={setDietaryPreferences} />
      <TextInput placeholder="Fitness Goals" value={fitnessGoals} onChangeText={setFitnessGoals} />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text onPress={() => navigation.navigate('Login')}>Already have an account? Log In</Text>
    </View>
  );
};

export default SignUpScreen;
