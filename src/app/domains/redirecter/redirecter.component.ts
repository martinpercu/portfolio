import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirecter',
  standalone: true,
  imports: [],
  templateUrl: './redirecter.component.html',
  styleUrl: './redirecter.component.css'
})
export class RedirecterComponent {ngOnInit(): void {
    window.location.href = 'https://www.figma.com/proto/UJTM0qVD2rkSb2W8l7zS1z/Agro---01?node-id=344-8076&t=Apkt3LUGAffm1uyJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A1887';
  }
}
