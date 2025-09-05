// nasaApi.js
let nasaData = null;        // will hold the data
let isFetching = false;     // to prevent duplicate fetches
const apiKey = "sdRwWbzN95PiyVwkzYAwAgdulkLnzSIlvWdMAvqe";

// Function to load data only once
async function loadData() {
  if (nasaData) return nasaData;  // already cached
  if (isFetching) return;         // avoid duplicate fetch
  
  isFetching = true;

  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`
    );
    if (!response.ok) throw new Error("Could not fetch source");

    nasaData = await response.json(); // cache result
    return nasaData;
  } catch (error) {
    console.error(error);
  } finally {
    isFetching = false;
  }
}

// Export both
export { nasaData, loadData };

