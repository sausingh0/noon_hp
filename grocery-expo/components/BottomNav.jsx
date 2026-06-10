import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const navItems = [
  { id: 'home', label: 'Home', icon: 'home', iconLib: 'Ionicons' },
  { id: 'categories', label: 'Categories', icon: 'grid', iconLib: 'Ionicons' },
  { id: 'cart', label: 'Cart', icon: 'cart', iconLib: 'Ionicons', badge: 3 },
  { id: 'account', label: 'Account', icon: 'person', iconLib: 'Ionicons' },
];

export default function BottomNav() {
  const [active, setActive] = useState('home');

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = active === item.id;
        const color = isActive ? '#0c831f' : '#7e818c';
        const iconName = isActive ? item.icon : `${item.icon}-outline`;

        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => setActive(item.id)}
            style={styles.navItem}
          >
            {isActive && <View style={styles.activeIndicator} />}
            <View style={styles.iconWrapper}>
              <Ionicons name={iconName} size={24} color={color} />
              {item.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.label, { color }]}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 2,
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: 32,
    height: 2,
    backgroundColor: '#0c831f',
    borderRadius: 2,
    transform: [{ translateX: -16 }],
  },
  iconWrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: '#0c831f',
    borderRadius: 8,
    minWidth: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: '900',
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
  },
});
