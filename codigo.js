function ExibirLivros(){
            fetch('https://profrodolfo.com.br/biblioteca/livro.php').then(res=>{
                res.json().then(res=>{
                    console.log(res);
                    for(let i = 0; i < res.length; i++){
                        document.getElementById('conteudo').innerHTML+= `Titulo: ${res[i].titulo}<br>Ano: ${res[i].ano}<br>Quantidade: ${res[i].qtd}<hr>`;
                    }
                })
            });
        }

        ExibirLivros();
        
