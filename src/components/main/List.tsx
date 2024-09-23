import styled from "styled-components"
import { Colors } from "../../style/colors"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { useState } from "react"

interface Props {
    name?: string
    date: string
    explain?: string
}

function List({ name, date, explain }: Props) {
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
                {show && <ExplainContaienr>{explain}</ExplainContaienr>}
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
    z-index: 999;
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
    font-size: 16px;
    color: ${Colors.Gray500};
`
