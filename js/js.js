

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



    // variabilidade E (maior)
    var leituras_eMaior = [
        parseFloat(document.getElementById('metodo2pontos_i14').value.replace(',', '.')),
        parseFloat(document.getElementById('metodo2pontos_i15').value.replace(',', '.')),
        parseFloat(document.getElementById('metodo2pontos_i16').value.replace(',', '.'))
    ];
    var variabilidade_eMaior_uxi = desvpada(leituras_eMaior);
    var variabilidade_eMaior_div = Math.sqrt(4);
    var variabilidade_eMaior_coef = Math.abs( 1/(phMaior-phMenor) );
    var variabilidade_eMaior_ciUxi = variabilidade_eMaior_uxi * variabilidade_eMaior_coef/variabilidade_eMaior_div;
    var variabilidade_eMaior_uiY2 = quadrado(variabilidade_eMaior_ciUxi);


    // resolução E (maior)
    var resolucao_eMaior_uxi = parseFloat(document.getElementById('configuracoes_e5').value.replace(',', '.')/2);
    var resolucao_eMaior_div = Math.sqrt(3);
    var resolucao_eMaior_coef = variabilidade_eMaior_coef;
    var resolucao_eMaior_ciUxi = resolucao_eMaior_uxi * resolucao_eMaior_coef/resolucao_eMaior_div;
    var resolucao_eMaior_uiY2 = quadrado(resolucao_eMaior_ciUxi);

    // variabilidade E (menor)
    var leituras_eMenor = [
        parseFloat(document.getElementById('metodo2pontos_i18').value.replace(',', '.')),
        parseFloat(document.getElementById('metodo2pontos_i19').value.replace(',', '.')),
        parseFloat(document.getElementById('metodo2pontos_i20').value.replace(',', '.'))
    ];
    var variabilidade_eMenor_uxi = desvpada(leituras_eMenor);
    var variabilidade_eMenor_div = Math.sqrt(4);
    var variabilidade_eMenor_coef = variabilidade_eMaior_coef;
    var variabilidade_eMenor_ciUxi = variabilidade_eMenor_uxi * variabilidade_eMenor_coef/variabilidade_eMenor_div;
    var variabilidade_eMenor_uiY2 = quadrado(variabilidade_eMenor_ciUxi);
    
    // resolução E (menor)
    var resolucao_eMenor_uxi = resolucao_eMaior_uxi;
    var resolucao_eMenor_div = Math.sqrt(3);
    var resolucao_eMenor_coef = variabilidade_eMaior_coef;
    var resolucao_eMenor_ciUxi = resolucao_eMenor_uxi * resolucao_eMenor_coef/resolucao_eMenor_div;
    var resolucao_eMenor_uiY2 = quadrado(resolucao_eMenor_ciUxi);

    // Cert pH (maior)
    var cert_phMaior_uxi = uPhMaior;
    var cert_phMaior_div = calculo_c11_kPhMaior;
    var cert_phMaior_coef = Math.abs((eMaior-eMenor)/quadrado((phMaior-phMenor)));
    var cert_phMaior_ciUxi = cert_phMaior_uxi * cert_phMaior_coef/cert_phMaior_div;
    var cert_phMaior_uiY2 = quadrado(cert_phMaior_ciUxi);

    // Cert pH (menor)
    var cert_phMenor_uxi = uPhMenor;
    var cert_phMenor_div = calculo_c15_kPhMenor;
    var cert_phMenor_coef = cert_phMaior_coef;
    var cert_phMenor_ciUxi = cert_phMenor_uxi * cert_phMenor_coef/cert_phMenor_div;
    var cert_phMenor_uiY2 = quadrado(cert_phMenor_ciUxi);

    // variabilidade Temp
    var variabilidade_temp_uxi = parseFloat(document.getElementById('configuracoes_e7').value.replace(',', '.'));
    var variabilidade_temp_div = Math.sqrt(3);
    var variabilidade_temp_coef = calculo_c5_R * Math.log(10) * 1000/calculo_c6_F;
    var variabilidade_temp_ciUxi = variabilidade_temp_uxi * variabilidade_temp_coef/variabilidade_temp_div;
    var variabilidade_temp_uiY2 = quadrado(variabilidade_temp_ciUxi);
    

    // Cert. Temp
    var cert_temp_uxi = parseFloat(document.getElementById('configuracoes_e6').value.replace(',', '.'));
    var cert_temp_div = 2;
    var cert_temp_coef = variabilidade_temp_coef;
    var cert_temp_ciUxi = cert_temp_uxi * cert_temp_coef/cert_temp_div;
    var cert_temp_uiY2 = quadrado(cert_temp_ciUxi);


    // Junção de referência
    var juncaoDeReferencia_uxi = parseFloat(document.getElementById('configuracoes_e9').value.replace(',', '.'));
    var juncaoDeReferencia_div = Math.sqrt(3);
    var juncaoDeReferencia_coef = variabilidade_eMaior_coef;
    var juncaoDeReferencia_ciUxi = juncaoDeReferencia_uxi * juncaoDeReferencia_coef/juncaoDeReferencia_div;
    var juncaoDeReferencia_uiY2 = quadrado(juncaoDeReferencia_ciUxi);


    // incerteza calculada
    var ukLinha_total = 
            variabilidade_eMaior_uiY2 +
            resolucao_eMaior_uiY2 +
            variabilidade_eMenor_uiY2 +
            resolucao_eMenor_uiY2 +
            cert_phMaior_uiY2 +
            cert_phMenor_uiY2 +
            variabilidade_temp_uiY2 +
            cert_temp_uiY2 +
            juncaoDeReferencia_uiY2;
    
    var ukLinha_variabilidade_eMaior_contrib = variabilidade_eMaior_uiY2 / ukLinha_total * 100
    var ukLinha_resolucao_eMaior_contrib = resolucao_eMaior_uiY2 / ukLinha_total * 100
    var ukLinha_variabilidade_eMenor_contrib = variabilidade_eMenor_uiY2 / ukLinha_total * 100
    var ukLinha_resolucao_eMenor_contrib = resolucao_eMenor_uiY2 / ukLinha_total * 100
    var ukLinha_cert_phMaior_contrib = cert_phMaior_uiY2 / ukLinha_total * 100
    var ukLinha_cert_phMenor_contrib = cert_phMenor_uiY2 / ukLinha_total * 100
    var ukLinha_variabilidade_temp_contrib = variabilidade_temp_uiY2 / ukLinha_total * 100
    var ukLinha_cert_temp_contrib = cert_temp_uiY2 / ukLinha_total * 100
    var ukLinha_juncaoDeReferencia_contrib = juncaoDeReferencia_uiY2 / ukLinha_total * 100

    var ukLinha_uc = Math.sqrt(ukLinha_total);
    
    var ukLinha_veff = Math.pow(ukLinha_uc,4)/
        (
            Math.pow(variabilidade_eMaior_ciUxi,4)/3 + 
            Math.pow(variabilidade_eMenor_ciUxi,4)/3 + 
            Math.pow(variabilidade_temp_ciUxi,4)/3
        );
    
    var ukLinha_k = 0;
    if ( (ukLinha_veff > 60) || (variabilidade_eMaior_ciUxi == 0 && variabilidade_eMenor_ciUxi == 0))
    {ukLinha_k = 2;}
    else {ukLinha_k = invt(0.05, ukLinha_veff);}

    var ukLinha_u = ukLinha_k * ukLinha_uc;

    ////////////////////////////////////////////////////////////////
    // tabela de resultados

    // pegamos a resolução a partir da incerteza do pH
    
    // maior
    var resPhMaior = parseInt(uPhMaior.toString().length) - (1 + parseInt(uPhMaior.toString().indexOf('.'))) ;
    // console.log('resPhMaior: ', resPhMaior);
    
    // menor
    var resPhMenor = parseInt(uPhMenor.toString().length) - (1 + parseInt(uPhMenor.toString().indexOf('.')));
    // console.log('resPhMenor: ', resPhMenor);

    var resResultados = Math.max(resPhMaior, resPhMenor);
    // console.log('resResultados: ', resResultados);

    var ukLinha_tabela = [];

    var ukLinha_indice_tabela = [];
    ukLinha_indice_tabela.push('Componente');
    ukLinha_indice_tabela.push('uxi');
    ukLinha_indice_tabela.push('div');
    ukLinha_indice_tabela.push('coef');
    ukLinha_indice_tabela.push('uxi*coef/div');
    ukLinha_indice_tabela.push('(uxi*coef/div)²');
    ukLinha_indice_tabela.push('Contrib. %');
    ukLinha_tabela.push(ukLinha_indice_tabela);

    var variabilidade_eMaior_tabela = [];
    variabilidade_eMaior_tabela.push('Variabilidade eMaior');
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_uxi);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_div);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_coef);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_ciUxi);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_uiY2);
    variabilidade_eMaior_tabela.push(ukLinha_variabilidade_eMaior_contrib);
    ukLinha_tabela.push(variabilidade_eMaior_tabela);

    var resolucao_eMaior_tabela = [];
    resolucao_eMaior_tabela.push('Resolucao eMaior');
    resolucao_eMaior_tabela.push(resolucao_eMaior_uxi);
    resolucao_eMaior_tabela.push(resolucao_eMaior_div);
    resolucao_eMaior_tabela.push(resolucao_eMaior_coef);
    resolucao_eMaior_tabela.push(resolucao_eMaior_ciUxi);
    resolucao_eMaior_tabela.push(resolucao_eMaior_uiY2);
    resolucao_eMaior_tabela.push(ukLinha_resolucao_eMaior_contrib);
    ukLinha_tabela.push(resolucao_eMaior_tabela);

    var variabilidade_eMenor_tabela = [];
    variabilidade_eMenor_tabela.push('Variabilidade eMenor');
    variabilidade_eMenor_tabela.push(variabilidade_eMenor_uxi);
    variabilidade_eMenor_tabela.push(variabilidade_eMenor_div);
    variabilidade_eMenor_tabela.push(variabilidade_eMenor_coef);
    variabilidade_eMenor_tabela.push(variabilidade_eMenor_ciUxi);
    variabilidade_eMenor_tabela.push(variabilidade_eMenor_uiY2);
    variabilidade_eMenor_tabela.push(ukLinha_variabilidade_eMenor_contrib);
    ukLinha_tabela.push(resolucao_eMaior_tabela);

    var resolucao_eMenor_tabela = [];
    resolucao_eMenor_tabela.push('Resolucao eMenor');
    resolucao_eMenor_tabela.push(resolucao_eMenor_uxi);
    resolucao_eMenor_tabela.push(resolucao_eMenor_div);
    resolucao_eMenor_tabela.push(resolucao_eMenor_coef);
    resolucao_eMenor_tabela.push(resolucao_eMenor_ciUxi);
    resolucao_eMenor_tabela.push(resolucao_eMenor_uiY2);
    resolucao_eMenor_tabela.push(ukLinha_resolucao_eMenor_contrib);
    ukLinha_tabela.push(resolucao_eMenor_tabela);

    var cert_phMaior_tabela = [];
    cert_phMaior_tabela.push('Certificado pH Maior');
    cert_phMaior_tabela.push(cert_phMaior_uxi);
    cert_phMaior_tabela.push(cert_phMaior_div);
    cert_phMaior_tabela.push(cert_phMaior_coef);
    cert_phMaior_tabela.push(cert_phMaior_ciUxi);
    cert_phMaior_tabela.push(cert_phMaior_uiY2);
    cert_phMaior_tabela.push(ukLinha_cert_phMaior_contrib);
    ukLinha_tabela.push(cert_phMaior_tabela);

    var cert_phMenor_tabela = [];
    cert_phMenor_tabela.push('Certificado pH Menor');
    cert_phMenor_tabela.push(cert_phMenor_uxi);
    cert_phMenor_tabela.push(cert_phMenor_div);
    cert_phMenor_tabela.push(cert_phMenor_coef);
    cert_phMenor_tabela.push(cert_phMenor_ciUxi);
    cert_phMenor_tabela.push(cert_phMenor_uiY2);
    cert_phMenor_tabela.push(ukLinha_cert_phMenor_contrib);
    ukLinha_tabela.push(cert_phMenor_tabela);

    var variabilidade_temp_tabela = [];
    variabilidade_temp_tabela.push('Variabilidade temp.');
    variabilidade_temp_tabela.push(variabilidade_temp_uxi);
    variabilidade_temp_tabela.push(variabilidade_temp_div);
    variabilidade_temp_tabela.push(variabilidade_temp_coef);
    variabilidade_temp_tabela.push(variabilidade_temp_ciUxi);
    variabilidade_temp_tabela.push(variabilidade_temp_uiY2);
    variabilidade_temp_tabela.push(ukLinha_variabilidade_temp_contrib);
    ukLinha_tabela.push(variabilidade_temp_tabela);


    var cert_temp_tabela = [];
    cert_temp_tabela.push('Certificado temp.');
    cert_temp_tabela.push(cert_temp_uxi);
    cert_temp_tabela.push(cert_temp_div);
    cert_temp_tabela.push(cert_temp_coef);
    cert_temp_tabela.push(cert_temp_ciUxi);
    cert_temp_tabela.push(cert_temp_uiY2);
    cert_temp_tabela.push(ukLinha_cert_temp_contrib);
    ukLinha_tabela.push(cert_temp_tabela);


    var juncaoDeReferencia_tabela = [];
    juncaoDeReferencia_tabela.push('Junção de ref.');
    juncaoDeReferencia_tabela.push(juncaoDeReferencia_uxi);
    juncaoDeReferencia_tabela.push(juncaoDeReferencia_div);
    juncaoDeReferencia_tabela.push(juncaoDeReferencia_coef);
    juncaoDeReferencia_tabela.push(juncaoDeReferencia_ciUxi);
    juncaoDeReferencia_tabela.push(juncaoDeReferencia_uiY2);
    juncaoDeReferencia_tabela.push(ukLinha_juncaoDeReferencia_contrib);
    ukLinha_tabela.push(juncaoDeReferencia_tabela);

    ukLinha_tabela.push(['', '', '', '', 'Total', ukLinha_total, '']);
    ukLinha_tabela.push(['', '', '', '', 'uc', ukLinha_uc, '']);
    ukLinha_tabela.push(['', '', '', '', 'veff', ukLinha_veff, '']);
    ukLinha_tabela.push(['', '', '', '', 'k', ukLinha_k, '']);
    ukLinha_tabela.push(['', '', '', '', 'U', ukLinha_u, '']);
    
    // console.table(ukLinha_tabela);


    ////////////////////////////////////////////////////////////////
    // Incerteza pH(X)

    // Cert pH (maior)
    var cert_phMaior_uxi = uPhMaior;
    var cert_phMaior_div = calculo_c11_kPhMaior;
    var cert_phMaior_coef = 1;
    var cert_phMaior_ciUxi = cert_phMaior_uxi * cert_phMaior_coef/cert_phMaior_div;
    var cert_phMaior_uiY2 = quadrado(cert_phMaior_ciUxi);
    
    // variabilidade E (maior)
    var variabilidade_eMaior_uxi = variabilidade_eMaior_uxi;
    var variabilidade_eMaior_div = Math.sqrt(4);
    var variabilidade_eMaior_coef = Math.abs(1/kLinha);
    var variabilidade_eMaior_ciUxi = variabilidade_eMaior_uxi * variabilidade_eMaior_coef/variabilidade_eMaior_div;
    var variabilidade_eMaior_uiY2 = quadrado(variabilidade_eMaior_ciUxi);
    
    // resolução E (maior)
    var resolucao_eMaior_uxi = resolucao_eMaior_uxi;
    var resolucao_eMaior_div = Math.sqrt(3);
    var resolucao_eMaior_coef = variabilidade_eMaior_coef;
    var resolucao_eMaior_ciUxi = resolucao_eMaior_uxi * resolucao_eMaior_coef/resolucao_eMaior_div;
    var resolucao_eMaior_uiY2 = quadrado(resolucao_eMaior_ciUxi);

    // variabilidade E(x)
    var leituras_eX = [
        parseFloat(document.getElementById('metodo2pontos_i22').value.replace(',', '.')),
        parseFloat(document.getElementById('metodo2pontos_i23').value.replace(',', '.')),
        parseFloat(document.getElementById('metodo2pontos_i24').value.replace(',', '.'))
    ];
    var variabilidade_eX_uxi = desvpada(leituras_eX);
    var variabilidade_eX_div = Math.sqrt(4);
    var variabilidade_eX_coef = variabilidade_eMaior_coef;
    var variabilidade_eX_ciUxi = variabilidade_eX_uxi * variabilidade_eX_coef/variabilidade_eX_div;
    var variabilidade_eX_uiY2 = quadrado(variabilidade_eX_ciUxi);

    // resolução E(x)
    var resolucao_eX_uxi = resolucao_eMaior_uxi;
    var resolucao_eX_div = Math.sqrt(3);
    var resolucao_eX_coef = variabilidade_eMaior_coef;
    var resolucao_eX_ciUxi = resolucao_eX_uxi * resolucao_eX_coef/resolucao_eX_div;
    var resolucao_eX_uiY2 = quadrado(resolucao_eX_ciUxi);

    // incerteza k'
    var incerteza_kLinha_uxi = ukLinha_u;
    var incerteza_kLinha_div = ukLinha_k;
    var incerteza_kLinha_coef = Math.abs((eX-eMaior)/( quadrado(kLinha) ));
    var incerteza_kLinha_ciUxi = incerteza_kLinha_uxi * incerteza_kLinha_coef/incerteza_kLinha_div;
    var incerteza_kLinha_uiY2 = quadrado(incerteza_kLinha_ciUxi);
    
    // Não-linearidade (parte elétrica)
    var naoLinearidadeParteEletrica_uxi = parseFloat(document.getElementById('configuracoes_e8').value.replace(',', '.')) * eX / 100;
    var naoLinearidadeParteEletrica_div = Math.sqrt(3);
    var naoLinearidadeParteEletrica_coef = variabilidade_eMaior_coef;
    var naoLinearidadeParteEletrica_ciUxi = naoLinearidadeParteEletrica_uxi * naoLinearidadeParteEletrica_coef/naoLinearidadeParteEletrica_div
    var naoLinearidadeParteEletrica_uiY2 = quadrado(naoLinearidadeParteEletrica_ciUxi);

    // incerteza calculada
    var uphx_total =
        cert_phMaior_uiY2 +
        variabilidade_eMaior_uiY2 +
        resolucao_eMaior_uiY2 +
        variabilidade_eX_uiY2 +
        resolucao_eX_uiY2 +
        incerteza_kLinha_uiY2 +
        naoLinearidadeParteEletrica_uiY2;

    var uphx_cert_phMaior_contrib = cert_phMaior_uiY2 / uphx_total * 100
    var uphx_variabilidade_eMaior_contrib = variabilidade_eMaior_uiY2 / uphx_total * 100
    var uphx_resolucao_eMaior_contrib = resolucao_eMaior_uiY2 / uphx_total * 100
    var uphx_variabilidade_eX_contrib = variabilidade_eX_uiY2 / uphx_total * 100
    var uphx_resolucao_eX_contrib = resolucao_eX_uiY2 / uphx_total * 100
    var uphx_incerteza_kLinha_contrib = incerteza_kLinha_uiY2 / uphx_total * 100
    var uphx_naoLinearidadeParteEletrica_contrib = naoLinearidadeParteEletrica_uiY2 / uphx_total * 100

    var uphx_uc = Math.sqrt(uphx_total);
    // console.log(uphx_uc);
    
    var uphx_veff = 0;
    if (variabilidade_eMaior_uxi == 0 && variabilidade_eX_uxi == 0)
    {uphx_veff = 1000;}
    else{
        uphx_veff =  Math.pow(uphx_uc,4)/
        (
            (Math.pow(variabilidade_eMaior_ciUxi,4)/3) +
            (Math.pow(variabilidade_eX_ciUxi,4)/3)
        );
    }


    var uphx_k = 0;
    if ( (uphx_veff > 60) || (variabilidade_eMaior_ciUxi == 0 && variabilidade_eX_ciUxi == 0))
    {uphx_k = 2;}
    else {uphx_k = invt(0.05, uphx_veff);}
    
    var uphx_u = uphx_k * uphx_uc;



    // tabela de resultados
    var uphx_tabela = [];

    var uphx_indice_tabela = [];
    uphx_indice_tabela.push('Componente');
    uphx_indice_tabela.push('uxi');
    uphx_indice_tabela.push('div');
    uphx_indice_tabela.push('coef');
    uphx_indice_tabela.push('uxi*coef/div');
    uphx_indice_tabela.push('(uxi*coef/div)²');
    uphx_indice_tabela.push('Contrib. %');
    uphx_tabela.push(uphx_indice_tabela);

    var cert_phMaior_tabela = [];
    cert_phMaior_tabela.push('Certificado pH Maior');
    cert_phMaior_tabela.push(cert_phMaior_uxi);
    cert_phMaior_tabela.push(cert_phMaior_div);
    cert_phMaior_tabela.push(cert_phMaior_coef);
    cert_phMaior_tabela.push(cert_phMaior_ciUxi);
    cert_phMaior_tabela.push(cert_phMaior_uiY2);
    cert_phMaior_tabela.push(uphx_cert_phMaior_contrib);
    uphx_tabela.push(cert_phMaior_tabela);

    var variabilidade_eMaior_tabela = [];
    variabilidade_eMaior_tabela.push('Variabilidade eMaior');
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_uxi);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_div);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_coef);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_ciUxi);
    variabilidade_eMaior_tabela.push(variabilidade_eMaior_uiY2);
    variabilidade_eMaior_tabela.push(uphx_variabilidade_eMaior_contrib);
    uphx_tabela.push(variabilidade_eMaior_tabela);

    var resolucao_eMaior_tabela = [];
    resolucao_eMaior_tabela.push('Resolução eMaior');
    resolucao_eMaior_tabela.push(resolucao_eMaior_uxi);
    resolucao_eMaior_tabela.push(resolucao_eMaior_div);
    resolucao_eMaior_tabela.push(resolucao_eMaior_coef);
    resolucao_eMaior_tabela.push(resolucao_eMaior_ciUxi);
    resolucao_eMaior_tabela.push(resolucao_eMaior_uiY2);
    resolucao_eMaior_tabela.push(uphx_resolucao_eMaior_contrib);
    uphx_tabela.push(resolucao_eMaior_tabela);

    var variabilidade_eX_tabela = [];
    variabilidade_eX_tabela.push('Variabilidade Ex');
    variabilidade_eX_tabela.push(variabilidade_eX_uxi);
    variabilidade_eX_tabela.push(variabilidade_eX_div);
    variabilidade_eX_tabela.push(variabilidade_eX_coef);
    variabilidade_eX_tabela.push(variabilidade_eX_ciUxi);
    variabilidade_eX_tabela.push(variabilidade_eX_uiY2);
    variabilidade_eX_tabela.push(uphx_variabilidade_eX_contrib);
    uphx_tabela.push(variabilidade_eX_tabela);

    var resolucao_eX_tabela = [];
    resolucao_eX_tabela.push('Resolução eX');
    resolucao_eX_tabela.push(resolucao_eX_uxi);
    resolucao_eX_tabela.push(resolucao_eX_div);
    resolucao_eX_tabela.push(resolucao_eX_coef);
    resolucao_eX_tabela.push(resolucao_eX_ciUxi);
    resolucao_eX_tabela.push(resolucao_eX_uiY2);
    resolucao_eX_tabela.push(uphx_resolucao_eX_contrib);
    uphx_tabela.push(resolucao_eX_tabela);

    var incerteza_kLinha_tabela = [];
    incerteza_kLinha_tabela.push("Incerteza k'");
    incerteza_kLinha_tabela.push(incerteza_kLinha_uxi);
    incerteza_kLinha_tabela.push(incerteza_kLinha_div);
    incerteza_kLinha_tabela.push(incerteza_kLinha_coef);
    incerteza_kLinha_tabela.push(incerteza_kLinha_ciUxi);
    incerteza_kLinha_tabela.push(incerteza_kLinha_uiY2);
    incerteza_kLinha_tabela.push(uphx_incerteza_kLinha_contrib);
    uphx_tabela.push(incerteza_kLinha_tabela);

    var naoLinearidadeParteEletrica_tabela = [];
    naoLinearidadeParteEletrica_tabela.push('Não Linearidade elétrica');
    naoLinearidadeParteEletrica_tabela.push(naoLinearidadeParteEletrica_uxi);
    naoLinearidadeParteEletrica_tabela.push(naoLinearidadeParteEletrica_div);
    naoLinearidadeParteEletrica_tabela.push(naoLinearidadeParteEletrica_coef);
    naoLinearidadeParteEletrica_tabela.push(naoLinearidadeParteEletrica_ciUxi);
    naoLinearidadeParteEletrica_tabela.push(naoLinearidadeParteEletrica_uiY2);
    naoLinearidadeParteEletrica_tabela.push(uphx_naoLinearidadeParteEletrica_contrib);
    uphx_tabela.push(naoLinearidadeParteEletrica_tabela);

    uphx_tabela.push(['', '', '', '', 'Total', uphx_total, '']);
    uphx_tabela.push(['', '', '', '', 'uc', uphx_uc, '']);
    uphx_tabela.push(['', '', '', '', 'veff', uphx_veff, '']);
    uphx_tabela.push(['', '', '', '', 'k', uphx_k, '']);
    uphx_tabela.push(['', '', '', '', 'U', uphx_u, '']);
    


    // console.table(uphx_tabela);
    // console.log(uphx_tabela)
    document.getElementById('resp_phX').innerHTML = 'pH X = ' +  (pHx.toFixed(resResultados).toString()).replace('.',',') + ' pH'; 
    document.getElementById('resp_uphX').innerHTML = 'U pH X ± ' + (uphx_u.toFixed(resResultados).toString()).replace('.',',') + ' pH';
    matriz2tabela(ukLinha_tabela, 'tabela_calcDetalhadoUkLin', 'tabela_calcDetalhado', resResultados);
    matriz2tabela(uphx_tabela, 'tabela_calcDetalhadoUpHX', 'tabela_calcDetalhado', resResultados);

    }