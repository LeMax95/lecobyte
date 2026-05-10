import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  IntelFrontmatterSchema,
  IntelPostSchema,
  type IntelPost,
} from "@/lib/schema";

const intelDirectory = path.join(process.cwd(), "src/content/intel");

function readIntelFile(fileName: string): IntelPost {
  const fullPath = path.join(intelDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const parsed = IntelFrontmatterSchema.safeParse(data);

  if (!parsed.success) {
    console.error("\n========== INVALID INTEL FILE ==========");
    console.error("FILE:", fileName);
    console.error("FULL PATH:", fullPath);
    console.error("FRONTMATTER DATA:", JSON.stringify(data, null, 2));
    console.error(
      "ISSUES:",
      parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        code: issue.code,
        message: issue.message,
      }))
    );
    console.error("FILE START:");
    console.error(fileContents.slice(0, 500));

    throw new Error(`Invalid intel file: ${fileName}`);
  }

  return IntelPostSchema.parse({
    ...parsed.data,
    body: content.trim(),
  });
}

export async function getAllIntel(): Promise<IntelPost[]> {
  const files = fs
    .readdirSync(intelDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  const posts = files.map(readIntelFile);

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getIntelBySlug(slug: string): Promise<IntelPost | undefined> {
  const posts = await getAllIntel();
  return posts.find((post) => post.slug === slug);
}