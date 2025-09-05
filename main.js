import { nasaData, loadData } from "./nasaApiFetch.js";


async function getNames() {
    const data = await loadData() // wait until data is fetched
    return data.near_earth_objects.map(a => a.name) // ✅ no longer null
}

async function run() {
   const names = await getNames()
   console.log(names)
}

run();

