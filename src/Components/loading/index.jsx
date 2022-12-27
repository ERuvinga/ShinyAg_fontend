import React from 'react'
import styled, { keyframes } from 'styled-components'
import Colors from '../../style/colors/Color'

const loadingAnim = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
    border: solid 6px ${Colors.primary};
    border-bottom-color: transparent;
    border-radius: 50%;
    padding: 11px;
    margin: auto;
    height: 0;
    width: 0;
    animation: ${loadingAnim} .8s linear infinite;
`

function loader() {
    return (
        <Loader />
    )
}

export default loader;
