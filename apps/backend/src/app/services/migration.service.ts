import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserService } from './user.service'
import { User, UserDocument } from '../schemas/user.schema'
import * as fs from 'fs'
import * as path from 'path'

export interface MigrationResult {
  imported: number
  skipped: number
  totalUsers: number
}

@Injectable()
export class MigrationService {
  private readonly logger = new Logger(MigrationService.name)

  constructor(
    private readonly userService: UserService,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async migrateUsersFromJson(): Promise<MigrationResult> {
    const result: MigrationResult = {
      imported: 0,
      skipped: 0,
      totalUsers: 0,
    }

    try {
      // Read the DB.json file from backend directory
      const dbPath = path.join(process.cwd(), 'apps/backend/DB.json')

      if (!fs.existsSync(dbPath)) {
        this.logger.warn('Import file not found')

        return result
      }

      const rawData = fs.readFileSync(dbPath, 'utf8')
      const users = JSON.parse(rawData)

      result.totalUsers = users.length

      this.logger.log(`Found ${users.length} users to import...`)

      for (const userData of users) {
        try {
          if (!userData.name || !userData.lastName || !userData.email) {
            this.logger.warn(
              `Invalid user data: missing required fields for user with email ${
                userData.email || 'unknown'
              }`
            )

            result.skipped++

            continue
          }

          const user = {
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            isActive: userData.isActive,
          }

          const existingUser = await this.userService.findByEmail(user.email)

          if (existingUser) {
            this.logger.debug(`User ${user.email} already exists, skipping...`)

            continue
          }

          await this.userService.create(user)

          result.imported++

          if (result.imported % 100 === 0) {
            this.logger.log(`Imported ${result.imported} users...`)
          }

          this.logger.log(
            `Migration completed successfully! Imported: ${result.imported}, Skipped: ${result.skipped}`
          )
        } catch (error) {
          this.logger.error(
            `Error importing user ${userData.email}: ${error.message}`
          )

          result.skipped++
        }
      }
    } catch (error) {
      this.logger.error(`Migration failed: ${error.message}`)
    }

    return result
  }

  async clearAllUsers(): Promise<{
    success: boolean
    message: string
    deletedCount: number
  }> {
    try {
      const result = await this.userModel.deleteMany({})

      return {
        success: true,
        message: `Successfully deleted ${result.deletedCount} users`,
        deletedCount: result.deletedCount || 0,
      }
    } catch (error) {
      return {
        success: false,
        message: `Error clearing users: ${error.message}`,
        deletedCount: 0,
      }
    }
  }
}
