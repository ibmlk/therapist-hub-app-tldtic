
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { mockTherapists, mockServices } from '@/data/mockData';
import { INDONESIAN_CITIES, ServiceCategory } from '@/types';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<string>('All Services');

  const filteredTherapists = mockTherapists.filter((therapist) => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'All Cities' || therapist.location.city === selectedCity;
    const matchesGender = selectedGender === 'All' || therapist.gender === selectedGender;
    const matchesService = selectedService === 'All Services' || 
      therapist.services.some(s => s.category === selectedService);
    
    return matchesSearch && matchesCity && matchesGender && matchesService;
  });

  const serviceCategories: ServiceCategory[] = [
    'Swedish Massage',
    'Deep Tissue',
    'Sports Massage',
    'Thai Massage',
    'Aromatherapy',
    'Hot Stone',
    'Reflexology',
    'Prenatal Massage',
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Find your perfect massage therapist</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <IconSymbol
              ios_icon_name="bell.fill"
              android_material_icon_name="notifications"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <IconSymbol
            ios_icon_name="magnifyingglass"
            android_material_icon_name="search"
            size={20}
            color={colors.textSecondary}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search therapists..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filters */}
        <View style={styles.filtersSection}>
          <Text style={styles.sectionTitle}>Filters</Text>
          
          {/* City Filter */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
            <TouchableOpacity
              style={[styles.filterChip, selectedCity === 'All Cities' && styles.filterChipActive]}
              onPress={() => setSelectedCity('All Cities')}
            >
              <Text style={[styles.filterChipText, selectedCity === 'All Cities' && styles.filterChipTextActive]}>
                All Cities
              </Text>
            </TouchableOpacity>
            {INDONESIAN_CITIES.map((city, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.filterChip, selectedCity === city && styles.filterChipActive]}
                  onPress={() => setSelectedCity(city)}
                >
                  <Text style={[styles.filterChipText, selectedCity === city && styles.filterChipTextActive]}>
                    {city}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </ScrollView>

          {/* Gender Filter */}
          <View style={styles.filterRow}>
            {['All', 'male', 'female'].map((gender, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.filterChip, selectedGender === gender && styles.filterChipActive]}
                  onPress={() => setSelectedGender(gender)}
                >
                  <Text style={[styles.filterChipText, selectedGender === gender && styles.filterChipTextActive]}>
                    {gender === 'All' ? 'All Gender' : gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>

          {/* Service Filter */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
            <TouchableOpacity
              style={[styles.filterChip, selectedService === 'All Services' && styles.filterChipActive]}
              onPress={() => setSelectedService('All Services')}
            >
              <Text style={[styles.filterChipText, selectedService === 'All Services' && styles.filterChipTextActive]}>
                All Services
              </Text>
            </TouchableOpacity>
            {serviceCategories.map((service, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.filterChip, selectedService === service && styles.filterChipActive]}
                  onPress={() => setSelectedService(service)}
                >
                  <Text style={[styles.filterChipText, selectedService === service && styles.filterChipTextActive]}>
                    {service}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </ScrollView>
        </View>

        {/* Featured Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800' }}
            style={styles.bannerImage}
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Relax & Rejuvenate</Text>
            <Text style={styles.bannerSubtitle}>Book your massage today</Text>
          </View>
        </View>

        {/* Therapists List */}
        <View style={styles.therapistsSection}>
          <Text style={styles.sectionTitle}>
            Available Therapists ({filteredTherapists.length})
          </Text>
          
          {filteredTherapists.map((therapist, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={styles.therapistCard}
                onPress={() => router.push({
                  pathname: '/(tabs)/therapist-detail',
                  params: { id: therapist.id }
                })}
              >
                <Image
                  source={{ uri: therapist.photos[0] }}
                  style={styles.therapistImage}
                />
                <View style={styles.therapistInfo}>
                  <View style={styles.therapistHeader}>
                    <Text style={styles.therapistName}>{therapist.name}</Text>
                    {therapist.isAvailable && (
                      <View style={styles.availableBadge}>
                        <View style={styles.availableDot} />
                        <Text style={styles.availableText}>Available</Text>
                      </View>
                    )}
                  </View>
                  
                  <View style={styles.therapistMeta}>
                    <IconSymbol
                      ios_icon_name="location.fill"
                      android_material_icon_name="location-on"
                      size={14}
                      color={colors.textSecondary}
                    />
                    <Text style={styles.therapistLocation}>
                      {therapist.location.city}, {therapist.location.district}
                    </Text>
                  </View>

                  <View style={styles.therapistMeta}>
                    <IconSymbol
                      ios_icon_name="star.fill"
                      android_material_icon_name="star"
                      size={14}
                      color={colors.accent}
                    />
                    <Text style={styles.therapistRating}>
                      {therapist.rating} ({therapist.reviewCount} reviews)
                    </Text>
                  </View>

                  <View style={styles.servicesContainer}>
                    {therapist.services.slice(0, 2).map((service, serviceIndex) => (
                      <React.Fragment key={serviceIndex}>
                        <View style={styles.serviceTag}>
                          <Text style={styles.serviceTagText}>{service.category}</Text>
                        </View>
                      </React.Fragment>
                    ))}
                  </View>

                  <Text style={styles.therapistPrice}>
                    Rp {therapist.hourlyRate.toLocaleString('id-ID')}/hour
                  </Text>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: colors.text,
  },
  filtersSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.card,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  filterChipTextActive: {
    color: colors.card,
  },
  bannerContainer: {
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.card,
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: colors.card,
  },
  therapistsSection: {
    marginBottom: 24,
  },
  therapistCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 3,
  },
  therapistImage: {
    width: 100,
    height: 120,
    borderRadius: 12,
  },
  therapistInfo: {
    flex: 1,
    marginLeft: 12,
  },
  therapistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  therapistName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  availableBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.highlight,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  availableDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.success,
    marginRight: 4,
  },
  availableText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.success,
  },
  therapistMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  therapistLocation: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  therapistRating: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 8,
  },
  serviceTag: {
    backgroundColor: colors.highlight,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 4,
  },
  serviceTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
  },
  therapistPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 4,
  },
});
