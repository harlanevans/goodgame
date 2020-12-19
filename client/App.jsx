import React, { useEffect, useState } from 'react';


// Hooks? or not to hooks?

const App = () => {
    const [games, setGames] = useState([])

    // like a componentDidMount
    // This will render instantly when the component first renders 
    // to the virtualDOM
    useEffect(() => {
        console.log("Hit UseEffect")
    }, [])
    
    const myFunction = () => {
        console.log("Hit my function")
    }
    
    return (
        <div>
            GoodGame
             {/* {myFunction()} */}
        </div>
    )
}

export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { games: [] }

//         this.myFunction = this.myFunction.bind(this)
//     }
    
//     componentDidMount() {
//         console.log("Hit ComponentDidMount")
        
//     }
    
//     myFunction = () => {
//         console.log("Hit my function")
//     }
    
//     render() {
//         return (
//             <div>
//                 GoodGame
//                  {this.myFunction()}

//             </div>
//         )
//     }
// }

// export default App;