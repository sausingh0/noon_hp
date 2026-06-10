import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons name="search" size={18} color="#7e818c" />
        <Text style={styles.placeholder}>Search &quot;milk&quot;</Text>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.voiceButton}>
          <Ionicons name="mic" size={14} color="#0c831f" />
          <Text style={styles.voiceText}>Voice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingBottom: 8,
    paddingTop: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f3f7',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  placeholder: {
    flex: 1,
    color: '#7e818c',
    fontSize: 14,
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: '#d1d5db',
  },
  voiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  voiceText: {
    color: '#0c831f',
    fontSize: 12,
    fontWeight: '600',
  },
});
