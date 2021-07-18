import styled from "styled-components";

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 800px;
    scrollbar-width: none;
    width: 70%;
    overflow-y: auto;
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: max-content;
    }
    img{
        border-radius: 0px 0px 20px 20px;
        width: 100%;
    }
    p{
        max-width: 70%;
    }
    .bottom{
        width: 90%;
        display: flex;
        align-items: center;
    }
    button{
    }
`;