import Amplify, { Auth, PubSub } from 'aws-amplify'
import { AWSAppSyncProvider, AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers"

let pubsubInstance = null

const subscribe = async (userId, userEmail, onMessage) => {
    try {
        unsubscribe()
        const userCreds = await Auth.currentCredentials()
        const userIdentityId = userCreds.identityId
        
        pubsubInstance = PubSub.subscribe(`orderNotif`).subscribe({
            next: data => {
                onMessage(data.value.message)
            },
            error: error => {
                console.log('pubsub err', error)
            },
            close: () => {
                console.log('pubsub closed')
            },
        })
    } catch (e) {
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