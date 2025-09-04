
async function fetchData() {
    const apiKey = "sdRwWbzN95PiyVwkzYAwAgdulkLnzSIlvWdMAvqe"
    
    try{
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`)

        if (!response.ok) {
            throw new Error('Could not fetch source')
        }

        const data = await response.json()
         console.log(data) //.near_earth_objects.map(a => ({name: a.name,
        //      orbital_data: a.orbital_data}))
        //     )
          
    }
    catch(error) {
      console.log(error)
    }
}
fetchData()