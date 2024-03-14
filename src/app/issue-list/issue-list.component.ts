import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
issues: any[]=[];

constructor(private issueService:IssueService){}

ngOnInit(): void{
  this.getIssues();
}
getIssues():void{
  this.issueService.getIssues().subscribe(issues => this.issues=issues);
}
deleteIssue(id:number):void{
  this.issueService.deleteIssue(id).subscribe(()=>{this.issues=this.issues.filter(issue=>issue.id!==id);});
}}