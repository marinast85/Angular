import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculadoraCientificaService {

  /* DEFINING THE CONSTANTS USED FOR CALCULATION OPERATIONS */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly QUADRADO: string = 'x²';
  static readonly CUBO: string = 'x³';
  static readonly PI: string = 'π';
  static readonly RAIZ: string = '√';

  constructor() { }

  /**
   * Method that calculates a mathematical operation given two numbers and an operation. 
   * Supports addition, subtraction, division and multiplication.
   * @param num1 number
   * @param num2 number
   * @param operacao string operation to be execulted
   * @returns number Operation results
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraCientificaService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraCientificaService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraCientificaService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraCientificaService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraCientificaService.QUADRADO:
        resultado = Math.pow(num1, 2)
        break;
      case CalculadoraCientificaService.CUBO:
        resultado = Math.pow(num1, 3)
        break;
      case CalculadoraCientificaService.PI:
        resultado = num1 * 3.14
        break;
      case CalculadoraCientificaService.RAIZ:
        resultado = Math.sqrt(num1)
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }
}