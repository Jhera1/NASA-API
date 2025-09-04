// 🌍 Beginner Level

// Asteroid Class
// Create a class Asteroid with properties like id, name, absoluteMagnitude, and isPotentiallyHazardous.

// Instantiate objects from the NASA API data.

// Print a summary of each asteroid.

// Method for Danger Check
// Add a method isHazardous() that returns "⚠️ Hazardous" if the asteroid is marked hazardous, otherwise "✅ Safe".

// Rename Method
// Add a method rename(newName) to update the asteroid’s name.

// 🚀 Intermediate Level

// AsteroidCollection Class
// Create a class AsteroidCollection that holds multiple Asteroid objects.

// Add a method filterHazardous() to return all hazardous asteroids.

// Add a method largestByMagnitude() to return the asteroid with the highest absolute magnitude.

// Orbital Analysis
// Extend Asteroid to include orbitalData (semi-major axis, eccentricity, inclination, etc.).

// Add a method isOrbitingEarth() that checks if orbit_class.orbit_class_description contains "Earth".

// Summary Report
// In AsteroidCollection, create a method summary() that returns:

// Total number of asteroids

// Number hazardous

// Average absolute magnitude

// 🌌 Advanced Level

// Close Approach Data Class
// Create a class CloseApproach that holds date, velocity, and missDistance.

// Link this as a property in each Asteroid.

// Add a method closestApproach() to return the closest Earth approach.

// Search by Date Range
// In AsteroidCollection, add a method filterByDateRange(start, end) to return all asteroids with close approaches in that range.

// Custom Sorting
// Add a method sortBy(property) (e.g., sortBy("velocity") or sortBy("eccentricity")).

// OOP + API Integration
// Write a class NeoApiClient that:

// Fetches the NASA NEO feed.

// Builds Asteroid and AsteroidCollection objects automatically.

// 👉 Example starter OOP scaffold:

// class Asteroid {
//   constructor(id, name, magnitude, hazardous, orbitalData) {
//     this.id = id;
//     this.name = name;
//     this.magnitude = magnitude;
//     this.hazardous = hazardous;
//     this.orbitalData = orbitalData;
//   }

//   isHazardous() {
//     return this.hazardous ? "⚠️ Hazardous" : "✅ Safe";
//   }

//   summary() {
//     return `${this.name} (mag: ${this.magnitude}) - ${this.isHazardous()}`;
//   }
// }

// Alright 🚀 let’s take one of the beginner → intermediate OOP problems and build it fully with real NASA data:

// We’ll do:

// A class Asteroid with basic properties + methods.

// A class AsteroidCollection that holds multiple asteroids and provides filtering + summary.

// Fetch NASA data → turn it into objects → run some example methods.

// ✅ Full Example
// // If Node < 18, uncomment next line:
// // const fetch = require("node-fetch");

// class Asteroid {
//   constructor(id, name, magnitude, hazardous, orbitalData) {
//     this.id = id;
//     this.name = name;
//     this.magnitude = magnitude;
//     this.hazardous = hazardous;
//     this.orbitalData = orbitalData;
//   }

//   isHazardous() {
//     return this.hazardous ? "⚠️ Hazardous" : "✅ Safe";
//   }

//   summary() {
//     return `${this.name} (Mag: ${this.magnitude}) - ${this.isHazardous()}`;
//   }
// }

// class AsteroidCollection {
//   constructor(asteroids = []) {
//     this.asteroids = asteroids;
//   }

//   addAsteroid(asteroid) {
//     this.asteroids.push(asteroid);
//   }

//   filterHazardous() {
//     return this.asteroids.filter(a => a.hazardous);
//   }

//   largestByMagnitude() {
//     return this.asteroids.reduce((max, a) =>
//       a.magnitude > max.magnitude ? a : max
//     );
//   }

//   summary() {
//     return {
//       total: this.asteroids.length,
//       hazardous: this.filterHazardous().length,
//       averageMagnitude:
//         this.asteroids.reduce((sum, a) => sum + a.magnitude, 0) /
//         this.asteroids.length,
//     };
//   }
// }

// async function fetchData() {
//   const apiKey = "DEMO_KEY"; // replace with your NASA key
//   const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Could not fetch source");
//     }

//     const data = await response.json();

//     // Build collection
//     const asteroids = data.near_earth_objects.map(
//       a =>
//         new Asteroid(
//           a.id,
//           a.name,
//           Number(a.absolute_magnitude_h),
//           a.is_potentially_hazardous_asteroid,
//           a.orbital_data
//         )
//     );

//     const collection = new AsteroidCollection(asteroids);

//     // Demo outputs
//     console.log("🔹 First asteroid summary:", asteroids[0].summary());
//     console.log("🔹 Hazardous count:", collection.filterHazardous().length);
//     console.log("🔹 Largest by magnitude:", collection.largestByMagnitude().summary());
//     console.log("🔹 Collection summary:", collection.summary());

//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

// 📝 Example Output (simplified)
// 🔹 First asteroid summary: 433 Eros (Mag: 10.31) - ⚠️ Hazardous
// 🔹 Hazardous count: 123
// 🔹 Largest by magnitude: 719 Albert (Mag: 15.82) - ✅ Safe
// 🔹 Collection summary: { total: 20, hazardous: 3, averageMagnitude: 17.56 }
