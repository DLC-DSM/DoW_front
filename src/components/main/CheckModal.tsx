import styled from "styled-components"
import { Colors } from "../../style/colors"
import Input from "../common/Input"

interface Props {
    type?: string
    title?: string
    subtitle?: string
    check?: () => void
    close?: () => void
    button?: string
}

function CheckModal({
    type = "check",
    title,
    subtitle,
    check,
    close,
    button,
}: Props) {
    return (
        <>
            {type == "check" && (
                <Background>
                    <Container>
                        <Wrapper>
                            <TitleContainer>
                                <Title>{title}</Title>
                                <SubTitle>{subtitle}</SubTitle>
                            </TitleContainer>
                            <ButtonContainer>
                                <Button onClick={check}>확인</Button>
                                <Button onClick={close}>취소</Button>
                            </ButtonContainer>
                        </Wrapper>
                    </Container>
                </Background>
            )}
            {type == "input" && (
                <Background>
                    <Container>
                        <Wrapper>
                            <Form>
                                <Input
                                    label="제목"
                                    placeholder="제목을 입력해주세요"
                                />
                                <Input
                                    label="날짜"
                                    placeholder="날짜를 입력해주세요(XXXX.XX.XX)"
                                />
                                <Input
                                    label="내용"
                                    placeholder="일정 내용을 입력해주세요"
                                />
                                <ButtonContainer>
                                    <Button onClick={check}>{button}</Button>
                                    <Button onClick={close}>취소</Button>
                                </ButtonContainer>
                            </Form>
                        </Wrapper>
                    </Container>
                </Background>
            )}
            {type == "connect" && (
                <Background>
                    <Container>
                        <Wrapper>
                            <Form>
                                <Input
                                    label="기기ID"
                                    placeholder="기기ID을 입력해주세요"
                                />
                                <ButtonContainer>
                                    <Button onClick={check}>{button}</Button>
                                    <Button onClick={close}>취소</Button>
                                </ButtonContainer>
                            </Form>
                        </Wrapper>
                    </Container>
                </Background>
            )}
        </>
    )
}

export default CheckModal

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: ${Colors.ModalBackground};
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 80%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Container = styled.div`
    width: 40%;
    height: 60%;
    background-color: ${Colors.White};
    border-radius: 10%;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Button = styled.div`
    width: 100%;
    height: 30px;
    background: ${Colors.White};
    border: 1px solid ${Colors.Gray400};
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms;
    color: ${Colors.Gray800};
    font-size: 16px;

    &:hover {
        background-color: ${Colors.Gray100};
    }
`

const ButtonContainer = styled.div`
    margin-top: auto;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Title = styled.p`
    margin-top: 20px;
    width: 100%;
    font-size: 48px;
    font-weight: bold;
    color: ${Colors.Gray800};
`

const SubTitle = styled.div`
    width: 100%;
    font-size: 20px;
    color: ${Colors.Gray500};
`

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`
