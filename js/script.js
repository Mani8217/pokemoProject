const pokemons =  [
    {
      thumbnail: './assets/001.png',
      id:'N°01' ,
      name: 'bulbasaur',
      type: ['plant', 'poison'],
    },
    {
      thumbnail: './assets/002.png',
      id:'N°02',
      name: 'charmander',
      type: ['fire'],
    },
    {
      thumbnail: './assets/003.png',
      id:'N°03',
      name: 'caterpie',
      type: ['bug'],
    },
    {
      thumbnail: './assets/004.png',
      id:'N°04',
      name: 'kaluna',
      type: ['bug', 'poison'],
    },
    {
      thumbnail: './assets/005.png',
      id:'N°05',
      name: 'ratata',
      type: ['plant'],
    },
    {
      thumbnail: './assets/006.png',
      id:'N°06',
      name: 'pikachu',
      type: ['normal'],
    },
    {
      thumbnail: './assets/007.png',
      id:'N°07',
      name: 'vulpix',
      type: ['fire', 'plant'],
    },
    {
      thumbnail: './assets/008.png',
      id:'N°08',
      name: 'jigglypuff',
      type: ['normal', 'fairy'],
    },
    {
      thumbnail: './assets/009.png',
      id:'N°09',
      name: 'ice',
      type: ['bug'],
    },
    {
      thumbnail: './assets/010.png',
      id:'N°10',
      name: 'ground',
      type: ['electrical'],
    },
    {
      thumbnail: './assets/011.png',
      id:'N°11',
      name: 'ghost',
      type: ['poison'],
    },
    {
      thumbnail: './assets/012.png',
      id:'N°12',
      name: 'deer',
      type: ['fire'],
    },
    {
      thumbnail: './assets/013.png',
      id:'N°13',
      name: 'dark',
      type: ['fairy'],
    },
    {
      thumbnail: './assets/014.png',
      id:'N°14',
      name: 'stell',
      type: ['normal', 'electrical'],
    },
    {
      thumbnail: './assets/015.png',
      id:'N°15',
      name: 'cat',
      type: ['fire'],
    },
    {
      thumbnail: './assets/016.png',
      id:'N°16',
      name: 'rock',
      type: ['fairy', 'poison'],
    }
  ]
  const myContainer = document.querySelector('#div-container')
   pokemons.forEach(item => {
      const img = document.createElement('img');
      const id = document.createElement('p')
      const nombre = document.createElement('h4');
      const type = document.createElement('p')
      const card = document.createElement('div');
      const ability = document.createElement('p')
      img.src = item.thumbnail;
      id.innerHTML = item.id;
      nombre.innerHTML = item.name;
      for(let i = 0; i<item.type.length; i++) {
      ability.innerHTML += item.type[i] + " "
      }
      card.append(img , id, nombre, ability);
      card.className='my-card';
      myContainer.appendChild(card)
  
  
  
  })