import { trigger, state, style, animate, transition, group } from "@angular/animations";

export const slideToRight = trigger('routeAnim', [
    state('void', style({ 'position': 'fixed' })),
    state('*', style({ 'position': 'fixed'})),
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(0)' })),
            animate('.3s ease-in', style({ opacity: 1 }))
        ])

    ]),
    transition('* => void', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(100%)' })),
            animate('.3s ease-in', style({ opacity: 0 }))
        ])
    ])
    // transition('void => *', [
    //     style({ transform: 'translateX(-100%)' }),
    //     animate('.5s ease-in-out', style({ transform: 'translateX(0)' }))
    // ]),
    // transition('* => void', [
    //     style({ transform: 'translateX(0)' }),
    //     animate('.5s ease-out', style({ transform: 'translateX(100%)' }))
    // ])

])