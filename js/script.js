/*------------- create an array of the informations -----------*/

const pokemons =  [
    {
      thumbnail: './assets/001.png',
      id:'N°01' ,
      name: 'bulbasaur',
      type: ['plant', 'poison'],
      bgColor:['orange','purple']
      
    },
    {
      thumbnail: './assets/002.png',
      id:'N°02',
      name: 'charmander',
      type: ['fire'],
      bgColor:['yellow' , 'gray']
      
    },
    {
      thumbnail: './assets/003.png',
      id:'N°03',
      name: 'caterpie',
      type: ['bug'],
      bgColor:['gray']
      
    },
    {
      thumbnail: './assets/004.png',
      id:'N°04',
      name: 'kaluna',
      type: ['bug', 'poison'],
      bgColor:['green','gray']
      
    },
    {
      thumbnail: './assets/005.png',
      id:'N°05',
      name: 'ratata',
      type: ['plant'],
      bgColor:['green','orange']
    
    },
    {
      thumbnail: './assets/006.png',
      id:'N°06',
      name: 'pikachu',
      type: ['normal'],
      bgColor:['yellow', 'pink']
    },
    {
      thumbnail: './assets/007.png',
      id:'N°07',
      name: 'vulpix',
      type: ['fire', 'plant'],
      bgColor:['pink','purple']
    },
    {
      thumbnail: './assets/008.png',
      id:'N°08',
      name: 'jigglypuff',
      type: ['normal', 'fairy'],
      bgColor:['orange', 'gray']
      
    },
    {
      thumbnail: './assets/009.png',
      id:'N°09',
      name: 'ice',
      type: ['bug'],
      bgColor:['lightgray','pink']
    },
    {
      thumbnail: './assets/010.png',
      id:'N°10',
      name: 'ground',
      type: ['electrical'],
      bgColor:['yellow', 'purple']
    },
    {
      thumbnail: './assets/011.png',
      id:'N°11',
      name: 'ghost',
      type: ['poison'],
      bgColor:['gray', 'pink']
    },
    {
      thumbnail: './assets/012.png',
      id:'N°12',
      name: 'deer',
      type: ['fire'],
      bgColor:['green','yellow']
    },
    {
      thumbnail: './assets/013.png',
      id:'N°13',
      name: 'dark',
      type: ['fairy'],
      bgColor:['gray', 'pink']
    },
    {
      thumbnail: './assets/014.png',
      id:'N°14',
      name: 'stell',
      type: ['normal', 'electrical'],
      bgColor:['purple', 'orange']
    },
    {
      thumbnail: './assets/015.png',
      id:'N°15',
      name: 'cat',
      type: ['fire'],
      bgColor:['yellow', 'pink']
    },
    {
      thumbnail: './assets/016.png',
      id:'N°16',
      name: 'rock',
      type: ['fairy', 'poison'],
      bgColor:['green', 'gray']
    }
  ]
      /* --------variables Declaration----------------*/ 

  const colors = ['purple', 'lightgray' , 'orange' , 'lightgreen' , 'lightpink'];
  const myContainer = document.querySelector('#div-container')
   pokemons.forEach(item => {
      const img = document.createElement('img');
      const id = document.createElement('p')
      const nombre = document.createElement('h4');
      const card = document.createElement('div');
      const spanDiv = document.createElement('div');
      spanDiv.className = 'span-div';


       /*--------- Asigning values to variables ---------- */

       
      img.src = item.thumbnail;
      id.innerHTML = item.id;
      nombre.innerHTML = item.name;

            /* ------------- Asigning an array of elements--------------------*/

      for(let i = 0; i < item.type.length; i++) {
        const span = document.createElement('span');
         span.innerHTML = item.type[i]
         span.style.backgroundColor = item.bgColor[i];
         span.style.color='white'
         spanDiv.append(span);
        
         
      }
     
         /*-------------- to Append variables to an element inside the Doc --------------*/

      
      card.append(img , id, nombre,spanDiv);
      card.className='my-card';
      myContainer.appendChild(card)
  
  
  
  })
  