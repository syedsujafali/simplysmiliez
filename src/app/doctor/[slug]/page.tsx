import { notFound } from 'next/navigation';
import { doctorsData } from '@/data/doctorsData';
import { clinicInfo } from '@/data/clinicData';
import DoctorDetailClient from './DoctorDetailClient';

export function generateStaticParams() {
  return doctorsData.map((doc) => ({
    slug: doc.slug
  }));
}

export function generateMetadata({ params }) {
  const doctor = doctorsData.find((d) => d.slug === params.slug);
  if (!doctor) return {};

  return {
    title: `${doctor.name} – ${doctor.title} | Simply Smilez`,
    description: `${doctor.name} (${doctor.degree}) is a senior specialist at Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Experience: ${doctor.experience}.`,
    alternates: {
      canonical: `/doctor/${doctor.slug}`
    },
    openGraph: {
      title: `${doctor.name} – ${doctor.title} | Simply Smilez`,
      description: doctor.bio,
      images: [
        {
          url: doctor.image,
          alt: doctor.name
        }
      ]
    }
  };
}

export default async function DoctorProfilePage({ params }) {
  const { slug } = await params;
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  const otherDoctor = doctorsData.find((d) => d.slug !== slug);

  return (
    <DoctorDetailClient
      doctor={doctor}
      otherDoctor={otherDoctor}
      clinicInfo={clinicInfo}
    />
  );
}
