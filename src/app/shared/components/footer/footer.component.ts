import { Component, OnInit } from '@angular/core';
import { IonicService } from 'src/app/services/ionic.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private ionicService: IonicService) { }

  ngOnInit() {}

  goPage(page: string) {
    this.ionicService.goPage(page);
  }

  public openWhatsapp() {
    window.open('https://wa.link/6dy7rg', '_blank');
  }

  public onContact() {
    const email = document.createElement('a');
    email.href = `mailto:iaolocco@quilmes.com.ar?subject=Consulta desde el tablero de novedades&body=Mensaje...`;
    email.click();
    email.remove();
  }

}
