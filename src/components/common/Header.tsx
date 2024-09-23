import styled from "styled-components"
import { Colors } from "../../style/colors"
import { GoPerson } from "react-icons/go"
import { AiOutlineBell } from "react-icons/ai"
import Logo from "../../assets/BlackLogo.png"

function Header() {
    return (
        <>
            <Container>
                <Wrapper>
                    <img src={Logo} width={70} />
                    <RightWrapper>
                        <AiOutlineBell />
                        <GoPerson />
                    </RightWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-bottom: 10px;
    border-bottom: 1px solid ${Colors.Gray200};
`

const Wrapper = styled.div`
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-left: auto;
    font-size: 24px;
    color: ${Colors.Gray500};
`
