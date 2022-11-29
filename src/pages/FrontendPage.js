import React,{useState,useEffect} from 'react'
import ListItem from '../components/ListItem'
import styled from 'styled-components';
import TypeWriterText from '../components/TypeWriterText';
import CoverVideo from '../components/CoverVideo';
import Header from '../components/Header';
const FrontendPage = () => {
    let [notes, setNotes] = useState([])
    useEffect(()=>{
        getNotes()
    },[])

    let getNotes = async()=>{
        let response = await fetch('http://127.0.0.1:8000/api/question/')
        let data = await response.json()
        console.log("Data: ",data)
        setNotes(data)
    }
    const Section = styled.section`
        min-height: 100%;
        width: 100vw;
        position: relative;
        background-color: ${props => props.theme.text};
        `
    const Container = styled.div`
        width: 90%;
        min-height: 100%;
        margin: 0 auto;
        // background-color: lightblue;

        display: flex;
        justify-content: center;
        align-items: center;
        
    `
    const Box = styled.div`
        width: 50%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    return (
    // <div>
    //     <div className="notes-list">
    //         {notes.map((note,index)=>{
    //             return <ListItem key={index} note={note}/>
    //         })}
    //     </div>
    // </div>
    <>
    <Header/>
    <Section>
        <Container>
            <Box><TypeWriterText/></Box>
            <Box><CoverVideo/></Box>
        </Container>
    </Section>
    </>
  )
}

export default FrontendPage