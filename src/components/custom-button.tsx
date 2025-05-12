import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    isEnabled?: boolean;
    buttonStyle?: object;
    textStyle?: object;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    isEnabled,
    buttonStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                { backgroundColor: isEnabled ? '#212f3c' : '#E0E0E0' },
                buttonStyle,
            ]}
            onPress={onPress}
            disabled={!isEnabled}
        >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 20,
        marginHorizontal: 50,
        marginBottom: 20,
        width: '80%',
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});