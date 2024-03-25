import { Component, Input } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: "1",
      name: "Players",
      icon: "bi bi-person-arms-up",
    },
    {
      number: "2",
      name: "History of Teams",
      icon: "bi bi-journal",
    },
    {
      number: "3",
      name: "Leagues",
      icon: "bi bi-align-top",
    },
    {
      number: "4",
      name: "Countries",
      icon: "bi bi-flag-fill",
    },
    {
      number: "5",
      name: "Dream Team",
      icon: "bi bi-plus-circle",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
