import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query, Req, Res } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const player = await this.playersService.findOne(+id);
    if (!player) {
      throw new NotFoundException(`Player with id ${id} not found`);
    }
    return player;
  }

  @Get(':id/stats/:discipline')
  async findOneStats(@Param('id') id: string, @Param('discipline') discipline: string) {
    const player = await this.playersService.findOne(+id);
    console.log(player);
    console.log(discipline);
    if (!player) {
      throw new NotFoundException(`Stats for player with id ${id} not found`);
    }
    if (discipline == "batting"){
      return player.stats_batting;
    } else if (discipline == "balling") {
      return player.stats_balling;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}
