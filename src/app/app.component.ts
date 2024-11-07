import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // pour utiliser la directive ngFor
import { CalculatorComponent } from "./calculator/calculator.component";
import { HistoryComponent } from './history/history.component';
import { HistoryItem } from './history-item'; // interface model objet de notre historique

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CalculatorComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // title de la page
  title = 'Angular v18 : exercice 2';

  // model objet d'une opération
  model: HistoryItem = { 
    firstMember: '',
    secondMember: '',
    operator: "",
    result: 0,
    opDate: new Date()
  };
  
  // liste des opérations effectuées
  modelObjectList: any[] = [];

  /* fonction qui reçoit les datas du component enfant calculator (Output) 
   et les stockes dans l'objet this.model, 
   le type doit correspondare à celui déclaré dans l'Output côté calculator
   la fonction est appelée dans la template app en attribut du sélecteur du component enfant */
  receiveCalculData(calculateEvent: {firstMember: string,secondMember: string,operator: string,result: number}) {
 
    this.model.firstMember = calculateEvent.firstMember;
    this.model.secondMember = calculateEvent.secondMember;
    this.model.operator = calculateEvent.operator;
    this.model.result = calculateEvent.result;
    this.model.opDate = new Date();

    // copie l'objet modèle pour la persistance des données dans l'historique
    let modelCopy: HistoryItem = { 
      firstMember: '',
      secondMember: '',
      operator: "",
      result: 0,
      opDate: new Date()
    };
    const historyItem = Object.assign(modelCopy, this.model);

    // ajout du model à la liste des items de l'historique
    // ajout en tête de liste pour l'ordre d'affichage chronologique
    // du plus récente au plus ancien
    this.modelObjectList.unshift(historyItem);
    
  }

}
