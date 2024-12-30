import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  // ngOnInit() {
  //   // Only scroll to the fragment if it's part of the URL when navigating
  //   this.route.fragment.subscribe(fragment => {
  //     if (fragment) {
  //       // Prevent initial load scrolling
  //       if (this.router.url.includes(fragment)) {
  //         const element = document.getElementById(fragment);
  //         if (element) {
  //           element.scrollIntoView({ behavior: 'smooth' });
  //         }
  //       }
  //     }
  //   });
  // }
  ngOnInit() {
    // this.route.fragment.subscribe(fragment => {
    //   if (fragment) {
    //     const element = document.getElementById(fragment);
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   }
    // });
  }

}
