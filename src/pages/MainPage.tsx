import styled from "styled-components"
import { Colors } from "../style/colors"
import LoudLoudBoy from "../components/main/LoudLoudBoy"
import List from "../components/main/List"

function MainPage() {
    return (
        <>
            <Background>
                <LeftBar>
                    <ProfileContainer>
                        <Profile />
                        <GroupName>대덕소프트웨어마이스터고등학교</GroupName>
                        <Explain>남은 일정 개수 : 8</Explain>
                        <Explain>연결된 기기 수 : 4</Explain>
                    </ProfileContainer>

                    <ConnectContainer>
                        <ConnectTitle>연결된 기기</ConnectTitle>
                        <ConnectWrapper>
                            <LoudLoudBoy name="Hamster1" />
                            <LoudLoudBoy name="Hamster2" />
                            <LoudLoudBoy name="Hamster3" />
                            <LoudLoudBoy name="Gangster1" />
                        </ConnectWrapper>
                    </ConnectContainer>
                </LeftBar>

                <Container>
                    <ListTitle>일정 목록</ListTitle>
                    <ListContainer>
                        <List
                            name="마감하기"
                            date="2024-09-23T15:39:22"
                            explain="마감을 할 지어다"
                        />
                        <List
                            name="마감하기"
                            date="2024-09-23T15:39:22"
                            explain="마감을 할 지어다"
                        />
                        <List
                            name="마감하기"
                            date="2024-09-23T15:39:22"
                            explain="마감을 할 지어다"
                        />
                        <List
                            name="마감하기"
                            date="2024-09-23T15:39:22"
                            explain="마감을 할 지어다"
                        />
                    </ListContainer>
                </Container>
            </Background>
        </>
    )
}

export default MainPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: ${Colors.White};
    /* display: flex;
    justify-content: center;
    align-items: center; */
`

const LeftBar = styled.div`
    width: 20%;
    height: 100vh;
    background: ${Colors.Gray100};
    border-radius: 0 10px 10px 0;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    position: fixed;
    gap: 50px;
`

const ProfileContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: start;
    align-items: left;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
`

const Profile = styled.div`
    width: 100px;
    height: 100px;
    background: ${Colors.Gray500};
    border-radius: 10px;
`

const GroupName = styled.p`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Gray800};
`

const Explain = styled.p`
    width: 100%;
    font-size: 18px;
    color: ${Colors.Black};
`

const ConnectContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const ConnectTitle = styled.div`
    width: 100%;
    font-size: 20px;
    padding: 10px 0;
    font-weight: bold;
    color: ${Colors.Gray500};
    border-bottom: 1px solid ${Colors.Gray300};
`

const ConnectWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const Container = styled.div`
    margin-left: auto;
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

const ListTitle = styled.div`
    width: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px 5px;
    color: ${Colors.Gray500};
    border-bottom: 1px solid ${Colors.Gray300};
`

const ListContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`
