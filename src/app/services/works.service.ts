import { Injectable } from '@angular/core';
import { Works } from '../models/Works'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  works: Works[]

  constructor(private httpClient: HttpClient) { }

  getWorks() {
    return this.httpClient.get('assets/works.json')
  }
}
