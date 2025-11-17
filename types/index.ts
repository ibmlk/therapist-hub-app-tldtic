
export type UserRole = 'client' | 'therapist' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
}

export interface Client extends User {
  role: 'client';
  address?: string;
  city?: string;
  preferredGender?: 'male' | 'female' | 'any';
}

export interface Therapist extends User {
  role: 'therapist';
  gender: 'male' | 'female';
  bio: string;
  photos: string[];
  services: Service[];
  location: Location;
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  hourlyRate: number;
  experience: number;
  certifications: string[];
  languages: string[];
  totalEarnings: number;
  pendingPayout: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: ServiceCategory;
}

export type ServiceCategory = 
  | 'Swedish Massage'
  | 'Deep Tissue'
  | 'Sports Massage'
  | 'Thai Massage'
  | 'Aromatherapy'
  | 'Hot Stone'
  | 'Reflexology'
  | 'Prenatal Massage';

export interface Location {
  city: string;
  district?: string;
  latitude: number;
  longitude: number;
}

export const INDONESIAN_CITIES = [
  'Jakarta',
  'Bogor',
  'Tangerang',
  'Bekasi',
  'Depok',
  'Bandung',
  'Malang',
  'Samarinda',
  'Surabaya',
  'Semarang',
  'Bali',
  'Makassar',
  'Medan',
  'Palembang',
];

export interface Booking {
  id: string;
  clientId: string;
  therapistId: string;
  serviceId: string;
  date: Date;
  duration: number;
  status: BookingStatus;
  totalAmount: number;
  platformFee: number;
  paymentFee: number;
  therapistEarning: number;
  address: string;
  notes?: string;
  createdAt: Date;
  completedAt?: Date;
}

export type BookingStatus = 
  | 'pending'
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled';

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  createdAt: Date;
}

export type PaymentMethod = 'credit-card' | 'bank-transfer' | 'e-wallet' | 'cash';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Review {
  id: string;
  bookingId: string;
  clientId: string;
  therapistId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export interface PayoutRequest {
  id: string;
  therapistId: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  bankAccount: string;
  requestedAt: Date;
  processedAt?: Date;
}

export interface Analytics {
  totalBookings: number;
  totalRevenue: number;
  activeTherapists: number;
  activeClients: number;
  averageRating: number;
  bookingsByCity: Record<string, number>;
  revenueByMonth: Record<string, number>;
}
