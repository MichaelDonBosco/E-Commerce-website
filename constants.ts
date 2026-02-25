
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    price: 1199,
    rating: 4.9,
    reviewsCount: 1250,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1695048132717-57048505b38a?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      ram: '8GB',
      storage: '256GB',
      camera: '48MP Main | 12MP Ultra Wide | 12MP Telephoto',
      battery: '4441mAh',
      os: 'iOS 17',
      processor: 'A17 Pro chip',
      display: '6.7" Super Retina XDR'
    },
    badges: ['Best Seller', 'New Arrival'],
    description: 'The ultimate iPhone experience. Titanium design, A17 Pro chip, and a professional-grade camera system.',
    stock: 15
  },
  {
    id: '2',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 1299,
    rating: 4.8,
    reviewsCount: 980,
    images: [
          //  'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=800'
          'https://images.unsplash.com/photo-1705585175110-d25f92c183aa?q=80&w=432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    ],
    specs: {
      ram: '12GB',
      storage: '512GB',
      camera: '200MP Main | 12MP Ultra Wide | 50MP Telephoto',
      battery: '5000mAh',
      os: 'Android 14',
      processor: 'Snapdragon 8 Gen 3',
      display: '6.8" Dynamic AMOLED 2X'
    },
    badges: ['New Arrival', 'Limited Stock'],
    description: 'Experience the next level of mobile productivity with the Galaxy S24 Ultra and its built-in S Pen.',
    stock: 8
  },
  {
    id: '3',
    brand: 'Google',
    model: 'Pixel 8 Pro',
    price: 999,
    rating: 4.7,
    reviewsCount: 640,
    images: [
  //  'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
  //     'https://images.unsplash.com/photo-1695048132717-57048505b38a?auto=format&fit=crop&q=80&w=800'
  'https://images.unsplash.com/photo-1724322637761-1fef6ca8c8b3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: {
      ram: '12GB',
      storage: '128GB',
      camera: '50MP Main | 48MP Ultra Wide | 48MP Telephoto',
      battery: '5050mAh',
      os: 'Android 14',
      processor: 'Google Tensor G3',
      display: '6.7" Super Actua Display'
    },
    badges: ['Discount'],
    description: 'The most advanced Pixel yet, with a stunning display and the smartest camera for incredible photos and videos.',
    stock: 20
  },
  {
    id: '4',
    brand: 'OnePlus',
    model: 'OnePlus 12',
    price: 799,
    rating: 4.6,
    reviewsCount: 420,
    images: [
      // 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=800'
      'https://images.unsplash.com/photo-1642407032203-cc04c9a68381?q=80&w=376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: {
      ram: '16GB',
      storage: '256GB',
      camera: '50MP Main | 48MP Ultra Wide | 64MP Telephoto',
      battery: '5400mAh',
      os: 'OxygenOS (Android 14)',
      processor: 'Snapdragon 8 Gen 3',
      display: '6.82" QHD+ ProXDR'
    },
    badges: ['Best Seller'],
    description: 'Fast and smooth performance with Hasselblad camera for mobile and ultra-fast charging.',
    stock: 12
  },
  {
    id: '5',
    brand: 'Xiaomi',
    model: 'Xiaomi 14 Ultra',
    price: 1099,
    rating: 4.8,
    reviewsCount: 310,
    images: [
    //  'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    //   'https://images.unsplash.com/photo-1695048132717-57048505b38a?auto=format&fit=crop&q=80&w=800'
    'https://images.unsplash.com/photo-1739971946251-5f7916504206?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: {
      ram: '16GB',
      storage: '512GB',
      camera: '50MP Quad Camera | Leica Optics',
      battery: '5000mAh',
      os: 'HyperOS (Android 14)',
      processor: 'Snapdragon 8 Gen 3',
      display: '6.73" AMOLED 120Hz'
    },
    badges: ['New Arrival'],
    description: 'A masterpiece of mobile photography, featuring Leica professional lenses and a powerful processor.',
    stock: 5
  },
  {
    id: '6',
    brand: 'Apple',
    model: 'iPhone 14',
    price: 699,
    rating: 4.5,
    reviewsCount: 2100,
    images: [
      // 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=800'
      'https://images.unsplash.com/photo-1680776785024-5223d7a75ea8?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: {
      ram: '6GB',
      storage: '128GB',
      camera: '12MP Dual Camera',
      battery: '3279mAh',
      os: 'iOS 16',
      processor: 'A15 Bionic',
      display: '6.1" Super Retina XDR'
    },
    badges: ['Discount'],
    description: 'Dependable, powerful, and now more affordable. Perfect for everyday premium mobile experience.',
    stock: 45
  },
  {
    id: '7',
    brand: 'Apple',
    model: 'iPhone 17 Pro Max',
    price: 699,
    rating: 4.5,
    reviewsCount: 2100,
    images: [
      // 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=800'
      'https://images.unsplash.com/photo-1763878401984-f7232dae915a?q=80&w=788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: {
      ram: '6GB',
      storage: '128GB',
      camera: '12MP Dual Camera',
      battery: '3279mAh',
      os: 'iOS 16',
      processor: 'A15 Bionic',
      display: '6.1" Super Retina XDR'
    },
    badges: ['Discount'],
    description: 'Dependable, powerful, and now more affordable. Perfect for everyday premium mobile experience.',
    stock: 45
  },
  {
    id: '8',
    brand: 'Samsung',
    model: 'Galaxy Max 24',
    price: 699,
    rating: 4.5,
    reviewsCount: 2100,
    images: [
      // 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=800'
      'https://images.unsplash.com/photo-1592813630413-1124aa567638?q=80&w=585&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: {
      ram: '6GB',
      storage: '128GB',
      camera: '12MP Dual Camera',
      battery: '3279mAh',
      os: 'iOS 16',
      processor: 'A15 Bionic',
      display: '6.1" Super Retina XDR'
    },
    badges: ['Discount'],
    description: 'Dependable, powerful, and now more affordable. Perfect for everyday premium mobile experience.',
    stock: 45
  },
  {
    id: '9',
    brand: 'Google',
    model: 'Pixel 9 Pro',
    price: 699,
    rating: 4.5,
    reviewsCount: 2100,
    images: [
      // 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=800'//
      // 'https://images.unsplash.com/photo-1763878401984-f7232dae915a?q=80&w=788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      'https://images.unsplash.com/photo-1727132527153-683df2c70cd6?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: {
      ram: '6GB',
      storage: '128GB',
      camera: '12MP Dual Camera',
      battery: '3279mAh',
      os: 'iOS 16',
      processor: 'A15 Bionic',
      display: '6.1" Super Retina XDR'
    },
    badges: ['Discount'],
    description: 'Dependable, powerful, and now more affordable. Perfect for everyday premium mobile experience.',
    stock: 45
  }

];

export const BRANDS = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];
export const RAM_OPTIONS = ['4GB', '6GB', '8GB', '12GB', '16GB'];
export const STORAGE_OPTIONS = ['128GB', '256GB', '512GB', '1TB'];
export const OS_OPTIONS = ['iOS', 'Android'];
