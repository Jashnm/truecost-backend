
export default function getVehiclePoint(fuelType: string){
    switch (fuelType) {
        case 'bus': return 0.1
        case 'train': return 0.2
        case 'bike': return 0.4
        case 'auto': return 0.6
        case 'car': return 0.8
        default: return 0.5
    }
}