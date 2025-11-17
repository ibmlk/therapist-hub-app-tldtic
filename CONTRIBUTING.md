
# Contributing to Therapist Hub

Thank you for your interest in contributing to Therapist Hub! We welcome contributions from the community.

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes: `git commit -m "Add: your feature description"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## 📝 Commit Message Guidelines

We follow conventional commit messages:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add therapist rating filter`

## 🎨 Code Style

- Use TypeScript for all new files
- Follow the existing code structure
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use React hooks appropriately

## 🧪 Testing

Before submitting a PR:

1. Run the linter: `npm run lint`
2. Test on both iOS and Android (if possible)
3. Ensure no console errors or warnings
4. Test all affected features

## 📱 Platform-Specific Code

When writing platform-specific code:

- Use `.ios.tsx` for iOS-specific implementations
- Use `.android.tsx` for Android-specific implementations
- Always provide a fallback `.tsx` file
- Document platform differences in comments

## 🗄️ Database Changes

If your contribution requires database changes:

1. Use Supabase migrations
2. Include RLS policies for all new tables
3. Document the schema changes in your PR
4. Test with sample data

## 📚 Documentation

- Update README.md if adding new features
- Add JSDoc comments for new functions
- Update type definitions in `types/index.ts`
- Include screenshots for UI changes

## 🐛 Bug Reports

When reporting bugs, please include:

- Device and OS version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Error messages or logs

## 💡 Feature Requests

For feature requests:

- Describe the feature clearly
- Explain the use case
- Provide mockups or examples (if applicable)
- Discuss potential implementation approaches

## 🔍 Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation as needed
3. Add yourself to the contributors list (if applicable)
4. Wait for review from maintainers
5. Address any requested changes
6. Once approved, your PR will be merged

## 📞 Questions?

If you have questions, feel free to:

- Open an issue for discussion
- Reach out to the maintainers
- Check existing issues and PRs

## 🙏 Thank You!

Your contributions help make Therapist Hub better for everyone. We appreciate your time and effort!

---

Happy coding! 💙
