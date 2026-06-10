import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(0);

  return (
    <View style={styles.card}>
      {/* Image area */}
      <View style={styles.imageArea}>
        {product.discount ? (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{product.discount}% OFF</Text>
          </View>
        ) : product.tag ? (
          <View style={[styles.discountBadge, { backgroundColor: product.tagColor || '#0c831f' }]}>
            <Text style={[styles.discountText, { color: product.tagTextColor || 'white' }]}>
              {product.tag}
            </Text>
          </View>
        ) : null}

        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />

        {product.sponsored && (
          <View style={styles.adBadge}>
            <Text style={styles.adText}>Ad</Text>
          </View>
        )}
      </View>

      {/* Info */}
      <View style={styles.info}>
        {/* Delivery time */}
        <View style={styles.deliveryRow}>
          <Ionicons name="time-outline" size={10} color="#7e818c" />
          <Text style={styles.deliveryTime}>{product.deliveryTime || '10 mins'}</Text>
        </View>

        {/* Name */}
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>

        {/* Weight */}
        <Text style={styles.weight}>{product.weight}</Text>

        {/* Price + Add */}
        <View style={styles.priceRow}>
          <View>
            <Text style={styles.price}>₹{product.price}</Text>
            {product.mrp && (
              <Text style={styles.mrp}>₹{product.mrp}</Text>
            )}
          </View>

          {qty === 0 ? (
            <TouchableOpacity
              onPress={() => setQty(1)}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.stepper}>
              <TouchableOpacity
                onPress={() => setQty((q) => Math.max(0, q - 1))}
                style={styles.stepBtn}
              >
                <Text style={styles.stepText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{qty}</Text>
              <TouchableOpacity
                onPress={() => setQty((q) => q + 1)}
                style={styles.stepBtn}
              >
                <Text style={styles.stepText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    flex: 1,
  },
  imageArea: {
    backgroundColor: '#f2f3f7',
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: '#0c831f',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontSize: 9,
    fontWeight: '700',
  },
  image: {
    width: 80,
    height: 90,
  },
  adBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  adText: {
    fontSize: 8,
    color: '#7e818c',
  },
  info: {
    padding: 8,
    flex: 1,
    gap: 2,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  deliveryTime: {
    fontSize: 9,
    color: '#7e818c',
    fontWeight: '500',
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1d1d1d',
    lineHeight: 16,
    flex: 1,
  },
  weight: {
    fontSize: 10,
    color: '#7e818c',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  mrp: {
    fontSize: 10,
    color: '#7e818c',
    textDecorationLine: 'line-through',
  },
  addButton: {
    borderWidth: 2,
    borderColor: '#0c831f',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  addButtonText: {
    color: '#0c831f',
    fontWeight: '700',
    fontSize: 12,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c831f',
    borderRadius: 8,
    overflow: 'hidden',
  },
  stepBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  stepText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
  },
  qty: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
    paddingHorizontal: 4,
  },
});
