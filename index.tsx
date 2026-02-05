import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function AuthScreen() {
    const [pin, setPin] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        // Mock authentication
        if (pin.length >= 4) {
            router.replace('/(tabs)/home');
        } else {
            Alert.alert('Error', 'Please enter a PIN with at least 4 digits');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/images/logo.jpg')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.appName}>Easy Healthy</Text>
                <Text style={styles.tagline}>Your Personal Health Companion</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.label}>Enter Security PIN</Text>
                <TextInput
                    style={styles.input}
                    placeholder="****"
                    placeholderTextColor="#999"
                    secureTextEntry
                    keyboardType="numeric"
                    value={pin}
                    onChangeText={setPin}
                    maxLength={6}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textButton}>
                    <Text style={styles.textButtonText}>Forgot PIN?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Secure Health Data Encryption</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        padding: 24,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 48,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    tagline: {
        fontSize: 16,
        color: Colors.textLight,
        marginTop: 8,
    },
    formContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        color: Colors.text,
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        height: 56,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
        backgroundColor: '#F9F9F9',
    },
    button: {
        backgroundColor: Colors.primary,
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textButton: {
        alignItems: 'center',
        marginTop: 16,
    },
    textButtonText: {
        color: Colors.secondary,
        fontSize: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    footerText: {
        color: Colors.textLight,
        fontSize: 12,
    },
});
