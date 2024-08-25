import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MypageComponent } from './mypage/mypage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MypageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leader-board';
}
