import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  selectedRating = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  maxRatingArr=[];
  votado = false;
  ratingAnterior;
  
  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maximoRating).fill(0);
  }

manejarMouseEnter(index:number): void{
  this.selectedRating = index +1;
}

manejarMouseLeave(){
  if(this.ratingAnterior !== 0 ){
    this.selectedRating = this.ratingAnterior;
  }else{
      this.selectedRating=0;
  }
  
}

rate(index:number):void{
  if(this.seguridadService.estaLogueado()){

    this.selectedRating = index +1;
    this.votado=true;
    this.ratingAnterior = this.selectedRating;
    this.rated.emit(this.selectedRating);
  }else{
    Swal.fire('Debe Loguearse', "No puede realizar esta accion", "error")
  }

}

}
