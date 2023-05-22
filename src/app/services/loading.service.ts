import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  // must be in private to not break the encapsulation of the class
  // we just want to return an INSTANCE of a class by using the methods below

  constructor(){}

  showLoading() {
    this.isLoadingSubject.next(true);
  }

  hideLoading() {
    this.isLoadingSubject.next(false);
  }

  get isLoading(){
    // getter method to get the subject as an OBSERVABLE,
    // which ensures that nobody can change its value from the outside
    return this.isLoadingSubject.asObservable();
  }
}
