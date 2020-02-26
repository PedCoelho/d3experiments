
//Buscas por palavras chave totais ou parciais em Array

newArray = []

for(el of data){

 encontrei = el.NM_DISCENTE.find(a => a.includes("VERONICA"))
if(encontrei){    
newArray.push(encontrei)
} 
}


data.filter(element => element.NM_ORIENTADOR.includes("ROSA MARIA LEITE RIBEIRO PEDRO"));