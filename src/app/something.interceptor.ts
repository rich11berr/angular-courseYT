import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const somethingInterceptor: HttpInterceptorFn = (req, next) => {

  const userService = inject(UserService);
  req = req.clone({
    setHeaders: {
      auth: `Beared token`
    }
  })


  return next(req)
};
