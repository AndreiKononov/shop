# Task 1. Introduction
  - Added top bar component
  - Created FirstComponent
      - It initialised with properties and used in AppComponent (Task 1.3, 1.4)
  - Created ProductComponent
      - Was added a handler onBuy() to log a message to the console (Task 1.5)
  - Created ProductsService, ProductsModel, ProductListComponent
      - Was used the directive *ngFor to display a list of products (Task 1.6)
  - Created CartComponent, CartService 
      - Was used the directive *ngIf to display an amount of selected products (Task 1.7)
  - Fixed issues from comments

# Task 2. Components
  - Organized a module structure of app
  - ProductComponent implemented as a view component
      - Were used @Input(), @Output() decorators, OnPush strategy as well
  - Styles
      - The button "Buy" is disabled if product unavailable (used  ngClass/ngStyle directives).
      - CartItem changes background colour by a mouse hover (created a directive 'HoverDirective', used @HostBinding, @HostListener decorators)
  - Updated app title
      - Using @ViewChild decorator (NOTICE: used in cart-header component, not in app component as described in task 2.11)
  - Calculation
      - Added total cost calculation
  - Fixed issues from comments

# Task 3. Services and DI
  - Refactored Cart Service
  - Services
      - Created LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService as described in tasks 3.2 - 3.5
  - Directives
      - Created Zoom directive as described in task 3.7
  - Components
      - Created About component as described in task 3.6
  - Fixed issues from comments

# Task 4. Pipes
  - Were added build-in pipes such as uppercase, titlecase, currency
  - Method getProducts() was changed to return Promise, async pipe was added to ProductListComponent
  - Was created OrderByPipe to sort cart items by name, quantity and price

# Task 5. Routing
  - Were implemented routes:
     - ProductRoutingModule:
         - /products-list
         - /product/:productID
     - CartRoutingModule:
         - /cart
     - OrdersRoutingModule:
         - /order
     - AdminRoutingModule:
         - /admin + canActivateGuard
         - /admin/products
         - /admin/product/add
         - /admin/product/edit:productID + resolve guard
         - /admin/orders
  - Used random image as a cover for a newly created book
  - To store products from the cart was used localstorage

# Task 6. HttpClient
  - Products and orders receive from json-server
  - Products receive using of Observable, orders - Promise
  - Was added TimingInterceptor
  - Was added AppSettings service

# Task 7. NgRx
  - Products and cart have been rewritten using @ngrx/store, @ngrx/effects
  - Was added @ngrx/router-store
  - Was added @ngrx/entity (adapter) for products
  - Was implemented State Preloading
  - Was added '@ngrx/data' for orders
  
# Task 8. Forms
  - Was created a reactive form ProcessOrderComponent including fields:
    - First Name (required)
    - Last Name
    - Email (required)
    - Phone(s) (including of adding/removing phone numbers)
    - Pickup (to hide/show delivery address textarea)
    - Delivery Address
    

# Task 9. Unit Tests
  - Were added integrated tests for ProductComponent/ProductListComponent
  - Was added isolated test to ProductService
  - Was added isolated test to OrderByPipe
  - Was added test to AppComponent
  - Was added coverage report (see /coverage folder)
  
