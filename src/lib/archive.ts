import rawArchivePage from "@/content/archive";
import { ArchivePageSchema, type ArchivePageContent } from "@/lib/schema";

const archivePage: ArchivePageContent = ArchivePageSchema.parse(rawArchivePage);

export async function getArchivePage(): Promise<ArchivePageContent> {
  return archivePage;
}