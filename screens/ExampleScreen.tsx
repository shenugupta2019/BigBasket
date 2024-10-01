import React,{useState} from 'react';
import {View} from 'react-native';
import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/button/Button';
import ButtonWithIcon from '../components/molecules/buttonWithIcon/ButtonWithIcon';
import TextInputComponent from '../components/atoms/textComponent/TextInputComponent'


const ExampleScreen = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = () => {
    if (!text) {
      setError('This field is required');
    } else {
      setError('');
      // Handle successful submission
      console.log('Submitted:', text);
    }
  };
  return (
    <View style={{padding: 16}}>
           <TextInputComponent
        label="Enter your text"
        value={text}
        onChangeText={setText}
        error={error}
        placeholder="Type here..."
      />

<Button title="Submit" onPress={handleSubmit} />
      <Typography variant="h1" color="blue" align="center">
        Heading 1
      </Typography>

      <Typography variant="body">
        This is body text without a custom style.
      </Typography>
      <Button title="Click Me" onPress={() => console.log('Button pressed!')} />
      <Button
        title="Secondary Button"
        variant="secondary"
        onPress={() => console.log('Secondary Button pressed!')}
        color="yellow"
        backgroundColor="darkgreen"
      />

      <Button
        title="Custom Button"
        onPress={() => console.log('Custom Button pressed!')}
        style={{borderRadius: 20, paddingVertical: 10}} // Custom container styles
        textStyle={{fontSize: 20, fontWeight: 'normal'}} // Custom text styles
      />
      <Button
        title="Disabled Button"
        onPress={() => console.log('This will not fire')}
        disabled={true}
      />
      <ButtonWithIcon
        title="Add to Cart"
        iconName="cart-outline"
        onPress={() => console.log('Button pressed!')}
        iconPosition="left"
      />

      <ButtonWithIcon
        title="Next"
        iconName="arrow-forward-outline"
        onPress={() => console.log('Next button pressed!')}
        iconPosition="right"
        backgroundColor="green"
        color="white"
      />
    </View>
  );
};

export default ExampleScreen;
