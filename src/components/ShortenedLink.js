import React, {useContext,useState} from 'react'
import Button from './Button'
import ApiDataContext from './ApiDataContext';
import { CopyToClipboard } from "react-copy-to-clipboard";
import StyledShortenedLink from './styles/ShortenedLinks.styled'
import db from '../db';



const ShortenedLink = (props) => {
    const data = useContext(ApiDataContext);
    const [copied, setCopied] = useState(false);
    console.log(data);
    //const {full_short_link, original_link} = data || {};
    const {info} = props || {};
    console.log(info);
    //const {full_short_link, original_link} = info || {}
    const {fullShortLink, originalLink, userInfo } = props || {} 
    console.log(userInfo);


    const [Value, setInputValue] = useState('');
    const news = [];

    const [shortenedLink, setShortenedLink] = useState("");
    const [status, setStatus] = useState("");
    const [copy,setCopy] = useState(false);
    const [value, setValue] = useState("");


    // const createItemFromLocalStorage = () => {
    //     localStorage.setItem('full_shortened_link', full_short_link)
    //     localStorage.setItem('original_link', original_link)
    // }
    
    // const getItemFromLocalStorage = () => {
    //     localStorage.setItem('full_shortened_link', full_short_link)
    //     localStorage.setItem('original_link', original_link)
    // }

    // createItemFromLocalStorage();

    // for (const key in localStorage){
    //     console.log(localStorage.getItem(key));
    // };


    
//    async function storeLinksInDB() {
//         try {
//             const id = await db.links.add({
//                 original_link,
//                 full_short_link
//             });
//             console.log(`links were added successfully ${id}`);
//         } catch (error) {
//             console.log('links were not added successfully');

//         }
//     }
    //full_short_link === undefined ? console.log('not available') : console.log('available');
    
    //full_short_link === undefined ? console.log('not available') : storeLinksInDB();
    //db.delete();


    return (
            <StyledShortenedLink >
                {
                    userInfo.map(item => {
                        console.log(item);
                        return(
                            <div>
                                <p>{item[0]}</p>
                                <div>
                                    <p id="foo">{item[1]}</p>
                                    <br />
                                    <br />

                                    <CopyToClipboard text={fullShortLink} onCopy={() => setCopied(true)}>
                                        <button>Copy</button>
                                    </CopyToClipboard>
                                    {copy ? <span style={{color: 'red'}}>Copied.</span> : null}
                        
                                </div>
                            </div>
                        )
                    })
                }
                
                </StyledShortenedLink>
    )
}

export default ShortenedLink
