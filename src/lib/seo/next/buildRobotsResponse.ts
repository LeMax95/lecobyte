export function buildRobotsResponse(input: {
  siteUrl: string;
  additionalLines?: string[];
}) {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${input.siteUrl}/sitemap.xml`,
    ...(input.additionalLines ?? []),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}