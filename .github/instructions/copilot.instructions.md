---
applyTo: '**'
---
# Project: Minimalist Technology E-Commerce Website  
**Type:** Frontend-only demo  
**Frameworks:** None (use only HTML, CSS, and vanilla JavaScript)  

---

## 🎯 Goal
Create a **minimalist, Apple-style** technology e-commerce demo website.  
The site should look professional, responsive, and product-focused — built entirely with clean HTML, CSS, and JavaScript.  
There will be no backend or API calls. All content (images, product data) is static.

---

## 📄 Page Structure

### 1. Navbar
- Fixed (sticky) at the top.  
- Logo on the left (text logo: “NovaTech”).  
- Menu items on the right: **Home**, **Products**, **About**, **Contact**.  
- Subtle underline or fade animation on hover.  

### 2. Hero Section
- Large full-width product image (e.g., a sleek smartwatch or wireless earbuds).  
- Headline (e.g., “Technology. Simplified.”).  
- Tagline below.  
- “Shop Now” button with hover animation.  

### 3. Product Gallery
- Grid layout (responsive: 3 columns desktop, 2 on tablet, 1 on mobile).  
- Each card: product image, name, short description, and price.  
- Hover effect: light shadow and “View Details” button appear.  
- Use static sample images (e.g., from `/assets/products/`).  

### 4. Product Detail Section (Optional)
- A larger image with more text (mock-up style).  
- “Add to Cart” button (not functional).  

### 5. About Section
- Short paragraph describing the brand’s philosophy (e.g., “Minimal design, maximum impact”).  
- Three feature icons with short captions (e.g., Innovation, Simplicity, Performance).  

### 6. Contact Section
- Static form with inputs for **Name**, **Email**, **Message**.  
- “Send Message” button (no backend).  

### 7. Footer
- Brand name, social media icons, and copyright.  
- “Back to top” button with smooth scroll behavior.  

---

## 🎨 Design Guidelines

**Colors**
- White: `#FFFFFF`  
- Charcoal Black: `#1C1C1C`  
- Light Gray: `#F5F5F5`  
- Accent Blue: `#3A7AFE`  

**Typography**
- Font: Inter or Poppins  
- Font-weight: 400–600  
- Headings: uppercase or semi-bold  

**Layout & Style**
- Rounded corners: `border-radius: 12px`  
- Subtle shadows: `box-shadow: 0 4px 10px rgba(0,0,0,0.05)`  
- Smooth transitions: `transition: all 0.3s ease`  
- CSS animations on scroll (keyframes or IntersectionObserver)  

**Responsiveness**
- Fully responsive for desktop, tablet, and mobile using media queries.  

---

## ⚙️ Technical Notes

- **No frameworks or preprocessors** (no React, no Tailwind, no Bootstrap).  
- Use **semantic HTML5 tags** (`header`, `section`, `article`, `footer`, etc.).  
- Keep CSS modular — separate file (`style.css`).  
- Keep JS minimal — mainly for animations or small interactions.  
- Store images in `/assets/` folder.  

---

## 🧩 Suggested File Structure
/project-root
│
├── index.html
├── style.css
├── script.js
├── /assets
│ ├── /products
│ ├── logo.png
│ └── icons/
└── copilot-instructions.md

---

## 💡 Copilot Hints
When generating code:
- Use **clean and readable structure**, minimal comments.  
- Focus on **modern design with balanced whitespace**.  
- Avoid unnecessary complexity — prioritize simplicity and clarity.  
- Test layout on desktop and mobile.  

---

✅ **Deliverable:**  
A visually polished, static, responsive minimalist tech e-commerce website built with only HTML, CSS, and vanilla JS.
