import styles from "./InlineComponent.module.css";
import "../css/style.css";
const header={color:"red" , fontSize:"100px"}

export default function InlineComponent(){
  return (<div>

    {/* outer bracket for js and inner for object of css  */}

<h1 style={header}>Inline Component</h1>
<h2 className={styles.header1}>header2</h2>

  </div>
  );  
}