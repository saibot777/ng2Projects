import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectsService } from '../projects.service';
import { Conversation } from '../../models/conversation';

@Component({
  selector: 'project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css'],
  providers: [ProjectsService]
})
export class ProjectSummaryComponent implements OnInit {
@Input() project: Project;
avatars: string[];

  constructor(private service: ProjectsService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(users => {
      this.avatars = users
        .filter(u => this.project.users.indexOf(u.username) > -1)
        .map(u => u.avatar);
    });
  }

}
