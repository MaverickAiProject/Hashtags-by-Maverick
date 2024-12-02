import { createContext, useEffect, useState } from "react";
import run, { runSpecial } from "../config/gemini";
import { HASHTAGS } from "../utils/hashtagsConsts";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const [specialLoading, setSpecialLoading] = useState(false);
    const [specialResult, setSpecialResult] = useState(HASHTAGS.SOCIAL_MEDIA_SECTION);
    const [specialInput, setSpecialInput] = useState('')
    const [socialMedia, setSocialMedia] = useState('Instagram')
    const [contentType, setContentType] = useState('Reels')

    // copy function
    const [copyText, setCopyText] = useState(null)

    const copyFunction = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Text Copied")
            })
            .catch((err) => {
                alert("Error")
                console.log("Error in copying Text", err)
            })
    }




    const generateHashtags = async () => {
        setResultData("")
        setLoading(true)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

    const generateSpecialHashtags = async () => {
        setSpecialLoading(true)

        if (socialMedia === 'Twitter' && (contentType !== 'Post' && contentType !== 'Tweet')) {
            alert("You can only post Tweets and Posts on Twitter.");
            setSpecialLoading(false)
            return;
        } else if (socialMedia !== 'Twitter' && contentType === 'Tweet') {
            alert("Tweets are not allowed on this social media platform.");
            setSpecialLoading(false)
            return;
        } else if (socialMedia !== 'Youtube' && contentType === 'Shorts') {
            alert("Shorts are the only valid on YouTube.");
            setSpecialLoading(false)
            return;
        } else {
            setSpecialResult("")
            const specialResponse = await runSpecial(socialMedia, contentType, specialInput);
            setSpecialResult(specialResponse)
            setSpecialLoading(false)
        }
        setSpecialInput('')
    }


    const contextValue = {
        input,
        setInput,
        loading,
        setLoading,
        resultData,
        setResultData,
        generateHashtags,
        socialMedia, setSocialMedia,
        contentType, setContentType,
        specialLoading, setSpecialLoading,
        specialResult, setSpecialResult,
        specialInput, setSpecialInput,
        generateSpecialHashtags,
        copyText, setCopyText,
        copyFunction
    };
    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    );
};

export default ContextProvider;
