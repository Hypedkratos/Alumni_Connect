import { Client, Account, Avatars, Databases } from "appwrite";


const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_CLOUD_URL) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPRWRITE_PROJECT_ID);


export const account = new Account(client);
export const avatars = new Avatars(client);
export const database = new Databases(client);
export const url = {
    db: process.env.NEXT_PUBLIC_APPRWRITE_PROJECT_DB,
    collection: process.env.NEXT_PUBLIC_APPRWRITE_PROJECT_C_ID,
    usercollection: process.env.NEXT_PUBLIC_APPRWRITE_PROJECT_USER_COLLECTION_ID
} 