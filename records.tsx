import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecordsScreen() {
    const records = [
        { title: 'Blood Test Results', date: 'Jan 28, 2026', type: 'lab' },
        { title: 'Prescription - Antibiotics', date: 'Jan 15, 2026', type: 'rx' },
        { title: 'Referral Letter - Cardiologist', date: 'Dec 10, 2025', type: 'ref' },
        { title: 'X-Ray Report', date: 'Nov 05, 2025', type: 'img' },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'lab': return 'flask';
            case 'rx': return 'file-text';
            case 'ref': return 'user-md';
            case 'img': return 'file-image-o';
            default: return 'file';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Medical Records</Text>

            <ScrollView contentContainerStyle={styles.content}>
                {records.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.card}>
                        <View style={styles.iconBox}>
                            <FontAwesome name={getIcon(item.type) as any} size={24} color={Colors.primary} />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDate}>{item.date}</Text>
                        </View>
                        <FontAwesome name="download" size={20} color={Colors.textLight} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        padding: 20,
    },
    content: {
        padding: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: Colors.lightGreen,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 4,
    },
    cardDate: {
        fontSize: 12,
        color: Colors.textLight,
    },
});
