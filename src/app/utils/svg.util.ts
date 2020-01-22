import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/images';
    const sidebarDir = `${imgDir}/sidebar`;
    const avatarDir = `${imgDir}/avatar`;
    const dayDir = `${imgDir}/days`;

    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
    for (let index = 1; index <= 16; index++) {
        ir.addSvgIcon(`users-${index}`, ds.bypassSecurityTrustResourceUrl(`${avatarDir}/users-${index}.svg`));
    }
    //ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
}