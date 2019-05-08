import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source-icon',
  templateUrl: './source-icon.component.html',
  styleUrls: ['./source-icon.component.scss']
})
export class SourceIconComponent implements OnInit {
  @Input() public sourceUrl: String;
  constructor() { }

  ngOnInit() {
  }

  protected isGithub() {
    if (this.sourceUrl) {
      return this.sourceUrl.includes('https://github.com');
    }

    return false;
  }

  protected isBitbucket() {
    if (this.sourceUrl) {
      return this.sourceUrl.includes('https://bitbucket.org');
    }

    return false;
  }

}
