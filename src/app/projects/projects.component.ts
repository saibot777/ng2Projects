import { Component, OnInit } from '@angular/core';

import { Project } from './../models/project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        id: '1',
        name: 'First Project',
        description: 'bla bla'
      },
      {
        id: '2',
        name: 'Second Project',
        description: 'bla bla'
      }
    ];
  }

}
