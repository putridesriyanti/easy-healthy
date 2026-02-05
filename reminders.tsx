import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RemindersScreen() {
    const reminders = [
        { title: 'Amoxicillin', time: '08:00 AM', type: 'med', active: true },
        { title: 'Vitamin C', time: '01:00 PM', type: 'med', active: true },
        { title: 'Dr. Smith Checkup', time: 'Fri, 10:00 AM', type: 'doc', active: true },
        { title: 'Baby Immunization', time: 'Next Month', type: 'baby', active: false },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'med': return 'medkit';
            case 'doc': return 'stethoscope';
            case 'baby': return 'child';
            default: return 'bell';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Health Reminders</Text>

            <ScrollView contentContainerStyle={styles.content}>
                {reminders.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name={getIcon(item.type) as any} size={24} color={Colors.white} />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardTime}>{item.time}</Text>
                        </View>
                        <Switch
                            value={item.active}
                            trackColor={{ false: '#767577', true: Colors.lightGreen }}
                            thumbColor={item.active ? Colors.primary : '#f4f3f4'}
                        />
                    </View>
                ))}

                <View style={styles.addBtnContainer}>
                    <Text style={styles.addBtnText}>+ Add New Reminder</Text>
                </View>
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
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.text,
    },
    cardTime: {
        fontSize: 14,
        color: Colors.textLight,
        marginTop: 4,
    },
    addBtnContainer: {
        marginTop: 20,
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 12,
        borderStyle: 'dashed',
    },
    addBtnText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: '600',
    },
});
