import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function YellowFridayBanner() {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#1a237e', '#283593', '#1565c0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.banner}
      >
        {/* Decorative circle */}
        <View style={styles.decorCircle} />

        <View style={styles.left}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>YELLOW FRIDAY</Text>
          </View>
          <View style={styles.discountRow}>
            <Text style={styles.discountBig}>70%</Text>
            <Text style={styles.discountOff}>OFF</Text>
          </View>
          <Text style={styles.tagline}>in MINUTES</Text>
          <Text style={styles.subText}>On hundreds of products</Text>
          <TouchableOpacity style={styles.shopBtn}>
            <Text style={styles.shopBtnText}>Shop Now →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.products}>
          {[
            { emoji: '🧺', color: '#ef5350', h: 64 },
            { emoji: '🧼', color: '#42a5f5', h: 76 },
            { emoji: '🫧', color: '#66bb6a', h: 60 },
          ].map((item, i) => (
            <View
              key={i}
              style={[
                styles.productBox,
                { height: item.h, backgroundColor: item.color + '44', borderColor: item.color + '88' },
              ]}
            >
              <Text style={styles.productEmoji}>{item.emoji}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

export function CadburyBanner() {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#4a148c', '#6a1b9a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cadburyBanner}
      >
        <View style={styles.cadburyLeft}>
          <Text style={styles.cadburyBrand}>CADBURY</Text>
          <Text style={styles.cadburyTitle}>Mitha Moments</Text>
          <Text style={styles.cadburyPrice}>Starting at ₹10</Text>
          <TouchableOpacity style={styles.cadburyBtn}>
            <Text style={styles.cadburyBtnText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cadburyRight}>
          <Text style={{ fontSize: 48 }}>🍫</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export function YellowFridaySmallBanner() {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#1a237e', '#1565c0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.smallBanner}
      >
        <View style={styles.smallLeft}>
          <View style={[styles.badge, { marginBottom: 4 }]}>
            <Text style={styles.badgeText}>YELLOW FRIDAY</Text>
          </View>
          <Text style={styles.smallDiscount}>
            70% <Text style={styles.smallOff}>OFF</Text>
          </Text>
          <Text style={styles.smallTagline}>in Minutes</Text>
        </View>
        <View style={styles.smallProducts}>
          {['🧴', '🧹', '🫧'].map((emoji, i) => (
            <View key={i} style={styles.smallProductBox}>
              <Text style={styles.smallProductEmoji}>{emoji}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  banner: {
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    overflow: 'hidden',
    minHeight: 120,
  },
  decorCircle: {
    position: 'absolute',
    right: -30,
    top: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(248,208,0,0.15)',
  },
  left: {
    flex: 1,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#f8d000',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
  },
  badgeText: {
    color: '#1a237e',
    fontWeight: '900',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  discountBig: {
    color: 'white',
    fontWeight: '900',
    fontSize: 44,
    lineHeight: 48,
  },
  discountOff: {
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 6,
  },
  tagline: {
    color: '#f8d000',
    fontWeight: '700',
    fontSize: 12,
  },
  subText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
    marginTop: 2,
  },
  shopBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#f8d000',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginTop: 8,
  },
  shopBtnText: {
    color: '#1a237e',
    fontWeight: '900',
    fontSize: 11,
  },
  products: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  productBox: {
    width: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  productEmoji: {
    fontSize: 20,
  },
  // Cadbury
  cadburyBanner: {
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 90,
  },
  cadburyLeft: {
    flex: 1,
  },
  cadburyBrand: {
    color: '#ffd54f',
    fontWeight: '900',
    fontSize: 11,
    letterSpacing: 1,
  },
  cadburyTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  cadburyPrice: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    marginTop: 2,
  },
  cadburyBtn: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 6,
  },
  cadburyBtnText: {
    color: '#6a1b9a',
    fontWeight: '700',
    fontSize: 11,
  },
  cadburyRight: {
    marginLeft: 8,
  },
  // Small banner
  smallBanner: {
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  smallLeft: {
    flex: 1,
  },
  smallDiscount: {
    color: 'white',
    fontWeight: '900',
    fontSize: 26,
    lineHeight: 30,
  },
  smallOff: {
    fontSize: 16,
  },
  smallTagline: {
    color: '#f8d000',
    fontWeight: '600',
    fontSize: 11,
  },
  smallProducts: {
    flexDirection: 'row',
    gap: 4,
  },
  smallProductBox: {
    width: 40,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallProductEmoji: {
    fontSize: 22,
  },
});
