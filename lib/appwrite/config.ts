import { Client, Account, Databases } from "appwrite";
import { appwriteEndpoint, appwriteProjectId } from "./env";

// Only initialize Appwrite client if we have the required environment variables
// This prevents build-time errors during static generation
const isClientSide = typeof window !== "undefined";
const hasRequiredEnvVars =
  appwriteEndpoint.length > 0 && appwriteProjectId.length > 0;

const client =
  isClientSide && hasRequiredEnvVars
    ? new Client().setEndpoint(appwriteEndpoint).setProject(appwriteProjectId)
    : null;

export const account = client ? new Account(client) : null;
export const databases = client ? new Databases(client) : null;

export default client;
