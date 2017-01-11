import { Component, OnInit } from '@angular/core';

import { Project } from './../models/project';
import { ProjectsService } from './projects.service';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';

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
