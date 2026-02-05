import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const router = useRouter();

    const features = [
        { name: 'Consultation', icon: 'user-md', route: '/consultation' },
        { name: 'Reminders', icon: 'bell', route: '/reminders' },
        { name: 'Education', icon: 'book', route: '/education' },
        { name: 'Records', icon: 'file-text-o', route: '/records' },
        { name: 'Facilities', icon: 'map-marker', route: '/facilities' },
        { name: 'Profile Setup', icon: 'sliders', route: '/profile-setup' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hello,</Text>
                        <Text style={styles.username}>User</Text>
                    </View>
                    <TouchableOpacity style={styles.avatar} onPress={() => router.push('/(tabs)/profile')}>
                        <FontAwesome name="user-circle" size={40} color={Colors.primary} />
                    </TouchableOpacity>
                </View>

                {/* Daily Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.cardTitle}>Today's Health</Text>
                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <FontAwesome name="heart" size={20} color={Colors.error} />
                            <Text style={styles.statValue}>80 bpm</Text>
                            <Text style={styles.statLabel}>Heart Rate</Text>
                        </View>
                        <View style={styles.statItem}>
                            <FontAwesome name="fire" size={20} color="orange" />
                            <Text style={styles.statValue}>1200</Text>
                            <Text style={styles.statLabel}>Calories</Text>
                        </View>
                        <View style={styles.statItem}>
                            <FontAwesome name="moon-o" size={20} color="slateblue" />
                            <Text style={styles.statValue}>7h 30m</Text>
                            <Text style={styles.statLabel}>Sleep</Text>
                        </View>
                    </View>
                </View>

                {/* Features Grid */}
                <Text style={styles.sectionTitle}>Services</Text>
                <View style={styles.grid}>
                    {features.map((feature, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.gridItem}
                            onPress={() => router.push(feature.route as any)}
                        >
                            <View style={styles.iconContainer}>
                                <FontAwesome name={feature.icon as any} size={24} color={Colors.primary} />
                            </View>
                            <Text style={styles.gridLabel}>{feature.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Tips Banner */}
                <View style={styles.banner}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.bannerTitle}>Daily Health Tip</Text>
                        <Text style={styles.bannerText}>Drink at least 8 glasses of water today!</Text>
                    </View>
                    <FontAwesome name="tint" size={40} color={Colors.white} />
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
    scrollContent: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    greeting: {
        fontSize: 16,
        color: Colors.textLight,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
    },
    avatar: {
        padding: 4,
    },
    summaryCard: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        color: Colors.text,
    },
    statLabel: {
        fontSize: 12,
        color: Colors.textLight,
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        width: '31%',
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
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
        backgroundColor: Colors.lightGreen,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    gridLabel: {
        fontSize: 12,
        color: Colors.text,
        textAlign: 'center',
        fontWeight: '500',
    },
    banner: {
        backgroundColor: Colors.secondary,
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    bannerContent: {
        flex: 1,
        marginRight: 16,
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: 4,
    },
    bannerText: {
        fontSize: 14,
        color: Colors.white,
        opacity: 0.9,
    },
});
