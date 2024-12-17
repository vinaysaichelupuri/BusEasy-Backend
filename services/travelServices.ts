import { TravelDetails } from "../models/travelDetailsModel";
import { Vehicle } from "../models/vehicleModal";
import { User } from "../models/userModel";
import { Bus } from "../classes/bus";

export class TravelService {
    async findVehicleByRoute(bus:Bus) {
        const vehicle = await Vehicle.findOne({ where: { source: bus.source, destination: bus.destination } });
        const user = await User.findOne({ where: { name: bus.name } });
        if (!vehicle || !user) {
            return { status: 400};
        }
        return { vehicle, user }; 
    }
    async bookBus(bus:Bus) {
            const { vehicle, user } = await this.findVehicleByRoute(bus);
            if (vehicle?.status === 400 || user?.status === 400) {
                return {status:400 };
            }
            const travelDetails = await TravelDetails.create({
                userId: user.id, 
                vehicleId: vehicle.id,
                bookingDate: new Date(), 
                journeyDate: bus.journeyDate,
                source: bus.source,
                destination: bus.destination, 
                numberOfTickets: bus.numberOfTickets, 
            });
            return {status:200 };
    }

    async bookingsForUser(bus:Bus) {
            const user = await User.findOne({ where: { name: bus.name } });
            if (!user) {
                return { status: 400};
            }
            const bookings = await TravelDetails.findAll({
                where: { userId: user.id },
            });
            return {
                status: 200,
                bookings,
            };
    }
}

