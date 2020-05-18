import { Component, OnInit } from '@angular/core';

enum Category { JavaScript, CSS, HTML, TypeScript, Angular9}

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
    name = 'First';
    description = 'Some description of component';
    tasks: Array<number> = [1, 2, 3];
    tasksDescription: Array<string> = ['Task 1', 'Task 2', 'Task 3'];
    price = 100;
    category: Category = Category.Angular9;
    available = true;

    constructor() {
    }

    ngOnInit(): void {
    }
}
