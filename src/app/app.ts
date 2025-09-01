import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  inputValue = ""
  texareaInputValue = ""
  textareaValue = ""
  isTextareaActive = false
  activateTextarea(){
    this.isTextareaActive = true;
  }
  
}
