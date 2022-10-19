import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { MatSidenav } from '@angular/material/sidenav';
import { NewsService } from './service/news.service';

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
export class AppComponent implements AfterViewInit, OnInit {

    title = 'NewsApp';
    @ViewChild(MatSidenav) sideNav!: MatSidenav;
    public selectedNewsChannel: string = "Trending News";
    public sources: any = [];
    public articles: any = [];

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef
    , private api: NewsService) {

  }
  ngOnInit(): void {
    this.api.iniciarArtigos().subscribe((res: any)=>{
      console.log(res);
      this.articles = res.articles;
    });
    this.api.iniciarSources().subscribe((res: any)=>{
      console.log(res);
      this.sources = res.sources;
    });
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
  searchSource(source: any) {
    this.api.artigosId(source.id).subscribe((res: any) => {
      this.articles = res.articles;
      this.selectedNewsChannel = source.name;
    })
  }


}
