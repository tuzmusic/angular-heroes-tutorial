import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  // allow hero property to be passed in
  // (i.e., declaring "props")

  @Input() hero: Hero;

  constructor() {}

  ngOnInit() {}
}
