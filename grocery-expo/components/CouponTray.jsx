import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { coupons } from '../data/products';

export default function CouponTray() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Coupons &amp; Offers</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {coupons.map((coupon) => (
          <View
            key={coupon.id}
            style={[styles.card, { backgroundColor: coupon.color, borderColor: coupon.border }]}
          >
            <View style={styles.cardTop}>
              <Text style={styles.cardIcon}>{coupon.icon}</Text>
              <View>
                <Text style={styles.cardDiscount}>{coupon.discount}</Text>
                <Text style={styles.cardDesc}>{coupon.desc}</Text>
              </View>
            </View>
            <View style={[styles.divider, { borderColor: coupon.border }]} />
            <View style={styles.cardBottom}>
              <View style={[styles.codeBox, { backgroundColor: coupon.border + '22' }]}>
                <Text style={[styles.codeText, { color: coupon.border }]}>{coupon.code}</Text>
              </View>
              <TouchableOpacity
                style={[styles.applyBtn, { backgroundColor: coupon.border }]}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.minOrder}>{coupon.minOrder}</Text>
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
  scrollContent: {
    paddingHorizontal: 12,
    gap: 8,
  },
  card: {
    width: 144,
    borderRadius: 12,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    padding: 10,
    gap: 6,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardIcon: {
    fontSize: 18,
  },
  cardDiscount: {
    fontWeight: '900',
    fontSize: 14,
    color: '#1d1d1d',
    lineHeight: 16,
  },
  cardDesc: {
    fontSize: 10,
    color: '#7e818c',
    lineHeight: 12,
  },
  divider: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeBox: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  codeText: {
    fontWeight: '700',
    fontSize: 10,
  },
  applyBtn: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  applyText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 10,
  },
  minOrder: {
    fontSize: 9,
    color: '#7e818c',
  },
});
