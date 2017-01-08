import { Component, OnInit } from '@angular/core';

import { Project } from './../models/project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private _service: ProjectsService) { }

  ngOnInit() {
    this._service.getProjects().subscribe(projects =>
      this.projects = projects);
  }

}
