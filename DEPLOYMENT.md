
# Deployment Guide

This guide covers deploying Therapist Hub to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] API keys secured
- [ ] App icons and splash screens updated
- [ ] App store assets prepared
- [ ] Privacy policy and terms of service ready
- [ ] Analytics configured
- [ ] Error monitoring set up

## 🌐 Web Deployment

### Build for Production

```bash
npm run build:web
```

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Environment Variables

Set these in your hosting platform:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## 📱 iOS Deployment

### Prerequisites

- Apple Developer Account ($99/year)
- Mac with Xcode installed
- Valid provisioning profiles and certificates

### Using EAS Build

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Configure EAS:
```bash
eas build:configure
```

3. Build for iOS:
```bash
eas build --platform ios
```

4. Submit to App Store:
```bash
eas submit --platform ios
```

### Manual Build

1. Generate native iOS project:
```bash
npm run build:android
```

2. Open in Xcode:
```bash
open ios/TherapistHub.xcworkspace
```

3. Configure signing and build

## 🤖 Android Deployment

### Prerequisites

- Google Play Developer Account ($25 one-time)
- Android Studio installed
- Keystore file for signing

### Create Keystore

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore therapist-hub.keystore -alias therapist-hub -keyalg RSA -keysize 2048 -validity 10000
```

### Using EAS Build

1. Build for Android:
```bash
eas build --platform android
```

2. Submit to Play Store:
```bash
eas submit --platform android
```

### Manual Build

1. Generate native Android project:
```bash
npm run build:android
```

2. Build APK/AAB:
```bash
cd android
./gradlew assembleRelease
```

## 🚀 Supabase Setup

### Database Migrations

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Link to your project:
```bash
supabase link --project-ref your-project-ref
```

3. Apply migrations:
```bash
supabase db push
```

### Edge Functions

Deploy Edge Functions:
```bash
supabase functions deploy function-name
```

### Environment Variables

Set in Supabase Dashboard:
- Payment gateway keys
- Email service credentials
- Third-party API keys

## 🔄 CI/CD Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run build:web
      - name: Deploy to Netlify
        run: netlify deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📊 Monitoring Setup

### Error Tracking

1. Set up Sentry:
```bash
npm install @sentry/react-native
```

2. Configure in `app/_layout.tsx`

### Analytics

1. Set up analytics service (e.g., Google Analytics, Mixpanel)
2. Add tracking events throughout the app

## 🔐 Security Configuration

### SSL/TLS

- Ensure HTTPS is enforced
- Configure SSL certificates
- Set up HSTS headers

### API Security

- Enable rate limiting
- Configure CORS properly
- Set up API key rotation

## 📱 App Store Optimization

### iOS App Store

Required assets:
- App icon (1024x1024)
- Screenshots (various sizes)
- App preview video (optional)
- Description and keywords
- Privacy policy URL
- Support URL

### Google Play Store

Required assets:
- App icon (512x512)
- Feature graphic (1024x500)
- Screenshots (various sizes)
- Promo video (optional)
- Description and keywords
- Privacy policy URL

## 🌍 Localization

### Add Languages

1. Create translation files:
```
locales/
├── en.json
├── id.json
```

2. Configure i18n in the app

## 🔄 Update Strategy

### Over-The-Air (OTA) Updates

Using Expo Updates:

```bash
eas update --branch production
```

### App Store Updates

1. Increment version in `app.json`
2. Build new version
3. Submit to stores
4. Wait for review

## 📈 Performance Optimization

### Before Deployment

- Enable Hermes engine
- Optimize images
- Minimize bundle size
- Enable code splitting
- Configure caching

### Production Build Optimization

```json
{
  "expo": {
    "android": {
      "enableProguardInReleaseBuilds": true,
      "enableShrinkResourcesInReleaseBuilds": true
    }
  }
}
```

## 🧪 Testing in Production

### Beta Testing

#### iOS TestFlight

```bash
eas build --platform ios --profile preview
eas submit --platform ios --latest
```

#### Android Internal Testing

```bash
eas build --platform android --profile preview
eas submit --platform android --track internal
```

## 📞 Post-Deployment

### Monitoring

- Check error rates
- Monitor performance metrics
- Review user feedback
- Track crash reports

### Rollback Plan

If issues occur:
1. Revert to previous version
2. Fix issues in development
3. Test thoroughly
4. Redeploy

## 🎯 Deployment Environments

### Development
- URL: dev.therapisthub.com
- Database: Development Supabase project
- Purpose: Testing new features

### Staging
- URL: staging.therapisthub.com
- Database: Staging Supabase project
- Purpose: Pre-production testing

### Production
- URL: therapisthub.com
- Database: Production Supabase project
- Purpose: Live app

## 📚 Additional Resources

- [Expo Deployment Docs](https://docs.expo.dev/distribution/introduction/)
- [Supabase Deployment Guide](https://supabase.com/docs/guides/platform)
- [React Native Performance](https://reactnative.dev/docs/performance)

---

For deployment support, contact devops@therapisthub.com
