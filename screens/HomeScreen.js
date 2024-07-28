import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { authorize, getDailySteps } from 'react-native-google-fit';

const HomeScreen = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    authorize().then(authResult => {
      if (authResult.success) {
        getDailySteps().then(stepsData => {
          setSteps(stepsData[0].value);
        });
      }
    });
  }, []);

  return (
    <View>
      <Text>Steps Today: {steps}</Text>
    </View>
  );
};

export default HomeScreen;
