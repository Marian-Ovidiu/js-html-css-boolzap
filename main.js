var app = new Vue({
  el : '#root',
  data: {
    contacts: [
	    {name: 'Michele', avatar: '_1', visible: true, messages: [
			    {date: '10/01/2020 15:30:55',	text: 'Hai portato a spasso il cane?', status: 'sent'},
			    {date: '10/01/2020 15:50:00',	text: 'Ricordati di dargli da mangiare', status: 'sent'},
			    {date: '10/01/2020 16:15:22',	text: 'Tutto fatto!',	status: 'received'}
		    ],
	     },
	    {name: 'Fabio', avatar: '_2', visible: true, messages: [
			    {date: '20/03/2020 16:30:00',	text: 'Ciao come stai?', status: 'sent'},
			    {date: '20/03/2020 16:30:55',	text: 'Bene grazie! Stasera ci vediamo?',	status: 'received'},
			    {date: '20/03/2020 16:35:00',	text: 'Mi piacerebbe ma devo andare a fare la spesa.', status: 'sent'}
		    ],
	    },
	    {name: 'Samuele',	avatar: '_3',	visible: true, messages: [
			    {date: '28/03/2020 10:10:40', text: 'La Marianna va in campagna',	status: 'received'},
			    {date: '28/03/2020 10:20:10',	text: 'Sicuro di non aver sbagliato chat?',	status: 'sent'},
			    {date: '28/03/2020 16:15:22',	text: 'Ah scusa!', status: 'received'}
		    ],
	    },
	    {name: 'Daniel',	avatar: '_4',	visible: true, messages: [
			    {date: '10/01/2020 15:30:55',	text: 'Lo sai che ha aperto una nuova pizzeria?',	status: 'sent'},
			    {date: '10/01/2020 15:50:00',	text: 'Si, ma preferirei andare al cinema',	status: 'received'}
		    ],
	    }],
  activeIndex: 0,
  newMessage : '',
  searchText: ''
},
methods: {
  changeIndex: function(newIndex){
      this.activeIndex = newIndex;
  },

  autoReply : function(){
    const reply = {date: '10/01/2020 15:50:00', text: 'Ok',	status: 'received'}
    this.contacts[this.activeIndex].messages.push(reply);
  },

  addMessage: function(){
    const obj = {date: '10/01/2020 15:50:00', text: this.newMessage,	status: 'sent'}
    this.contacts[this.activeIndex].messages.push(obj);
    this.newMessage = '';

    let that = this;
    setTimeout(function() {
      that.autoReply();
    }, 1000)
  },

  filter: function(){
    this.contacts.forEach((element) => {
      if(element.name.toLowerCase().includes(this.searchText.toLowerCase())){
        element.visible = true;
        console.log('sono in true');
      } else {
        element.visible = false;
        console.log('sono in false');
      }
    });
  }

}
})
