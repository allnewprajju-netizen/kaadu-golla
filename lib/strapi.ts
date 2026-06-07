import axios from "axios";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const apiToken = process.env.STRAPI_API_TOKEN;

const client = axios.create({
    baseURL: `${strapiUrl}/api`,
    headers: {
        "Content-Type": "application/json",
        ...(apiToken && { Authorization: `Bearer ${apiToken}` }),
    },
});

/**
 * Fetch a single collection from Strapi
 */
export async function fetchStrapiCollection(
    endpoint: string,
    options?: { populate?: string; filters?: Record<string, any> }
) {
    try {
        const response = await client.get(`/${endpoint}`, {
            params: {
                ...options,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        throw error;
    }
}

/**
 * Fetch a single Strapi entry by ID
 */
export async function fetchStrapiEntry(endpoint: string, id: string) {
    try {
        const response = await client.get(`/${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}/${id}:`, error);
        throw error;
    }
}

/**
 * Create a new entry in Strapi
 */
export async function createStrapiEntry(
    endpoint: string,
    data: Record<string, any>
) {
    try {
        const response = await client.post(`/${endpoint}`, { data });
        return response.data;
    } catch (error) {
        console.error(`Error creating ${endpoint}:`, error);
        throw error;
    }
}

export default client;
