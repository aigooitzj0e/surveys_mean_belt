import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from "@angular/router";

class Question{
  constructor(public question:string = ""){}
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  sList: Question[] = [];
  sList2 = [];
  searchTerm:string = "";
  currentUser:object = {
    name: ""
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCurrent();
    this.getAllSurveys()
  }

  redirectCreate() {
    console.log('redirectCreate()');
    this._router.navigate(['create']);
  }

  getAllSurveys() {
    console.log('Grabbing all Survey!');
    this._httpService.getAllSurveys()
    .then((data)=> {
      console.log(data);
      this.sList = data;
      this.sList2 = data;
    })
  }

  logout() {
    console.log('logoff()');
    this._httpService.logout()
    .then((data=> {
      if(data==true){
        this._router.navigate(['']);
      }
      else {
        console.log('error', data);
      }
    }))
  }

  onShow(s_id) {
    console.log('onShow()', s_id);
    this._router.navigate(['show', s_id])
  }

  getCurrent() {
    console.log('onInit getCurrentUser');
    this._httpService.getCurrentUser()
  	.then((data)=>{
  		console.log("then");
  		if(data.errors){
  			console.log("failed to find current user");
  			this._router.navigate(['']);
  		}else{
  			console.log("found current user");
	  		this.currentUser = data;
  		}
  	})
  }

  onDestroy(s_id) {
    console.log(s_id);
    this._httpService.destroy(s_id)
    .then((data)=> {
      console.log(data);
      this.getAllSurveys()
    })
  }

  searchSurveys(){
    this.sList = this.sList2.filter((survey)=>{
      console.log(survey);
      return survey.question.toLowerCase().includes(this.searchTerm.toLowerCase());
    })
  }

}
