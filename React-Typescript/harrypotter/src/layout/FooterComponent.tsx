
import { useState} from 'react';
import { Footer} from '../GeneralComponents/Interfaces';





const FooterComponent = () => {
    
    const [text, setText] = useState<Footer>(
        {
            footerText: "Severus Snape is the best character ever."
        } );



  return (
    <div className="footer">
        
        <p>{text.footerText}</p>
       
     
      
    </div>
  );
};

export default FooterComponent;