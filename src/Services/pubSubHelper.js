import Amplify, { Auth, PubSub } from 'aws-amplify'
import { AWSAppSyncProvider, AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers"

let pubsubInstance = null
let REACT_APP_MQTT_ID = '<mqtt_id>'
debugger

const subscribe = async (userId, userEmail, onMessage) => {
    debugger
    try {
        unsubscribe()
        const userCreds = await Auth.currentCredentials()
        const userIdentityId = userCreds.identityId
        debugger
        
        pubsubInstance = PubSub.subscribe(`orderNotif`).subscribe({
            next: data => {
                debugger
                onMessage(data.value.message)
            },
            error: error => {
                debugger
            },
            close: () => {
                debugger
            },
        })
        debugger
    } catch (e) {
        debugger
        console.log(e.stack)
    }
}

const unsubscribe = () => {
    console.log("unsubscribed", pubsubInstance)
    if (pubsubInstance) {
        pubsubInstance.unsubscribe()
        pubsubInstance = null
    }
}

export default {
    subscribe,
    unsubscribe
}