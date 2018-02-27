import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  copyTextToClipboard(text) {
    var txtArea = document.createElement("textarea");

    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left = '0';
    txtArea.style.opacity = '0';
    txtArea.value = text;
    document.body.appendChild(txtArea);
    txtArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
      if(successful){
        return true;
      }
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(txtArea);
    return false;
  }

  copyMailToClipboard() {
    var textToCopy = "basile.nouvellet@ponts.org";
    let result = this.copyTextToClipboard(textToCopy);
    if (result) {
      console.log('Copied to Clipboard');
    }
  }

}


