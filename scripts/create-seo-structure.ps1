$paths = @(
  "src/lib/seo/core",
  "src/lib/seo/next",
  "src/lib/seo/schema",
  "src/lib/seo/resolvers",
  "src/app"
)

foreach ($path in $paths) {
  New-Item -ItemType Directory -Force -Path $path | Out-Null
}

$files = @(
  "src/lib/seo/core/types.ts",
  "src/lib/seo/core/urls.ts",
  "src/lib/seo/core/canonical.ts",
  "src/lib/seo/core/robots.ts",
  "src/lib/seo/core/opengraph.ts",
  "src/lib/seo/core/twitter.ts",
  "src/lib/seo/core/metadata.ts",
  "src/lib/seo/core/sitemap.ts",

  "src/lib/seo/next/toNextMetadata.ts",
  "src/lib/seo/next/renderJsonLd.tsx",
  "src/lib/seo/next/buildRobotsResponse.ts",
  "src/lib/seo/next/buildSitemapResponse.ts",

  "src/lib/seo/schema/organization.ts",
  "src/lib/seo/schema/localBusiness.ts",
  "src/lib/seo/schema/website.ts",
  "src/lib/seo/schema/webpage.ts",
  "src/lib/seo/schema/breadcrumb.ts",
  "src/lib/seo/schema/article.ts",
  "src/lib/seo/schema/itemList.ts",

  "src/lib/seo/resolvers/site.ts",
  "src/lib/seo/resolvers/home.ts",
  "src/lib/seo/resolvers/projectDetail.ts",
  "src/lib/seo/resolvers/intel.ts",
  "src/lib/seo/resolvers/intelDetail.ts",
  "src/lib/seo/resolvers/capabilities.ts",
  "src/lib/seo/resolvers/archive.ts",
  "src/lib/seo/resolvers/connect.ts",

  "src/lib/seo/jsonld.ts",
  "src/lib/seo/index.ts",

  "src/app/robots.ts",
  "src/app/sitemap.ts"
)

foreach ($file in $files) {
  if (-not (Test-Path $file)) {
    New-Item -ItemType File -Path $file | Out-Null
  }
}

Write-Host "SEO structure created successfully."