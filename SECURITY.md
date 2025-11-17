
# Security Policy

## 🔒 Reporting a Vulnerability

We take the security of Therapist Hub seriously. If you discover a security vulnerability, please follow these steps:

1. **DO NOT** open a public issue
2. Email security@therapisthub.com with details
3. Include steps to reproduce the vulnerability
4. Allow us reasonable time to address the issue before public disclosure

## 🛡️ Security Measures

### Authentication & Authorization

- **Email Verification**: All new accounts require email verification
- **Secure Sessions**: JWT-based authentication with automatic token refresh
- **Row Level Security**: Database-level access control on all tables
- **Role-Based Access**: Different permissions for clients, therapists, and admins

### Data Protection

- **Encryption in Transit**: All data transmitted over HTTPS/TLS
- **Encryption at Rest**: Sensitive data encrypted in the database
- **Secure Storage**: Local data stored using secure AsyncStorage
- **Input Validation**: All user inputs validated and sanitized

### API Security

- **Rate Limiting**: Protection against brute force attacks
- **CORS Configuration**: Restricted cross-origin requests
- **API Key Protection**: Keys stored securely, never in source code
- **Request Validation**: All API requests validated

### Payment Security

- **PCI Compliance**: Payment processing through certified providers
- **No Card Storage**: Card details never stored on our servers
- **Secure Transactions**: End-to-end encrypted payment flow
- **Fraud Detection**: Automated fraud prevention measures

### Database Security

- **Row Level Security (RLS)**: Enabled on all tables
- **Prepared Statements**: Protection against SQL injection
- **Access Logging**: All database access logged
- **Regular Backups**: Automated encrypted backups

### Mobile App Security

- **Secure Communication**: Certificate pinning for API calls
- **Jailbreak Detection**: Warning for compromised devices
- **Secure Storage**: Sensitive data encrypted locally
- **Code Obfuscation**: Production builds obfuscated

## 🔐 Environment Variables

Never commit sensitive information to the repository:

```bash
# ❌ NEVER DO THIS
SUPABASE_KEY=actual_key_here

# ✅ DO THIS
SUPABASE_KEY=your_supabase_key_here
```

Use `.env.example` as a template and create a local `.env` file.

## 🚨 Security Best Practices for Contributors

### Code Review
- All code changes reviewed before merging
- Security-focused code review checklist
- Automated security scanning

### Dependencies
- Regular dependency updates
- Vulnerability scanning with npm audit
- Only trusted packages used

### Secrets Management
- Never hardcode secrets
- Use environment variables
- Rotate keys regularly

### Access Control
- Principle of least privilege
- Regular access audits
- Multi-factor authentication for admin accounts

## 🔍 Security Checklist

Before deploying:

- [ ] All environment variables properly configured
- [ ] RLS policies enabled on all tables
- [ ] API keys rotated and secured
- [ ] HTTPS enforced
- [ ] Input validation implemented
- [ ] Error messages don't leak sensitive info
- [ ] Dependencies updated and scanned
- [ ] Authentication flows tested
- [ ] Authorization rules verified
- [ ] Logging and monitoring configured

## 📋 Compliance

### Data Privacy
- GDPR compliant data handling
- User data deletion on request
- Privacy policy clearly stated
- Cookie consent management

### Indonesian Regulations
- Compliance with local data protection laws
- Proper business licensing
- Tax compliance
- Consumer protection adherence

## 🔄 Security Updates

We regularly:
- Update dependencies
- Patch security vulnerabilities
- Review and update security policies
- Conduct security audits
- Train team on security best practices

## 📞 Contact

For security concerns:
- Email: security@therapisthub.com
- Response time: Within 48 hours
- Updates: Regular communication until resolved

## 🏆 Responsible Disclosure

We appreciate security researchers who:
- Report vulnerabilities responsibly
- Give us time to fix issues
- Don't exploit vulnerabilities
- Help make our platform safer

### Recognition
- Security researchers credited (with permission)
- Potential bug bounty program (coming soon)
- Public acknowledgment of contributions

## 📚 Resources

- [OWASP Mobile Security](https://owasp.org/www-project-mobile-security/)
- [Supabase Security](https://supabase.com/docs/guides/platform/security)
- [React Native Security](https://reactnative.dev/docs/security)

---

Last updated: January 2025

Security is an ongoing process. We continuously work to improve our security posture and appreciate community contributions to keeping Therapist Hub secure.
</parameter>
