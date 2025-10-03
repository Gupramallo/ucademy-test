import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../schemas/user.schema'
import { UserService } from '../services/user.service'
import { UserController } from '../controllers/user.controller'
import { MigrationService } from '../services/migration.service'
import { MigrationController } from '../controllers/migration.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController, MigrationController],
  providers: [UserService, MigrationService],
  exports: [UserService],
})
export class UserModule {}
