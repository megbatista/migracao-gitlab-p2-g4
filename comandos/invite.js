function Invite(para, canal, from, clients) {
	// comando para enviar convites a determinado usuario para
	//	entrar em algum canal


	if(para && canal){
		var msg = ' ';	
		clients.forEach(function(client) {
			if(client.nick === para) {
				client.irc_client.emit('invite', canal, from.nick, msg);
			}
		});
	}
}

module.exports = Invite;
