module.exports = function(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomecompleto = function(){
        return this.nome + " " + this.sobrenome;

    }
}

/*= {
    "nome":"Ana",
    "sobrenome":"Santos",
    "apelido":"Bea"
}*/