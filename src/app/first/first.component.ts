import { Component, OnInit } from '@angular/core';

enum Category { JavaScript, CSS, HTML, TypeScript, Angular9 }

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
  name = 'First'; // Adding type string (name: string) I see the linting error -
  // "Type string trivially inferred from a string literal, remove type annotation".
  // The same for lines 14, 17 (type number), 19 (type boolean)
  description = 'Some description of component';
  tasks: Array<number> = [1, 2, 3];
  tasksDescription: Array<string> = ['Task 1', 'Task 2', 'Task 3'];
  price = 100;
  category: Category.Angular9;
  available = true;

  constructor() { }

  ngOnInit(): void {
  }

}
