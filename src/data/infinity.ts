export interface ScenarioData {
  id?: string;
  userText: string;
  assistantText: string;
  typingDurationMs?: number;
  searchDurationMs?: number;
  foundDurationMs?: number;
  product: {
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    tag: string;
    rating: string;
    imageBg: string;
  };
}

export const SCENARIOS: Record<'juice' | 'fashion' | 'gadgets', ScenarioData> = {
  juice: {
    id: 'juice',
    userText: 'Cold press slow juicer for fresh fruit juice under ₹2,999.',
    assistantText: 'Top pick! Wonderchef Nutri-Blend Cold Press Slow Juicer with 100% fruit pulp extraction at ₹2,499.',
    typingDurationMs: 4000,
    searchDurationMs: 4000,
    foundDurationMs: 4000,
    product: {
      name: 'Wonderchef Nutri-Blend Slow Juicer',
      price: '₹2,499',
      originalPrice: '₹5,999',
      discount: '58% off',
      tag: 'Cold Press • 100% Yield',
      rating: '4.9',
      imageBg: 'from-orange-500 to-amber-600'
    }
  },
  fashion: {
    id: 'fashion',
    userText: 'Chikankari Anarkali Kurti in lavender under ₹1,999 for Diwali.',
    assistantText: 'Mil gaya! Ada Lucknowi Pure Cotton Anarkali is 50% off at ₹1,499 with 1-Day delivery.',
    typingDurationMs: 4000,
    searchDurationMs: 4000,
    foundDurationMs: 4000,
    product: {
      name: 'Ada Lucknowi Pure Cotton Anarkali',
      price: '₹1,499',
      originalPrice: '₹2,999',
      discount: '50% off',
      tag: 'Pure Cotton • Hand-Embroidered',
      rating: '4.8',
      imageBg: 'from-fuchsia-600 to-purple-600'
    }
  },
  gadgets: {
    id: 'gadgets',
    userText: 'Suggest 55" 4K Smart TV and 1.5 Ton Inverter AC with fast cooling.',
    assistantText: 'Top match! Xiaomi 55" 4K QLED at ₹29,999 and Voltas 1.5 Ton Inverter AC at ₹34,990.',
    typingDurationMs: 2000,
    searchDurationMs: 2000,
    foundDurationMs: 4500,
    product: {
      name: 'Xiaomi 55" 4K QLED Smart TV',
      price: '₹29,999',
      originalPrice: '₹54,999',
      discount: '45% off',
      tag: '4K QLED • Dolby Atmos • 120Hz',
      rating: '4.8',
      imageBg: 'from-amber-500 to-orange-600'
    }
  }
};
