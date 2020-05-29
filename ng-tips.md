
## Serve production
ng build --prod
npm i -g serve
serve dist/material-tic-tac-toe -p 4200 -s

## Module Provider Ekleme
<pre><code>
imports: [
    BrowserModule,
    XModule.forRoot({
      data: {
        apiEndpoint: '/api'
      },
      translationLocation: '/static/assets/i18n/lang-'
    })
  ],
</code></pre>


<pre><code>
export class XModule {
  static forRoot(settings): ModuleWithProviders {
    return {
      ngModule: XModule,
      providers: [{
        provide: AnyClass, useValue: { ...settings, type: 'osman', payload: 'asdf' }
      }]
    };
  }
}
</code></pre>


Kullanımı
<pre><code>
constructor(privare xObj:XClass){
  xObj.type
  xObj.data.apiEndpoint
}
</code></pre>
