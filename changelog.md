#Task 1. Introduction
## Added top bar component
## Created FirstComponent 
It initialised with properties and used in AppComponent (Task 1.3, 1.4)
## Created ProductComponent
Was added a handler onBuy() to log a message to the console (Task 1.5)
## Created ProductsService, ProductsModel, ProductListComponent
Was used the directive *ngFor to display a list of products (Task 1.6)
## Created CartComponent, CartService 
Was used the directive *ngIf to display an amount of selected products (Task 1.7)

#Task 2. Components
## Organized a module structure of app
## ProductComponent implemented as a view component
Were used @Input(), @Output() decorators, OnPush strategy as well
## Styles
The button "Buy" is disabled if product unavailable (used  ngClass/ngStyle directives).
CartItem changes background colour by a mouse hover (created a directive 'HoverDirective', used @HostBinding, @HostListener decorators)
## Updated app title
Using @ViewChild decorator (NOTICE: used in cart-header component, not in app component as described in task 2.11 )
## Calculation
Added total cost calculation
