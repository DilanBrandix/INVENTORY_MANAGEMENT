import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
import { TimeInModule } from './time-in/time-in.module';
import { LaceModule } from './lace/lace.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.MSSQL_HOST,
      port: parseInt(<string>process.env.MSSQL_PORT),
      username: process.env.MSSQL_USER,
      password: process.env.MSSQL_PASSWORD,
      database: process.env.MSSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      options: {
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1',
        },
        encrypt: false,
      },
    }),
    FeedModule,
    TimeInModule,
    LaceModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
