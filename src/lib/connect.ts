import rawConnectPage from "@/content/connect";
import { ConnectPageSchema, type ConnectPageContent } from "@/lib/schema";

const connectPage: ConnectPageContent = ConnectPageSchema.parse(rawConnectPage);

export async function getConnectPage(): Promise<ConnectPageContent> {
  return connectPage;
}