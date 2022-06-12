import { Request, Response } from "express";
import type {
  IFlightsValues,
  ITransportValues,
  ICommuteValues
} from "../types/types";
import { distBetweenCoordsInKms, fetchLocations } from "../utils/flightDetails";
import getFuelPoint from "../utils/fuelPoint";
import getVehiclePoint from "../utils/vehiclePoint";

export default async function (req: Request, res: Response) {
  let emission = 0;
  const { type } = req.params as { type: string };

  try {
    switch (type) {
      case "flights":
        emission = flightsEmission(req);
        break;
      case "transport":
        emission = transportEmission(req);
        break;
      case "commute":
        emission = commuteEmission(req);
        break;
      default:
        emission = 0;
    }

    res.status(200).json({ emission: Math.floor(emission) });
  } catch (err) {
    res.status(400).json({ message: "Incomplete data" });
  }
}

const flightsEmission = (req: Request) => {
  const { to, from, noOfTickets, type } = req.body as IFlightsValues;
  const { source, destination } = fetchLocations(to, from);
  const distance = distBetweenCoordsInKms(
    +source.lat,
    +source.lng,
    +destination.lat,
    +destination.lng
  );

  const emission =
    distance *
    noOfTickets *
    (distance < 480 ? 0.25 : distance < 3678 ? 0.14 : 0.17) *
    (type === "one-way" ? 1 : 2);
  return emission;
};

const transportEmission = (req: Request) => {
  const { noOfKms, typeOfFuel, typeOfVehicle, tickets } =
    req.body as ITransportValues;
  return (
    noOfKms *
    getFuelPoint(typeOfFuel) *
    getVehiclePoint(typeOfVehicle) *
    tickets
  );
};

const commuteEmission = (req: Request) => {
  const { noOfKms, typeOfFuel, typeOfVehicle } = req.body as ICommuteValues;
  return noOfKms * getFuelPoint(typeOfFuel) * getVehiclePoint(typeOfVehicle);
};
