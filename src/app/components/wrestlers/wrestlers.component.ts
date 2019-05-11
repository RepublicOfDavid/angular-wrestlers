import { Component, OnInit } from '@angular/core';
import { Wrestler } from '../../models/Wrestler';
import { WrestlerService } from '../../services/wrestler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wrestlers',
  templateUrl: './wrestlers.component.html',
  styleUrls: ['./wrestlers.component.css']
})
export class WrestlersComponent implements OnInit {

  // Match variable with model
  wrestlers:Wrestler[]

  constructor(private router: Router, private wrestlerService:WrestlerService) { }

  ngOnInit() {
    // Call the service
    this.wrestlerService.getWrestlers().subscribe(wrestlers => {
      // Set variable to display data in template
      this.wrestlers = wrestlers;
    });
  }

  //Belt filter functions
  statusWorld: boolean = false;
  worldBeltClickEvent(){
      this.statusWorld = !this.statusWorld;
  }

  statusIc: boolean = false;
  icBeltClickEvent(){
    this.statusIc = !this.statusIc;
  }

  onSelect(wrestler) {
    // Navigate user to a single view of the selected
    this.router.navigate(['', wrestler.id]);
  }

}