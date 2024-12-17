export class Bus{
    name: string;
    source: string;
    destination: string;
    journeyDate: Date;
    numberOfTickets: number;

    constructor(name: string, source: string, destination: string, journeyDate: Date, numberOfTickets: number) {
        this.name = name;
        this.source = source;
        this.destination = destination;
        this.journeyDate = journeyDate;
        this.numberOfTickets = numberOfTickets;
    }
}