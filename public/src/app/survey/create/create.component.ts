import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  currentUser:string = "";

  newSurvey:object = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  }

  ngOnInit() {
    this.getCurrent();
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

  onCreate() {
    console.log('onCreate()', this.newSurvey);
    this._httpService.createSurvey(this.newSurvey)
    .then((data)=> {
      console.log(data);
      this._router.navigate(['listing']);
    })
  }

  onBack() {
    console.log('home');
    this._router.navigate(['listing'])
  }





}
