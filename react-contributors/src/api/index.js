export const CONTRIBUTOR_URL =
  "https://api.github.com/repos/facebook/react/contributors";

// Make a call to the Github REST API to grab contributors
export async function fetchContributors() {
  try {
    const response = await fetch(CONTRIBUTOR_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchPage(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchUser(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
