import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { PlayersModule } from 'src/players/players.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
  imports: [PlayersModule, PrismaModule]
})
export class TeamsModule {}
