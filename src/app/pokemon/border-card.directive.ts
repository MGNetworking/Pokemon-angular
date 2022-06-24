import { Directive, ElementRef, HostListener , Input} from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  constructor(private elRef: ElementRef) {
    this.initialColor();
    this.defaultHeight();

   }

@Input('pokemonBorderCard') borderColor: string;


@HostListener('mouseenter') onMouseEnter(){
  this.setBorder(this.borderColor || this.defaultColor());
}

@HostListener('mouseleave') onMouseLeave(){
  this.setBorder('#f5f5f5');
}


private initialColor(){
  this.setBorder('#f5f5f5');
}

private defaultColor(): string{
return '#009688';
  
}

private defaultHeight(){
  this.setHeight(180)
  
}


  private setBorder(color: string){
    let border = `solid 4px ` + color; 
    this.elRef.nativeElement.style.border = border ;
  }


  private setHeight(height: number){

    this.elRef.nativeElement.style.height = height + `px`;
  }

}
