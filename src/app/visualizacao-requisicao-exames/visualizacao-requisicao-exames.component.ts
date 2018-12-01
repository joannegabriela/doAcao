import { Component, OnInit } from '@angular/core';
import {RequisicaoDeExameService} from '../requisicao-de-exame.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import {MenusService} from '../menus.service';

@Component({
  selector: 'app-visualizacao-requisicao-exames',
  templateUrl: './visualizacao-requisicao-exames.component.html',
  styleUrls: ['./visualizacao-requisicao-exames.component.css']
})
export class VisualizacaoRequisicaoExamesComponent implements OnInit {

  items: MenuItem[];
  requisicaoExames: any[] = [];
  requisicaoSelecionada;

  constructor(private requisicaoExamesService: RequisicaoDeExameService, 
    private router:Router,  private menusSevice: MenusService) { }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard-hemope']);
     }



  ngOnInit() { 
      this.items = this.menusSevice.itensHemope;
 
    this.requisicaoExamesService.listarTodos().subscribe(requisicaoExames => {
      this.requisicaoExames = requisicaoExames;
    });
  }

}
