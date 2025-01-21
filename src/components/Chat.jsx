import {useState} from "react";
import {IconButton, TextField, Button} from "@mui/material";
import {Close as CloseIcon, Chat as ChatIcon} from "@mui/icons-material";
import {useLocalStorage} from "react-use";

function Chat() {
    const [chatOpen, setChatOpen] = useState(true);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useLocalStorage("messages", []); // Manage messages with localStorage

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                content: message.trim(),
                timestamp: new Date().toLocaleTimeString(),
                sender: "You",
            };

            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            setMessage("");
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg">
            {chatOpen ? (
                <div className="flex flex-col h-full max-h-[80vh]">
                    <div className="flex items-center justify-between bg-[#f7c14b85] p-4 rounded-t-lg">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://images.pexels.com/photos/30356380/pexels-photo-30356380/free-photo-of-historic-tower-in-krakow-poland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="font-bold">John Doe</span>
                        </div>
                        <IconButton onClick={() => setChatOpen(false)}>
                            <CloseIcon/>
                        </IconButton>
                    </div>

                    <div className="flex-1 overflow-y-scroll p-4 space-y-4 bg-gray-50">
                        {messages?.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex flex-col space-y-2 ${
                                    index % 2 === 0 ? "items-start" : "items-end"
                                }`}
                            >
                                <div
                                    className={`px-4 py-2 max-w-[60%] rounded-lg ${
                                        index % 2 === 0
                                            ? "bg-gray-200 text-gray-800 text-left"
                                            : "bg-[#f7c14b85] text-gray-900 text-right"
                                    }`}
                                >
                                    <p>{msg.content}</p>
                                    <span className="text-xs text-gray-400">{msg.timestamp}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-3 border-t-2 border-gray-200 p-3 bg-white">
                        <TextField
                            className="flex-1"
                            variant="outlined"
                            multiline
                            rows={2}
                            placeholder="Type a message..."
                            size="small"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className="h-12"
                            onClick={handleSendMessage}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            ) : (
                <div
                    className="flex items-center justify-center bg-yellow-500 rounded-full p-2 shadow-lg cursor-pointer">
                    <IconButton onClick={() => setChatOpen(true)} style={{padding: "4px"}}>
                        <ChatIcon style={{fontSize: 24, color: "white"}}/>
                    </IconButton>
                </div>

            )}
        </div>
    );
}

export default Chat;
