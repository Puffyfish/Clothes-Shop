import { Component, OnInit } from "@angular/core";
import { LoadingService } from "src/app/services/loading.service";

@Component({
    selector: 'app-loading-spinner',
    templateUrl: './loading-spinner.component.html',
    styleUrls: ['./loading-spinner.component.scss']
})

export class LoadingSpinnerComponent implements OnInit {
  isLoading!: boolean;

  constructor(loadingService: LoadingService) {
    loadingService.isLoading.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    )
  loadingService.showLoading();
  }

  ngOnInit(): void {

  }
}
