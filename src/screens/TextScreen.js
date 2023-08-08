import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text style={styles.text}>Enter Password: </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            {name.length < 5 ? <Text>Password msut be longer than 5 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        boarderColor: 'black',
        borderWidth: 1
    },
    text: {
        fontSize: 30
    }
});

export default TextScreen;