import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importa DomSanitizer y SafeResourceUrl
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-pdf-pedagogic',
  standalone: true,
  imports: [],
  templateUrl: './pdf-pedagogic.component.html',
  styleUrl: './pdf-pedagogic.component.css'
})
export class PdfPedagogicComponent {
  router = inject(Router);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer); // Inyecta DomSanitizer
  private storage: Storage = inject(Storage);

  pdfName!: string;
  pdfUrl: SafeResourceUrl | null = null;
  isLoading: boolean = true;
  error: string | null = null;


  async ngOnInit() {
    console.log('Componente PdfCertiComponent inicializado.');

    const pdfNameParam = this.route.snapshot.paramMap.get('pdfname');

    if (pdfNameParam) {
      this.pdfName = pdfNameParam;
      console.log(`Nombre del PDF a cargar: ${this.pdfName}`);

      try {
        // --- Uso de AngularFire Storage: 'this.storage' ya es la instancia ---
        // Crea una referencia al archivo en Firebase Storage.
        // Asegúrate de que la ruta 'pdfs/' sea correcta para tu almacenamiento.
        const storageRef = ref(this.storage, `certifications/${this.pdfName}.pdf`);

        // Obtiene la URL de descarga.
        const url = await getDownloadURL(storageRef);
        console.log(`URL de descarga obtenida: ${url}`);

        // Sanitiza la URL para que Angular la considere segura.
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.isLoading = false; // La carga ha terminado con éxito.

      } catch (err) {
        console.error('Error al obtener la URL del PDF desde Firebase Storage:', err);
        this.error = 'No se pudo cargar el PDF. Por favor, inténtalo de nuevo más tarde.';
        this.isLoading = false; // La carga ha terminado con error.
        this.pdfUrl = null; // Asegúrate de que la URL sea nula si hay un error.
      }
    } else {
      this.error = 'No se especificó un nombre de PDF en la URL.';
      this.isLoading = false;
      console.warn('No se encontró el parámetro "pdfname" en la URL.');
    }
  }
}
