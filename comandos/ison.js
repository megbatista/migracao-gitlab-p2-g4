function executarComandoIson(param, client,c){
    
	var listaNicksAtivos = '';

	for(var i = 1; i < param.length; i++){
		
		for(var j = 2; j < client.length; j++){

			if(client[j] == param[i]){

				listaNicksAtivos += param[i] + ' ';

			}
		}
	}

	c.irc_client.emit('ison', listaNicksAtivos);

}

module.exports = executarComandoIson;