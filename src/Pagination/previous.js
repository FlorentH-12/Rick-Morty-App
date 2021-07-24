// import react from 'react'

// const prev = document.getElementById('prev');
// const characters = document.getElementById('characters');

// function Previous () {

//     let counter = 1;
//     prev.addEventListener('click', () => {

//         fetch(`https://rickandmortyapi.com/api/character/?page=${--counter}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
    
//                 characters.innerHTML = data.results.map(item => `
                
//                     <div class = 'character'>
                    
//                         <img src = '${item.image}' />
        
//                         <div class = 'character-info' data-characterID = '${item.id}'>
                        
//                             <h3>${item.name}</h3>
                        
//                         </div>
                    
//                     </div>
                
//                 `).join('');
//             });
//     });
// }

// export default Previous;