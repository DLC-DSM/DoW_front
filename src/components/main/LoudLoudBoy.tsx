import styled from "styled-components"
import { Colors } from "../../style/colors"

interface Props {
    name?: string
}

function LoudLoudBoy({ name }: Props) {
    return (
        <>
            <Container>{name}</Container>
        </>
    )
}

export default LoudLoudBoy

const Container = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(${Colors.Gray200}, ${Colors.Gray300});
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Gray800};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
