template: function MyComponent_Template(rf, ctx) {
  …
  if (rf & 2) {
    let $tmp0$ = null;
    $r3$.ɵɵproperty("title", ctx.myTitle)("id", (tmp_1_0 = i0.ɵɵpipeBind1(1, 3, ctx.auth().identity())) == null ? null : tmp_1_0.id)("tabindex", 1);
  }
}
