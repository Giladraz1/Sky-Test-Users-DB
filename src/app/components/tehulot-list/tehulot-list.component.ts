import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import {Sort} from '@angular/material/sort';
import { Tehula } from 'src/app/service/Tehula';

@Component({
  selector: 'app-tehulot-list',
  templateUrl: './tehulot-list.component.html',
  styleUrls: ['./tehulot-list.component.scss'],
})
export class TehulotListComponent implements OnInit {
  Tehulot: Tehula[] = [];
  filteredTehulot: Tehula[] = [];
  filterQuery: string = "";

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getTehulot().subscribe((res) => {
      console.log(res);
      this.Tehulot = res;
      this.filteredTehulot = res;
    });
  }

  filterData(): void {
    this.filteredTehulot = this.Tehulot.filter(t => t.description.includes(this.filterQuery))
  }

  delete(id: Tehula["_id"], i: number) {
    console.log(id);
    if (window.confirm('האם אתה רוצה למחוק?')) {
      this.crudService.deleteTehula(id).subscribe((res) => {
        this.filteredTehulot.splice(i, 1);
      });
    }
  }
  sortData(sort: Sort) {
    const data = this.filteredTehulot.slice();
    if (!sort.active || sort.direction === '') {
      this.filteredTehulot = data;
      return;
    }

    this.filteredTehulot = data.sort((a , b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'account':
          return compare(a.account, b.account, isAsc);
        case 'username':
          return compare(a.username, b.username, isAsc);
        case 'testEnvironment':
          return compare(a.testEnvironment, b.testEnvironment, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        default:
          return 0;
      }
    });
  }

}

  function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

