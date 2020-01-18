import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MainService } from './main.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private service:MainService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = this.service.getCookie('token');

        console.log("token from interceptor = " + token);
        
        if(token)
        {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            })
           
            return next.handle(cloned);
        }else
        {
            return next.handle(req);
        }
    }
}