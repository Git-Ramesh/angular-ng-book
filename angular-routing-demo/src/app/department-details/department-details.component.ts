import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public id;
  constructor(private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line: radix
      this.id = parseInt(paramMap.get('id'));
    });
  }

  goNext() {
    this.router.navigate(['../', this.id + 1], {relativeTo: this.route});
  }

  goPrevious() {
    this.router.navigate(['../', this.id - 1], {relativeTo: this.route});
  }
  goBack() {
    this.router.navigate(['../', {id: this.id}], {relativeTo: this.route});
  }
  gotoContactUs() {
    this.router.navigate(['contact-us'], {relativeTo: this.route});
  }

  gotoAboutUs() {
    this.router.navigate(['about-us'], {relativeTo: this.route});
  }

}

