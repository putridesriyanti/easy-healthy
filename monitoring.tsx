import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MonitoringScreen() {
    const [activeTab, setActiveTab] = useState('vitals'); // vitals, diet, activity

    const renderTabButton = (id: string, label: string, icon: any) => (
        <TouchableOpacity
            style={[styles.tabButton, activeTab === id && styles.activeTabButton]}
            onPress={() => setActiveTab(id)}
        >
            <FontAwesome name={icon} size={16} color={activeTab === id ? Colors.white : Colors.text} />
            <Text style={[styles.tabText, activeTab === id && styles.activeTabText]}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Health Monitoring</Text>

            <View style={styles.tabContainer}>
                {renderTabButton('vitals', 'Vitals', 'heartbeat')}
                {renderTabButton('diet', 'Diet', 'cutlery')}
                {renderTabButton('activity', 'Activity', 'bicycle')}
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {activeTab === 'vitals' && (
                    <View>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Blood Pressure</Text>
                                <FontAwesome name="plus-circle" size={24} color={Colors.primary} />
                            </View>
                            <Text style={styles.cardValue}>120/80 <Text style={styles.unit}>mmHg</Text></Text>
                            <Text style={styles.timestamp}>Last update: Today 9:00 AM</Text>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Blood Sugar</Text>
                                <FontAwesome name="plus-circle" size={24} color={Colors.primary} />
                            </View>
                            <Text style={styles.cardValue}>95 <Text style={styles.unit}>mg/dL</Text></Text>
                            <Text style={styles.timestamp}>Last update: Today 8:00 AM</Text>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Weight</Text>
                                <FontAwesome name="plus-circle" size={24} color={Colors.primary} />
                            </View>
                            <Text style={styles.cardValue}>65 <Text style={styles.unit}>kg</Text></Text>
                            <Text style={styles.timestamp}>Last update: Yesterday</Text>
                        </View>
                    </View>
                )}

                {activeTab === 'diet' && (
                    <View>
                        <View style={styles.summaryBox}>
                            <Text style={styles.summaryLabel}>Calories Remaining</Text>
                            <Text style={styles.summaryValue}>800 / 2000</Text>
                            <View style={styles.progressBarBg}>
                                <View style={[styles.progressBarFill, { width: '60%' }]} />
                            </View>
                        </View>

                        {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                            <View key={meal} style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardTitle}>{meal}</Text>
                                    <FontAwesome name="plus-square" size={24} color={Colors.primary} />
                                </View>
                                <Text style={styles.emptyText}>No food log yet</Text>
                            </View>
                        ))}
                    </View>
                )}

                {activeTab === 'activity' && (
                    <View>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Steps</Text>
                            </View>
                            <Text style={styles.cardValue}>5,432 <Text style={styles.unit}>steps</Text></Text>
                            <Text style={styles.timestamp}>Goal: 10,000</Text>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Sleep</Text>
                                <FontAwesome name="bed" size={24} color={Colors.primary} />
                            </View>
                            <Text style={styles.cardValue}>7 <Text style={styles.unit}>hours</Text></Text>
                            <Text style={styles.timestamp}>Deep Sleep: 2h</Text>
                        </View>
                    </View>
                )}
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
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 16,
    },
    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    tabButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    activeTabButton: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    tabText: {
        marginLeft: 8,
        fontWeight: '600',
        color: Colors.text,
    },
    activeTabText: {
        color: Colors.white,
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text,
    },
    cardValue: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    unit: {
        fontSize: 16,
        color: Colors.textLight,
        fontWeight: 'normal',
    },
    timestamp: {
        fontSize: 12,
        color: Colors.textLight,
        marginTop: 8,
    },
    summaryBox: {
        backgroundColor: Colors.secondary,
        borderRadius: 16,
        padding: 24,
        marginBottom: 24,
        alignItems: 'center',
    },
    summaryLabel: {
        color: Colors.white,
        fontSize: 16,
        marginBottom: 8,
    },
    summaryValue: {
        color: Colors.white,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    progressBarBg: {
        width: '100%',
        height: 10,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: Colors.white,
        borderRadius: 5,
    },
    emptyText: {
        color: Colors.textLight,
        fontStyle: 'italic',
    },
});
