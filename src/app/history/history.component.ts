import { Component, Input  } from '@angular/core'; // Input pour recevoir des data du component parent
import { CommonModule } from '@angular/common'; // pour utiliser pipe date

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  // history child component will receive data
  // from parent component app through historyItems
  @Input() histoyItems: any = [];

  // paramètre : id-date de l'item history à supprimer
  deleteItem(itemDate:Date) {
    for (let i = 0; i < this.histoyItems.length; i++) {
      if (this.histoyItems[i].opDate === itemDate) {
        this.histoyItems.splice(i,1);
        break;
      }
    }
  }
 
}
