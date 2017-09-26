import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }


  getCurrentUser() {
    console.log('hit getCurrentUser() in service');
    return this._http.get('/api/current')
    .map(Response=> Response.json())
    .toPromise();
  }

  create(user) {
    console.log('hit create service');
    return this._http.post('/api/register', user)
    .map(Response=> Response.json())
    .toPromise();
  }

  createSurvey(survey) {
    console.log('hit createSurvey in services', survey);
    return this._http.post('/api/createSurvey', survey)
    .map(Response=> Response.json())
    .toPromise();
  }

  getAllSurveys() {
    console.log('hit getAllSurveys in Services');
    return this._http.get('/api/getAllSurveys')
    .map(Response=> Response.json())
    .toPromise();
  }

  logout() {
    console.log('hit logoff service!');
    return this._http.get('/api/logoff')
    .map(Response=> Response.json())
    .toPromise();
  }

  show(s_id) {
    console.log('hit show in Service');
    return this._http.post('/api/show', {s_id: s_id})
    .map(Response=> Response.json())
    .toPromise();
  }

  like1(s_id) {
    console.log('hit like in Service');
    return this._http.post('/api/like1', {s_id: s_id})
    .map(Response=> Response.json())
    .toPromise();
  }
  like2(s_id) {
    console.log('hit like in Service');
    return this._http.post('/api/like2', {s_id: s_id})
    .map(Response=> Response.json())
    .toPromise();
  }
  like3(s_id) {
    console.log('hit like in Service');
    return this._http.post('/api/like3', {s_id: s_id})
    .map(Response=> Response.json())
    .toPromise();
  }
  like4(s_id) {
    console.log('hit like in Service');
    return this._http.post('/api/like4', {s_id: s_id})
    .map(Response=> Response.json())
    .toPromise();
  }

  destroy(s_id) {
    console.log('hit destroy in services');
    return this._http.put('/api/destroy', {s_id: s_id})
    .map(Response=> Response.json())
    .toPromise();
  }

}
