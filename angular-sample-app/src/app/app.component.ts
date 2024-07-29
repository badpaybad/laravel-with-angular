import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sample-app';
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  htmlContent: string = '';

  ngOnInit(): void {
    const url = 'http://127.0.0.1:8000/testmenu'; // Replace with your URL

    this.fetchHtml(url).subscribe(
      (html: string) => {
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(html) as string;
      },
      (error) => {
        console.error('Error fetching HTML', error);
      }
    );;
    
  }

  fetchHtml(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}

