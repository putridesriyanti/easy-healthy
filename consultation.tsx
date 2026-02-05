import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConsultationScreen() {
    const doctors = [
        { name: 'Dr. John Doe', spec: 'Cardiologist', hospital: 'City General Hospital', rating: 4.8 },
        { name: 'Dr. Sarah Smith', spec: 'Pediatrician', hospital: 'Family Care Clinic', rating: 4.9 },
        { name: 'Dr. Michael Chen', spec: 'Nutritionist', hospital: 'Healthy Life Center', rating: 4.7 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Online Consultation</Text>

            <View style={styles.filterContainer}>
                <TouchableOpacity style={[styles.filterChip, styles.activeFilter]}>
                    <Text style={styles.activeFilterText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterChip}>
                    <Text style={styles.filterText}>General</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterChip}>
                    <Text style={styles.filterText}>Specialist</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.listContainer}>
                {doctors.map((doc, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardContent}>
                            <View style={styles.avatarPlaceholder}>
                                <FontAwesome name="user-md" size={32} color={Colors.white} />
                            </View>
                            <View style={styles.docInfo}>
                                <Text style={styles.docName}>{doc.name}</Text>
                                <Text style={styles.docSpec}>{doc.spec}</Text>
                                <Text style={styles.hospital}><FontAwesome name="hospital-o" /> {doc.hospital}</Text>
                            </View>
                            <View style={styles.rating}>
                                <FontAwesome name="star" size={12} color="orange" />
                                <Text style={styles.ratingText}>{doc.rating}</Text>
                            </View>
                        </View>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.chatBtn}>
                                <FontAwesome name="comment-o" size={16} color={Colors.primary} />
                                <Text style={styles.chatBtnText}>Chat</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.videoBtn}>
                                <FontAwesome name="video-camera" size={16} color={Colors.white} />
                                <Text style={styles.videoBtnText}>Video Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        backgroundColor: Colors.white,
    },
    filterContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: Colors.white,
        marginRight: 8,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    activeFilter: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    filterText: {
        color: Colors.text,
    },
    activeFilterText: {
        color: Colors.white,
        fontWeight: '600',
    },
    listContainer: {
        padding: 20,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardContent: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    avatarPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.textLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    docInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    docName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
    },
    docSpec: {
        fontSize: 14,
        color: Colors.primary,
        marginBottom: 4,
    },
    hospital: {
        fontSize: 12,
        color: Colors.textLight,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF8E1',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        height: 24,
    },
    ratingText: {
        marginLeft: 4,
        fontWeight: 'bold',
        color: '#FFB300',
        fontSize: 12,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        paddingTop: 16,
    },
    chatBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginRight: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    chatBtnText: {
        color: Colors.primary,
        fontWeight: '600',
        marginLeft: 8,
    },
    videoBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginLeft: 8,
        borderRadius: 8,
        backgroundColor: Colors.primary,
    },
    videoBtnText: {
        color: Colors.white,
        fontWeight: '600',
        marginLeft: 8,
    },
});
