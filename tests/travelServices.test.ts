import { TravelService } from "../services/travelServices";
import { User } from "../models/userModel";
import { Vehicle } from "../models/vehicleModal";
import { TravelDetails } from "../models/travelDetailsModel";
import { Bus } from "../classes/bus";

jest.mock('../models/userModel', () => ({ User: { findOne: jest.fn() } }));
jest.mock('../models/vehicleModal', () => ({ Vehicle: { findOne: jest.fn() } }));
jest.mock('../models/travelDetailsModel', () => ({ TravelDetails: { create: jest.fn(), findAll: jest.fn() } }));

describe("TravelService", () => {
  let travelService: TravelService;

  beforeEach(() => {
    travelService = new TravelService();
  });

  describe("findVehicleByRoute", () => {
    it("should find a vehicle and user successfully", async () => {
      const bus = new Bus("Vinay", "Hyderabad", "Bangalore", new Date(), 2);

      (User.findOne as jest.Mock).mockResolvedValueOnce({ id: 1, name: 'Vinay' });
      (Vehicle.findOne as jest.Mock).mockResolvedValueOnce({ id: 1, source: 'Hyderabad', destination: "Bangalore" });

      const response = await travelService.findVehicleByRoute(bus);

      expect(response).toEqual({ vehicle: { id: 1, source: 'Hyderabad', destination: 'Bangalore' }, user: { id: 1, name: 'Vinay' } });
    });

    it("should return status 400 if no vehicle or user is found", async () => {
      const bus = new Bus("Vinay", "Hyderabad", "Bangalore", new Date(), 2);

      (User.findOne as jest.Mock).mockResolvedValueOnce(null);
      (Vehicle.findOne as jest.Mock).mockResolvedValueOnce(null);

      const response = await travelService.findVehicleByRoute(bus);

      expect(response.status).toBe(400);
    });

  describe("TravelService - bookBus", () => {
      let travelService: TravelService;
    
      beforeEach(() => {
        travelService = new TravelService();
        jest.clearAllMocks();
      });
    
      it("should successfully book a bus", async () => {
        const bus = new Bus("Vinay", "Hyderabad", "Bangalore", new Date("2024-12-20"), 2);
    
        (User.findOne as jest.Mock).mockResolvedValueOnce({ id: 1, name: 'Vinay' });
        (Vehicle.findOne as jest.Mock).mockResolvedValueOnce({
          id: 101,
          source: 'Hyderabad',
          destination: 'Bangalore',
        });
        (TravelDetails.create as jest.Mock).mockResolvedValueOnce({ id: 1 });
    
        const response = await travelService.bookBus(bus);
    
        expect(response.status).toBe(200);
        expect(TravelDetails.create).toHaveBeenCalledWith({
          userId: 1,
          vehicleId: 101,
          bookingDate: expect.any(Date),
          journeyDate: bus.journeyDate,
          source: bus.source,
          destination: bus.destination,
          numberOfTickets: bus.numberOfTickets,
        });
      });
    
      it("should return status 400 if user is not found", async () => {
        const bus = new Bus("Vinay", "Hyderabad", "Bangalore", new Date("2024-12-20"), 2);
    
        (User.findOne as jest.Mock).mockResolvedValueOnce(null);
        (Vehicle.findOne as jest.Mock).mockResolvedValueOnce(null);
        const response = await travelService.findVehicleByRoute(bus);
        expect(response.status).toBe(400);
      });  
  });

  describe('Travel services get travel details',()=>{
    it('should test user exist are not',async ()=>{
      const bus = new Bus("Vinay", "Hyderabad", "Bangalore", new Date(), 2);
      (User.findOne as jest.Mock).mockResolvedValueOnce(null);
      const response = await travelService.bookingsForUser(bus);
    })
    it('should test it is giving the user details correctly are not',async ()=>{
      const bus = new Bus("Vinay", "Hyderabad", "Bangalore", new Date(), 2);
      (User.findOne as jest.Mock).mockResolvedValueOnce({ id: 1, name: 'Vinay' });
      (TravelDetails.findAll as jest.Mock).mockResolvedValue({userId:1})
      const response = await travelService.bookingsForUser(bus);
      expect(response.status).toBe(200)
      
    })

  })

});
})