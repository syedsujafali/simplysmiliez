/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true
      },
      {
        source: '/all-services.html',
        destination: '/all-services',
        permanent: true
      },
      {
        source: '/composite.html',
        destination: '/composite-fillings-hyderabad',
        permanent: true
      },
      {
        source: '/composite-fillings-hyderabad.html',
        destination: '/composite-fillings-hyderabad',
        permanent: true
      },
      {
        source: '/crowns.html',
        destination: '/crowns',
        permanent: true
      },
      {
        source: '/dental-veneers-hyderabad.html',
        destination: '/dental-veneers-hyderabad',
        permanent: true
      },
      {
        source: '/braces.html',
        destination: '/braces',
        permanent: true
      },
      {
        source: '/laserteeth.html',
        destination: '/laserteeth',
        permanent: true
      },
      {
        source: '/laserroot.html',
        destination: '/laserroot',
        permanent: true
      },
      {
        source: '/lasergum.html',
        destination: '/lasergum',
        permanent: true
      },
      {
        source: '/dentalimplant.html',
        destination: '/dentalimplant',
        permanent: true
      },
      {
        source: '/pediatary.html',
        destination: '/pediatary',
        permanent: true
      },
      {
        source: '/wisdom.html',
        destination: '/wisdom',
        permanent: true
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true
      },
      {
        source: '/doctor.html',
        destination: '/doctor',
        permanent: true
      },
      {
        source: '/doctor/dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad.html',
        destination: '/doctor/dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad',
        permanent: true
      },
      {
        source: '/doctor/dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad.html',
        destination: '/doctor/dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad',
        permanent: true
      },
      {
        source: '/testimonal.html',
        destination: '/testimonal',
        permanent: true
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
