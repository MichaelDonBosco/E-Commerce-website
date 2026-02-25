
export interface Product {
  id: string;
  brand: string;
  model: string;
  price: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  specs: {
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
    processor: string;
    display: string;
  };
  badges: string[];
  description: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Placed' | 'Packed' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export type ViewType = 'GRID' | 'LIST';

export interface FilterState {
  brand: string[];
  priceRange: [number, number];
  ram: string[];
  storage: string[];
  os: string[];
}
