class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona (event){
        event.preventDefault();
        // alert('Chamei ação no controller');

        // console.log(this._inputData.value);
        // console.log(this._inputQuantidade.value);
        // console.log(this._inputValor.value);

        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        // let data = new Date(this._inputData.value.split('-'));

        let data = new Date(this._inputData.value.replace('/-/g', ','));

        console.log(data);
    }
}