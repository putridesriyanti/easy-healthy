import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FacilitiesScreen() {
    const facilities = [
        { name: 'City General Hospital', type: 'Hospital', dist: '1.2 km', addr: '123 Health Ave' },
        { name: 'Green Cross Pharmacy', type: 'Pharmacy', dist: '0.5 km', addr: '45 Main St' },
        { name: 'Community Clinic', type: 'Clinic', dist: '2.0 km', addr: '89 Community Rd' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Find Facilities</Text>

            {/* Mock Map View */}
            <View style={styles.mapContainer}>
                <View style={styles.mapPlaceholder}>
                    <FontAwesome name="map-marker" size={48} color={Colors.primary} />
                    <Text style={styles.mapText}>Map View</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.listContainer}>
                <Text style={styles.sectionTitle}>Nearby Locations</Text>
                {facilities.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.card}>
                        <View style={styles.iconBox}>
                            <FontAwesome
                                name={item.type === 'Pharmacy' ? 'medkit' : 'hospital-o'}
                                size={24}
                                color={Colors.white}
                            />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <Text style={styles.cardType}>{item.type} • {item.dist}</Text>
                            <Text style={styles.cardAddr}>{item.addr}</Text>
                        </View>
                        <View style={styles.navBtn}>
                            <FontAwesome name="location-arrow" size={20} color={Colors.primary} />
                        </View>
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
        paddingBottom: 10,
    },
    mapContainer: {
        height: 200,
        marginHorizontal: 20,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#E0E0E0',
        marginBottom: 20,
    },
    mapPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C8E6C9',
    },
    mapText: {
        marginTop: 8,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 16,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    iconBox: {
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
    cardType: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: '500',
    },
    cardAddr: {
        fontSize: 12,
        color: Colors.textLight,
        marginTop: 2,
    },
    navBtn: {
        padding: 8,
    },
});
