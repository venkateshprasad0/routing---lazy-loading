import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  id:string='';
  sub: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("Id is",this.id);
  });
  }
  friends=['a','b','c','d','e','f','g','h','i','j'];

}
