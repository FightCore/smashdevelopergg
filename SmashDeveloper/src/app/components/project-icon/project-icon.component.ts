import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.scss']
})
export class ProjectIconComponent implements OnInit {
  @Input() public projectType: string;
  constructor() { }

  ngOnInit() {
  }

}
