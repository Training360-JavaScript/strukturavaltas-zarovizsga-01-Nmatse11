import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ConstructionService } from './service/construction.service';
import { Construction } from './model/construction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  List$: Observable<Construction[]> = this.constructionService.getAll()

  keys: string[] = Object.keys(new Construction())

  constructor(
    private constructionService: ConstructionService,
    private router: Router
  ) {  }

  onDelete(construction: Construction): void {
    this.constructionService.delete(construction.id).subscribe(
      construction => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => window.location.reload())
      )
  }

}
