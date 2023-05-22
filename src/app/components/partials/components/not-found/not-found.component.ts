import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  @Input() visible = false;
  @Input() notFoundMsg = 'Nothing Found!';
  @Input() resetLinkText = 'reset';
  @Input() resetLinkRoute = '/'

  constructor(){}
  
  ngOnInit(): void {}
}
