console.log('che il gioco abbia inizio');


const contacts = [
    {
        name: 'Babbo',
        avatar: '_8',
        status: '',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Oggi a che ora andiamo? 🙂',
                status: 'received',
                toolShow: false,
            },
            {
                date: '10/01/2020 21:21:00',
                message: 'Facciamo per le 21:45?',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '10/01/2020 21:21:22',
                message: 'Perfetto!',
                status: 'received',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Rosa',
        avatar: '_2',
        status: '',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento 🙂',
                status: 'received',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Eminem',
        avatar: '_3',
        status: '',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, ti è piaciuto il mio ultimo pezzo?',
                status: 'received',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Siii, è una bomba! 💣',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '10/01/2020 07:07:00',
                message: 'Grande!',
                status: 'received',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Fre',
        avatar: '_7',
        status: '',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                toolShow: false,
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma ho già un impegno, domani? 😘',
                status: 'sent',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Fede',
        avatar: '_1',
        status: '',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                toolShow: false,
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat? 😂',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa! 😅',
                status: 'received',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Enry',
        avatar: '_3',
        status: '',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria? 😍',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        status: '',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Sara',
        avatar: '_5',
        status: '',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!🤣',
                status: 'received',
                toolShow: false,
            }
        ],
    },
    {
        name: 'Alterego',
        avatar: '_9',
        status: '',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'come potrei rifiutare?😍',
                status: 'sent',
                toolShow: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'andata 😍',
                status: 'received',
                toolShow: false,
            }
        ],
    }
];

const emoji = [
    "😊",
    "😄",
    "😁",
    "🤣",
    "😇",
    "🙃",
    "😉",
    "🤓",
    "😎",
    "😘",
    "😍",
    "😛",
    "😡",
    "🥵",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤔",
    "👍",
    "💪",
    "👋",
    "🖖",
    "👌",
    "🙏",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌑",
    "🎬",
    "🎧",
    "👾",
    "🔮",
    "📿",
    "🎮",
    "💣",
    "⚡️",
    "🔥",
    "🌈",
    "🎉",
    "💩",
    "🙈",
    "🙉",
    "🙊",
    "🐶",
    "🐱",
    "🐹",
    "🦓",
    "🐄",
    "🦜",
    "🦊",
    "🐻",
    "🦥",
    "🦦",
    "🦁",
    "🍷",
    "🍺",
    "🥂",
    "🍩",
    "🍔",
    "🍕",
    "🍫",
    "🍒",
    "🍋",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "🖤",
    "🤍"
];

  const answers = [
    'certo',
    'dici?',
    'hai parlato con il commercialista?',
    'cosa vorresti fare per il tuo compleanno?',
    'andiamo al cinema domani?',
    'sei ufficialmente una web developer? 😎',
    'si, andata!',
    'non ci credo!',
    'auguri!!!🥂🎉',
    'non so bene in realtà..🤔',
    'andiamo a correre?',
    'ma cosa dici?',
    'Namastè 📿',
    'Non sono brava a rispondere come Alexa💩 aggiorna i miei complessi algoritmi 💣',
    'Guess who\'s back, back again🎧',
    'e se andassimo in montagna?',
    'dove ci vediamo?',
    'e se non fosse la cosa giusta?',
    'e se poi te ne penti?',
    'sei sicura di stare bene?',
    'parli a vanvera'
  ]


const app = new Vue({
    el: '#root',
    data: {
        contacts,
        selectedContact: contacts[0],
        userAvatar: 1,
        writingContact: 0,
        chatMessage: '',
        emoji,
        emojiSwitch: false,
        answers,
        searchContact: ''
    },
    methods: {
        //funzione che imposta l'avatar
        getAvatar(valore) {
            return 'img/avatar' + valore + '.png'
        },

        getLastMessageElement(contact) {
            const messages = contact.messages;
            const lastMessage = (messages.length > 0) ? messages[messages.length - 1] : '';
            return lastMessage;
        },

        getLastMessage(contact) {
            const message = this.getLastMessageElement(contact);

            const lastMessage = (message) ? message.message : '';
            return lastMessage;
        },

        lastSeen: function () {
            let tempMessages = this.selectedContact.messages;

            for (let i = tempMessages.length - 1; i >= 0; i--) {
                if (tempMessages[i].status == "received") {
                    return tempMessages[i].date;
                }
            }
            return "null";
        },

        getLastMessageDate(contact) {
            const lastMessage = this.getLastMessageElement(contact);
            // salvo in una costante le "date"
            const date = lastMessage.date;
            // uso questa costante per splittare dove trova gli spazi e prende l'orario(secondo elemento dell'array, quindi il numero 1)
            const fullHour = date.split(' ')[1];
            // uso questa costante per splittare dove trova i due punti
            const temporary = fullHour.split(':');
            // ritorno il primo e il secondo elemento con i due punti in mezzo
            return temporary[0] + ':' + temporary[1];
        },

        // funzione per editare il formato
        getTime: function (message) {
            const tempArray = message.date.split(" ")[1].split(":");
            return tempArray[0] + ":" + tempArray[1];
        },

        selectContact(contact) {
            this.selectedContact = contact;
        },

        setActive(index){
            this.img_profilo = index;
            // const select = document.getElementsByClassName("contact-item");
            // select.classList.add("activeContact");
        },

        //Insert and toggle emoji
        insertEmoji(element) {
            this.chatMessage = this.chatMessage + element;
            document.getElementById("focus").focus();
        },

        emojiToggle() {
            this.emojiSwitch = !this.emojiSwitch;
        },

        //New message
        sendMessage(){
            const chatMessage = this.chatMessage.trim();
            if(chatMessage.length > 0){
                this.selectedContact.messages.push({
                    date: new Date().toLocaleString(),
                    message: chatMessage,
                    status: 'sent',
                    toolShow: false,
                })
                this.chatMessage = '';
                
            };
            setTimeout(() => {              
                this.selectedContact.messages.push({
                    date: new Date().toLocaleString(),
                    message: this.generateAnswer(),
                    status: 'received', 
                    toolShow: false,


                });

                clearTimeout(this);
            }, 1000)
        },

        //f.ne che genera una answer random
        generateAnswer() {
            let randomIndexAnswer = [Math.floor(Math.random() * answers.length)];
            let answer = this.answers[randomIndexAnswer];
            console.log(randomIndexAnswer, 'RANDOM ANSWER');
            return answer
        },

        // f.ne che ritorna una stringa di 40 caratteri
        maxTextLenght(message) {
            if (message.length > 40) {
              return message.slice(0, 40) + " ...";
            }
            return message;
        },

        // function that allow to search a contact
        // if contact.name includes the user's search => visible = true
        userSearch() {
            let search = document.querySelector(".search").value.toLowerCase();
            let contacts = this.contacts;
            contacts.forEach((contact) => {
                if (contact.name.toLowerCase().includes(search)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
                
        //  funzione per cambiare il valore della booleana in modo da visualizzare il modal
       showModal(contatto) {
        if (!contatto.toolShow){
            this.selectedContact.messages.forEach(message => message.toolShow = false)
         };
         contatto.toolShow = !contatto.toolShow;

        },

        deleteThisMessage: function (item) {
            this.selectedContact.messages.splice(item, 1);

            let lastOne= this.selectedContact.messages.length -1;
            if(lastOne){
                this.selectedContact.messages.slice(lastOne);
            }
        },
    },
        // computed property per filtrare il mio array in base al chatMessage
        computed: {

            filteredContacts() {
       
                return this.contacts.filter((contact) => {
                   return contact.name.toLowerCase().match(this.searchContact.toLowerCase())})
                
            }
        }
})