import { IThing } from "./Interfaces/ithing.model";

export class Thing {
    id: number;
    areaId: number;
    joinedWith: number | null;
    sku: string;
    defaultSku: string;
    status: string;
    countActive: number;
    constructor(options: IThing)
    {
        this.id = options.id;
        this.areaId = options.areaId;
        this.joinedWith = options.joinedWith;
        this.sku = options.sku;
        this.defaultSku = options.defaultSku;
        this.status = options.status;
        this.countActive = options.countActive;
    }
}