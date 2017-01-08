import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Project } from './../models/project';

@Injectable()
export class ProjectsService {
  private _productUrl = 'api/projects/projects.json'

  constructor(private _http: Http) { }

  extractData(res: Response) {
    return res.json();
  }

  getProjects(): Observable<Project[]> {
    return this._http.get(this._productUrl)
      .map(this.extractData);
  }

}
