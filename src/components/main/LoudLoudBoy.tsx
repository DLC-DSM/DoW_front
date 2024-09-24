import styled from "styled-components"
import { Colors } from "../../style/colors"
import { MdDelete } from "react-icons/md"

interface Props {
    name?: string
    onClickDel?: () => void
}

function LoudLoudBoy({ name, onClickDel }: Props) {
    return (
        <>
            <Container>
                <Text>{name}</Text>
                <DeleteIconButton onClick={onClickDel}>
                    <MdDelete />
                </DeleteIconButton>
            </Container>
        </>
    )
}

export default LoudLoudBoy

const Container = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(${Colors.Gray200}, ${Colors.Gray300});
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Gray800};
    margin-left: 10px;
`

const DeleteIconButton = styled.p`
    margin-left: auto;
    margin-right: 10px;
    font-size: 20px;
    color: ${Colors.Gray500};
    cursor: pointer;
    transition: 300ms;

    &:hover {
        color: ${Colors.CriticalMain};
    }
`
