import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EducationScreen() {
    const [activeTab, setActiveTab] = useState('articles');

    const articles = [
        { title: 'Understanding Blood Pressure', author: 'Dr. Smith', readTime: '5 min' },
        { title: 'The Benefits of Balanced Diet', author: 'Nutritionist Jane', readTime: '3 min' },
        { title: 'Sleep Hygiene Tips', author: 'Sleep Expert', readTime: '4 min' },
    ];

    const videos = [
        { title: '10 Min Morning Yoga', duration: '10:00' },
        { title: 'How to Measure Sugar Levels', duration: '05:30' },
        { title: 'Healthy Meal Prep', duration: '15:00' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'articles' && styles.activeTab]}
                    onPress={() => setActiveTab('articles')}
                >
                    <Text style={[styles.tabText, activeTab === 'articles' && styles.activeTabText]}>Articles</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'videos' && styles.activeTab]}
                    onPress={() => setActiveTab('videos')}
                >
                    <Text style={[styles.tabText, activeTab === 'videos' && styles.activeTabText]}>Videos</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {activeTab === 'articles' ? (
                    <View>
                        {articles.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.card}>
                                <View style={styles.cardIcon}>
                                    <FontAwesome name="file-text-o" size={24} color={Colors.primary} />
                                </View>
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{item.title}</Text>
                                    <Text style={styles.cardMeta}>{item.author} • {item.readTime} read</Text>
                                </View>
                                <FontAwesome name="angle-right" size={20} color={Colors.textLight} />
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <View>
                        {videos.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.card}>
                                <View style={styles.videoThumbnail}>
                                    <FontAwesome name="play-circle" size={40} color="rgba(255,255,255,0.8)" />
                                </View>
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{item.title}</Text>
                                    <Text style={styles.cardMeta}>{item.duration}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                <View style={styles.tipBox}>
                    <Text style={styles.tipTitle}>Did you know?</Text>
                    <Text style={styles.tipText}>
                        Walking for just 30 minutes a day can significantly reduce the risk of heart disease.
                    </Text>
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
    tabs: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: Colors.primary,
    },
    tabText: {
        fontSize: 16,
        color: Colors.textLight,
        fontWeight: '600',
    },
    activeTabText: {
        color: Colors.primary,
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
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    cardIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
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
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    cardMeta: {
        fontSize: 12,
        color: Colors.textLight,
    },
    videoThumbnail: {
        width: 80,
        height: 60,
        backgroundColor: '#333',
        borderRadius: 8,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipBox: {
        marginTop: 24,
        backgroundColor: '#FFF3E0',
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FFE0B2',
    },
    tipTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 8,
    },
    tipText: {
        color: '#E65100',
        lineHeight: 20,
    },
});
