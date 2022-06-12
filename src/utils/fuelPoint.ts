
export default function getFuelPoint(fuelType: string){
    switch (fuelType) {
        case 'electric': return 0.2
        case 'cng': return 0.4
        case 'petrol': return 0.6
        case 'diesel': return 0.7
        default: return 0.5
    }
}