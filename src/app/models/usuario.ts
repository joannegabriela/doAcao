import { FichaMedica } from './ficha-medica';

export interface Usuario{

	nome:String;
	user:String;
	dataNascimento:String;
	senha:String;
	fichasMedicas:FichaMedica [];

	id?: String;



} 
