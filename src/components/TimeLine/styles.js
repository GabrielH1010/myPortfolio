import styled from 'styled-components'
import { primary, white } from 'styles/colorProvider'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    text-align: center;

    h3{
        color: ${white};
        font-weight: bold;
        text-transform: uppercase;
        font-size: 18px;
        cursor: pointer;
        transition: all ease-in-out 0.3s;

        :hover{
            color: ${primary}
        }
    }

    .acting{
        font-size: 17px;
        font-weight: 400;
    }

`