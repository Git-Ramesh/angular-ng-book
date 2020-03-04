import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public id;
  departments = [{id: 1, name: 'A'},
                 {id: 2, name: 'B'},
                 {id: 3, name: 'C'},
                 {id: 4, name: 'D'},
                 {id: 5, name: 'E'}];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    });
  }

  onSelect(department) {
    this.router.navigate([department.id], {relativeTo: this.route});
  }
  isSelected(department) {
    return this.id === department.id;
  }
}
