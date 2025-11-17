
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors } from '@/styles/commonStyles';
import { mockTherapists } from '@/data/mockData';

interface ChatPreview {
  id: string;
  therapistId: string;
  lastMessage: string;
  timestamp: Date;
  unread: boolean;
}

const mockChats: ChatPreview[] = [
  {
    id: '1',
    therapistId: '1',
    lastMessage: 'Thank you for booking! I will arrive on time.',
    timestamp: new Date('2024-02-18T15:30:00'),
    unread: true,
  },
  {
    id: '2',
    therapistId: '5',
    lastMessage: 'Looking forward to our session!',
    timestamp: new Date('2024-02-17T10:20:00'),
    unread: false,
  },
];

export default function MessagesScreen() {
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 24) {
      return new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);
    } else {
      return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'short',
      }).format(date);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {mockChats.length === 0 ? (
          <View style={styles.emptyState}>
            <IconSymbol
              ios_icon_name="message"
              android_material_icon_name="chat"
              size={64}
              color={colors.textSecondary}
            />
            <Text style={styles.emptyStateText}>No messages yet</Text>
            <Text style={styles.emptyStateSubtext}>
              Start a conversation with your therapist
            </Text>
          </View>
        ) : (
          mockChats.map((chat, index) => {
            const therapist = mockTherapists.find(t => t.id === chat.therapistId);
            if (!therapist) return null;

            return (
              <React.Fragment key={index}>
                <TouchableOpacity style={styles.chatCard}>
                  <Image
                    source={{ uri: therapist.photos[0] }}
                    style={styles.avatar}
                  />
                  <View style={styles.chatContent}>
                    <View style={styles.chatHeader}>
                      <Text style={styles.therapistName}>{therapist.name}</Text>
                      <Text style={styles.timestamp}>{formatTimestamp(chat.timestamp)}</Text>
                    </View>
                    <View style={styles.messageRow}>
                      <Text
                        style={[styles.lastMessage, chat.unread && styles.lastMessageUnread]}
                        numberOfLines={1}
                      >
                        {chat.lastMessage}
                      </Text>
                      {chat.unread && <View style={styles.unreadBadge} />}
                    </View>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
  chatCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 3,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  chatContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  therapistName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  timestamp: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    fontSize: 14,
    color: colors.textSecondary,
    flex: 1,
  },
  lastMessageUnread: {
    fontWeight: '600',
    color: colors.text,
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginLeft: 8,
  },
});
