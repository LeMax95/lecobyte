$paths = @(
  "src/content/seo"
)

foreach ($path in $paths) {
  New-Item -ItemType Directory -Force -Path $path | Out-Null
}

$files = @(
  "src/content/seo/site.ts",
  "src/content/seo/home.ts",
  "src/content/seo/intel.ts",
  "src/content/seo/capabilities.ts",
  "src/content/seo/archive.ts",
  "src/content/seo/connect.ts",
  "src/lib/seoContent.ts"
)

foreach ($file in $files) {
  if (-not (Test-Path $file)) {
    New-Item -ItemType File -Path $file | Out-Null
  }
}

Write-Host "Dedicated SEO layer structure created."