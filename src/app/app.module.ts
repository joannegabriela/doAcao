import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { routing } from './app.routing';


//component

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component'
import { RequisicaoDoExameComponent } from './requisicao-do-exame/requisicao-do-exame.component';
import { BancoDeSangueComponent } from './banco-de-sangue/banco-de-sangue.component';
import { FichasMedicasComponent } from './fichas-medicas/fichas-medicas.component';
import { AgendamentoDeDoacoesComponent } from './agendamento-de-doacoes/agendamento-de-doacoes.component';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { VisualizacaoAgendamentosComponent } from './visualizacao-agendamentos/visualizacao-agendamentos.component';
import { VisualizacaoFichasMedicasComponent } from './visualizacao-fichas-medicas/visualizacao-fichas-medicas.component';
import { ListagemDeUsuariosComponent } from './listagem-de-usuarios/listagem-de-usuarios.component';
import { VisualizacaoRequisicaoExamesComponent } from './visualizacao-requisicao-exames/visualizacao-requisicao-exames.component';
import { DashboardHemopeComponent } from './dashboard-hemope/dashboard-hemope.component';
import { AgendamentoDoacoesHemopeComponent } from './agendamento-doacoes-hemope/agendamento-doacoes-hemope.component';
import { SolicitacaoDeSangueComponent } from './solicitacao-de-sangue/solicitacao-de-sangue.component';
import { VisualizacaoSolicitacoesComponent } from './visualizacao-solicitacoes/visualizacao-solicitacoes.component';
import { CadastroTecnicosComponent } from './cadastro-tecnicos/cadastro-tecnicos.component';
import { ListagemTecnicosComponent } from './listagem-tecnicos/listagem-tecnicos.component';


//module

import {ButtonModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng'; 
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MegaMenuModule } from 'primeng/megamenu';
import { FormsModule } from '@angular/forms';

//angularFire

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

//service
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UsuariosService } from './usuarios.service';
import { FichasMedicasService } from './fichas-medicas.service';
import { MenusService } from './menus.service';
import { AgendamentoDeDoacoesService } from './agendamento-de-doacoes.service';
import { TecnicoService } from './tecnicos.service';
import { InformacoesSobreDoacaoComponent } from './informacoes-sobre-doacao/informacoes-sobre-doacao.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CadastroComponent,
    InicialComponent,
    RequisicaoDoExameComponent,
    BancoDeSangueComponent,
    FichasMedicasComponent,
    AgendamentoDeDoacoesComponent,
    LoginGoogleComponent,
    VisualizacaoAgendamentosComponent,
    VisualizacaoFichasMedicasComponent,
    ListagemDeUsuariosComponent,
    DashboardHemopeComponent,
    VisualizacaoRequisicaoExamesComponent,
    AgendamentoDoacoesHemopeComponent,
    SolicitacaoDeSangueComponent,
    VisualizacaoSolicitacoesComponent,
    CadastroTecnicosComponent,
    ListagemTecnicosComponent,
    InformacoesSobreDoacaoComponent,
   
  ],

  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ButtonModule,
    EditorModule,
    InputTextModule,
    PasswordModule,
    TabMenuModule,
    DataListModule,
    ScheduleModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    DialogModule,
    InputTextareaModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ChartModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    MegaMenuModule,

    AngularFireModule.initializeApp(FirebaseConfig),
    //AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ], 

  providers: [AuthService, AuthGuard, UsuariosService, FichasMedicasService, AgendamentoDeDoacoesService, 
              MenusService, TecnicoService],

  bootstrap: [AppComponent]


})
export class AppModule { }