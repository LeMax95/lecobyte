import rawServices from '@/content/services';
import { ServicePageSchema, type ServicePageContent } from '@/lib/schema';

const services: ServicePageContent[] = rawServices.map((item) =>
  ServicePageSchema.parse(item)
);

export async function getAllServices(): Promise<ServicePageContent[]> {
  return services;
}

export async function getServiceBySlug(
  slug: string
): Promise<ServicePageContent | undefined> {
  return services.find((service) => service.slug === slug);
}