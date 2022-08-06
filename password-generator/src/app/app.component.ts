import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength = 0;
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  title = 'password-generator';
  onButtonClick () {
    console.log("length letters:"+this.passwordLength);

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers= "1234567890";
    const symbols = "!@#$%^&*()";

    let validChars = "";
    let generatedPassword = "";

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    for(let i=0 ; i < this.passwordLength ; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  };

  onChangeLength(event: Event) {
    const eventValue = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(eventValue);

    if(!isNaN(parsedValue)){
      this.passwordLength = parsedValue;
    }


  }

  onChangeUseLetters(){
      this.includeLetters = !this.includeLetters;
  };

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  };

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  };

  getPassword (){
    return this.password;
  }
}
