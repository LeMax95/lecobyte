import type { SeoRobots } from "./types";

export function makeIndexRobots(): SeoRobots {
  return {
    index: true,
    follow: true,
  };
}

export function makeNoIndexRobots(): SeoRobots {
  return {
    index: false,
    follow: false,
  };
}

export function makeUtilityRobots(): SeoRobots {
  return {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
  };
}