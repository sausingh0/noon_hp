import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Left: Logo + Location */}
      <View style={styles.left}>
        {/* Logo mark */}
        <View style={styles.logoMark}>
          <Ionicons name="location-sharp" size={12} color="#0c831f" />
        </View>
        <View style={styles.logoTextGroup}>
          <Text style={styles.logoText}>blinkit</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationLabel}>Home</Text>
            <Ionicons name="chevron-down" size={12} color="white" />
          </View>
          <Text style={styles.locationAddress} numberOfLines={1}>
            Sector 6, Panchkula, Haryana 134109
          </Text>
        </View>
      </View>

      {/* Right: ETA + Cart */}
      <View style={styles.right}>
        <View style={styles.etaBox}>
          <Text style={styles.etaNumber}>10</Text>
          <Text style={styles.etaLabel}>minutes</Text>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={18} color="white" />
          <Text style={styles.cartText}>My Cart</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c831f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    gap: 6,
  },
  logoMark: {
    backgroundColor: '#f8d000',
    borderRadius: 4,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  logoTextGroup: {
    flex: 1,
  },
  logoText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  locationLabel: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  locationAddress: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 10,
    maxWidth: 160,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  etaBox: {
    alignItems: 'center',
  },
  etaNumber: {
    color: '#f8d000',
    fontWeight: '900',
    fontSize: 18,
    lineHeight: 20,
  },
  etaLabel: {
    color: 'white',
    fontSize: 9,
    lineHeight: 11,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 5,
  },
  cartText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#f8d000',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#0c831f',
    fontSize: 9,
    fontWeight: '900',
  },
});
