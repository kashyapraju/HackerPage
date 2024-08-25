import { Component } from '@angular/core';
import { WorksectionComponent } from '../worksection/worksection.component';

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [WorksectionComponent],
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.css'
})
export class MypageComponent {

}
