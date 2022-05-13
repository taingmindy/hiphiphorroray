const movieNames = ["The VVitch (2016) -  Set in the 1630s, it follows a Puritan family who encounter forces of evil in the woods beyond their New England farm.", "Hereditary (2018) - When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.", "Train to Busan (2016) - A man, his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea.", "Dawn of the Dead (2004) - Set in Milwaukee, Dawn of the Dead follows a group of survivors who take refuge in an upscale suburban shopping mall during a zombie apocalypse.", "28 Weeks Later (2007) - 28 Weeks Later follows the story of a family and its desperate attempts at survival during the Rage virus outbreak in England.", "The Wailing (2016) - Suspicion leads to hysteria when rural villagers link a series of brutal murders to the arrival of a mysterious stranger.", "In the Earth (2021) - As the world searches for a cure to a devastating virus, a scientist and a park scout venture deep into the woods. As night falls, their journey becomes a terrifying voyage through the heart of darkness as the forest comes to life around them.", "The Conjuring (2013) - Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", "The Exorcism of Emily Rose (2005) - A lawyer takes on a negligent homicide case involving a priest who performed an exorcism on a young girl.", "Poltergeist (1982) - Shortly after a young family moves into their new suburban home they begin receiving visits from ghosts.", "Gonjiam: Haunted Asylum (2018) - The crew of a horror web series travels to an abandoned asylum for a live broadcast. It soon encounters much more than expected as it moves deeper inside the nightmarish old building.", "Insidious (2010) - Parents take drastic measures when it seems their new home is haunted and their comatose son is possessed by a malevolent entity.", "Texas Chainsaw Massacre (2022) - Influencers looking to breathe new life into a Texas ghost town encounter Leatherface, the legendary killer who wears a mask of human skin.", "Halloween (1978) - The plot centers around a mental patient Michael Myers who was committed to a sanitarium for murdering his babysitting teenage sister on Halloween night when he was six years old. Fifteen years later, he escapes and returns to his hometown, where he stalks a female babysitter and her friends, while under pursuit by his psychiatrist.", "The Strangers (2008) - A young couple staying in an isolated vacation home are terrorized by three unknown assailants.", "Happy Death Day (2017) - It follows a college student who is murdered on the night of her birthday and begins reliving the day repeatedly, at which point she sets out to find the killer and stop her death.", "Candyman (2021) - For decades, the housing projects of Chicago's Cabrini-Green were terrorized by a ghost story about a supernatural, hook-handed killer. In present day, an artist begins to explore the macabre history of Candyman, not knowing it would unravel his sanity and unleash a terrifying wave of violence that puts him on a collision course with destiny.", "Hush (2016) - A deaf writer who retreated into the woods to live a solitary life must fight for her life in silence when a masked killer appears in her window.", "IT (2017) - Set in Derry, Maine, the film tells the story of The Losers' Club, a group of seven outcast children who are terrorized by the eponymous being emerges from the sewer, only to face their own personal demons in the process."];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${movieNames[getRandomNumber(movieNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    }    else {
            nav.classList.remove('active')
    }
}