import rawHomePage from "@/content/home";
import { HomePageSchema, type HomePage } from "@/lib/schema";

const homePage: HomePage = HomePageSchema.parse(rawHomePage);

export async function getHomePage(): Promise<HomePage> {
  return homePage;
}