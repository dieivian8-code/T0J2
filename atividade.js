class Spec{
    constructor(_Volvo_s60,_peso,_preço,_manutenção){
        this.Volvo_s60 =_Volvo_s60 
     this.peso = _peso
     this._preço = _preço
      this._manutenção = _manutenção
    }
 data_lançamento(){console.log("carro feito para classe média com esportividade e luxo")}
saiu_delinha(){console.log(this.Volvo_s60)}

}
let esportividade = new Spec ("Volvo s60", "1600kg", 250000,true)
esportividade.saiu_delinha()
let luxo = new Spec("Volvo_s60","peso","preço","manutenção")
luxo.data_lançamento()
