import { useState } from 'react';
import RenJS from '@renproject/ren'
import GatewayJS from '@renproject/gateway-js'

export const useRenJS = function (network) {
    const [renJS] = useState(new RenJS(network))
    return renJS
}

export const useGatewayJS = function (network) {
    const [gatewayJS] = useState(new GatewayJS(network))
    return gatewayJS
}

export const getRenJS = function (network) {
    return new RenJS(network)
}

export const getGatewayJS = function (network) {
    return new GatewayJS(network)
}

export default {
    useRenJS,
    useGatewayJS,
    getRenJS,
    getGatewayJS
}
