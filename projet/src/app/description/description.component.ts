import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular2-carousel';



import {CarouselModule} from 'angular2-carousel';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

// In your App's module or Custom Module:
@NgModule({
  imports: [
    CarouselModule
  ]
})

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  images = ['../../assets/Images/0_vbw4wQW_Xq2_3eOo.jpg', '../../assets/Images/Stronghold_Metadata_Image.jpg', '../../assets/Images/1_UYeyTGzRRAdtekX7MB1U_A.jpeg', '../../assets/Images/1_DW5TA12Zvk8iM5Gle-GrBg.png'];

  constructor(config: NgbCarouselConfig) {
    config.interval = 4200;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }


}
