import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sample-app';
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  htmlContent: string = '';
  menuItems = [
    { name: 'Home', path: '/' },
    { name: 'testquerystring', path: 'testquerystring' },
    { name: 'testmodule/other', path: 'testmodule' }
  ];

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
    try {
      return this.http.get(url, { responseType: 'text' });
    } catch (eee) {
      return of("");
    }
  }
}

