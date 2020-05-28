
## Serve production
ng build --prod
npm i -g serve
serve dist/material-tic-tac-toe -p 4200 -s

## Module Provider Ekleme
<pre><code>
</code></pre>


<pre><code>
export class XModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: XModule,
      providers: [{
        provide: AnyClass, useValue: { type: 'osman', payload: 'asdf' }
      }]
    };
  }
}
</code></pre>


Kullanımı
<pre><code>
constructor(privare xObj:XClass){
  xObj.type
}
</code></pre>
