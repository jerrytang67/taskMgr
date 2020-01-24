import { trigger, state, style, transition, animate } from '@angular/animations';

export const taskItemAnimation = trigger('taskItem', [
    state('in', style({ 'border-width':'8px' })),
    state('out', style({ 'border-width':'3px'  })),
    transition('out => in', animate('100ms ease-in')),
    transition('in => out', animate('100ms ease-out'))
])