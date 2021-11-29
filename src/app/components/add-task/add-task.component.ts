import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter ()
  text: string = '';
  date: string = '';
  reminder : boolean = false;
  showAddTask : boolean = false;
  subscribtion: Subscription = this.uiService.onToggle().subscribe();

  constructor(private uiService: UiService) {
    this.subscribtion = this.uiService
    .onToggle()
    .subscribe(val => this.showAddTask = val);
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('please add text!!')
      return
    }
    const newTask = {
      text: this.text,
      date: this.date,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask)
    this.text = '';
    this.date = '';
    this.reminder = false;
  }

}
