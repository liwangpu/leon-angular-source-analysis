## checkAndUpdateView主要做的事情

1. sets ViewState.firstCheck to true if a view is checked for the first time and to false if it was already checked before
2. checks and updates input properties on a child component/directive instance
3. updates child view change detection state (part of change detection strategy implementation)
4. runs change detection for the embedded views (repeats the steps in the list)
5. calls OnChanges lifecycle hook on a child component if bindings changed
6. calls OnInit and ngDoCheck on a child component (OnInit is called only during first check)
7. updates ContentChildren query list on a child view component instance
8. calls AfterContentInit and AfterContentChecked lifecycle hooks on child component instance (AfterContentInit is called only during first check)
9. updates DOM interpolations for the current view if properties on current view component instance changed
10. runs change detection for a child view (repeats the steps in this list)
11. updates ViewChildren query list on the current view component instance
12. calls AfterViewInit and AfterViewChecked lifecycle hooks on child component instance (AfterViewInit is called only during first check)
13. disables checks for the current view (part of change detection strategy implementation)