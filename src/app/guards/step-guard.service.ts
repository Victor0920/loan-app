import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
class UserToken {}

class Permissions {
    canActivate(): boolean {
        return true;
    }
}

@Injectable()
export class StepGuard implements CanActivate {
    public completedSteps = 1;

    constructor(private permissions: Permissions, private currentUser: UserToken) {}

    canActivate(
        route: ActivatedRouteSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const currentStep = route.data['step'] as number;

        console.log({ currentStep });

        return this.permissions.canActivate();
    }
}
