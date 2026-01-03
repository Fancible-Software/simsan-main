/**
 * Contact API Service
 * Handles all contact-related API calls
 */

import { API_CONFIG, API_ENDPOINTS } from "./config";
import type { ContactCreateRequest, ContactCreateResponse } from "@/types";

/**
 * Creates a new contact submission
 * @param payload - Contact form data
 * @returns Promise with the API response
 */
export async function createContact(
  payload: ContactCreateRequest
): Promise<ContactCreateResponse> {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_ENDPOINTS.CONTACT.CREATE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data: ContactCreateResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `HTTP error! status: ${response.status}`
      );
    }

    return data;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
}

