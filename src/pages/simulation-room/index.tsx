import React, { useState, useRef } from 'react';
import callApi from '../../utils/gptApiCall';
import {
    Subject1Engine,
    Subject1ApiEndpoint,
    Subject2Engine,
    Subject2ApiEndpoint,
} from '../../constants/settings';
import {
    TextInput,
    TextBox,
    TextBoxHeader,
} from '../../styles/simulationRoom';
import {
    Button,
    ButtonWrapper,
} from '../../styles'

interface Message {
    subject: number;
    content: string;
}

export function SimulationRoom() {
    const [subject1Params, setSubject1Params] = useState<string>('');
    const [subject2Params, setSubject2Params] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const currentSubject = useRef<number>(1);
    const messageCount = useRef<number>(0);

    const initialMessage = "Let's start this conversation about The Ethical Implications of Terraforming Mars";
    const apiKeySubject1 = process.env.REACT_APP_API_KEY_SUBJECT1 || '';
    const apiKeySubject2 = process.env.REACT_APP_API_KEY_SUBJECT2 || '';

    async function handleExchange(apiMessage: string) {
        const isSubject1 = currentSubject.current === 1;
        const engine = isSubject1 ? Subject1Engine : Subject2Engine;
        const parameters = isSubject1 ? subject1Params : subject2Params; // Use state values for parameters
        const endpoint = isSubject1 ? Subject1ApiEndpoint : Subject2ApiEndpoint;
        const apiKey = isSubject1 ? apiKeySubject1 : apiKeySubject2;

        try {
            const rawResponse = await callApi({
                apiEngine: engine,
                apiParameters: parameters,
                apiMessage: apiMessage,
                apiKey: apiKey,
                apiEndpoint: endpoint,
            });
            const response = JSON.parse(rawResponse);
            const content = response.choices[0].message.content;

            console.log('Full API Response:', rawResponse);

            setMessages(oldMessages => [...oldMessages, { subject: currentSubject.current, content }]);
            currentSubject.current = isSubject1 ? 2 : 1;
            messageCount.current += 1;

            if (messageCount.current < maxMessageCount) {
                handleExchange(content);
            }
        } catch (error) {
            console.error('API Call Failed:', error);
        }
    }

    function startExchange() {
        if (messages.length === 0) {
            handleExchange(initialMessage);
        }
    }

    const maxMessageCount = 15; // Adjusted for demonstration

    return (
        <>
            <TextInput placeholder="Parameters for Subject 1" value={subject1Params} onChange={e => setSubject1Params(e.target.value)} />
            <TextInput placeholder="Parameters for Subject 2" value={subject2Params} onChange={e => setSubject2Params(e.target.value)} />
            <ButtonWrapper>
                <Button onClick={startExchange}>Start</Button>
            </ButtonWrapper>
            <TextBox>
                <TextBoxHeader>
                    Chat and Responses
                </TextBoxHeader>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>Subject {msg.subject}:</strong> {msg.content}
                    </div>
                ))}
            </TextBox>
        </>
    );
}

export default SimulationRoom;
