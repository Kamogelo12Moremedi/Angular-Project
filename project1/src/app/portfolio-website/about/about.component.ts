import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true

   
  projects = [
    { name: 'Project 1', Portfolio Website:'To develop a personal portfolio website to showcase my skills and projects.
' },
    { name: 'Project 2', description: 'Description of Project 2' },
  
  ];
}
