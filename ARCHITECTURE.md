
# Therapist Hub - Architecture Documentation

## 📐 System Architecture

### Overview

Therapist Hub is built using a modern mobile-first architecture with the following key components:

```
┌─────────────────────────────────────────────────────────┐
│                     Mobile Clients                       │
│              (iOS, Android, Web via Expo)               │
└─────────────────────────────────────────────────────────┘
                            │
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   React Native App                       │
│                   (Expo Router)                          │
└─────────────────────────────────────────────────────────┘
                            │
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  Supabase Backend                        │
│  ┌──────────┬──────────┬──────────┬──────────────────┐ │
│  │ Database │   Auth   │ Storage  │  Edge Functions  │ │
│  │(Postgres)│          │          │                  │ │
│  └──────────┴──────────┴──────────┴──────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## 🏗️ Application Structure

### File-Based Routing (Expo Router)

The app uses Expo Router for navigation with a file-based routing system:

```
app/
├── _layout.tsx                 # Root layout with providers
├── (tabs)/                     # Tab navigation group
│   ├── _layout.tsx            # Tab bar configuration
│   ├── (home)/                # Home stack
│   │   ├── _layout.tsx        # Home stack layout
│   │   └── index.tsx          # Home screen
│   ├── bookings.tsx           # Bookings screen
│   ├── messages.tsx           # Messages screen
│   └── profile.tsx            # Profile screen
├── modal.tsx                  # Modal screens
└── integrations/              # Third-party integrations
    └── supabase/              # Supabase client
```

### Component Architecture

```
components/
├── BodyScrollView.tsx         # Scrollable container
├── FloatingTabBar.tsx         # Custom tab bar
├── IconSymbol.tsx             # Cross-platform icons
├── ListItem.tsx               # Reusable list item
└── button.tsx                 # Custom button component
```

### Data Layer

```
data/
└── mockData.ts                # Mock data for development

types/
└── index.ts                   # TypeScript type definitions

contexts/
└── WidgetContext.tsx          # Global state management
```

## 🔐 Authentication Flow

```
┌──────────────┐
│ User Opens   │
│     App      │
└──────┬───────┘
       │
       ↓
┌──────────────┐      No      ┌──────────────┐
│ Check Auth   │─────────────→│ Login/Signup │
│   Session    │               │    Screen    │
└──────┬───────┘               └──────┬───────┘
       │ Yes                          │
       │                              │ Success
       │                              │
       ↓                              ↓
┌──────────────────────────────────────────┐
│         Main App (Tab Navigation)        │
└──────────────────────────────────────────┘
```

## 🗄️ Database Schema

### Core Tables

#### profiles
- User profile information
- Links to auth.users
- RLS: Users can only view/edit their own profile

#### therapists
- Therapist-specific data
- Services offered
- Availability schedule
- Location information
- RLS: Public read, therapist-only write

#### bookings
- Appointment records
- Status tracking
- Payment information
- RLS: Users see their own bookings

#### services
- Available massage services
- Pricing information
- Duration
- RLS: Public read, admin write

#### messages
- In-app messaging
- Real-time updates via Supabase Realtime
- RLS: Participants only

#### reviews
- Therapist ratings and reviews
- Client feedback
- RLS: Public read, verified clients write

#### payments
- Transaction records
- Payment status
- Fee breakdowns
- RLS: User-specific access

## 🎨 UI/UX Architecture

### Design System

The app uses a centralized design system in `styles/commonStyles.ts`:

```typescript
{
  colors: {
    primary: '#14B8A6',      // Teal
    secondary: '#0D9488',    // Dark teal
    background: '#FFFFFF',   // White (light mode)
    text: '#1F2937',         // Dark gray
    // ... more colors
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    // Font sizes and weights
  }
}
```

### Platform-Specific Code

The app supports platform-specific implementations:

- `*.ios.tsx` - iOS-specific code
- `*.android.tsx` - Android-specific code
- `*.web.tsx` - Web-specific code
- `*.tsx` - Fallback for all platforms

## 🔄 State Management

### Local State
- React hooks (useState, useReducer)
- Component-level state

### Global State
- React Context API
- WidgetContext for shared state

### Server State
- Supabase real-time subscriptions
- Automatic cache invalidation

## 🚀 Performance Optimizations

### Code Splitting
- Lazy loading of screens
- Dynamic imports for heavy components

### Image Optimization
- Expo Image for optimized loading
- Cached images
- Responsive image sizes

### Database Optimization
- Indexed queries
- Efficient RLS policies
- Connection pooling

## 🔒 Security Measures

### Authentication
- Supabase Auth with email verification
- Secure session management
- Token refresh handling

### Authorization
- Row Level Security (RLS) on all tables
- Role-based access control
- API route protection

### Data Protection
- Encrypted data transmission (HTTPS)
- Secure storage (AsyncStorage)
- Input validation and sanitization

## 📱 Platform Support

### iOS
- Native tab navigation
- SF Symbols for icons
- iOS-specific gestures

### Android
- Material Design icons
- Android-specific UI patterns
- Edge-to-edge display

### Web
- Responsive design
- Progressive Web App (PWA) support
- Web-specific optimizations

## 🧪 Testing Strategy

### Unit Tests
- Component testing
- Utility function tests
- Hook testing

### Integration Tests
- API integration tests
- Database query tests
- Authentication flow tests

### E2E Tests
- User journey tests
- Critical path testing
- Cross-platform testing

## 📊 Analytics & Monitoring

### User Analytics
- Screen view tracking
- User interaction events
- Conversion tracking

### Error Monitoring
- Error logging
- Crash reporting
- Performance monitoring

## 🔄 CI/CD Pipeline

```
┌──────────────┐
│  Git Push    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   Linting    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   Testing    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│    Build     │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│    Deploy    │
└──────────────┘
```

## 🌐 API Architecture

### RESTful Endpoints (via Supabase)
- Auto-generated from database schema
- CRUD operations
- Real-time subscriptions

### Edge Functions
- Custom business logic
- Payment processing
- Email notifications
- Third-party integrations

## 📈 Scalability Considerations

### Database
- Connection pooling
- Read replicas for scaling
- Efficient indexing

### Application
- Stateless architecture
- Horizontal scaling capability
- CDN for static assets

### Caching
- Client-side caching
- API response caching
- Image caching

## 🔮 Future Enhancements

- GraphQL API layer
- Microservices architecture
- Advanced caching strategies
- Real-time collaboration features
- AI-powered recommendations

---

This architecture is designed to be scalable, maintainable, and performant across all platforms.
