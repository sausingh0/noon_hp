import { View, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './components/Header';
import Search from './components/Search';
import Multitab from './components/Multitab';
import BannerCarousel from './components/BannerCarousel';
import CouponTray from './components/CouponTray';
import ProductSection from './components/ProductSection';
import CategoryGrid from './components/CategoryGrid';
import BottomNav from './components/BottomNav';
import NewForYou from './components/NewForYou';
import {
  YellowFridayBanner,
  CadburyBanner,
  YellowFridaySmallBanner,
} from './components/PromoBanner';

import { featuredProducts, trendingProducts, cleaningProducts } from './data/products';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#0c831f" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.container}>
          {/* Sticky top: Header + Search + Tabs */}
          <Header />
          <Search />
          <Multitab />

          {/* Scrollable body */}
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <BannerCarousel />

            <ProductSection
              title="Fresh Picks For You"
              subtitle="Delivered in 10 minutes"
              products={featuredProducts}
            />

            <YellowFridayBanner />

            <CategoryGrid />

            <ProductSection
              title="Trending Now"
              subtitle="Most ordered this week"
              products={trendingProducts}
            />

            <CouponTray />

            <CadburyBanner />

            <ProductSection
              title="Shop in store"
              subtitle="Cleaning & household essentials"
              products={cleaningProducts}
            />

            <YellowFridaySmallBanner />

            <NewForYou />

            <View style={{ height: 20 }} />
          </ScrollView>

          {/* Fixed bottom nav */}
          <BottomNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0c831f',
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f3f7',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 8,
  },
});
