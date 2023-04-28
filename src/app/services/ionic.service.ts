import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IonicService {

  constructor (
    private router: Router
  ) {}

  /**
   * @param page name of the page (string)
   */

  goPage(page: string, param?: string) {
    const urlParam = !!param ? param : '';
    this.router.navigate([`${page}/${urlParam}`], { replaceUrl: true });
  }
}
