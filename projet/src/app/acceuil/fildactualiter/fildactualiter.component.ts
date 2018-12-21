import {Component, Input, OnInit} from '@angular/core';
import {StatutComponent} from '../statut/statut.component';

@Component({
  selector: 'app-fildactualiter',
  templateUrl: './fildactualiter.component.html',
  styleUrls: ['./fildactualiter.component.css'],
  template: `
   <div class="col-md-11">
<ul class="timeline">
  <li>
  <div class="card card-shadow"  >
    <div class="card-block media clearfix p-25">

      <div class="pr-20">

        <a href="#" class="avatar avatar-lg">
          <img class="img-fluid avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTDOzadSH7HZlU96Ogy2XzMynwk4o4Epcvw12FmpBYRT0B_aLrA">
        </a>
      </div>
      <div class="media-body text-middle">
        <h4 class="mt-0 mb-5">

          <small style="font-size: small">Date publication</small>
        </h4>

      </div>
    </div>
    <div class="card-block px-25  pt-0">
      <p class="card-text mb-20">
        Statut Publier...
      </p>

    </div>
    <div class="card-footer p-20">
      <form class="wall-comment-reply">
        <div class="row">
          <div class="col-md-12">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Rpondre" >
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button">Publier</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  </div>
  <hr>
  </li>
</ul>
   </div>
  `
})
export class FildactualiterComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {

  }

}
