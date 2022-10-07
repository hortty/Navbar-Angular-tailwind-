import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { MatSidenav } from '@angular/material/sidenav';

export interface PeriodicElement {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    title = 'NewsApp';
    @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width: 787px)']).subscribe((res)=> {
        if(res?.matches) {
            this.sideNav.mode = "over";
            this.sideNav.close();
        }else {
            this.sideNav.mode = "side";
            this.sideNav.open();
        }
    });
    this.cdr.detectChanges();
  }


}
