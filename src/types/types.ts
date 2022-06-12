export interface IFlightsValues {
    to: string
    from: string,
    noOfTickets: number
    type: 'one-way' | 'return'
}
export interface ICommuteValues {
    noOfKms: number
    typeOfVehicle: 'bus' | 'car' | 'bus' | 'auto'
    typeOfFuel: 'electric' | 'cng' | 'petrol' | 'diesel' 
}
export interface ITransportValues {
    noOfKms: number
    tickets: number,
    typeOfVehicle: string
    typeOfFuel: string
}