import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import * as uuid from 'uuid';

export class Message {
	id: string;
	sentAt: Date;
	isRead: boolean;
	author: User;
	text: string;
	thread: Thread;

	constructor(obj?: any) {
		this.id = (obj && obj.id) || uuid.v4();
		this.sentAt = (obj && obj.sentAt) || new Date();
		this.isRead = (obj && obj.isRead) || false;
		this.author = (obj && obj.author) || null;
		this.text = (obj && obj.text) || null;
		this.thread = (obj && obj.thread) || null;
	}
}
