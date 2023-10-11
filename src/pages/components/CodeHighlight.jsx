import React, { useState } from 'react'
import { Autocomplete, Box, IconButton, TextField, Typography } from '@mui/material';
import { ContentPaste, Check } from '@mui/icons-material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeHighlight = (props) => {
    const [copy, setCopy] = useState(false);
    const [programmingLanguage, setProgrammingLanguage] = useState('C++')

    return (
        <Box my='2rem' mx='2rem' borderRadius='10px' bgcolor='#3a404d' overflowX='scroll'
            sx={{
                height: 'auto',
                width: {
                    xs: '350px',
                    sm: '650px',
                    md: '750px',
                    lg: '800px',
                    xl: '800px',
                },
                mx: {
                    xs: '1.5rem',
                    sm: '1.5rem',
                }
            }}
        >

            <Box display='flex' justifyContent='space-between' alignItems='center' paddingX={'0.8rem'}
                paddingTop='15px' color='#fffff'  >

                <Autocomplete
                    id="combo-box-demo"
                    disableClearable
                    value={programmingLanguage}
                    options={'C++ Python Java C# Javascript PHP'.split(' ')}
                    onChange={(e, value) => {
                        setProgrammingLanguage(value)
                    }}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Language" variant='filled'
                        focused
                        sx={{ bgcolor: '#ffffff', borderRadius: '12px', input: { color: '#000000' }, mt: '4px' }}
                    />}
                />
                {
                    copy ?
                        (
                            <Box display='flex' justifyContent='center' alignItems='center' gap={'0px'}>
                                <IconButton aria-label="delete" size="" sx={{ color: '#ffffff' }}>
                                    <Check />
                                    <Typography sx={{ fontSize: '1.2rem', marginLeft: '3px', color:'#ffffff' }}>Copied!</Typography>
                                </IconButton>
                            </Box>
                        )
                        : (
                            <Box display='flex' justifyContent='center' alignItems='center' gap={'0px'}>
                                <IconButton onClick={() => {
                                    navigator.clipboard.writeText(props[programmingLanguage][1]);
                                    setCopy(true)
                                    setTimeout(() => {
                                        setCopy(false)

                                    }, 1000)
                                }}  size="10px" sx={{ color: '#ffffff' }}>
                                    <ContentPaste />
                                    <Typography sx={{ fontSize: '1.2rem', marginLeft: '5px', color:'#ffffff' }}>Copy code</Typography>
                                </IconButton>
                            </Box>
                        )
                }
            </Box>

            <Box marginTop='1rem'>
                <SyntaxHighlighter language={props[programmingLanguage][0]} style={dracula}>
                    {props[programmingLanguage][1]}
                </SyntaxHighlighter>
            </Box>
        </Box>

    );
}

export default CodeHighlight;