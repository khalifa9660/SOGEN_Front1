import { Component, Input } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
  @Input() sideNavStatus: boolean = false;
  isDescended = false;

  menu = [
    {
      number: "1",
      name: "Football Menu",
      icon: "far fa-futbol",
      subMenu: [
        {
          number: "1.1",
          name: "Players",
          icon: "bi bi-universal-access",
        },
        {
          number: "1.2",
          name: "Teams",
          icon: "bi bi-align-top",
        },
        {
          number: "1.3",
          name: "Leagues",
          icon: "bi bi-c-circle-fill",
        }
      ],
    },
  ]; 
  
  menu2 = [
    {
      number: "2",
      name: "Football Archives",
      icon: "fas fa-address-book",
      subMenu2: [
        {
          number: "2.1",
          name: "Get Players",
          icon: "bi bi-universal-access",
        },
        {
          number: "2.2",
          name: "History of Teams",
          icon: "bi bi-journal",
        },
        {
          number: "2.3",
          name: "Get Leagues",
          icon: "bi bi-c-circle-fill",
        },
        {
          number: "2.4",
          name: "Get Nations",
          icon: "bi bi-flag-fill",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  onMouseEnter() {
    this.isDescended = true;
  }

  onMouseLeave() {
    this.isDescended = false;
  }

}
