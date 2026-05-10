export function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

export function ensureLeadingSlash(value: string): string {
  return value.startsWith("/") ? value : `/${value}`;
}

export function joinUrl(baseUrl: string, pathname: string = "/"): string {
  const cleanBase = trimTrailingSlash(baseUrl);
  const cleanPath = ensureLeadingSlash(pathname);

  return cleanPath === "/" ? cleanBase : `${cleanBase}${cleanPath}`;
}

export function toAbsoluteUrl(
  baseUrl: string,
  value?: string | null
): string | undefined {
  if (!value) return undefined;

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return joinUrl(baseUrl, value);
}

export function toAbsoluteUrls(
  baseUrl: string,
  values?: Array<string | null | undefined>
): string[] {
  if (!values?.length) return [];

  return values
    .filter((value): value is string => Boolean(value))
    .map((value) => toAbsoluteUrl(baseUrl, value))
    .filter((value): value is string => Boolean(value));
}

export function makeSchemaId(url: string, suffix: string): string {
  return `${trimTrailingSlash(url)}#${suffix}`;
}