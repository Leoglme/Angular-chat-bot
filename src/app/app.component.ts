import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dibo-bot';

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions typedef
    (function(d, m){
      const settings = {appId: '358327a02c55809b94ee3fdbb5e60d4ed', popupWidget: true, automaticChatOpenOnNavigation: true};
      const s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      const h = document.getElementsByTagName('head')[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = settings;
    })(document, (window as any).kommunicate || {});
  }

}


