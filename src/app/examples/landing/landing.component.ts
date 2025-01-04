import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-landing",
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.css"],
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
    // toggleMenu() {
    //     const navbarMenu = document.getElementById("navbarMenu");
    //     navbarMenu.classList.toggle("active");
    // }
    toggleMenu() {
        // console.log("hello");
        // alert("hello");
        const mobileMenu = document.getElementById("mobileMenu");
        mobileMenu.classList.toggle("show");
        console.log(mobileMenu);
        const menuLinks = document.querySelectorAll("#mobileMenu .menu-link");
        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("show");
            });
        });
    }
}
