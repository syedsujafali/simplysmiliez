import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';

export const metadata = {
  title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
  description: 'Simply Smilez Dental Clinic in Shaikpet offers Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Hyderabad.',
  keywords: 'dental clinic in Shaikpet, dentist in Shaikpet Hyderabad, Invisalign Shaikpet, Invisalign First for Kids Hyderabad, root canal Shaikpet, dental implants Hyderabad, braces Shaikpet, pediatric dentist Hyderabad, dentist Manikonda, dentist Kondapur, dentist Jubilee Hills, dentist Gachibowli',
  authors: [{ name: 'Simply Smilez Dental' }],
  metadataBase: new URL('https://www.simplysmilezdental.in'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description: 'Comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, root canals, braces, implants and more.',
    url: 'https://www.simplysmilezdental.in/',
    siteName: 'Simply Smilez Dental',
    images: [
      {
        url: '/images/about.webp',
        alt: 'Simply Smilez Dental Clinic in Shaikpet, Hyderabad'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description: 'Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Shaikpet, Hyderabad.',
    images: ['/images/about.webp']
  },
  icons: {
    icon: '/images/logo.jpeg'
  }
};

const schemaJson = {
  "@context": "https://schema.org/",
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  "@id": "https://www.simplysmilezdental.in/#dentist",
  "name": "Simply Smilez Dental Clinic",
  "url": "https://www.simplysmilezdental.in/",
  "description": "Simply Smilez Dental Clinic provides comprehensive dental care for children and adults in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, braces, root canal treatment, dental implants, cosmetic dentistry, pediatric dentistry and general dental care.",
  "medicalSpecialty": "Dentistry",
  "image": "https://www.simplysmilezdental.in/images/about.webp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.simplysmilezdental.in/images/logo-3.webp"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road",
    "addressLocality": "Shaikpet",
    "addressRegion": "Telangana",
    "postalCode": "500008",
    "addressCountry": "IN"
  },
  "telephone": "+919603338904",
  "openingHours": [
    "Mo-Sa 10:00-21:00",
    "Su 11:00-16:00"
  ],
  "areaServed": [
    { "@type": "Place", "name": "Shaikpet, Hyderabad" },
    { "@type": "Place", "name": "Manikonda, Hyderabad" },
    { "@type": "Place", "name": "Kondapur, Hyderabad" },
    { "@type": "Place", "name": "Jubilee Hills, Hyderabad" },
    { "@type": "Place", "name": "Gachibowli, Hyderabad" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
