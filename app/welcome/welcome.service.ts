import { Injectable } from '@angular/core';

@Injectable()
export class WelcomeService {
    getTime(): Promise<string> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(new Date().toTimeString()), 2000);
        });
    }
}