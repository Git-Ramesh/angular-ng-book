import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import * as uuid from 'uuid';

export class Thread {
	id: string;
	lastMessage: Message;
	name: string;
	avatarSrc: string;

	constructor(id?: string, name?: string, avatarSrc?: string) {
		this.id = id || uuid.v4();
		this.name = name;
		this.avatarSrc = avatarSrc;
	}
}
