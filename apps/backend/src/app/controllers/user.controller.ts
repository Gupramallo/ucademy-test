import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common'
import { UserService } from '../services/user.service'
import { User } from '../schemas/user.schema'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: Partial<User>) {
    return this.userService.create(createUserDto)
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
    const user = await this.userService.update(id, updateUserDto)

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`)
    }

    return user
  }
}
