const {readInput, inquirerMenu,pause} = require('./helpers/inquirer');
const Searchs = require('./models/searchs');

const main = async() =>{
    
    const search = new Searchs();
    let opt;
    
    do{
        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                const lugar = await readInput('Ciudad');
                console.log(lugar);

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad',);
                console.log('Lat',);
                console.log('Long:',);
                console.log('Temperatura:',);
                console.log('Mínima:',);
                console.log('Máxima:',);

                break;
        
            default:
                break;
        }

        if(opt!==0) 
            await pause()
    }
    while ( opt!==0 )
}

main();