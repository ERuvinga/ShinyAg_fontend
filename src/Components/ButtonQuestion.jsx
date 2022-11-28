import styled from 'styled-components'
import Color from '../style/colors/Color';

const ButtonStyle = styled.button`
    font-family: Comfortaa;
    font-size: 1em;
    border:none ;
    padding: 30px 90px;
    margin:0px 30px 0px 30px;
    border-radius:30px;
    
    ${(props) => props.selected && `border:solid 1px ${Color.primary};`}
`

export default ButtonStyle;