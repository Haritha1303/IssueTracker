import { Component } from '@angular/core';
import { IssueService } from '../issue.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  addForm!:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpClient){}
  
  ngOnInit(): void {
    this.addForm=this.fb.group({
      id:['',Validators.required],
      title:['',Validators.required],
      status:['',Validators.required],
      description:['',Validators.required],
      createdAt:['',Validators.required],
      creator:['',Validators.required]});
      }
  
  
  onSubmit()
  {
  if (this.addForm.valid){
    const formData=this.addForm.value;
  
    this.http.post<any>('http://localhost:9076/api/issues',formData).subscribe(response=>{console.log('Added Succesfully',JSON.parse(response));});
  }
  
  }
  }