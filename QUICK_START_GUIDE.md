# Quick Start Guide - LIHE Community Connect

## 🚀 Getting Started

### 1. Start the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5174`

### 2. Navigate Between Pages
- **Home**: http://localhost:5174/ (or click "Home" in navbar)
- **About**: http://localhost:5174/about (or click "About" in navbar)
- **Services**: http://localhost:5174/services (or click "Service" in navbar)
- **Contact**: http://localhost:5174/contact (or click "Contact" in navbar)

## 📁 Project Files

### Main App Files
- `src/App.jsx` - Router configuration and routing setup
- `src/App.css` - All global styles (1948 lines)
- `src/main.jsx` - React entry point

### Page Components (in `src/pages/`)
- `Home.jsx` - Landing page with hero, gallery, projects
- `About.jsx` - About page with team and company story
- `Services.jsx` - Services page with 6 categories
- `Contact.jsx` - Contact page with form and FAQ

### Assets (in `public/`)
- `Images/` - Product images (20+)
- `bg/` - Background SVG decorations (5)

## 🎨 Customization

### Change Colors
Edit these CSS variables in `App.css`:
```css
:root {
  --primary-red: #ff0000;
  --dark-red: #cc0000;
  --bg-darker: #0a0a0a;
  --text-white: #ffffff;
  --text-gray: #999999;
}
```

### Update Company Info (Contact Page)
Edit the `contactInfo` array in `Contact.jsx`:
```javascript
const contactInfo = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Visit Us',
    content: 'Your address here'
  },
  // ... more info
];
```

### Change Team Members (About Page)
Edit the `teamMembers` array in `About.jsx`:
```javascript
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    description: 'Your description'
  },
  // ... more members
];
```

### Update Statistics (About Page)
Edit the `stats` array in `About.jsx`:
```javascript
const stats = [
  { number: '500+', label: 'Active Volunteers' },
  // ... more stats
];
```

## 📱 Testing Responsive Design

Test at these breakpoints:
- **Desktop**: 1920px, 1600px, 1400px, 1200px
- **Tablet**: 1024px, 768px
- **Mobile**: 600px, 480px, 420px

Use browser DevTools to test:
1. Press F12 to open DevTools
2. Click device toggle icon
3. Select different device sizes

## 🔧 Building for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview

# The build output will be in the 'dist' folder
```

## 📊 Page Components Breakdown

### Home Page (/)
**Sections:**
1. Hero section with background animations
2. About section with image gallery
3. Projects section (6 categories)
4. Contact form section
5. Footer

**Features:**
- Gallery auto-scroll
- Scroll animations
- Mobile menu toggle

### About Page (/about)
**Sections:**
1. Hero section
2. Mission, Vision, Values cards
3. Impact statistics
4. Company story
5. Team member cards
6. Footer

**Features:**
- Hover animations on cards
- Stat counters
- Team member profiles

### Services Page (/services)
**Sections:**
1. Hero section
2. 6 Service categories with alternating layouts:
   - Mental Health
   - Public Health
   - Community Aid
   - Disability Support
   - Environmental
   - Youth & Education
3. Footer

**Features:**
- Image hover zoom effects
- Call-to-action buttons
- Responsive grid layout

### Contact Page (/contact)
**Sections:**
1. Hero section
2. Contact info cards (4 cards)
3. Contact form
4. Google Maps
5. FAQ accordion (5 items)
6. Footer

**Features:**
- Form validation
- Expandable FAQ items
- Embedded map

## 🎯 Common Tasks

### Add New Navigation Link
Edit the nav links in each page component (e.g., in `About.jsx`):
```jsx
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/new-page">New Page</a></li>
  </ul>
</nav>
```

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add to `App.jsx`:
```jsx
import NewPage from './pages/NewPage'

// In routes:
<Route path="/new-page" element={<NewPage />} />
```

### Modify Hero Section
Edit the hero content in `Home.jsx`:
```jsx
<h1><span className="red-title">Your Title Here,</span> Your Subtitle</h1>
```

### Change Logo
Replace `Images/logo-lihe.png` with your logo and update image src in navbar

### Update Service Categories (Home Page)
Edit the event-card grid in `Home.jsx`:
```jsx
<div className="event-card">
  <div className="icon-wrapper"><i className="fas fa-your-icon"></i></div>
  <h3>Your Category</h3>
</div>
```

## 🐛 Troubleshooting

**Port Already in Use:**
- The app uses port 5174 (falls back from 5173)
- To use a specific port: `npm run dev -- --port 3000`

**Styles Not Updating:**
- HMR should update automatically
- If not, refresh the browser
- Check browser console for errors

**Images Not Loading:**
- Verify images exist in `public/Images/` or `public/bg/`
- Check image paths in components (should be `/Images/filename.jpg`)
- Ensure image filenames match exactly (case-sensitive)

**Routing Not Working:**
- Ensure React Router DOM is installed: `npm install react-router-dom`
- Check that `App.jsx` has the Router wrapper
- Verify route paths match the component imports

## 📚 Resources

- **React Documentation**: https://react.dev
- **React Router**: https://reactrouter.com
- **Vite**: https://vite.dev
- **Bootstrap**: https://getbootstrap.com
- **Font Awesome**: https://fontawesome.com

## 💡 Tips & Best Practices

1. **Use Components**: Extract repeated UI elements into separate components
2. **State Management**: Use hooks (useState, useContext) for state
3. **Performance**: Use React.memo for expensive components
4. **Accessibility**: Add alt text to images, ARIA labels to buttons
5. **Mobile First**: Design for mobile first, then enhance for desktop
6. **Testing**: Test responsive design at different breakpoints
7. **Git**: Commit frequently with meaningful messages
8. **Comments**: Document complex logic with code comments

## 📞 Support

For issues or questions:
1. Check the browser console (F12)
2. Review the error messages
3. Check file paths and imports
4. Verify all dependencies are installed
5. Restart the dev server

---

**Happy Coding! 🎉**

Questions? Check PROJECT_DOCUMENTATION.md for more details.
