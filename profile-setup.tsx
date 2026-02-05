import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileSetupScreen() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        bloodType: '',
        allergies: '',
        history: '',
    });

    const handleSave = () => {
        Alert.alert('Success', 'Profile updated successfully!');
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.headerTitle}>Personal Health Profile</Text>
                <Text style={styles.subtitle}>Please enter your basic health information</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChangeText={(t) => setFormData({ ...formData, fullName: t })}
                    />
                </View>

                <View style={styles.row}>
                    <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="25"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={[styles.formGroup, { flex: 1, marginLeft: 8 }]}>
                        <Text style={styles.label}>Blood Type</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="O+"
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Allergies</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Peanuts, Penicillin..."
                        multiline
                        numberOfLines={2}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Disease History</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Diabetes, Hypertension..."
                        multiline
                        numberOfLines={2}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Current Medications</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="List any ongoing medications..."
                        multiline
                        numberOfLines={2}
                    />
                </View>

                <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.saveBtnText}>Save Profile</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        padding: 24,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.textLight,
        marginBottom: 32,
    },
    formGroup: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: Colors.text,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    saveBtn: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    saveBtnText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
