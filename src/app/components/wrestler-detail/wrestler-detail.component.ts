import { Component, OnInit } from '@angular/core';
import { Wrestler } from '../../models/Wrestler';
import { WrestlerService } from '../../services/wrestler.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';


@Component({
  selector: 'app-wrestler-detail',
  templateUrl: './wrestler-detail.component.html',
  styleUrls: ['./wrestler-detail.component.css']
})
export class WrestlerDetailComponent implements OnInit {

  // Match variables with model
  wrestlers:Wrestler[]
  filterWrestler: Wrestler[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private wrestlerService:WrestlerService) { }

  ngOnInit() {

    // Call the service
    this.wrestlerService.getWrestlers().subscribe(wrestlers => {
      // Capture the data
      this.wrestlers = wrestlers;
      // Get current param
      this.activatedRoute.params.subscribe(paramsId => {
        // Filter against the param
        const filterWrestler =  this.wrestlers.filter(function(wrestler) {
          return wrestler.id === parseInt(paramsId.id);
        })
        // Set variable to display filtered data in template
        this.filterWrestler = filterWrestler;
      });
    });

  }

  backToRoot() {
    // Navigate user back to root on click
    this.router.navigate(['/']);
  }

}