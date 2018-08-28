import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import {UsuariosService} from './../usuarios.service';

import {Router} from '@angular/router';



@Component({
  selector: 'inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(private router:Router,
  private usuarioService: UsuariosService ) { }

     items: MenuItem[];

     gruposUsuario: any[];
  
     idUsuarioLogado = this.usuarioService.usuarioLogado.id;

     redirecionarInclusaodeExames(){
      this.router.navigate(['/requisicao-do-exame']);
     }

     redirecionarFichaMedicas(){
      this.router.navigate(['/fichas-medicas']);
     }


     redirecionarBancoDeSangue(){
      this.router.navigate(['/banco-de-sangue']);
     }

     redirecionarAgendamentoDeDoacoes(){
      this.router.navigate(['/agendamento-de-doacoes']);
     }
     
      ngOnInit() {
        this.items = [
            {label: 'Página Inicial', icon: 'fa-calendar', routerLink:'dashboard'},
            {label: 'Sair', icon: 'fa-book', routerLink:'/login'},
        ];
    }


  
       

}

 

   


