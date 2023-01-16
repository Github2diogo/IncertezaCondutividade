

////////////////////////////////////////////////////////////////
// variáveis
var calculo_c5_R = 8.314462618 // em J/mol*K
var calculo_c6_F = 96485.33 // em C/mol
var calculo_c7_T = 25 // em °C

var calculo_c11_kPhMaior = 2
var calculo_c15_kPhMenor = 2

////////////////////////////////////////////////////////////////
// matemáticas
function quadrado(numero){
    return numero*numero;
}

function desvpada(matriz){ // método n-1
    
    // calcular a média
    var somaElementos = 0;

    for (var m = 0; m < matriz.length; m++){
        somaElementos += matriz[m];
    }
        var media = somaElementos / (matriz.length-0) // aqui é a média normal
    

    // subtrair a média de cada um dos valores
    // salvar cada resultado individual e
    // elevar ao quadrado cada resultado

    var difMedia = []
    for (var m = 0; m < matriz.length; m++){
        difMedia.push((matriz[m]-media)*(matriz[m]-media));
    }
    
    // calcular a média das diferenças que foram elevadas ao quadrado
    var somaDifMedia = 0;
    for (var d = 0; d < difMedia.length; d++){
        somaDifMedia += difMedia[d];
    } 
    
    var mediaDiferencas = somaDifMedia / (difMedia.length-1); // aqui é o n-1
    
    if (mediaDiferencas == 0){var desvioPadrao = 0;}
    if (mediaDiferencas != 0){var desvioPadrao = Math.sqrt(mediaDiferencas);}
    
    // console.log("matriz", matriz);
    // console.log("media", media);
    // console.log("difMedia", difMedia);
    // console.log("somaDifMedia", somaDifMedia);
    // console.log("mediaDiferencas", mediaDiferencas);
    // console.log("desvioPadrao", desvioPadrao);


    // tirar a raiz quadrada
    return desvioPadrao
}

function invt(probabilidade, grausLiberdade){

    //probabilidade = probabilidade;
    // feito pra ser sempre 0,05
    // valores da tabela arredondados para 3 casas

    grausLiberdade = Math.floor(grausLiberdade)

    var tabelaT =
    {
        1: 12.706,
        2: 4.303,
        3: 3.182,
        4: 2.776,
        5: 2.571,
        6: 2.447,
        7: 2.365,
        8: 2.306,
        9: 2.262,
        10: 2.228,
        11: 2.201,
        12: 2.179,
        13: 2.160,
        14: 2.145,
        15: 2.131,
        16: 2.120,
        17: 2.110,
        18: 2.101,
        19: 2.093,
        20: 2.086,
        21: 2.080,
        22: 2.074,
        23: 2.069,
        24: 2.064,
        25: 2.060,
        26: 2.056,
        27: 2.052,
        28: 2.048,
        29: 2.045,
        30: 2.042,
        31: 2.040,
        32: 2.037,
        33: 2.035,
        34: 2.032,
        35: 2.030,
        36: 2.028,
        37: 2.026,
        38: 2.024,
        39: 2.023,
        40: 2.021,
        41: 2.020,
        42: 2.018,
        43: 2.017,
        44: 2.015,
        45: 2.014,
        46: 2.013,
        47: 2.012,
        48: 2.011,
        49: 2.010,
        50: 2.009,
        51: 2.008,
        52: 2.007,
        53: 2.006,
        54: 2.005,
        55: 2.004,
        56: 2.003,
        57: 2.002,
        58: 2.002,
        59: 2.001,
        60: 2.000,

    };

    return tabelaT[grausLiberdade];
}

////////////////////////////////////////////////////////////////
// botões

function ocultaExibeConfig(){
    if (document.getElementById('tabela_configuracoes').style.display == ""){
        document.getElementById('tabela_configuracoes').style.display = "none";
        document.getElementById('botaoConfig').value = "Exibir configurações";
    }
    else{
        document.getElementById('tabela_configuracoes').style.display = "";
        document.getElementById('botaoConfig').value = "Ocultar configurações";
    }
}

function ocultaExibeCalc(){
    if (document.getElementById('div_calcDetalhado').style.display == ""){
        document.getElementById('div_calcDetalhado').style.display = "none";
        document.getElementById('botao_calcDetalhado').value = "Exibir cálculo detalhado";
    }
    else{
        document.getElementById('div_calcDetalhado').style.display = "";
        document.getElementById('botao_calcDetalhado').value = "Ocultar cálculo detalhado";
    }
}

////////////////////////////////////////////////////////////////
// move entre campos

function verTeclado(input, event) {
    
    // console.log(event);
    // console.log(z);
    
    if (event.key == 'Enter'){
        if(input.id == 'condutividade_g16'){calcular();}
    }

    if (event.key == 'Enter' || event.key == 'ArrowDown'){

        if(input.id == 'configuracoes_d5'){document.getElementById("configuracoes_d6").focus();}
        if(input.id == 'configuracoes_d6'){document.getElementById("configuracoes_d7").focus();}
        if(input.id == 'configuracoes_d7'){document.getElementById("configuracoes_d8").focus();}
        if(input.id == 'configuracoes_d8'){document.getElementById("configuracoes_d9").focus();}

        if(input.id == 'configuracoes_d9'){document.getElementById("condutividade_g7").focus();}

        
        if(input.id == 'condutividade_g7'){document.getElementById("condutividade_g8").focus();}
        if(input.id == 'condutividade_g8'){document.getElementById("condutividade_g10").focus();}

        if(input.id == 'condutividade_g10'){document.getElementById("condutividade_g11").focus();}
        if(input.id == 'condutividade_g11'){document.getElementById("condutividade_g12").focus();}
        if(input.id == 'condutividade_g12'){document.getElementById("condutividade_g14").focus();}
        if(input.id == 'condutividade_g14'){document.getElementById("condutividade_g15").focus();}
        if(input.id == 'condutividade_g15'){document.getElementById("condutividade_g16").focus();}
    }

    if (event.key == 'ArrowUp'){
        
        if(input.id == 'configuracoes_d6'){document.getElementById("configuracoes_d5").focus();}
        if(input.id == 'configuracoes_d7'){document.getElementById("configuracoes_d6").focus();}
        if(input.id == 'configuracoes_d8'){document.getElementById("configuracoes_d7").focus();}
        if(input.id == 'configuracoes_d9'){document.getElementById("configuracoes_d8").focus();}

        // console.log(document.getElementById("tabela_configuracoes").style.display)
        if(input.id == 'condutividade_g7' && document.getElementById("tabela_configuracoes").style.display == ''){
            document.getElementById("configuracoes_d9").focus();}
        
        if(input.id == 'condutividade_g8'){document.getElementById("condutividade_g7").focus();}
        if(input.id == 'condutividade_g10'){document.getElementById("condutividade_g8").focus();}
        if(input.id == 'condutividade_g11'){document.getElementById("condutividade_g10").focus();}
        if(input.id == 'condutividade_g12'){document.getElementById("condutividade_g11").focus();}
        if(input.id == 'condutividade_g14'){document.getElementById("condutividade_g12").focus();}
        if(input.id == 'condutividade_g15'){document.getElementById("condutividade_g14").focus();}
        if(input.id == 'condutividade_g16'){document.getElementById("condutividade_g15").focus();}
       }
 }

////////////////////////////////////////////////////////////////
// array para tabela HTML

function matriz2tabela(matriz, id, classe, resResultados){

    // console.log('matriz: ', matriz);
    // console.log('id: ', id);
    // console.log('classe: ', classe);

    var destino = document.getElementById(id);
    destino.innerHTML = ''; // limpamos o que quer que esteja dentro do div

    var codTopo = '';
    codTopo += '<table border="0"';
    codTopo += ' id="' + id + '"';
    codTopo += ' class="' + classe + '"';
    codTopo += '>';
    
    // console.log('código topo: ', codTopo);

    var codMeio = '';

    for(var linha = 0; linha < matriz.length; linha++){
        
        // novaLinha += '<tr>';
        var novaLinha = '';
        // console.log('matriz.length:', matriz[linha].length);
        for(var coluna = 0; coluna < matriz[linha].length; coluna++){

            novaLinha += '<td> ';
            // console.log(matriz[linha][coluna]);
            if(typeof(matriz[linha][coluna]) == 'number'){
                novaLinha += matriz[linha][coluna].toFixed(resResultados+1);
            }
            else {
                novaLinha += matriz[linha][coluna];
            }
            novaLinha += ' </td>';
        }

        novaLinha += '</tr>';
        codMeio += novaLinha;
        // console.log('nova linha: ', novaLinha);

    }

    // console.log('código meio: ', codMeio);

    codBase = '';
    codBase += '</table>';
    

    codCompleto = codTopo+codMeio+codBase;
    // console.log(codCompleto);
    destino.innerHTML = codCompleto;
}


////////////////////////////////////////////////////////////////
// cálculo método 2 pontos

function calcular()
{
    // exibe a tabela de resultados que estava oculta
    document.getElementById('tabela_resultados').style.display = "";

    // valor k(x) resultados
    var kx = 
        parseFloat(document.getElementById('condutividade_g7').value.replace(',', '.')) *
        (
            ((
            parseFloat(document.getElementById('condutividade_g14').value.replace(',', '.'))+
            parseFloat(document.getElementById('condutividade_g15').value.replace(',', '.'))+
            parseFloat(document.getElementById('condutividade_g16').value.replace(',', '.'))
            )/3)
        /
            ((
            parseFloat(document.getElementById('condutividade_g10').value.replace(',', '.'))+
            parseFloat(document.getElementById('condutividade_g11').value.replace(',', '.'))+
            parseFloat(document.getElementById('condutividade_g12').value.replace(',', '.'))            
            )/3)
        );

    // ks
        var ks = parseFloat(document.getElementById('condutividade_g7').value.replace(',', '.'));

    // n
        var n = 3; // número de leituras

    // kms
        var kms = (
            parseFloat(document.getElementById('condutividade_g10').value.replace(',', '.')) +
            parseFloat(document.getElementById('condutividade_g11').value.replace(',', '.')) +
            parseFloat(document.getElementById('condutividade_g12').value.replace(',', '.'))
        )/3;


    // kmx
        var kmx = (
            parseFloat(document.getElementById('condutividade_g14').value.replace(',', '.')) +
            parseFloat(document.getElementById('condutividade_g15').value.replace(',', '.')) +
            parseFloat(document.getElementById('condutividade_g16').value.replace(',', '.'))
        )/3;

    ////////////////////////////////////////////////////////////////
    // Incerteza condutividade

    // Cert k(x)
    var cert_kx_uxi = parseFloat(document.getElementById('condutividade_g8').value.replace(',', '.'));
    var cert_kx_div = 2;
    var cert_kx_coef = kmx/kms;
    var cert_kx_ciUxi = cert_kx_uxi * cert_kx_coef/cert_kx_div;
    var cert_kx_uiY2 = quadrado(cert_kx_ciUxi);

    // variabilidade kms
    var leituras_kms = [
        parseFloat(document.getElementById('condutividade_g10').value.replace(',', '.')),
        parseFloat(document.getElementById('condutividade_g11').value.replace(',', '.')),
        parseFloat(document.getElementById('condutividade_g12').value.replace(',', '.'))
    ];
    var variabilidade_kms_uxi = desvpada(leituras_kms);
    var variabilidade_kms_div = Math.sqrt(n);
    var variabilidade_kms_coef = -1 * (ks*kmx/(quadrado(kms)));
    var variabilidade_kms_ciUxi = variabilidade_kms_uxi * variabilidade_kms_coef/variabilidade_kms_div;
    var variabilidade_kms_uiY2 = quadrado(variabilidade_kms_ciUxi);

    // resolução kms
    var resolucao_kms_uxi = parseFloat(document.getElementById('configuracoes_d5').value.replace(',', '.'))/2;
    var resolucao_kms_div = Math.sqrt(3);
    var resolucao_kms_coef =  -1 * (ks*kmx/(quadrado(kms)));
    var resolucao_kms_ciUxi = resolucao_kms_uxi * resolucao_kms_coef/resolucao_kms_div;
    var resolucao_kms_uiY2 = quadrado(resolucao_kms_ciUxi);

    // Variabilidade kMx
    var leituras_kmx = [
        parseFloat(document.getElementById('condutividade_g14').value.replace(',', '.')),
        parseFloat(document.getElementById('condutividade_g15').value.replace(',', '.')),
        parseFloat(document.getElementById('condutividade_g16').value.replace(',', '.'))
    ];
    var variabilidade_kmx_uxi = desvpada(leituras_kmx);
    var variabilidade_kmx_div = Math.sqrt(n);
    var variabilidade_kmx_coef = ks/kms;
    var variabilidade_kmx_ciUxi = variabilidade_kmx_uxi * variabilidade_kmx_coef/variabilidade_kmx_div;
    var variabilidade_kmx_uiY2 = quadrado(variabilidade_kmx_ciUxi);

    // Resolução kMx
    var resolucao_kmx_uxi = parseFloat(document.getElementById('configuracoes_d5').value.replace(',', '.'))/2;
    var resolucao_kmx_div = Math.sqrt(3);
    var resolucao_kmx_coef = ks/kms;
    var resolucao_kmx_ciUxi = resolucao_kmx_uxi * resolucao_kmx_coef/resolucao_kmx_div;
    var resolucao_kmx_uiY2 = quadrado(resolucao_kmx_ciUxi);
    
    // Temp kMs
    var temp_kms_uxi = parseFloat(document.getElementById('configuracoes_d6').value.replace(',', '.'));
    var temp_kms_div = 2;
    var temp_kms_coef = (ks * kmx * kms * parseFloat(document.getElementById('configuracoes_d9').value.replace(',', '.')))/quadrado(kms);
    var temp_kms_ciUxi = temp_kms_uxi * temp_kms_coef/temp_kms_div;
    var temp_kms_uiY2 = quadrado(temp_kms_ciUxi);

    // Variab Temp kMs
    var variabilidade_temp_kms_uxi = parseFloat(document.getElementById('configuracoes_d7').value.replace(',', '.'));
    var variabilidade_temp_kms_div = Math.sqrt(n);
    var variabilidade_temp_kms_coef = (ks * kmx * kms * parseFloat(document.getElementById('configuracoes_d9').value.replace(',', '.')))/quadrado(kms);
    var variabilidade_temp_kms_ciUxi = variabilidade_temp_kms_uxi * variabilidade_temp_kms_coef/variabilidade_temp_kms_div;
    var variabilidade_temp_kms_uiY2 = quadrado(variabilidade_temp_kms_ciUxi);

    // Temp kMx
    var temp_kmx_uxi = parseFloat(document.getElementById('configuracoes_d6').value.replace(',', '.'));
    var temp_kmx_div = 2;
    var temp_kmx_coef = (ks * kmx * kms * parseFloat(document.getElementById('configuracoes_d9').value.replace(',', '.')))/quadrado(kms);
    var temp_kmx_ciUxi = temp_kmx_uxi * temp_kmx_coef/temp_kmx_div;
    var temp_kmx_uiY2 = quadrado(temp_kmx_ciUxi);

    // Variab Temp kMx
    var variabilidade_temp_kmx_uxi = parseFloat(document.getElementById('configuracoes_d7').value.replace(',', '.'));
    var variabilidade_temp_kmx_div = Math.sqrt(n);
    var variabilidade_temp_kmx_coef = (ks * kmx * kms * parseFloat(document.getElementById('configuracoes_d9').value.replace(',', '.')))/quadrado(kms);
    var variabilidade_temp_kmx_ciUxi = variabilidade_temp_kmx_uxi * variabilidade_temp_kmx_coef/variabilidade_temp_kmx_div;
    var variabilidade_temp_kmx_uiY2 = quadrado(variabilidade_temp_kmx_ciUxi);

    // Não-linearidade (parte elétrica)
    var naoLinearidade_eletrica_uxi = parseFloat(document.getElementById('configuracoes_d8').value.replace(',', '.')) * kmx/100;
    var naoLinearidade_eletrica_div = Math.sqrt(3);
    var naoLinearidade_eletrica_coef = ks / kms;
    var naoLinearidade_eletrica_ciUxi = naoLinearidade_eletrica_uxi * naoLinearidade_eletrica_coef/naoLinearidade_eletrica_div;
    var naoLinearidade_eletrica_uiY2 = quadrado(naoLinearidade_eletrica_ciUxi);

    //////////
    // incerteza calculada
    
    // total
    var uCond_total = 
            cert_kx_uiY2 +
            variabilidade_kms_uiY2 +
            resolucao_kms_uiY2 +
            variabilidade_kmx_uiY2 +
            resolucao_kmx_uiY2 +
            temp_kms_uiY2 +
            variabilidade_temp_kms_uiY2 +
            temp_kmx_uiY2 +
            variabilidade_temp_kmx_uiY2 +
            naoLinearidade_eletrica_uiY2;
    
    var uCond_cert_kx_contrib = cert_kx_uiY2 / uCond_total * 100
    var uCond_variabilidade_kms_contrib = variabilidade_kms_uiY2 / uCond_total * 100
    var uCond_resolucao_kms_contrib = resolucao_kms_uiY2 / uCond_total * 100
    var uCond_variabilidade_kmx_contrib = variabilidade_kmx_uiY2 / uCond_total * 100
    var uCond_resolucao_kmx_contrib = resolucao_kmx_uiY2 / uCond_total * 100
    var uCond_temp_kms_contrib = temp_kms_uiY2 / uCond_total * 100
    var uCond_variabilidade_temp_kms_contrib = variabilidade_temp_kms_uiY2 / uCond_total * 100
    var uCond_temp_kmx_contrib = temp_kmx_uiY2 / uCond_total * 100
    var uCond_variabilidade_temp_kmx_contrib = variabilidade_temp_kmx_uiY2 / uCond_total * 100
    var uCond_naoLinearidade_eletrica_contrib = naoLinearidade_eletrica_uiY2 / uCond_total * 100

    // uc
    var uCond_uc = Math.sqrt(uCond_total);
    
    // veff
    var uCond_veff = 0;
    if(variabilidade_kms_uxi == 0 && variabilidade_kmx_uxi == 0){uCond_veff = 1000}
    else{
        uCond_veff = 
        Math.pow(uCond_uc,4)/
            (
                Math.pow(variabilidade_kms_ciUxi,4)/3 + 
                Math.pow(variabilidade_kmx_ciUxi,4)/3
            );
    }
    
    // k
    var uCond_k = 0;
    if ( (uCond_veff > 60) || (variabilidade_kms_ciUxi == 0 && variabilidade_kmx_ciUxi == 0))
    {uCond_k = 2;}
    else {uCond_k = invt(0.05, uCond_veff);}

    // U
    var uCond_u = uCond_k * uCond_uc;

    ////////////////////////////////////////////////////////////////
    // tabela de resultados

    // pegamos a resolução a partir da incerteza do certificado da solução de condutividade
    var fonteResolucao = parseFloat(document.getElementById('condutividade_g8').value.replace(',', '.'));
    var resResultados = parseInt(fonteResolucao.toString().length) - (1 + parseInt(fonteResolucao.toString().indexOf('.'))) ;
    // console.log('resResultados: ', resResultados);

    var uCond_tabela = [];

    var uCond_indice_tabela = [];
    uCond_indice_tabela.push('Componente');
    uCond_indice_tabela.push('uxi');
    uCond_indice_tabela.push('div');
    uCond_indice_tabela.push('coef');
    uCond_indice_tabela.push('uxi*coef/div');
    uCond_indice_tabela.push('(uxi*coef/div)²');
    uCond_indice_tabela.push('Contrib. %');
    uCond_tabela.push(uCond_indice_tabela);

    var cert_kx_tabela = [];
    cert_kx_tabela.push('Cert k(x)');
    cert_kx_tabela.push(cert_kx_uxi);
    cert_kx_tabela.push(cert_kx_div);
    cert_kx_tabela.push(cert_kx_coef);
    cert_kx_tabela.push(cert_kx_ciUxi);
    cert_kx_tabela.push(cert_kx_uiY2);
    cert_kx_tabela.push(uCond_cert_kx_contrib);
    uCond_tabela.push(cert_kx_tabela);

    var variabilidade_kms_tabela = [];
    variabilidade_kms_tabela.push('Variabilidade kMs');
    variabilidade_kms_tabela.push(variabilidade_kms_uxi);
    variabilidade_kms_tabela.push(variabilidade_kms_div);
    variabilidade_kms_tabela.push(variabilidade_kms_coef);
    variabilidade_kms_tabela.push(variabilidade_kms_ciUxi);
    variabilidade_kms_tabela.push(variabilidade_kms_uiY2);
    variabilidade_kms_tabela.push(uCond_variabilidade_kms_contrib);
    uCond_tabela.push(variabilidade_kms_tabela);

    var resolucao_kms_tabela = [];
    resolucao_kms_tabela.push('Resolução kMs');
    resolucao_kms_tabela.push(resolucao_kms_uxi);
    resolucao_kms_tabela.push(resolucao_kms_div);
    resolucao_kms_tabela.push(resolucao_kms_coef);
    resolucao_kms_tabela.push(resolucao_kms_ciUxi);
    resolucao_kms_tabela.push(resolucao_kms_uiY2);
    resolucao_kms_tabela.push(uCond_resolucao_kms_contrib);
    uCond_tabela.push(resolucao_kms_tabela);

    var variabilidade_kmx_tabela = [];
    variabilidade_kmx_tabela.push('Variabilidade kMx');
    variabilidade_kmx_tabela.push(variabilidade_kmx_uxi);
    variabilidade_kmx_tabela.push(variabilidade_kmx_div);
    variabilidade_kmx_tabela.push(variabilidade_kmx_coef);
    variabilidade_kmx_tabela.push(variabilidade_kmx_ciUxi);
    variabilidade_kmx_tabela.push(variabilidade_kmx_uiY2);
    variabilidade_kmx_tabela.push(uCond_variabilidade_kmx_contrib);
    uCond_tabela.push(variabilidade_kmx_tabela);

    var resolucao_kmx_tabela = [];
    resolucao_kmx_tabela.push('Resolução kMx');
    resolucao_kmx_tabela.push(resolucao_kmx_uxi);
    resolucao_kmx_tabela.push(resolucao_kmx_div);
    resolucao_kmx_tabela.push(resolucao_kmx_coef);
    resolucao_kmx_tabela.push(resolucao_kmx_ciUxi);
    resolucao_kmx_tabela.push(resolucao_kmx_uiY2);
    resolucao_kmx_tabela.push(uCond_resolucao_kmx_contrib);
    uCond_tabela.push(resolucao_kmx_tabela);

    var temp_kms_tabela = [];
    temp_kms_tabela.push('Temp kMs');
    temp_kms_tabela.push(temp_kms_uxi);
    temp_kms_tabela.push(temp_kms_div);
    temp_kms_tabela.push(temp_kms_coef);
    temp_kms_tabela.push(temp_kms_ciUxi);
    temp_kms_tabela.push(temp_kms_uiY2);
    temp_kms_tabela.push(uCond_temp_kms_contrib);
    uCond_tabela.push(temp_kms_tabela);

    var variabilidade_temp_kms_tabela = [];
    variabilidade_temp_kms_tabela.push('Variabilidade Temp kMs');
    variabilidade_temp_kms_tabela.push(variabilidade_temp_kms_uxi);
    variabilidade_temp_kms_tabela.push(variabilidade_temp_kms_div);
    variabilidade_temp_kms_tabela.push(variabilidade_temp_kms_coef);
    variabilidade_temp_kms_tabela.push(variabilidade_temp_kms_ciUxi);
    variabilidade_temp_kms_tabela.push(variabilidade_temp_kms_uiY2);
    variabilidade_temp_kms_tabela.push(uCond_variabilidade_temp_kms_contrib);
    uCond_tabela.push(variabilidade_temp_kms_tabela);

    var temp_kmx_tabela = [];
    temp_kmx_tabela.push('Temp kMx');
    temp_kmx_tabela.push(temp_kmx_uxi);
    temp_kmx_tabela.push(temp_kmx_div);
    temp_kmx_tabela.push(temp_kmx_coef);
    temp_kmx_tabela.push(temp_kmx_ciUxi);
    temp_kmx_tabela.push(temp_kmx_uiY2);
    temp_kmx_tabela.push(uCond_temp_kmx_contrib);
    uCond_tabela.push(temp_kmx_tabela);

    var variabilidade_temp_kmx_tabela = [];
    variabilidade_temp_kmx_tabela.push('Variabilidade Temp kMx');
    variabilidade_temp_kmx_tabela.push(variabilidade_temp_kmx_uxi);
    variabilidade_temp_kmx_tabela.push(variabilidade_temp_kmx_div);
    variabilidade_temp_kmx_tabela.push(variabilidade_temp_kmx_coef);
    variabilidade_temp_kmx_tabela.push(variabilidade_temp_kmx_ciUxi);
    variabilidade_temp_kmx_tabela.push(variabilidade_temp_kmx_uiY2);
    variabilidade_temp_kmx_tabela.push(uCond_variabilidade_temp_kmx_contrib);
    uCond_tabela.push(variabilidade_temp_kmx_tabela);

    var naoLinearidade_eletrica_tabela = [];
    naoLinearidade_eletrica_tabela.push('Não Linearidade Elétrica');
    naoLinearidade_eletrica_tabela.push(naoLinearidade_eletrica_uxi);
    naoLinearidade_eletrica_tabela.push(naoLinearidade_eletrica_div);
    naoLinearidade_eletrica_tabela.push(naoLinearidade_eletrica_coef);
    naoLinearidade_eletrica_tabela.push(naoLinearidade_eletrica_ciUxi);
    naoLinearidade_eletrica_tabela.push(naoLinearidade_eletrica_uiY2);
    naoLinearidade_eletrica_tabela.push(uCond_naoLinearidade_eletrica_contrib);
    uCond_tabela.push(naoLinearidade_eletrica_tabela);


    uCond_tabela.push(['', '', '', '', 'Total', uCond_total, '']);
    uCond_tabela.push(['', '', '', '', 'uc', uCond_uc, '']);
    uCond_tabela.push(['', '', '', '', 'veff', uCond_veff, '']);
    uCond_tabela.push(['', '', '', '', 'k', uCond_k, '']);
    uCond_tabela.push(['', '', '', '', 'U', uCond_u, '']);
    
    // console.table(uCond_tabela);
    document.getElementById('resp_U').innerHTML = 'k(X) = ' +  (kx.toFixed(resResultados).toString()).replace('.',',') + ' µS/cm'; 
    document.getElementById('resp_k').innerHTML = 'U k(x) ± ' +  (uCond_u.toFixed(resResultados).toString()).replace('.',',') + ' µS/cm'; 
    matriz2tabela(uCond_tabela, 'tabela_calcDetalhadoUCond', 'tabela_calcDetalhado', resResultados);

    }
