import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function handleApiError<T>(
  errorMsg: string = '',
): (source: Observable<T[]>) => Observable<T[]> {
  return catchError((error: any) => {
    console.error(`Error loading ${errorMsg} characters`, error);
    return of<T[]>([]);
  });
}
