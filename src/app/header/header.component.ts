import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _success = new Subject<string>();
  successMessage: string;

  constructor() {}

  ngOnInit(): void {
    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 4000).subscribe(() => this.successMessage = null);
}

  public changeSuccessMessage() {
    this._success.next('Email (basile.nouvellet@ponts.org) successfully copied !');
  }

  static copyTextToClipboard(text) {
    const txtArea = document.createElement('textarea');

    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left = '0';
    txtArea.style.opacity = '0';
    txtArea.value = text;
    document.body.appendChild(txtArea);
    txtArea.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
      if (successful) {
        return true;
      }
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(txtArea);
    return false;
  }

  copyMailToClipboard() {
    const textToCopy = 'basile.nouvellet@ponts.org';
    const result = HeaderComponent.copyTextToClipboard(textToCopy);
    if (result) {
      console.log('Copied to Clipboard');
      this.changeSuccessMessage();
    }
  }

}


