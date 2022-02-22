import MessageForm from "./MessageForm"
import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"
const ChatFeed = (props) =>{
    const {chats, activeChat, messages, userName} = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () =>{
        const keys = Object.keys(messages);

        return keys.map((keys,index) =>{
            const message = messages[keys];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;

            return(
                <div key = {`msg_${index}`} style = {{width: '100%'}}>
                  <div className="message-block">
                    {
                        isMyMessage ?
                        <MyMessage/>
                        : <TheirMessage/>
                    }  
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '16px' : 0, marginLeft: isMyMessage ? 0 : '68px'}}>
                        read-receipts
                        </div>  
                </div>
            )
        })
    }

    renderMessages()
    
    return(
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed