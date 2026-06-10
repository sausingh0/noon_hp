import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from './ProductCard';

export default function ProductSection({ title, subtitle, products }) {
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push(products.slice(i, i + 2));
  }

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAll}>See all</Text>
          <Ionicons name="chevron-forward" size={12} color="#0c831f" />
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {rows.map((row, rowIdx) => (
          <View key={rowIdx} style={styles.row}>
            {row.map((product) => (
              <View key={product.id} style={styles.cardWrapper}>
                <ProductCard product={product} />
              </View>
            ))}
            {row.length === 1 && <View style={styles.cardWrapper} />}
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
  subtitle: {
    fontSize: 10,
    color: '#7e818c',
    marginTop: 1,
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
  cardWrapper: {
    flex: 1,
  },
});
