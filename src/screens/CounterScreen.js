import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
    //state === {count: number}
    //action === {type: 'Increase' || 'Decrease', payload: -1 || 1}
    switch (action.type){
        case 'Increase':
            return state.count + action.payload
        case 'Decrease':
            return state.count + action.payload
        default:
            return state.count
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;
    
    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type: 'Increase', payload: 1});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: 'Decrease', payload: -1});
            }}/>
            <Text>Current Count: {count}</Text>
        </View>

    );

}

const styles = StyleSheet.create({});

export default CounterScreen;