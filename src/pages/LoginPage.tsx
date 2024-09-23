import styled from "styled-components"
import { Colors } from "../style/colors"
import Input from "../components/common/Input"
import { useNavigate } from "react-router-dom"
import BlackLogo from "../assets/BlackLogo"

function LoginPage() {
    const navigate = useNavigate()

    const toSignUpHandler = () => {
        navigate("/signup")
    }

    const toMainHandler = () => {
        navigate("/main")
    }

    return (
        <>
            <Background>
                <BlackLogo />

                <InputContainer>
                    <Input label="아이디" placeholder="아이디를 입력해주세요" />
                    <Input
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                    />

                    <SubmitButton onClick={toMainHandler}>로그인</SubmitButton>
                    <TextContainer>
                        계정이 없으신가요?
                        <ToSignUp onClick={toSignUpHandler}>회원가입</ToSignUp>
                    </TextContainer>
                </InputContainer>
            </Background>
        </>
    )
}

export default LoginPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    background: linear-gradient(${Colors.White}, ${Colors.Gray200});
`

const InputContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 50px;
    background: linear-gradient(${Colors.Gray300}, ${Colors.Gray400});
    border-radius: 20px;
`

const SubmitButton = styled.button`
    margin-top: 20px;
    width: 411.6px;
    height: 40px;
    color: ${Colors.White};
    font-size: 16px;
    background: ${Colors.Gray800};
    cursor: pointer;
    border: none;
    border-radius: 12px;
    transition: 200ms;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${Colors.Gray800};
    font-size: 16px;
`

const ToSignUp = styled.span`
    color: ${Colors.Blue};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
