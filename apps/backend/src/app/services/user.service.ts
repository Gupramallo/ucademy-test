import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from '../schemas/user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: Partial<User>) {
    const createdUser = new this.userModel(createUserDto)

    return await createdUser.save()
  }

  async findAll() {
    return await this.userModel.find().exec()
  }

  async findAllPaginated(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit

    const users = await this.userModel.find().skip(skip).limit(limit).exec()
    const totalCount = await this.userModel.countDocuments().exec()
    const totalPages = Math.ceil(totalCount / limit)

    return {
      users,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        limit,
      },
    }
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec()
  }

  async update(id: string, updateUserDto: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec()
  }
}
