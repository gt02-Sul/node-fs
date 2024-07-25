// // Leitura de arquivo:

// const fs = require('fs');

// fs.readFile('arquivo.txt', 'utf8', (err, data) => {
//         if (err) {
//                 console.error(err);
//                 return;
//         }
//         console.log(data);
// });

// // Escrita de Arquivos:

// const fs = require('fs');

// const data = 'Hello, World!';

// fs.writeFile('arquivo.txt', data, (err) => {
//         if (err) {
//                 console.error(err);
//                 return;
//         }
//         console.log('Arquivo salvo com sucesso!');
// });

// // Parsing de JSON:

// const fs = require('fs');

// fs.readFile('dados.json', 'utf8', (err, data) => {
//         if (err) {
//                 console.error(err);
//                 return;
//         }
//         const jsonData = JSON.parse(data);
//         console.log(jsonData);
// });

// const novoObjeto = { name: "Jefferson", age: 25 };
// const jsonString = JSON.stringify(novoObjeto);

// fs.writeFile('novoDados.json', jsonString, (err) => {
//         if (err) {
//                 console.error(err);
//                 return;
//         }
//         console.log('JSON salvo com sucesso!');
// });



// const fs = require('fs');

// // Ler o arquivo 'dados.json'
// fs.readFile('dados.json', 'utf8', (err, data) => {
//         if (err) {
//                 console.error('Erro ao ler o arquivo:', err);
//                 return;
//         }

//         // Parse do JSON existente
//         let jsonData;
//         try {
//                 jsonData = JSON.parse(data);
//         } catch (parseErr) {
//                 console.error('Erro ao fazer parse do JSON:', parseErr);
//                 return;
//         }

//         // Adicionar o novo objeto ao array         
//         const novoObjeto = { name: "Jefferson", age: 25 };
//         jsonData.push(novoObjeto);

//         // Converter o array atualizado de volta para JSON
//         const jsonString = JSON.stringify(jsonData, null, 2); // Indentação de 2 espaços para melhor legibilidade

//         // Escrever o JSON atualizado de volta no arquivo 'dados.json'
//         fs.writeFile('dados.json', jsonString, (err) => {
//                 if (err) {
//                         console.error('Erro ao escrever o arquivo:', err);
//                         return;
//                 }
//                 console.log('JSON atualizado salvo com sucesso!');
//         });
// });
