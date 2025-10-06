import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  NotFoundException,
  ConflictException,
} from '@nestjs/common'
import { UserService } from '../services/user.service'
import { User } from '../schemas/user.schema'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: Partial<User>) {
    if (createUserDto.email) {
      const existingUser = await this.userService.findByEmail(
        createUserDto.email
      )
      if (existingUser) {
        throw new ConflictException(
          `email ${createUserDto.email} is already in use`
        )
      }
    }

    return await this.userService.create(createUserDto)
  }

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '20'
  ) {
    const pageNum = parseInt(page, 10)
    const limitNum = parseInt(limit, 10)
    return this.userService.findAllPaginated(pageNum, limitNum)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id)

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`)
    }

    return user
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: Partial<User>) {
    const currentUser = await this.userService.findOne(id)

    if (!currentUser) {
      throw new NotFoundException(`User with id ${id} not found`)
    }

    if (updateUserDto.email && updateUserDto.email !== currentUser.email) {
      const existingUser = await this.userService.findByEmail(
        updateUserDto.email
      )

      if (existingUser) {
        throw new ConflictException(
          `email ${existingUser.email} is already in use`
        )
      }
    }

    return await this.userService.update(id, updateUserDto)
  }
}
