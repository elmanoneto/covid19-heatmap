import styled from 'styled-components'

const WrapperData = styled.section<{ background: string }>`
    flex: 1;
    min-width: 400px;
    margin: 5px 5px 0;
    border-radius: 5px;
    min-height: 100px;
    text-align: center;
    display: flex;
    flex-flow: column;
    line-height: 0;
    justify-content: space-evenly;
    background-color: ${props => props.background};

    h3 {
        font-weight: normal;
    }

    p {
        font-weight: bold;
    }

    p, h3 {
        margin: 0;
        padding: 0;
    }

    .white-text {
        color: #fff;
    }
`

export default WrapperData 