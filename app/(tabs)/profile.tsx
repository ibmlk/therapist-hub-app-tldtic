
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors } from '@/styles/commonStyles';
import { mockCurrentUser } from '@/data/mockData';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const menuItems = [
    {
      icon: 'person',
      label: 'Edit Profile',
      onPress: () => console.log('Edit Profile'),
    },
    {
      icon: 'payment',
      label: 'Payment Methods',
      onPress: () => console.log('Payment Methods'),
    },
    {
      icon: 'history',
      label: 'Booking History',
      onPress: () => console.log('Booking History'),
    },
    {
      icon: 'favorite',
      label: 'Favorite Therapists',
      onPress: () => console.log('Favorite Therapists'),
    },
    {
      icon: 'help',
      label: 'Help & Support',
      onPress: () => console.log('Help & Support'),
    },
    {
      icon: 'info',
      label: 'About',
      onPress: () => console.log('About'),
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <IconSymbol
              ios_icon_name="person.circle.fill"
              android_material_icon_name="account-circle"
              size={80}
              color={colors.primary}
            />
          </View>
          <Text style={styles.name}>{mockCurrentUser.name}</Text>
          <Text style={styles.email}>{mockCurrentUser.email}</Text>
          <Text style={styles.phone}>{mockCurrentUser.phone}</Text>
        </View>

        {/* Role Switcher */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Switch Role</Text>
          <View style={styles.roleSwitcher}>
            <TouchableOpacity style={styles.roleButton}>
              <IconSymbol
                ios_icon_name="person.fill"
                android_material_icon_name="person"
                size={24}
                color={colors.card}
              />
              <Text style={styles.roleButtonText}>Client</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.roleButton, styles.roleButtonOutline]}
              onPress={() => router.push('/(tabs)/therapist-dashboard')}
            >
              <IconSymbol
                ios_icon_name="hand.raised.fill"
                android_material_icon_name="spa"
                size={24}
                color={colors.primary}
              />
              <Text style={[styles.roleButtonText, styles.roleButtonTextOutline]}>
                Therapist
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.roleButton, styles.roleButtonOutline]}
              onPress={() => router.push('/(tabs)/admin-dashboard')}
            >
              <IconSymbol
                ios_icon_name="shield.fill"
                android_material_icon_name="admin-panel-settings"
                size={24}
                color={colors.primary}
              />
              <Text style={[styles.roleButtonText, styles.roleButtonTextOutline]}>
                Admin
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <IconSymbol
                ios_icon_name="bell.fill"
                android_material_icon_name="notifications"
                size={20}
                color={colors.textSecondary}
              />
              <Text style={styles.settingLabel}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.card}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <IconSymbol
                ios_icon_name="location.fill"
                android_material_icon_name="location-on"
                size={20}
                color={colors.textSecondary}
              />
              <Text style={styles.settingLabel}>Location Services</Text>
            </View>
            <Switch
              value={locationEnabled}
              onValueChange={setLocationEnabled}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.card}
            />
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
                <View style={styles.menuLeft}>
                  <IconSymbol
                    ios_icon_name={item.icon}
                    android_material_icon_name={item.icon}
                    size={20}
                    color={colors.textSecondary}
                  />
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </View>
                <IconSymbol
                  ios_icon_name="chevron.right"
                  android_material_icon_name="chevron-right"
                  size={20}
                  color={colors.textSecondary}
                />
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <IconSymbol
            ios_icon_name="arrow.right.square"
            android_material_icon_name="logout"
            size={20}
            color={colors.danger}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: colors.card,
    borderRadius: 16,
    marginBottom: 24,
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 3,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  phone: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  roleSwitcher: {
    flexDirection: 'row',
    gap: 12,
  },
  roleButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  roleButtonOutline: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  roleButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.card,
  },
  roleButtonTextOutline: {
    color: colors.primary,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: `0px 1px 4px ${colors.shadow}`,
    elevation: 2,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: `0px 1px 4px ${colors.shadow}`,
    elevation: 2,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.danger,
    marginBottom: 24,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.danger,
  },
});
