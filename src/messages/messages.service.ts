import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findALl() {
    return this.messagesRepo.findALl();
  }

  async create(message: string) {
    return this.messagesRepo.create(message);
  }
}
