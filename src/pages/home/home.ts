import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import "rxjs/add/operator/map";
import {NewsService} from "../../app/news.service";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  slides: any;

  ngOnInit(): void {
    this.getData(1);
  }
  cates = [
    {icon: 'thumbs-up', name: '推荐'},
    {icon: 'bulb', name: '热点'},
    {icon: 'pin', name: '本地'},
    {icon: 'book', name: '社会'},
    {icon: 'musical-notes', name: '娱乐'},
    {icon: 'jet', name: '科技'},
    {icon: 'basketball', name: '体育'},
    {icon: 'globe', name: '频道'},
  ];

  constructor(public navCtrl: NavController,private ns: NewsService){
  }
  getData(typeNum){
    this.ns.getNews(typeNum).then(data=>{
      this.slides=data;
    })
  }
}
