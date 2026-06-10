import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const tabs = [
  { id: 'all', label: 'All', emoji: '🏠' },
  { id: 'vegetables', label: 'Vegetables', emoji: '🥦' },
  { id: 'fruits', label: 'Fruits', emoji: '🍎' },
  { id: 'dairy', label: 'Dairy', emoji: '🥛' },
  { id: 'snacks', label: 'Snacks', emoji: '🍿' },
  { id: 'beverages', label: 'Beverages', emoji: '🧃' },
  { id: 'bakery', label: 'Bakery', emoji: '🍞' },
  { id: 'meat', label: 'Meat', emoji: '🥩' },
  { id: 'personal', label: 'Personal', emoji: '🧴' },
  { id: 'cleaning', label: 'Cleaning', emoji: '🧹' },
];

export default function Multitab() {
  const [active, setActive] = useState('all');

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActive(tab.id)}
            style={[styles.tab, active === tab.id && styles.tabActive]}
          >
            <Text style={styles.emoji}>{tab.emoji}</Text>
            <Text style={[styles.label, active === tab.id && styles.labelActive]}>
              {tab.label}
            </Text>
            {active === tab.id && <View style={styles.indicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 4,
  },
  tab: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    position: 'relative',
  },
  tabActive: {
    backgroundColor: '#e8f5e9',
  },
  emoji: {
    fontSize: 18,
    lineHeight: 22,
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
    color: '#7e818c',
    marginTop: 2,
  },
  labelActive: {
    color: '#0c831f',
  },
  indicator: {
    width: 16,
    height: 2,
    backgroundColor: '#0c831f',
    borderRadius: 2,
    marginTop: 2,
  },
});
