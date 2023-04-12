export class CreatePlayerDto {
    name: string;
    isNational: boolean;
    joiningDate: Date;
    role: string[];
    stats_balling: number[];
    stats_batting: number[];
}
