import {Component, OnInit} from '@angular/core';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {state} from '@angular/animations';

@Component({
  selector: 'mrc-login-github',
  templateUrl: './login-github.component.html',
  styleUrls: ['./login-github.component.css']
})
export class LoginGithubComponent implements OnInit {

  public clientId = '20738719717c212a6c0d';
  public clientSecret = 'ad88251a9bc1df15fc2e681905def4f05eba9958';
  public redirectUri = 'http://localhost:4200/';
  private state: number;

  constructor(private userService: UserService, private _http: HttpClient) {
  }

  ngOnInit() {
    if (window.location.href.match('code')) {
      var authorizationCode = this.getQueryString('code', window.location.href);
      this.retrieveToken(authorizationCode);
    }
  }

  // Method for getting query parameters from query string
  getQueryString = function(field: any, url: string) {
    const windowLocationUrl = url;
    const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    const string = reg.exec(windowLocationUrl);
    return string ? string[1] : null;
  };

  socialSignIn(platform: string): void {
    this.state = Math.random();
    // let params = new HttpParams().append('client_id', this.clientId).append('redirect_uri', this.redirectUri).append('state',this.state.toString());
    //
    // let headers = new HttpHeaders()
    //   .append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
    //   .append('Accept-Encoding', 'gzip, deflate, br')
    //   .append('Accept-Language', 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7')
    //   .append('Sec-Fetch-Dest', 'document')
    //   .append('Sec-Fetch-Mode', 'navigate')
    //   .append('Sec-Fetch-Site', 'none')
    //   .append('Sec-Fetch-User', '?1')
    //   .append('Upgrade-Insecure-Requests', '1');
    // // .append('Access-Control-Allow-Origin', '*')
    // // .append('Access-Control-Allow-Methods', 'GET');
    //
    // this._http.get('https://github.com/login/oauth/authorize', {
    //   params: params
    // }).subscribe(
    //   data => console.warn(data),
    //   err => alert('Invalid Credentials'));
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=' + this.clientId + '&redirect_uri=http://localhost:4200/';
  }

  retrieveToken(code) {
    let params = new HttpParams()
      .append('client_id', this.clientId)
      .append('client_secret', this.clientSecret)
      .append('code', code)
      .append('redirect_uri', this.redirectUri);

    let headers = new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET');
    // .append('accept', '*/*')
    // .append('Content-Type','')
    // .append('Referer','')
    // .append('Cache-Control','no-cache')
    // .append('Connection','keep-alive')
    // .append('Accept-Encoding','gzip, deflate, br');

    window.location.href = 'https://github.com/login/oauth/access_token?client_id=' + this.clientId + '&redirect_uri=http://localhost:4200/&client_secret='+this.clientSecret+'&code='+code;
    // this._http.post('https://github.com/login/oauth/access_token', {}, {params: params, headers: headers, responseType: 'text'})
    //   .subscribe(
    //     data => this.saveToken(data),
    //     err => alert('Invalid Credentials'));
  }

  saveToken(token) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:8089';
  }

  logout() {
    Cookie.delete('access_token');
    window.location.reload();
  }

}
