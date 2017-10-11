# DataTableTest

This project will show you a example of stf-datatable implementation.

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
