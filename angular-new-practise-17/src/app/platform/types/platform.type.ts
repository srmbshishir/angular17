export interface user {
  name: string;
  id: string;
}

export interface VehicleResponse{
  count: number;
  next: string;
  previous: string;
  result: any[];
}

export interface Vehicles {
  "name": string;
  "model": string;
  "manufacturer": string;
  "cost_in_credits": string;
  "length": string;
  "max_atmosphering_speed": string;
  "crew": string;
  "passengers": string;
  "cargo_capacity": string;
  "consumables": string;
  "vehicle_class": string;
  "pilots": [],
  "films": [],
  "created": string;
  "edited": string;
  "url": string;
}
