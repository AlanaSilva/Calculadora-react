import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #220056;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    border-radius: 25px;
    background-color: #08002e;
    width: 30%;
    height: 72%;
    min-height: 350px;
    
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`
export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`