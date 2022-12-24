import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import {Grid,Form, TextArea,Message} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';


function App() {

  const [markdown, setMarkdown] = useState('');


  return (
    <>
    <Message positive style={{width:"50%",display:"block",margin:"10px auto"}}>
    <Message.Header style={{textAlign:"center"}}>Markdown preview</Message.Header>
  </Message>
    <Grid style={{height:"100vh",width:"100vw",margin:"0px"}}>
      <Grid.Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Grid.Column style={{width:"50%",height:"100%",padding:"10px"}}>
          <Form>
            <TextArea className="input" rows={29} placeholder="write markdown code here" value={markdown} onChange={(e,d)=>setMarkdown(d.value)}></TextArea>  
          </Form>
        </Grid.Column>
        <Grid.Column style={{ width: "50%", height: "100%", padding: "10px" }}>
          <div className='input' style={{ width: "100%" ,height:"calc(100% - 2%)",padding:"18px",background:"white",borderRadius:"5px"}} >
                <ReactMarkdown className='output'>{markdown}</ReactMarkdown>
          </div>  
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>     
  );
}

export default App;
