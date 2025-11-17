
import React from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'home',
      label: 'Home',
    },
    {
      name: 'bookings',
      route: '/(tabs)/bookings',
      icon: 'calendar-today',
      label: 'Bookings',
    },
    {
      name: 'messages',
      route: '/(tabs)/messages',
      icon: 'chat',
      label: 'Messages',
    },
    {
      name: 'profile',
      route: '/(tabs)/profile',
      icon: 'person',
      label: 'Profile',
    },
  ];

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen key="home" name="(home)" />
        <Stack.Screen key="bookings" name="bookings" />
        <Stack.Screen key="messages" name="messages" />
        <Stack.Screen key="profile" name="profile" />
        <Stack.Screen key="therapist-detail" name="therapist-detail" />
        <Stack.Screen key="booking-confirm" name="booking-confirm" />
        <Stack.Screen key="therapist-dashboard" name="therapist-dashboard" />
        <Stack.Screen key="admin-dashboard" name="admin-dashboard" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
