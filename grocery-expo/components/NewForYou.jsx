import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const items = [
  { emoji: '🥑', name: 'Avocado', price: '₹89', bg: '#e8f5e9' },
  { emoji: '🫐', name: 'Blueberry', price: '₹129', bg: '#ede7f6' },
  { emoji: '🥭', name: 'Alphonso\nMango', price: '₹199', bg: '#fff3e0' },
  { emoji: '🍓', name: 'Strawberry', price: '₹99', bg: '#fce4ec' },
  { emoji: '🍇', name: 'Red Grapes', price: '₹79', bg: '#f3e5f5' },
];

export default function NewForYou() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>New For You</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {items.map((item, i) => (
          <View key={i} style={[styles.item, { backgroundColor: item.bg }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginTop: 8,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  viewAll: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0c831f',
  },
  scroll: {
    paddingHorizontal: 12,
    gap: 8,
  },
  item: {
    width: 80,
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
    marginBottom: 4,
  },
  name: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1d1d1d',
    textAlign: 'center',
    lineHeight: 13,
  },
  price: {
    color: '#0c831f',
    fontWeight: '700',
    fontSize: 11,
    marginTop: 2,
  },
});
