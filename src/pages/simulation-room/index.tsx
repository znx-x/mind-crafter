import callApi from '../../utils/gptApiCall'
import {
    MasterEngine,
    Subject1Engine,
    Subject2Engine,
    MasterParameters,
    Subject1Parameters,
    Subject2Parameters,
    MasterApiEndpoint,
    Subject1ApiEndpoint,
    Subject2ApiEndpoint,
} from '../../constants/settings'
import {
    TriggerInput,
    TextBox,
} from '../../styles/simulationRoom'

export function SimulationRoom() {

    async function fetchData() {
        try {
            const response = await callApi({
                apiEngine: 'gpt-3.5-turbo',
                apiParameters: 'parameters here',
                apiMessage: 'message here',
                apiKey: 'your-api-key',
                apiEndpoint: 'https://zara.restratagem.com/api/chat'
            });
            console.log('API Response:', response);
        } catch (error) {
            console.error('API Call Failed:', error);
        }
    }

    return(
        <>
        <TriggerInput placeholder="Parametrization 1 here..." />
        <TriggerInput placeholder="Parametrization 2 here..." />
        <TriggerInput placeholder="First message from 1 to 2 here..." />
        <TextBox>

        </TextBox>
        </>
    )
}

export default SimulationRoom