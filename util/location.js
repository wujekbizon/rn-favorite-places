const GEO_API_KEY = process.env.EXPO_PUBLIC_GEOAPI_KEY

export const getMapPreview = (lng, lat) => {
  const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright-grey&width=400&height=200&center=lonlat:${lng},${lat}&marker=lonlat:${lng},${lat};type:awesome;color:%23ff0000;icon:lightbulb;textsize:small;shadow:no&zoom=14&apiKey=${GEO_API_KEY}`

  return imagePreviewUrl
}

export const getAddress = async (lat, lng) => {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${GEO_API_KEY}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch address!')
  }
  const data = await response.json()
  const address = data.features[0].properties.formatted
  return address
}
