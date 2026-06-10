import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../data/products';

export default function CategoryGrid() {
  const rows = [];
  for (let i = 0; i < categories.length; i += 4) {
    rows.push(categories.slice(i, i + 4));
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>All categories</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAll}>See all</Text>
          <Ionicons name="chevron-forward" size={12} color="#0c831f" />
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {rows.map((row, rowIdx) => (
          <View key={rowIdx} style={styles.row}>
            {row.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[styles.catItem, { backgroundColor: cat.bg }]}
              >
                <Text style={styles.catEmoji}>{cat.emoji}</Text>
                <Text style={styles.catName}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0c831f',
  },
  grid: {
    padding: 12,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  catItem: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 4,
    gap: 4,
  },
  catEmoji: {
    fontSize: 26,
    lineHeight: 30,
  },
  catName: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1d1d1d',
    textAlign: 'center',
    lineHeight: 13,
  },
});
