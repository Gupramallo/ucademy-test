import { Controller, Post, Delete, HttpCode, HttpStatus } from '@nestjs/common'
import {
  MigrationService,
  MigrationResult,
} from '../services/migration.service'
import { UserService } from '../services/user.service'

@Controller('migration')
export class MigrationController {
  constructor(
    private readonly migrationService: MigrationService,
    private readonly userService: UserService
  ) {}

  @Post('users')
  @HttpCode(HttpStatus.OK)
  async migrateUsers(): Promise<MigrationResult> {
    return this.migrationService.migrateUsersFromJson()
  }

  @Delete('users')
  @HttpCode(HttpStatus.OK)
  async clearAllUsers(): Promise<{
    success: boolean
    message: string
    deletedCount: number
  }> {
    return this.migrationService.clearAllUsers()
  }
}
