import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private messagesRepo: MessagesRepository;

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

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
