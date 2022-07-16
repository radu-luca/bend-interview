import { IArea } from "./Interfaces/iarea.model";

export class Area {
    areaId: number | null;
    name: string;
    constructor(options: IArea)
    {
        this.areaId = options.areaId;
        this.name = options.name;
    }

}