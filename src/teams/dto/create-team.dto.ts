import { CreatePlayerDto  } from '../../players/dto/create-player.dto';

export class CreateTeamDto {
    id: number;
    name: string;
    description: string;
    players: CreatePlayerDto[];
}
