import {ChatEngine} from 'react-chat-engine'
import './App.css' 
import ChatFeed from './components/ChatFeed.jsx'


const App = () =>{
    return(
        <ChatEngine
            height = '100vh'
            projectID = '8ce29838-d19b-4064-96de-09c7903145bf'
            userName = 'Cris'
            userSecret = 'umntwana1.'
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;