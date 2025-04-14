
import './App.css'

import Header from './component/header'
import Subscribe from './component/subscribe'

function App() {
    return (
        <div className='homepage'>
            <Header />
            <div className='description'>
                <img src="./src/assets/dot.png" alt="" />
                <p>Taking payments to the next level</p>
                <p className='description-line'></p>
            </div>
            <div className='headline'>
                Send, Receive, and Transact with Ease.
            </div>
            <div className='sub-headline'>
                Launch your business with templates that showcase products, explain pricing,
                and convert users into customers. Profesional design for attracting investors and clients.
            </div>
            <br />
            <Subscribe />
            <div className='bottom-image-container'>
                <img src="./src/assets/vertical-rod.png" alt="" />
            </div>
        </div>
    )
}

export default App
