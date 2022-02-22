import {ChatEngine} from 'react-chat-engine'
import './App.css' 
import ChatFeed from './components/ChatFeed.jsx'


const App = () =>{
    return(
        <ChatEngine
            height = '100vh'
            projectID = 'df655979-aafb-41dc-80bf-2a10f93367ff'
            userName = 'crischat'
            userSecret = 'umntwana1.'
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;