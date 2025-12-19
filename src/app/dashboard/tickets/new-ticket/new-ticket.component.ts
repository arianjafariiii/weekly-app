import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,  AfterViewInit {
  @ViewChild('form') private form !: ElementRef<HTMLFormElement>;
  add = output<{title: string, text: string}>();
  enteredTitle = '';
  enteredText = '';


  ngOnInit(){
    console.log("On Init");
    console.log(this.form?.nativeElement)
  }
   
  ngAfterViewInit() {
    console.log('After View Init')
  }


  onSubmit(){ {
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
}