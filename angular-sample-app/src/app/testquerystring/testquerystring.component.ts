import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testquerystring',
  standalone: true,
  imports: [],
  templateUrl: './testquerystring.component.html',
  styleUrl: './testquerystring.component.css'
})
export class TestquerystringComponent {

  name: string | null = '';
  fragment: string | null = '';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name');
    });
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }
}
