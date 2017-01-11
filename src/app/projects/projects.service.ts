import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { Project } from './../models/project';
import { Conversation } from './../models/conversation';

@Injectable()
export class ProjectsService {
  private _projectUrl = 'api/projects/projects.json';
  private _usersUrl = 'api/projects/users.json';

  constructor(private _http: Http) { }

  extractData(res: Response) {
    return res.json();
  }

  getUsers(): Observable<any[]> {
    return this._http.get(this._projectUrl)
      .map(this.extractData);
  }

  getProjects(): Observable<Project[]> {
    return this._http.get(this._usersUrl)
      .map(this.extractData);
  }

}
