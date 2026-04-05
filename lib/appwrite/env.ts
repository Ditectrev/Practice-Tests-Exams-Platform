/**
 * Deployment and CI secrets are sometimes pasted with trailing newlines.
 * Appwrite then sends an invalid project id (e.g. ...f6%0A) and OAuth returns 404 project_not_found.
 */
export const appwriteEndpoint = (
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? ""
).trim();

export const appwriteProjectId = (
  process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? ""
).trim();

export const appwriteApiKey = (
  process.env.NEXT_PUBLIC_APPWRITE_API_KEY ?? ""
).trim();
