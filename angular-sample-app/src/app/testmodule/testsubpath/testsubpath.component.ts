import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testsubpath',
  standalone: true,
  imports: [],
  templateUrl: './testsubpath.component.html',
  styleUrl: './testsubpath.component.css'
})
export class TestsubpathComponent {

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
