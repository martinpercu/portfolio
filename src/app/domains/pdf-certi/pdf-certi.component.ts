import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importa DomSanitizer y SafeResourceUrl
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-pdf-certi',
  standalone: true,
  imports: [],
  templateUrl: './pdf-certi.component.html',
  styleUrl: './pdf-certi.component.css',
})
export class PdfCertiComponent {
  router = inject(Router);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer); // Inyecta DomSanitizer
  private storage: Storage = inject(Storage);

  pdfName!: string;
  pdfUrl: SafeResourceUrl | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  selectedCategory: any | null = null;

  categories = [
    {
      name: 'AI',
      course: [
        { name: 'Agents (LLM+RAG)', pdfName: 'ai-agentes-ai' },
        { name: 'Chatbot + OpenAI', pdfName: 'ai-azureopenia' },
        { name: 'Azure + OpenAI', pdfName: 'ai-openai-api' },
      ],
    },
    {
      name: 'Angular',
      course: [
        { name: 'v.17', pdfName: 'angular-17' },
        { name: 'v.16', pdfName: 'angular-16' },
        { name: 'APIsREST', pdfName: 'angular-apis' },
        { name: 'Auth', pdfName: 'angular-auth' },
        { name: 'Components', pdfName: 'angular-components' },
        { name: 'Modular', pdfName: 'angular-modular' },
        { name: 'Trello', pdfName: 'angular-trello' },
        { name: 'Tailwind', pdfName: 'angular-tailwind' },
      ],
    },
    {
      name: 'Back End',
      course: [
        { name: 'Intro', pdfName: 'db-introduccion' },
        { name: 'Node.JS-ApiREST', pdfName: 'back-nodejs-expressjs' },
        { name: 'Node.JS', pdfName: 'back-nodejs-fundaments' },
        { name: 'FastAPI', pdfName: 'back-fastapi-introduccion' },
        {
          name: 'FastAPI modular',
          pdfName: 'back-fastapi-data-modularization',
        },
        { name: 'FastAPI A', pdfName: 'back-fastapi-errores' },
        { name: 'FastAPI B', pdfName: 'back-fastapi-fundaments' },
        { name: 'Django testing', pdfName: 'back-django-mid' },
        { name: 'Flask', pdfName: 'back-flask' },
      ],
    },
    {
      name: 'Python',
      course: [
        { name: 'Intro', pdfName: 'python-basic' },
        { name: 'CS', pdfName: 'python-cs' },
        { name: 'Functions', pdfName: 'python-functions' },
        { name: 'Fundaments', pdfName: 'python-fundaments' },
        { name: 'Medium', pdfName: 'python-intermedio' },
        { name: 'Pip', pdfName: 'python-pip' },
        { name: 'CRUD', pdfName: 'python-practic-crud' },
        { name: 'Pro', pdfName: 'python-pro' },
      ],
    },
    {
      name: 'Database',
      course: [
        { name: 'Fundaments', pdfName: 'db-fundaments' },
        { name: 'MongoDB', pdfName: 'db-mongodb' },
        { name: 'MongoDB-Modeling', pdfName: 'db-mongodb-modeling' },
      ],
    },
    {
      name: 'Others',
      course: [
        { name: 'Git-Github', pdfName: 'git-github' },
        { name: 'Terminal', pdfName: 'terminal' },
        { name: 'React', pdfName: 'react-vite-tailwind' },
        { name: 'Vue', pdfName: 'vue-intro' },
        { name: 'Vue Components', pdfName: 'vue-componentes-composition' },
        { name: 'Vue Practic', pdfName: 'vue-practico' },
        { name: 'Ionic', pdfName: 'angular-ionic' },
      ],
    },
  ];

  oldList: any = [];

  async ngOnInit() {
    console.log('Componente PdfCertiComponent inicializado.');

    const pdfNameParam = this.route.snapshot.paramMap.get('pdfname');

    if (pdfNameParam) {
      this.pdfName = this.checkPathAndReplace(pdfNameParam);
      console.log('pasado el tramite  ==>' + this.pdfName );

      // this.pdfName = pdfNameParam;
      console.log(`Nombre del PDF a cargar: ${this.pdfName}`);
      this.selectedCategory = this.getParentCategory(this.pdfName);
      console.log(this.selectedCategory);
      this.toggleCategory(this.selectedCategory);

      try {
        // --- Uso de AngularFire Storage: 'this.storage' ya es la instancia ---
        // Crea una referencia al archivo en Firebase Storage.
        // Asegúrate de que la ruta 'pdfs/' sea correcta para tu almacenamiento.
        const storageRef = ref(
          this.storage,
          `certifications/${this.pdfName}.pdf`
        );

        // Obtiene la URL de descarga.
        const url = await getDownloadURL(storageRef);
        console.log(`URL de descarga obtenida: ${url}`);

        // Sanitiza la URL para que Angular la considere segura.
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.isLoading = false; // La carga ha terminado con éxito.
      } catch (err) {
        console.error(
          'Error al obtener la URL del PDF desde Firebase Storage:',
          err
        );
        this.error =
          'No se pudo cargar el PDF. Por favor, inténtalo de nuevo más tarde.';
        this.isLoading = false; // La carga ha terminado con error.
        this.pdfUrl = null; // Asegúrate de que la URL sea nula si hay un error.
      }
    } else {
      this.error = 'No se especificó un nombre de PDF en la URL.';
      this.isLoading = false;
      console.warn('No se encontró el parámetro "pdfname" en la URL.');
    }
  }

  /**
   * Alterna la expansión de una categoría.
   * Si la categoría ya está seleccionada (expandida), la contrae (null).
   * Si no está seleccionada, la expande.
   * @param category La categoría a expandir/contraer.
   */
  toggleCategory(category: any): void {
    this.selectedCategory = category; // Expande la nueva categoría
    console.log('Categoría expandida:', category.name);
  }

  viewPdf(pdfName: string): void {
    if (pdfName) {
      console.log(pdfName);
      this.pdfName = pdfName;

      // this.router.navigate(['/cert', pdfName]);
      // window.location.reload();
      this.loadPdf();
    } else {
      console.warn('pdfName no proporcionado para el curso.');
    }
  }

  async loadPdf() {
    console.log(this.pdfName);
    const storageRef = ref(this.storage, `certifications/${this.pdfName}.pdf`);
    // Obtiene la URL de descarga.
    const url = await getDownloadURL(storageRef);
    console.log(`URL de descarga obtenida: ${url}`);
    // Sanitiza la URL para que Angular la considere segura.
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.isLoading = false; // La carga ha terminado con éxito.
  }

  // getParentCategoryName(targetPdfName: string): string | null {
  //   // Itera sobre cada categoría en el array 'categories'
  //   for (const category of this.categories) {
  //     // Para cada categoría, itera sobre sus cursos
  //     for (const course of category.course) {
  //       // Compara el pdfName del curso actual con el pdfName que estamos buscando
  //       if (course.pdfName === targetPdfName) {
  //         // Si coincide, devuelve el nombre de la categoría padre
  //         return category.name;
  //       }
  //     }
  //   }
  //   // Si después de revisar todas las categorías y cursos no se encuentra el pdfName, devuelve null
  //   return null;
  // }
  /**
   * Recorre las categorías para encontrar la categoría padre completa de un pdfName.
   * @param targetPdfName El string pdfName que se quiere buscar.
   * @returns El objeto CourseCategory completo si se encuentra, o null si no se encuentra.
   */
  getParentCategory(targetPdfName: string): any | null {
    for (const category of this.categories) {
      for (const course of category.course) {
        if (course.pdfName === targetPdfName) {
          return category; // Devuelve el objeto de la categoría completa
        }
      }
    }
    return null; // No se encontró el pdfName en ninguna categoría
  }

  checkPathAndReplace(path: any) {
    if (path === 'ai') {
      return 'ai-agentes-ai';
    }
    if (path === 'angular') {
      return 'angular-tailwind';
    }
    if (path === 'backend') {
      return 'back-fastapi-data-modularization';
    }
    if (path === 'db') {
      return 'db-mongodb-modeling';
    }
    if (path === 'python') {
      return 'python-pro';
    }
    if (path === 'others') {
      return 'react-vite-tailwind';
    }
    return path; // O input; o 'desconocido';
  }
}
