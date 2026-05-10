import rawCapabilitiesPage from "@/content/capabilities";
import {
  CapabilitiesPageSchema,
  type CapabilitiesPageContent,
} from "@/lib/schema";

const capabilitiesPage: CapabilitiesPageContent =
  CapabilitiesPageSchema.parse(rawCapabilitiesPage);

export async function getCapabilitiesPage(): Promise<CapabilitiesPageContent> {
  return capabilitiesPage;
}