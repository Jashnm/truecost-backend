import airports from '../airports.json'

function degreesToRadians(degrees: number) {
    return degrees * Math.PI / 180;
  }
  
  //Uses Haversine formula
 export function distBetweenCoordsInKms(lat1: number, lon1: number, lat2: number, lon2: number) {
    const earthRadiusKm = 6371;
  
    const dLat = degreesToRadians(lat2-lat1);
    const dLon = degreesToRadians(lon2-lon1);
  
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
  
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
  }

export function fetchLocations(to: string, from: string){
  const source = airports.find((x: any) => x.IATA === from)
  const destination = airports.find((x: any) => x.IATA === to)


  return {source, destination}
}