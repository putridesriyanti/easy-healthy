import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
    const router = useRouter();

    const menuItems = [
        { label: 'Edit Profile Information', icon: 'edit', route: '/profile-setup' },
        { label: 'Medical History', icon: 'file-text', route: '/profile-setup' },
        { label: 'Settings', icon: 'cog', route: '#' },
        { label: 'Privacy Policy', icon: 'shield', route: '#' },
        { label: 'Log Out', icon: 'sign-out', route: '/' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}>
                        <FontAwesome name="user-circle" size={80} color={Colors.primary} />
                    </View>
                    <Text style={styles.name}>User Name</Text>
                    <Text style={styles.email}>user@example.com</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>My Health Card</Text>
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Blood Type</Text>
                            <Text style={styles.infoValue}>O+</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Age</Text>
                            <Text style={styles.infoValue}>25</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Allergies</Text>
                            <Text style={styles.infoValue}>Peanuts</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.menuItem}
                            onPress={() => item.route !== '#' && router.push(item.route as any)}
                        >
                            <View style={styles.menuLeft}>
                                <FontAwesome name={item.icon as any} size={20} color={Colors.textLight} />
                                <Text style={styles.menuLabel}>{item.label}</Text>
                            </View>
                            <FontAwesome name="angle-right" size={20} color={Colors.textLight} />
                        </TouchableOpacity>
                    ))}
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
    content: {
        padding: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarContainer: {
        marginBottom: 16,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
    },
    email: {
        fontSize: 16,
        color: Colors.textLight,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 12,
    },
    infoCard: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    infoLabel: {
        color: Colors.textLight,
        fontSize: 16,
    },
    infoValue: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: '500',
    },
    menuContainer: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 8,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F9F9F9',
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuLabel: {
        marginLeft: 16,
        fontSize: 16,
        color: Colors.text,
    },
});
