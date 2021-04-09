export default function (req, res) {
  const continents = [
    {
      id: 1,
      title: 'América do Sul',
      subTitle: 'Continente repleto de reservas naturais.',
      bannerURL: 'https://images.unsplash.com/photo-1591533985302-42123fa9240b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80',
      article: 'A América do Sul é um subcontinente que envolve a parcela meridional da América (continente americano). Com extensão de 17 819 100 km2, possui pouco menos de 12% da superfície terrestre e 6% da população mundial. Quatro quintos do continente ficam abaixo da Linha do Equador, sendo que a América do Sul é banhada pelo mar do Caribe, oceano Atlântico e oceano Pacífico.',
      countriesAmount: 13,
      languagesAmount: 10,
      citiesAmount: 10000,
      citiesMostVisited: [{
        id: 1,
        cityName: 'Rio de Janeiro',
        cityImageURL: 'https://images.unsplash.com/photo-1589137846286-b70355bb0d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80',
        cityCountry: 'Brasil',
        countryImageURL: 'https://vacatures.verisure.nl/content/dam/verisure-site/general/flags/1280px-Flag_of_Brazil.svg.png'
      },
      {
        id: 2,
        cityName: 'Buenos Aires',
        cityImageURL: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        cityCountry: 'Argentina',
        countryImageURL: 'https://static.todamateria.com.br/upload/ba/nd/bandeira_argentina_bb.jpg'
      },
      {
        id: 3,
        cityName: 'Cusco',
        cityImageURL: 'https://images.unsplash.com/photo-1564551099958-799746bfe1aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Peru',
        countryImageURL: 'https://a-static.mlcdn.com.br/1500x1500/bandeira-do-peru-15x22cm-banderminas/wgilbandeiras/154/c43d775bb1dfd4ab1acd9e9f7f59b8a2.jpg'
      },
      {
        id: 4,
        cityName: 'Lima',
        cityImageURL: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=781&q=80',
        cityCountry: 'Peru',
        countryImageURL: 'https://a-static.mlcdn.com.br/1500x1500/bandeira-do-peru-15x22cm-banderminas/wgilbandeiras/154/c43d775bb1dfd4ab1acd9e9f7f59b8a2.jpg'
      },
      {
        id: 5,
        cityName: 'São Paulo',
        cityImageURL: 'https://images.unsplash.com/photo-1572894234976-d961418c709d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=375&q=80',
        cityCountry: 'Brasil',
        countryImageURL: 'https://vacatures.verisure.nl/content/dam/verisure-site/general/flags/1280px-Flag_of_Brazil.svg.png'
      }
      ]
    },
    {
      id: 2,
      title: 'América do Norte',
      subTitle: 'Continente do país mais poderoso do mundo',
      bannerURL: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2750&q=80',
      article: 'Comumente, usa-se a expressão ”norte-americano” para se designar os cidadãos apenas dos EUA, aplicando-se o gentílico “canadense” ou “canadiano” aos habitantes do Canadá, e “mexicano” aos do México. Como peculiaridade o território norte-americano apresenta uma divisão bastante simétrica entre os seus Estados.',
      countriesAmount: 23,
      languagesAmount: 165,
      citiesAmount: 20000,
      citiesMostVisited: [{
        id: 1,
        cityName: 'New York',
        cityImageURL: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=755&q=80',
        cityCountry: 'Estados Unidos',
        countryImageURL: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'
      },
      {
        id: 2,
        cityName: 'Los Angeles',
        cityImageURL: 'https://images.unsplash.com/photo-1581390114939-946f9a890a7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
        cityCountry: 'Estados Unidos',
        countryImageURL: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'
      },
      {
        id: 3,
        cityName: 'Miami',
        cityImageURL: 'https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
        cityCountry: 'Estados Unidos',
        countryImageURL: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'
      },
      {
        id: 4,
        cityName: 'Toronto',
        cityImageURL: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Canadá',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png'
      },
      {
        id: 5,
        cityName: 'Orlando',
        cityImageURL: 'https://images.unsplash.com/photo-1539886075737-7a69d4c28c33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=374&q=80',
        cityCountry: 'Estados Unidos',
        countryImageURL: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'
      }
      ]
    },
    {
      id: 3,
      title: 'África',
      subTitle: 'Segundo continente mais populoso',
      bannerURL: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80',
      article: 'Ele apresenta uma grande diversidade cultural, religiosa e social. A África, por se tratar de um continente de clima tropical, salvo algumas regiões, recebe grande insolação, possui temperatura elevada em razão de sua localização geográfica, pois está próxima à linha do Equador e do Trópico de Câncer e de Capricórnio.',
      countriesAmount: 54,
      languagesAmount: 140,
      citiesAmount: 10000,
      citiesMostVisited: [{
        id: 1,
        cityName: 'Johannesburg',
        cityImageURL: 'https://images.unsplash.com/photo-1552937075-967cf58b74a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'África do Sul',
        countryImageURL: 'http://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png'
      },
      {
        id: 2,
        cityName: 'Cape Town',
        cityImageURL: 'https://images.unsplash.com/photo-1529528070131-eda9f3e90919?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        cityCountry: 'África do Sul',
        countryImageURL: 'http://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png'
      },
      {
        id: 3,
        cityName: 'Cairo',
        cityImageURL: 'https://images.unsplash.com/photo-1590081159886-a60883672ebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=607&q=80',
        cityCountry: 'Egypt',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg'
      },
      {
        id: 4,
        cityName: 'Lagos',
        cityImageURL: 'https://images.unsplash.com/photo-1572816225927-d08fb138f2b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Nigeria',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png'
      },
      {
        id: 5,
        cityName: 'Casablanca',
        cityImageURL: 'https://images.unsplash.com/photo-1581444072387-f3cbbcc8fe33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        cityCountry: 'Morocco',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/900px-Flag_of_Morocco.svg.png'
      }
      ]
    },
    {
      id: 4,
      title: 'Europa',
      subTitle: 'O continente mais antigo.',
      bannerURL: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      article: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
      countriesAmount: 44,
      languagesAmount: 24,
      citiesAmount: 800,
      citiesMostVisited: [{
        id: 1,
        cityName: 'London',
        cityImageURL: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Inglaterra',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1280px-Flag_of_the_United_Kingdom_%282-3%29.svg.png'
      },
      {
        id: 2,
        cityName: 'Paris',
        cityImageURL: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'França',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png'
      },
      {
        id: 3,
        cityName: 'Berlin',
        cityImageURL: 'https://images.unsplash.com/photo-1552553302-9211bf7f7053?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        cityCountry: 'Alemanha',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png'
      },
      {
        id: 4,
        cityName: 'Rome',
        cityImageURL: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80',
        cityCountry: 'Itália',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png'
      },
      {
        id: 5,
        cityName: 'Istanbul',
        cityImageURL: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=343&q=80',
        cityCountry: 'Turquia',
        countryImageURL: 'https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png'
      }
      ]
    },
    {
      id: 5,
      title: 'Oceania',
      subTitle: 'É o menor dentre os continentes',
      bannerURL: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      article: 'O continente é considerado de formação geológica recente, de forma que grande parte do seu relevo é de origem vulcânica e sofreu em menor escala as ações dos agentes externos de transformação do solo e das rochas. Por se encontrar no limite entre duas placas tectônicas, inúmeras regiões apresentam registros de terremotos.',
      countriesAmount: 14,
      languagesAmount: 20,
      citiesAmount: 3000,
      citiesMostVisited: [{
        id: 1,
        cityName: 'Sydney',
        cityImageURL: 'https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Austrália',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png'
      },
      {
        id: 2,
        cityName: 'Melbourne',
        cityImageURL: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        cityCountry: 'Austrália',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png'
      },
      {
        id: 3,
        cityName: 'Brisbane',
        cityImageURL: 'https://images.unsplash.com/photo-1452859030887-bb96ef08d051?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Austrália',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png'
      },
      {
        id: 4,
        cityName: 'Perth',
        cityImageURL: 'https://images.unsplash.com/photo-1524586410818-196d249560e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=907&q=80',
        cityCountry: 'Austrália',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png'
      },
      {
        id: 5,
        cityName: 'Auckland',
        cityImageURL: 'https://images.unsplash.com/photo-1600208669687-f19af3638cb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Nova Zelândia',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1024px-Flag_of_New_Zealand.svg.png'
      }
      ]
    },
    {
      id: 6,
      title: 'Ásia',
      subTitle: 'Continente mais populoso',
      bannerURL: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      article: 'A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.',
      countriesAmount: 48,
      languagesAmount: 230,
      citiesAmount: 13000,
      citiesMostVisited: [{
        id: 1,
        cityName: 'Hong Kong',
        cityImageURL: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
        cityCountry: 'China',
        countryImageURL: 'https://www.estudopratico.com.br/wp-content/uploads/2016/02/bandeira-china-1-1200x675.jpg'
      },
      {
        id: 2,
        cityName: 'Bangkok',
        cityImageURL: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Tailândia',
        countryImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png'
      },
      {
        id: 3,
        cityName: 'Macau',
        cityImageURL: 'https://images.unsplash.com/photo-1556709911-93a82c864ece?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'China',
        countryImageURL: 'https://www.estudopratico.com.br/wp-content/uploads/2016/02/bandeira-china-1-1200x675.jpg'
      },
      {
        id: 4,
        cityName: 'Singapura',
        cityImageURL: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        cityCountry: 'Singapura',
        countryImageURL: 'https://images.uncyc.org/pt/a/a8/Bandeira_de_Singapura.png'
      },
      {
        id: 5,
        cityName: 'Kuala Lumpur',
        cityImageURL: 'https://images.unsplash.com/photo-1581792343403-f3201559d559?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80',
        cityCountry: 'Malásia',
        countryImageURL: 'http://geo5.net/imagens/bandeira-da-malasia-2000px.png'
      }
      ]
    }
  ]

  return res.json(continents)
}