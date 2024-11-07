import { Component, OnInit, EventEmitter, Output } from '@angular/core'; // sending data to component parent: EventEmitter Output
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

// OnInit is an interface to execute custom initialization logic
// used here to set default selected operator '+'
export class CalculatorComponent implements OnInit {

  operatorPlus = "+";
  operatorMoins = "-";
  operatorMultiply = "*";
  operatorDivide = "/";

  // data reçues de la template et envoyées à history via app
  inputMemberOne = '0';
  inputMemberTwo = '0';
  selectedOperator = "+";
  calculResult = 0;

  // appelée une fois que tous les composants du composant ont été 
  // initialisés, c'est-à-dire que tous les data-bindings sont prêts
  ngOnInit() {
    this.selectedOperator = this.operatorPlus;
  }

  // data will be send to app.component
  // calculateEventTest se retrouve dans app html
  @Output() calculateEvent = new EventEmitter<{firstMember: string,secondMember: string,operator: string,result: number}>();

  calculate() {

    switch ( this.selectedOperator ) {
      case this.operatorPlus:
        this.calculResult = Number(this.inputMemberOne) + Number(this.inputMemberTwo);
        break;
      case this.operatorMoins:
        this.calculResult = Number(this.inputMemberOne) - Number(this.inputMemberTwo);
        break;
      case this.operatorMultiply:
        this.calculResult = Number(this.inputMemberOne) * Number(this.inputMemberTwo);
        break;
      default: 
      this.calculResult = Number(this.inputMemberOne) / Number(this.inputMemberTwo);
      break;
   }

    // envoie des données au component parent app
    this.calculateEvent.emit({firstMember: this.inputMemberOne,secondMember: this.inputMemberTwo,operator: this.selectedOperator,result: this.calculResult});
  }

}
