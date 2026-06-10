import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BANNER_HEIGHT = 148;

const banners = [
  {
    id: 1,
    colors: ['#1a237e', '#283593', '#1565c0'],
    badge: 'YELLOW FRIDAY',
    badgeBg: '#f8d000',
    badgeText: '#1a237e',
    discount: '70%',
    discountLabel: 'OFF',
    tagline: 'in MINUTES',
    subText: 'On Hundreds of Products',
    products: ['🧺', '🧼', '🫧'],
    productColors: ['#ef5350', '#42a5f5', '#66bb6a'],
  },
  {
    id: 2,
    colors: ['#1b5e20', '#2e7d32', '#388e3c'],
    badge: 'FRESH DEALS',
    badgeBg: '#a5d6a7',
    badgeText: '#1b5e20',
    discount: '50%',
    discountLabel: 'OFF',
    tagline: 'Fresh Vegetables',
    subText: 'Farm to your doorstep',
    products: ['🥦', '🍅', '🥕'],
    productColors: ['#66bb6a', '#ef5350', '#ff9800'],
  },
  {
    id: 3,
    colors: ['#e65100', '#f57c00', '#ff9800'],
    badge: 'HOT DEALS',
    badgeBg: '#fff9c4',
    badgeText: '#e65100',
    discount: '40%',
    discountLabel: 'OFF',
    tagline: 'On Snacks & Drinks',
    subText: 'Limited time offer',
    products: ['🍿', '🥤', '🍫'],
    productColors: ['#f9a825', '#e53935', '#7b1fa2'],
  },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const banner = banners[current];

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={banner.colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.banner}
      >
        {/* Left content */}
        <View style={styles.content}>
          <View style={[styles.badge, { backgroundColor: banner.badgeBg }]}>
            <Text style={[styles.badgeText, { color: banner.badgeText }]}>
              {banner.badge}
            </Text>
          </View>
          <View style={styles.discountRow}>
            <Text style={styles.discountBig}>{banner.discount}</Text>
            <Text style={styles.discountLabel}>{banner.discountLabel}</Text>
          </View>
          <Text style={styles.tagline}>{banner.tagline}</Text>
          <Text style={styles.subText}>{banner.subText}</Text>
        </View>

        {/* Right: product items */}
        <View style={styles.products}>
          {banner.products.map((emoji, i) => (
            <View
              key={i}
              style={[
                styles.productItem,
                {
                  height: 56 + i * 10,
                  backgroundColor: banner.productColors[i] + '44',
                  borderColor: banner.productColors[i] + '88',
                },
              ]}
            >
              <Text style={styles.productEmoji}>{emoji}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      {/* Dots */}
      <View style={styles.dots}>
        {banners.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => setCurrent(i)}>
            <View style={[styles.dot, i === current && styles.dotActive]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  banner: {
    borderRadius: 12,
    height: BANNER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 4,
  },
  badgeText: {
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
    fontSize: 46,
    lineHeight: 50,
  },
  discountLabel: {
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
  products: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  productItem: {
    width: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  productEmoji: {
    fontSize: 20,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  dotActive: {
    width: 16,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0c831f',
  },
});
