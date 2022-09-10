import React,{useState, useRef} from 'react'
import Button from './Button'
import axios from 'axios';
import StyledLinkSection from './styles/LinkShortener.styled'
import ShortenedLink from './ShortenedLink';
import db from '../db'; 
// import { useLiveQuery } from "dexie-react-hooks";


const LinkShortener = (props) => {
    // const {getUrl, newDataFunction, setUrl, url} = props;

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     console.log('good');
    //     console.log(url);
    //     setUrl('')
        
    // }

    const [url] = useState("");
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const inputValue = useRef(null);
    const inputForm = useRef(null);
    const [test,setTest] = useState(false);


    // const getUrl = () => {
    //     //setUrl(event.target.value)
    //     //console.log(event.target.value);
    //     setUrl(inputValue.current.value);

    // }

    const getData = async () => {
      setIsLoading(true)
      await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue.current.value}`)
        .then((response) => {
          setData(response.data)
          setIsLoading(false)

        })
        console.log('is working');
    }

    const {full_short_link, original_link} = data.result || {}
    
    // async function storeLinksInDB() {
    //     try {
    //         full_short_link !== undefined && 
    //         await db.links.add({
    //             original_link,
    //             full_short_link
    //         });
    //         console.log(`links were added successfully `);
    //     } catch (error) {
    //         console.log('links were not added successfully');

    //     }
    //     console.log('is truly working');
    //     try {
    //         resetForm()
    //         // check()

    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

    function twoFunctions(event){
        event.preventDefault();
        // getUrl();
        //getUrl();

        getData();
        check();
        resetForm();
        
        setTest(true);
        console.log(original_link);

        return false;

    }

    var userData = [];
    let users = {oLink: '', fLink:''}


    function saveUserData(){
        if(original_link){
        // userData.push([full_short_link,original_link])
        // userData.push(['test', '2'])
        // userData.push(['good', '3'])
        // userData.push(['fine', '4'])
        users.oLink= original_link;
        users.fLink = full_short_link
        }

        console.log(userData);
        console.log(users);
    }
    test ? saveUserData() : console.log('ffffffgggghhh');

        // const urls = useLiveQuery(
        //     () => db.links.reverse().toArray()
        // );

        function check(){
            if(inputValue.current.value === ''){
                setIsLoading(false)
                console.log('set to false');
            }
            
        }

        function resetForm(){
            if(isLoading === false && inputValue.current.value){
                inputForm.current.reset();
            }
        }

    return (
        <StyledLinkSection>
            <form ref={inputForm} onSubmit={twoFunctions}>
                <input type="text" ref={inputValue} placeholder="Shorten a link here..."/>
                <Button
                name="Shorten it!" 
                backgroundColor="hsl(180, 66%, 49%)"
                borderRadius="10px"
                type="submit"
                />
            </form>

            {isLoading && 'Loading'}          
            
            <ShortenedLink fullShortLink={full_short_link} originalLink={original_link} userInfo={userData} />
            
        </StyledLinkSection>
    )
}

export default LinkShortener