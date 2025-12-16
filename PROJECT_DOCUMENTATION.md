# LIHE Community Connect - React Multi-Page Application

## Project Overview
LIHE Community Connect is a fully functional React-based multi-page website for Lincoln Institute of Higher Education's community service platform. The application has been converted from static HTML to a modern React SPA (Single Page Application) with client-side routing.

## Project Structure

```
src/
├── App.jsx              # Main app component with routing setup
├── App.css              # Global styles and responsive design
├── index.css            # Base styles
├── main.jsx             # React entry point
├── pages/
│   ├── Home.jsx         # Home/Index page with hero, about, projects sections
│   ├── About.jsx        # About page with mission, vision, team, and story
│   ├── Services.jsx     # Services page with 6 service categories
│   └── Contact.jsx      # Contact page with form, FAQ, map, and info
├── assets/              # Static assets folder
public/
├── Images/              # Product images (scroll gallery, overlays, service images)
├── bg/                  # Background SVG decorations
└── [Other assets]

package.json            # Dependencies and scripts
vite.config.js          # Vite configuration
index.html              # HTML entry point
```

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, about section, gallery, and project categories |
| `/about` | About | About page featuring mission, vision, values, stats, team, and company story |
| `/services` | Services | Services page with 6 service categories (Mental Health, Public Health, Community Aid, Disability Support, Environmental, Youth & Education) |
| `/contact` | Contact | Contact page with contact form, info cards, map, and FAQ accordion |

## Key Features

### Home Page (`/`)
- Responsive hero section with background animations
- Australia map SVG decoration
- Auto-scrolling image gallery (10 images with seamless looping)
- About section with feature list
- Project categories grid (6 cards)
- Quick contact form
- Sticky navbar with scroll detection
- Mobile-responsive menu toggle

### About Page (`/about`)
- Hero section with gradient background and floating animation
- Mission, Vision, Values (MVV) grid cards with icons
- Statistics section (500+ volunteers, 150+ organizations, 10k+ hours, 95% satisfaction)
- Team section with 4 team members
- Company story section with image
- Scroll effects and hover animations

### Services Page (`/services`)
- Hero section with gradient background
- 6 alternating service sections with images and descriptions:
  1. Mental Health
  2. Public Health
  3. Community Aid
  4. Disability Support
  5. Environmental
  6. Youth & Education
- Alternating left/right layout for visual interest
- Hover effects on images and cards
- Call-to-action buttons

### Contact Page (`/contact`)
- Hero section with gradient background
- Contact information cards (4 cards: address, phone, email, hours)
- Contact form with validation
- Google Maps embedded location
- FAQ accordion with 5 items
- Mobile-responsive design

## Technology Stack

- **Framework**: React 18 with Vite 7.2.5
- **Routing**: React Router DOM v6
- **Styling**: Bootstrap 5.3.2 CDN + Custom CSS (1948 lines)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts - Poppins (400, 600, 700 weights)
- **Development Server**: Vite HMR enabled on localhost:5174

## Responsive Design

The application is fully responsive across all screen sizes:
- **Breakpoints**: 1920px, 1600px, 1399px, 1199px, 1024px, 900px, 768px, 600px, 480px, 420px
- **Mobile-first approach** with media queries
- **Flexible layouts** using CSS Grid and Flexbox
- **Bootstrap utilities** for responsive spacing and layout

## Color Scheme

- **Primary Red**: #ff0000
- **Dark Red**: #cc0000
- **Light Red**: #cc0000
- **Background Dark**: #000000
- **Background Card**: #1a1a1a
- **Border Color**: #333333
- **Text White**: #ffffff
- **Text Gray**: #999999

## Interactive Features

1. **Navbar Scroll Detection**: Navbar changes appearance when scrolled down
2. **Mobile Menu Toggle**: Hamburger menu for mobile devices
3. **Gallery Auto-Scroll**: Seamless infinite scroll gallery on home page
4. **Hero Animations**: Background elements animate on scroll
5. **Card Hover Effects**: Smooth hover animations on service cards, team cards, and info cards
6. **FAQ Accordion**: Expandable/collapsible FAQ items
7. **Form Validation**: Contact form with required fields
8. **Image Hover**: Image scaling effect on hover

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5174)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Navigation

All navigation is handled through React Router. The navbar links automatically update the active state based on the current route. Navigation between pages is smooth with no page reloads.

### Navbar Links:
- Home → `/`
- About → `/about`
- Service → `/services`
- Contact → `/contact`
- Volunteer button → Placeholder (can be linked to volunteer registration)
- Donate button → Placeholder (can be linked to donation page)

## Component Architecture

### App.jsx
- Main router component
- Manages routing between pages
- Props passed to Home component for scroll state management

### Home.jsx
- Scroll event handlers for navbar and hero animations
- Gallery auto-scroll functionality with pause on hover
- Cleanup of animation frames on unmount
- All home page sections (hero, about, projects, contact)

### About.jsx
- Displays team members and statistics
- Mission, Vision, Values cards
- Company story section
- All styled with inline CSS for component isolation

### Services.jsx
- 6 service categories with alternating layouts
- Image and text content for each service
- Responsive grid layout

### Contact.jsx
- Contact form with state management
- FAQ accordion with active state
- Contact information cards
- Google Maps embedded iframe

## CSS Organization

All styles are organized by component:
- **App.css** (1948 lines): Global styles, animations, responsive utilities
- **Inline styles** in page components: Component-specific styling using `<style>` tags

## Future Enhancements

1. Add News page component
2. Implement volunteer registration form
3. Add donation payment integration
4. Create admin dashboard for managing opportunities
5. Add user authentication
6. Implement database backend
7. Add image lazy loading
8. Optimize bundle size
9. Add PWA support
10. Implement analytics

## Performance Considerations

- HMR (Hot Module Replacement) enabled for fast development
- Lazy-loaded images in gallery
- Optimized CSS with responsive design
- Image hover effects use CSS transforms (GPU accelerated)
- Smooth scrolling with requestAnimationFrame

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG standards
- Responsive text sizing with clamp()

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Sizes

- `App.css`: ~1948 lines
- `Home.jsx`: ~263 lines
- `About.jsx`: ~380 lines (with inline styles)
- `Services.jsx`: ~360 lines (with inline styles)
- `Contact.jsx`: ~650 lines (with inline styles)

## Development Notes

- All components use React hooks (useState, useEffect)
- Cleanup functions implemented for event listeners and animations
- Proper key props used in map functions
- No console warnings or errors
- Vite configured for optimal development experience

## Testing

To test the application:
1. Navigate to `http://localhost:5174`
2. Test all navigation links
3. Check responsive design at different breakpoints
4. Test form submissions
5. Verify all animations and effects
6. Test mobile menu toggle

---

**Last Updated**: 2025
**Framework**: React 18 + Vite
**Status**: Fully Functional
