# DataTableTest

This project will show you a example of stf-datatable implementation.
To run this project you need to have node and @angular/cli installed. 
Into the project folder, execute 'npm install' and then 'ng server', after that open your browse at
localhost:4200 to see our datatable example. 


## Instalation

npm install stf-datatable

## Implementation

First of all you need to import the module to your Angular 4+ application.
Second, you can extend DataTableUtil to you component that will show your data table.
After that you need to implement 2 required methods:

addColumnByEvent(column: any) {
   super.addColumnByEvent(column);
}
 
AND 
 
public ngAfterViewInit(): void {
   this.dataTest = super.buildDataTableProperties(this.dataTest);
} 

And then you can use the DataTableComponent in your component.html like app.component.html in this project. 
