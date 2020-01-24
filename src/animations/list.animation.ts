import { trigger, stagger, style, transition, animate, query } from '@angular/animations';

export const listAnimation = trigger('listAnim', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger(200, [
            animate('1s ease-in', style({ opacity: 1 }))
        ]), { optional: true }),
        
        query(':leave', style({ opacity: 1 }), { optional: true }),
        query(':leave', animate('1s ease-out', style({ opacity: 0 })), { optional: true }),
    ])
])