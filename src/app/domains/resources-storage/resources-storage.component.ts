import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getStorage, ref, getDownloadURL, Storage } from '@angular/fire/storage'; // Importa las funciones de Storage
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importa CommonModule para ngIf

@Component({
  selector: 'app-resources-storage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources-storage.component.html',
  styleUrl: './resources-storage.component.css'
})
export class ResourcesStorageComponent {
  router = inject(Router);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private storage: Storage = inject(Storage); // Inyecta el servicio de Storage de Firebase

  certificationName!: string;

  certificationNamePdf!: string;
  pdfUrl: SafeResourceUrl | null = null; // Inicializa como null
  isLoading: boolean = true; // Para mostrar un spinner de carga


  currentView!:
    | 'kohue'
    | 'frameworks'
    | 'back'
    | 'db'
    | 'python'
    | 'others'
    | 'math';

  async ngOnInit() {
    console.log('Componente CertificationsComponent inicializado.');


    // Extraer el certificationName
    const certificationNameParam = this.route.snapshot.paramMap.get('name');
    if (certificationNameParam) {
      this.certificationName = certificationNameParam;
      // Sanitiza la URL antes de asignarla
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/pdf/' + this.certificationName + '.pdf');
    }

    // Usamos un observable para manejar el parámetro de la ruta de forma reactiva
    this.route.paramMap.pipe(
      switchMap(params => {
        const certificationNameParam = params.get('name');
        // Si no hay parámetro, usa un nombre predeterminado (angular-tailwind)

        // if (certificationNameParam == 'kohue') {
        //   this.certificationNamePdf = 'ai-agentes-ai'; // Nombre del PDF por defecto
        //   this.setView('kohue')
        // }
        // if (certificationNameParam == 'angular') {
        //   this.certificationNamePdf = 'angular-tailwind'; // Nombre del PDF por defecto
        //   this.setView('frameworks')
        // }
        // if (certificationNameParam == 'python') {
        //   this.certificationNamePdf = 'python-pro'; // Nombre del PDF por defecto
        //   this.setView('python')
        // }
        // if (certificationNameParam == 'db') {
        //   this.certificationNamePdf = 'db-mongodb-modeling'; // Nombre del PDF por defecto
        //   this.setView('db')
        // }
        // if (certificationNameParam == 'backend') {
        //   this.certificationNamePdf = 'back-fastapi-data-modularization'; // Nombre del PDF por defecto
        //   this.setView('back')
        // }
        // if (certificationNameParam == 'others') {
        //   this.certificationNamePdf = 'react-vite-tailwind'; // Nombre del PDF por defecto
        //   this.setView('others')
        // }

        // this.certificationName = certificationNameParam || 'angular-tailwind'; // Nombre del PDF por defecto
        // console.log(this.certificationName);

        this.isLoading = true; // Empieza a cargar

        const pdfRef = ref(this.storage, `resources/${certificationNameParam}.pdf`);
        // Obtiene la URL de descarga
        return getDownloadURL(pdfRef);

      })
    ).subscribe({
      next: (downloadUrl: string | null) => {
        if (downloadUrl) {
          // Sanitiza la URL obtenida de Firebase y la asigna a pdfUrl
          this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(downloadUrl);
        } else {
          this.pdfUrl = null; // No se encontró la URL
        }
        this.isLoading = false; // Finaliza la carga
      },
      error: (err) => {
        console.error('Error al obtener la URL de descarga del PDF:', err);
        this.pdfUrl = null; // En caso de error, resetea la URL
        this.isLoading = false; // Finaliza la carga
        // Aquí podrías redirigir al usuario o mostrar un mensaje de error
        // Ejemplo: this.router.navigate(['/error-page']);
      }
    });
  }

  setView(
    view:
    | 'frameworks'
    | 'back'
    | 'db'
    | 'python'
    | 'kohue'
    | 'others'
  ) {
    this.currentView = view;
  }

    // **Método modificado para recibir el nombre del archivo como parámetro**
  openPdfInNewTab(fileName: string) {
    this.isLoading = true; // Opcional, para mostrar un estado de carga mientras se obtiene la URL

    // 1. Crea la referencia al archivo en Firebase Storage
    const pdfRef = ref(this.storage, `certifications/${fileName}.pdf`);

    // 2. Obtiene la URL de descarga
    getDownloadURL(pdfRef)
      .then((url) => {
        // 3. Abre la URL en una nueva pestaña
        window.open(url, '_blank');
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Error al abrir el PDF:', error);
        this.isLoading = false;
        alert('No se pudo abrir el PDF. Por favor, inténtelo de nuevo más tarde.');
      });
  }

    // **Nuevo método centralizado para cargar y mostrar el PDF**
  async loadAndDisplayPdf(fileName: string): Promise<string | null> {
    this.isLoading = true; // Empieza a cargar el nuevo PDF
    this.pdfUrl = null; // Limpia la URL actual mientras carga el nuevo
    this.certificationName = fileName; // Actualiza el nombre de la certificación que se está viendo

    try {
      // 1. Crea la referencia al archivo en Firebase Storage
      const pdfRef = ref(this.storage, `certifications/${fileName}.pdf`);

      // 2. Obtiene la URL de descarga
      const downloadUrl = await getDownloadURL(pdfRef);

      // 3. Sanitiza la URL y la asigna a pdfUrl
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(downloadUrl);
      this.isLoading = false;
      return downloadUrl; // Retorna la URL por si la necesitas en el ngOnInit
    } catch (error) {
      console.error('Error al cargar o mostrar el PDF:', error);
      this.pdfUrl = null;
      this.isLoading = false;
      // Puedes lanzar el error de nuevo o manejarlo aquí
      // alert('No se pudo cargar el PDF. Por favor, inténtelo de nuevo más tarde.');
      return null;
    }
  }

  // **Método que se llama desde los botones para cambiar el PDF**
  // Lo renombramos para que sea más claro su propósito de "cambiar" el PDF mostrado
  changeDisplayedPdf(newFileName: string) {
    console.log(`Intentando cambiar a PDF: ${newFileName}`);
    this.loadAndDisplayPdf(newFileName);
  }


}
