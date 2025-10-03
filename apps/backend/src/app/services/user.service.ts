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
