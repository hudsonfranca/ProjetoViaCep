import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { DatabaseConnectionService } from './database/database-connection.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: DatabaseConnectionService }),
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
