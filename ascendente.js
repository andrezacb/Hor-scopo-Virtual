        
        var signoUsuario = ''
        function ok() {
            var nome = document.getElementById('nome').value
            var res = document.getElementById('res')
            var datainput = document.getElementById("datanascimento")
            var data = datainput.value
            var datanasc = new Date(data)
            if(nome==0){
              window.alert('[ERRO]Insira os dados novamente!')
            }else{
              var sexo = document.getElementsByName('sexo1')
              var genero =''
              if(sexo[0].checked){
               genero = 'Homem'
              } else{
                genero = 'Mulher'
              }
            }
            signoUsuario = definirSigno(datanasc,nome,genero)
            var periodo = definirPeriodo(datanasc.getHours())
            signoEAsc(signoUsuario, periodo)
          }

           function definirSigno(novaData,nomeusuario,sexo2) {
            if(((novaData.getDate()) >=21&&(novaData.getMonth()+1) ==03)||((novaData.getDate())<=20 &&(novaData.getMonth()+1) ==04)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Aries `
            return 'Áries'
           } else if(((novaData.getDate()) >=21&&(novaData.getMonth()+1) ==04)||((novaData.getDate())<=20 &&(novaData.getMonth()+1) ==05)){
            res.innerHTML += `Ola detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de touro`
            return 'Touro'
           } else if(((novaData.getDate()) >=21 && (novaData.getMonth()+1) ==05)||((novaData.getDate())<=20 && (novaData.getMonth()+1)==06)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de gêmeos`
            return 'Gêmeos'
           }else if(((novaData.getDate()) >=21 && (novaData.getMonth()+1) ==06)||((novaData.getDate())<=22 && (novaData.getMonth()+1)==07)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Câncer`
            return 'Câncer'
           }else if(((novaData.getDate()) >=23 && (novaData.getMonth()+1) ==07)||((novaData.getDate())<=22 && (novaData.getMonth()+1)==08)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Leão`
            return 'Leão'
           }else if(((novaData.getDate()) >=23 && (novaData.getMonth()+1) ==08)||((novaData.getDate())<=22 && (novaData.getMonth()+1)==09)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Virgem`
            return 'Virgem'
           }else if(((novaData.getDate()) >=23 && (novaData.getMonth()+1) ==09)||((novaData.getDate())<=22 && (novaData.getMonth()+1)==10)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Libra`
            return 'Libra'
           }else if(((novaData.getDate()) >=23 && (novaData.getMonth()+1) ==10)||((novaData.getDate())<=21 && (novaData.getMonth()+1)==11)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Escorpião`
            return 'Escorpião'
           }else if(((novaData.getDate()) >=22 && (novaData.getMonth()+1) ==11)||((novaData.getDate())<=21 && (novaData.getMonth()+1)==12)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Sagitario`
            return 'Sagitário'
           }else if(((novaData.getDate()) >=22 && (novaData.getMonth()+1) ==12)||((novaData.getDate())<=20 && (novaData.getMonth()+1)==01)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Capricornio`
            return 'Capricórnio'
           }else if(((novaData.getDate()) >=21 && (novaData.getMonth()+1) ==01)||((novaData.getDate())<=18 && (novaData.getMonth()+1)==02)){
            res.innerHTML +=`Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de Aquario`
            return 'Aquário'
           }else if(((novaData.getDate()) >=19 && (novaData.getMonth()+1) ==02)||((novaData.getDate())<=20 && (novaData.getMonth()+1)==03)){
            res.innerHTML += `Detectamos ${sexo2} que se chama ${nomeusuario},<br> Você é de peixes`
            return 'Peixes'
           }
           }

           const signosAscendentes = {
            Áries: {
              'periodo_1': 'Touro',
              'periodo_2': 'Gêmeos',
              'periodo_3': 'Câncer',
              'periodo_4': 'Leão',
              'periodo_5': 'Virgem',
              'periodo_6': 'Libra',
              'periodo_7': 'Escorpião',
              'periodo_8': 'Sagitário',
              'periodo_9': 'Capricórnio',
              'periodo_10': 'Aquário',
              'periodo_11': 'Peixes',
              'periodo_12': 'Áries'
            },
          
            Touro: {
              'periodo_1': 'Gêmeos',
              'periodo_2': 'Câncer',
              'periodo_3': 'Leão',
              'periodo_4': 'Virgem',
              'periodo_5': 'Libra',
              'periodo_6': 'Escorpião',
              'periodo_7': 'Sagitário',
              'periodo_8': 'Capricórnio',
              'periodo_9': 'Aquário',
              'periodo_10': 'Peixes',
              'periodo_11': 'Áries',
              'periodo_12': 'Touro'
            },

            Gêmeos: {
              'periodo_1': 'Câncer',
              'periodo_2': 'Leão',
              'periodo_3': 'Virgem',
              'periodo_4': 'Libra',
              'periodo_5': 'Escorpião',
              'periodo_6': 'Sagitário',
              'periodo_7': 'Capricórnio',
              'periodo_8': 'Aquário',
              'periodo_9': 'Peixes',
              'periodo_10': 'Áries',
              'periodo_11': 'Touro',
              'periodo_12': 'Gêmeos'
          },
            Câncer: {
            'periodo_1': 'Leão',
            'periodo_2': 'Virgem',
            'periodo_3': 'Libra',
            'periodo_4': 'Escorpião',
            'periodo_5': 'Sagitário',
            'periodo_6': 'Capricórnio',
            'periodo_7': 'Aquário',
            'periodo_8': 'Peixes',
            'periodo_9': 'Áries',
            'periodo_10': 'Touro',
            'periodo_11': 'Gêmeos',
            'periodo_12': 'Câncer'
          },
          Leão: {
            'periodo_1': 'Virgem',
            'periodo_2': 'Libra',
            'periodo_3': 'Escorpião',
            'periodo_4': 'Sagitário',
            'periodo_5': 'Capricórnio',
            'periodo_6': 'Aquário',
            'periodo_7': 'Peixes',
            'periodo_8': 'Áries',
            'periodo_9': 'Touro',
            'periodo_10': 'Gêmeos',
            'periodo_11': 'Câncer',
            'periodo_12': 'Leão'
          },
          Virgem: {
            'periodo_1': 'Libra',
            'periodo_2': 'Escorpião',
            'periodo_3': 'Sagitário',
            'periodo_4': 'Capricórnio',
            'periodo_5': 'Aquário',
            'periodo_6': 'Peixes',
            'periodo_7': 'Áries',
            'periodo_8': 'Touro',
            'periodo_9': 'Gêmeos',
            'periodo_10': 'Câncer',
            'periodo_11': 'Leão',
            'periodo_12': 'Virgem'
          },
          Libra: {
            'periodo_1': 'Escorpião',
            'periodo_2': 'Sagitário',
            'periodo_3': 'Capricórnio',
            'periodo_4': 'Aquário',
            'periodo_5': 'Peixes',
            'periodo_6': 'Áries',
            'periodo_7': 'Touro',
            'periodo_8': 'Gêmeos',
            'periodo_9': 'Câncer',
            'periodo_10': 'Leão',
            'periodo_11': 'Virgem',
            'periodo_12': 'Libra'
          },
          Escorpião: {
            'periodo_1': 'Sagitário',
            'periodo_2': 'Capricórnio',
            'periodo_3': 'Aquário',
            'periodo_4': 'Peixes',
            'periodo_5': 'Áries',
            'periodo_6': 'Touro',
            'periodo_7': 'Gêmeos',
            'periodo_8': 'Câncer',
            'periodo_9': 'Leão',
            'periodo_10': 'Virgem',
            'periodo_11': 'Libra',
            'periodo_12': 'Escorpião'
          },
          Sagitário: {
            'periodo_1': 'Capricórnio',
            'periodo_2': 'Aquário',
            'periodo_3': 'Peixes',
            'periodo_4': 'Áries',
            'periodo_5': 'Touro',
            'periodo_6': 'Gêmeos',
            'periodo_7': 'Câncer',
            'periodo_8': 'Leão',
            'periodo_9': 'Virgem',
            'periodo_10': 'Libra',
            'periodo_11': 'Escorpião',
            'periodo_12': 'Sagitário'
          },
          Capricórnio: {
            'periodo_1': 'Aquário',
            'periodo_2': 'Peixes',
            'periodo_3': 'Áries',
            'periodo_4': 'Touro',
            'periodo_5': 'Gêmeos',
            'periodo_6': 'Câncer',
            'periodo_7': 'Leão',
            'periodo_8': 'Virgem',
            'periodo_9': 'Libra',
            'periodo_10': 'Escorpião',
            'periodo_11': 'Sagitário',
            'periodo_12': 'Capricórnio'
          },
          Aquário: {
            'periodo_1': 'Peixes',
            'periodo_2': 'Áries',
            'periodo_3': 'Touro',
            'periodo_4': 'Gêmeos',
            'periodo_5': 'Câncer',
            'periodo_6': 'Leão',
            'periodo_7': 'Virgem',
            'periodo_8': 'Libra',
            'periodo_9': 'Escorpião',
            'periodo_10': 'Sagitário',
            'periodo_11': 'Capricórnio',
            'periodo_12': 'Aquário'
          },
          Peixes: {
            'periodo_1': 'Áries',
            'periodo_2': 'Touro',
            'periodo_3': 'Gêmeos',
            'periodo_4': 'Câncer',
            'periodo_5': 'Leão',
            'periodo_6': 'Virgem',
            'periodo_7': 'Libra',
            'periodo_8': 'Escorpião',
            'periodo_9': 'Sagitário',
            'periodo_10': 'Capricórnio',
            'periodo_11': 'Aquário',
            'periodo_12': 'Peixes'
          }
        }

          function definirPeriodo(hora, minuto) {
            if(hora >= 06 && hora<08 ){
                return 'periodo_1'
            } else if (hora >= 08 && hora <10) {
                return 'periodo_2'
            } else if (hora >= 10 && hora <12 ){
            return 'periodo_3'
            }else if (hora>=12 && hora <14 ){
            return 'periodo_4'
            }else if (hora>=14 && hora <16 ){
            return 'periodo_5'
            }else if (hora>=16 && hora <18){
            return 'periodo_6'
            }else if (hora>=18 && hora <20){
            return 'periodo_7'
            }else if (hora >=20 && hora <22){
            return'periodo_8'
            }else if (hora >=22 && hora <00){
            return'periodo_9'
           }else if (hora>=00 && hora<02){
            return 'periodo_10'
           }else if(hora >=02 && hora<04){
            return 'periodo_11'
           } else if(hora >=04 && hora  <=05){
            return 'periodo_12'
           }
          }

          function signoEAsc(signo, periodo) {
            if(signo == 'Áries') {
                res.innerHTML +='<br> E seu ascendente é ' + `${signosAscendentes.Áries[periodo]}`
            } else if (signo == 'Touro') {
                res.innerHTML += ' <br> E seu ascendente é ' + `${signosAscendentes.Touro[periodo]}`
            } else if (signo == 'Gêmeos'){
              res.innerHTML += '<br> E seu ascendente é ' + `${signosAscendentes.Gemêos[periodo]}`
            }else if (signo == 'Câncer'){
              res.innerHTML += '<br> E seu ascendente é'+ `${signosAscendentes.Câncer[periodo]}`
            }else if (signo == 'Leão'){
              res.innerHTML +='<br> E seu ascendente è'+ `${signosAscendentes.Leão[periodo]}`
            }else if(signo == 'Virgem'){
              res.innerHTML +='<br> E seu ascendente é '+ `${signosAscendentes.Virgem[periodo]}`
            }else if (signo == 'Libra'){
              res.innerHTML +='<br> E seu ascendente é '+ `${signosAscendentes.Libra[periodo]}`
            }else if (signo =='Escorpião'){
              res.innerHTML +='<br> E seu ascendente é '+ `${signosAscendentes.Escorpião[periodo]}`
            }else if(signo== 'Sagitário'){
              res.innerHTML +='<br> E seu ascendente é '+ `${signosAscendentes.Sagitário[periodo]}`
            }else if (signo=='Capricórnio'){
              res.innerHTML +='<br> E seu ascendente é '+ `${signosAscendentes.Capricórnio[periodo]}`
            }else if (signo =='Aquário'){
              res.innerHTML +='<br> E seu ascendente é '+ `${signosAscendentes.Aquário[periodo]}`
            }else if(signo=='Peixes'){
              res.innerHTML +='<br> E seu ascendente é '+ `${signosAscendentes.Peixes[periodo]}`
            }
          }