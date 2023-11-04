import { IonContent, IonPage } from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import './splashScreen.css';
import ImageWithText from "../../components/ImageWithText";

const SplashScreen: React.FC = () => {
  return (
    <IonContent className="text-center">
      <IonPage style={{ color: "black" }}>
        
        <div className="splashScreen" style={{ display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column" , height:"100vh"}}>
        <div className="title" >
        <h1 className="text-center" style={{ fontSize:"50px", color:"#FF0101" }}>Smart Medicine Box</h1>
        </div>
          <ImageWithText 
            imageSrc="src\assets\images\splashScreen.png"
            text=""
            style={{
              width: "366px",
              height: "376px",
              display: "inlineBlock"
            }}
          />
        </div>
      </IonPage>
    </IonContent>
  );
};

export default SplashScreen;
