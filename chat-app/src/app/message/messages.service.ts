import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';

export class MessagesService {
	// a stream that publishes new messages only once
	newMessages: Subject<Message> = new Subject<Message>();

	addMessage(message: Message): void {
		this.newMessages.next(message);
	}

	messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
		return this.newMessages.pipe(
			filter((message: Message) => {
				// belongs to this thread
				return (
					message.thread.id === thread.id &&
					// and isn't authored by this user
					message.author.id !== user.id
				);
			})
		);
	}
}
