import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importa DomSanitizer y SafeResourceUrl


@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  router = inject(Router);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer); // Inyecta DomSanitizer

  certificationName!: string;
  pdfUrl!: SafeResourceUrl; // Agrega una propiedad para la URL sanitizada


  async ngOnInit() {
    console.log('here');

    // Extraer el certificationName
    const certificationNameParam = this.route.snapshot.paramMap.get('name');
    if (certificationNameParam) {
      this.certificationName = certificationNameParam;
      // Sanitiza la URL antes de asignarla
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/pdf/' + this.certificationName + '.pdf');
    }
  }

}
