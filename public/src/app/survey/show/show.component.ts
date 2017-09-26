import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  survey:object;
  s_id = "";

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onShow();
  }

  onShow() {
    this._route.paramMap.subscribe(params=> {
      this.s_id = params.get('id');
      console.log(this.s_id);
    })
    console.log('onShow()', this.s_id);
    this._httpService.show(this.s_id)
    .then((data)=> {
      console.log(data);
      this.survey = data;
    })
  }

  like1() {
    console.log('like', this.s_id);
    this._httpService.like1(this.s_id)
    .then((data)=> {
      console.log(data);
      this.onShow();
    })
  }
  like2() {
    console.log('like', this.s_id);
    this._httpService.like2(this.s_id)
    .then((data)=> {
      console.log(data);
      this.onShow();
    })
  }
  like3() {
    console.log('like', this.s_id);
    this._httpService.like3(this.s_id)
    .then((data)=> {
      console.log(data);
      this.onShow();
    })
  }
  like4() {
    console.log('like', this.s_id);
    this._httpService.like4(this.s_id)
    .then((data)=> {
      console.log(data);
      this.onShow();
    })
  }

  home() {
    console.log('home');
    this._router.navigate(['listing'])
  }


}
