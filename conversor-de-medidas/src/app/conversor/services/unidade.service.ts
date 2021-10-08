import { Injectable } from '@angular/core';
import { Unidade } from '../models';

@Injectable()

export class UnidadeService {

  private unidades: Unidade[];

  constructor() { }

  // https://github.com/robianchini/conversor-api.git
  private unidadesObj = [
    { "unidade": "area", "sigla": "sqft", "descricao": "pés quadrados" },
    { "unidade": "area", "sigla": "m2", "descricao": "metros quadrados" },
    { "unidade": "area", "sigla": "km2", "descricao": "quilometros quadrados" },
    { "unidade": "area", "sigla": "mi2", "descricao": "milhas quadradas" },
    { "unidade": "area", "sigla": "yd2", "descricao": "jardas quadradas" },
    { "unidade": "area", "sigla": "in2", "descricao": "polegadas quadradas" },
    { "unidade": "area", "sigla": "ha", "descricao": "hectares" },

    { "unidade": "temperature", "sigla": "k", "descricao": "Kelvin" },
    { "unidade": "temperature", "sigla": "c", "descricao": "Graus Celcius" },
    { "unidade": "temperature", "sigla": "f", "descricao": "Graus Fahrenheit" },
    
    { "unidade": "speed", "sigla": "mph", "descricao": "Milhas por hora" },
    { "unidade": "speed", "sigla": "fps", "descricao": "Pés por segundo" },
    { "unidade": "speed", "sigla": "mps", "descricao": "Metros por segundo" },
    { "unidade": "speed", "sigla": "kmh", "descricao": "Quilômetros por hora" },
    { "unidade": "speed", "sigla": "kt", "descricao": "Nós (Knots)" },

    { "unidade": "volume", "sigla": "floz", "descricao": "Onças fluídas" },
    { "unidade": "volume", "sigla": "gal", "descricao": "Galões americanos" },
    { "unidade": "volume", "sigla": "ml", "descricao": "Mililitros" },
    { "unidade": "volume", "sigla": "l", "descricao": "Litros" },

    { "unidade": "weight", "sigla": "mg", "descricao": "Miligramas" },
    { "unidade": "weight", "sigla": "g", "descricao": "Gramas" },
    { "unidade": "weight", "sigla": "kg", "descricao": "Quilogramas" },
    { "unidade": "weight", "sigla": "ton", "descricao": "Toneladas" },
    { "unidade": "weight", "sigla": "lb", "descricao": "Libras" },
    { "unidade": "weight", "sigla": "oz", "descricao": "Onças" },

    { "unidade": "lenght", "sigla": "mm", "descricao": "Milímetros" },
    { "unidade": "lenght", "sigla": "cm", "descricao": "Centímetros" },
    { "unidade": "lenght", "sigla": "m", "descricao": "Metros" },
    { "unidade": "lenght", "sigla": "km", "descricao": "Quilômetros" },
    { "unidade": "lenght", "sigla": "yd", "descricao": "Jardas" },
    { "unidade": "lenght", "sigla": "ft", "descricao": "Pés" },
    { "unidade": "lenght", "sigla": "in", "descricao": "Polegadas" },
    { "unidade": "lenght", "sigla": "mi", "descricao": "Milhas" },
    { "unidade": "lenght", "sigla": "nm", "descricao": "Milhas náuticas" },

  ];

  public medidas = ["area", "lenght", "speed", "temperature", "volume", "weight"]

  listarUnidade(): Unidade[] {
    if (this.unidades) {
      return this.unidades;
    }
    this.unidades = []

    for (let indice of this.unidadesObj) {
      let unidade: Unidade = new Unidade();
      Object.assign(unidade, indice);
      this.unidades.push(unidade);
    }
    return this.unidades;
  }

  getMedidas() {
    return this.medidas
  }


}
