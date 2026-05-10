import { joinUrl } from "./urls";

export function buildCanonical(baseUrl: string, pathname: string): string {
  return joinUrl(baseUrl, pathname);
}