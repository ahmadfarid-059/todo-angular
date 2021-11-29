import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  title: string = 'Todo List'
  showAddTask: boolean = false;
  subscribtion: Subscription = this.uiService.onToggle().subscribe();
  constructor(private uiService: UiService, private router:Router) {
    this.subscribtion = this.uiService
    .onToggle()
    .subscribe(val => this.showAddTask = val);

  }

  ngOnInit(): void {
  }
  toggleAddTask() {
    console.log('toggle');
    this.uiService.toggleAddTask();

  }
  
  hasRoute(route: string) {
    return this.router.url === route;
  }

}
