import styled from "styled-components"
import { Colors } from "../../style/colors"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useState } from "react"
import { MdEdit, MdDelete } from "react-icons/md"

interface Props {
    name?: string
    date: string
    explain?: string
    onClickEdit?: () => void
    onClickDel?: () => void
}

function List({ name, date, explain, onClickEdit, onClickDel }: Props) {
    const [show, setShow] = useState<Boolean>(false)

    let date1 =
        date.slice(0, 10).split("-").join(".") + " " + date.slice(11, 16)

    const toggleHandler = () => {
        setShow(!show)
    }

    return (
        <>
            <AllContainer>
                <Container>
                    <ListTitle>{name}</ListTitle>

                    <RightContainer>
                        <Date>{date1}</Date>
                        <Button onClick={toggleHandler}>
                            {!show ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </Button>
                    </RightContainer>
                </Container>
                {show && (
                    <ExplainContaienr>
                        <Explain>{explain}</Explain>
                        <ButtonContainer>
                            <EditIconButton onClick={onClickEdit}>
                                <MdEdit />
                            </EditIconButton>
                            <DeleteIconButton onClick={onClickDel}>
                                <MdDelete />
                            </DeleteIconButton>
                        </ButtonContainer>
                    </ExplainContaienr>
                )}
            </AllContainer>
        </>
    )
}

export default List

const AllContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const Container = styled.div`
    width: 80%;
    height: 10px;
    padding: 20px;
    background: ${Colors.Gray300};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const ListTitle = styled.p`
    width: 60%;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Black};
`

const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`

const Date = styled.p`
    width: 135px;
    text-align: center;
    color: ${Colors.Gray400};
    font-size: 16px;
`

const Button = styled.div`
    width: 40px;
    height: 40px;
    color: ${Colors.Gray500};
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${Colors.GrayHover};
        transition: 400ms;
    }
`

const ExplainContaienr = styled.div`
    width: 80%;
    padding: 20px;
    background-color: ${Colors.Gray100};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Explain = styled.p`
    width: 90%;
    font-size: 16px;
    color: ${Colors.Gray500};
`

const ButtonContainer = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: auto;
`

const EditIconButton = styled.p`
    font-size: 20px;
    color: ${Colors.Gray300};
    cursor: pointer;
    transition: 300ms;

    &:hover {
        color: ${Colors.Green};
    }
`

const DeleteIconButton = styled.p`
    font-size: 20px;
    color: ${Colors.Gray300};
    cursor: pointer;
    transition: 300ms;

    &:hover {
        color: ${Colors.CriticalMain};
    }
`
