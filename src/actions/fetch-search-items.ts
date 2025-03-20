"use server";

import API_CONFIG from "@/config/api-config";
import { getErrorMessages } from "@/lib/utils";

export const fetchSearchItems = async (query: string) => {
  const url = `${API_CONFIG.SEARCH_ITEMS}${query}`;

  try {
    const res = await fetch(url, {
      // ISR: Revalidate every 60 seconds
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    return getErrorMessages(error);
  }
};
