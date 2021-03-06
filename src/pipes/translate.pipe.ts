import { Pipe, PipeTransform } from '@angular/core';

import { TranslationService } from '../services/translation.service';
import { ServiceState } from '../models/translation/service-state';

@Pipe({
    name: 'translate',
    pure: true
})
export class TranslatePipe implements PipeTransform {

    constructor(public translation: TranslationService) { }

    public transform(key: string, lang: string, ...args: any[]): string {
        if (this.translation.serviceState == ServiceState.isReady) {
            return this.translation.translate(key, args[0], lang);
        }
        // If the service is not ready, returns an empty string.
        return "";
    }

}
