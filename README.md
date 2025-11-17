
# Therapist Hub 💆‍♀️

A comprehensive mobile application connecting massage therapy clients with professional therapists across Indonesia. Built with React Native, Expo, and Supabase.

## 🌟 Features

### For Clients
- **Real-time Therapist Discovery**: Browse available therapists with live availability status
- **Advanced Filtering**: Search by location, gender, services, and more
- **Therapist Profiles**: View detailed profiles with photos, ratings, and specializations
- **Booking Management**: Schedule, track, and manage appointments
- **Secure Payments**: Integrated payment processing
- **In-app Messaging**: Direct communication with therapists

### For Therapists
- **Profile Management**: Showcase skills, photos, and availability
- **Earnings Dashboard**: Transparent view of earnings with detailed breakdowns
- **Financial Transparency**: See deductions for tax, platform fees, and payment processing
- **Payout Requests**: Easy withdrawal management
- **Booking Management**: Accept, decline, and manage appointments

### For Super Admin
- **User Management**: Comprehensive control over clients and therapists
- **Operations Dashboard**: Monitor platform activity and performance
- **Financial Analytics**: Track revenue, payouts, and platform metrics
- **Chat Support**: Provide assistance to users
- **System Analytics**: Insights into usage patterns and growth

## 🏙️ Supported Cities

- Jakarta
- Bogor
- Tangerang
- Bekasi
- Depok
- Bandung
- Malang
- Samarinda
- Surabaya
- Semarang
- Bali
- Makassar
- Medan
- Palembang

## 🛠️ Tech Stack

- **Framework**: React Native with Expo 54
- **Navigation**: Expo Router (file-based routing)
- **Backend**: Supabase (Database, Authentication, Storage)
- **Language**: TypeScript
- **State Management**: React Hooks & Context
- **UI Components**: Custom components with React Native
- **Animations**: React Native Reanimated

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Supabase account

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd therapist-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Update the Supabase credentials in `app/integrations/supabase/client.ts`
   - Run the database migrations (see Database Setup below)

### Running the App

Start the development server:
```bash
npm run dev
```

Run on specific platforms:
```bash
npm run ios      # Run on iOS simulator
npm run android  # Run on Android emulator
npm run web      # Run in web browser
```

## 🗄️ Database Setup

The app uses Supabase for backend services. You'll need to set up the following tables:

- `profiles` - User profiles (clients and therapists)
- `therapists` - Therapist-specific information
- `bookings` - Appointment bookings
- `services` - Available massage services
- `payments` - Payment transactions
- `messages` - In-app messaging
- `reviews` - Therapist reviews and ratings

Refer to the Supabase dashboard for migration scripts.

## 📱 Project Structure

```
therapist-hub/
├── app/                          # Main application code
│   ├── (tabs)/                   # Tab-based navigation screens
│   │   ├── (home)/              # Home screen and related views
│   │   ├── bookings.tsx         # Bookings management
│   │   ├── messages.tsx         # Messaging interface
│   │   └── profile.tsx          # User profile
│   ├── integrations/            # Third-party integrations
│   │   └── supabase/            # Supabase client and types
│   └── _layout.tsx              # Root layout
├── components/                   # Reusable UI components
├── constants/                    # App constants and configuration
├── contexts/                     # React Context providers
├── data/                        # Mock data and fixtures
├── styles/                      # Global styles and themes
├── types/                       # TypeScript type definitions
├── utils/                       # Utility functions
└── assets/                      # Images, fonts, and static files
```

## 🎨 Design System

The app uses a consistent design system defined in `styles/commonStyles.ts`:

- **Primary Color**: Teal/Turquoise theme
- **Typography**: Clean, modern fonts
- **Spacing**: Consistent padding and margins
- **Components**: Reusable UI elements

## 🔐 Security

- Row Level Security (RLS) enabled on all Supabase tables
- Secure authentication with email verification
- Protected API routes
- Encrypted data transmission

## 🧪 Testing

```bash
npm run lint     # Run ESLint
```

## 📦 Building for Production

### Web
```bash
npm run build:web
```

### Android
```bash
npm run build:android
```

### iOS
Use Expo EAS Build:
```bash
eas build --platform ios
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Natively.dev](https://natively.dev)
- Powered by [Supabase](https://supabase.com)
- UI inspiration from modern mobile design patterns

## 📞 Support

For support, email support@therapisthub.com or join our community chat.

## 🗺️ Roadmap

- [ ] Push notifications for booking updates
- [ ] Video consultation feature
- [ ] Multi-language support (Bahasa Indonesia, English)
- [ ] Advanced analytics for therapists
- [ ] Loyalty program for clients
- [ ] Integration with popular payment gateways
- [ ] Therapist certification verification
- [ ] Emergency booking feature

---

Made with 💙 by the Therapist Hub team
