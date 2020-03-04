import { Injectable } from '@angular/core';
import { ExternalService } from './external.service';

@Injectable()
export class TestService {
	constructor(private external: ExternalService) {}

	sayHello(): string {
		return 'Hello!';
	}
}
