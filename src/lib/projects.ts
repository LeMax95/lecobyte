import rawProjects from '@/content/projects';
import { ProjectSchema, type Project } from '@/lib/schema';

console.log(
  'RAW PROJECTS DEBUG:',
  rawProjects.map((project, index) => ({
    index,
    slug: project?.slug,
    hasSummary: typeof project?.summary,
    hasBeforeState: typeof project?.beforeState,
    hasBuiltFor: typeof project?.builtFor,
    hasServiceSlug: typeof project?.serviceSlug,
    hasServiceLabel: typeof project?.serviceLabel,
    hasRelevanceTitle: typeof project?.relevanceTitle,
    hasRelevanceBody: typeof project?.relevanceBody,
  }))
);

const projects: Project[] = rawProjects.map((project, index) => {
  const parsed = ProjectSchema.safeParse(project);

  if (!parsed.success) {
    console.error('INVALID PROJECT INDEX:', index);
    console.error('INVALID PROJECT SLUG:', project?.slug);
    console.error('INVALID PROJECT OBJECT:', project);
    console.error('ZOD FORMAT:', parsed.error.format());
    throw new Error(`Invalid project at index ${index}: ${project?.slug ?? 'unknown'}`);
  }

  return parsed.data;
});

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((project) => project.slug === slug);
}