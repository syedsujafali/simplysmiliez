import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { clinicInfo } from '@/data/clinicData';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug
  }));
}

export function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.image,
          alt: service.title
        }
      ]
    }
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug);

  return (
    <ServiceDetailClient
      service={service}
      otherServices={otherServices}
      clinicInfo={clinicInfo}
    />
  );
}
