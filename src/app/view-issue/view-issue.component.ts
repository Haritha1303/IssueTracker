
import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent {


issues:Issue[] =[];

constructor(private issueService :IssueService){}

ngOnInit(): void {
this.getAllIssues();

}

getAllIssues():void{
this.issueService.getIssues().subscribe(issue=>this.issues=issue);
}

}
