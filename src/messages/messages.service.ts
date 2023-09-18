interface Repository {
  findOne(id: string);
  findAll();
  create(content: string);
}

export class MessagesService {
  messagesRepo: Repository;

  constructor(repo: Repository) {
    this.messagesRepo = repo;
  }
}
