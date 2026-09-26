import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

// 1. Define an interface for the component props
interface CounterProps {
    initialValue?: number; // Optional prop
    title: string;         // Required prop
}

// 2. Type the functional component using the defined props
export default function CounterComponent({ title, initialValue = 0 }: CounterProps) {

    // 3. Type the useState hook (strictly allows only numbers)
    const [count, setCount] = useState<number>(initialValue);

    // 4. Typed event handlers
    const handleIncrement = (): void => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = (): void => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
            console.log(count)
            console.log(count)
            console.log(count)

        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.counterText}>{count}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.decrementButton]}
                        onPress={handleDecrement}
                    >
                        <Text style={styles.buttonText}>- Decrement</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.incrementButton]}
                        onPress={handleIncrement}
                    >
                        <Text style={styles.buttonText}>+ Increment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

// 5. Native Stylesheet definition
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        width: '80%',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 16,
    },
    counterText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 6,
    },
    incrementButton: {
        backgroundColor: '#34C759',
    },
    decrementButton: {
        backgroundColor: '#FF3B30',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
