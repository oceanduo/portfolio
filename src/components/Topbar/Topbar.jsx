import "./Topbar.scss"
import Face4Icon from '@mui/icons-material/Face4';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Topbar(props) {

  return (
    <div className={"topbar " + (props.menuOpen && "active") }>

    {/* 如果props.menuOpen的值是true， 就加上一个“active” 在className上 */}

<div className="left">
<h1>  <Face4Icon className="icon"/> Ocean DUO</h1>  

<SmartphoneIcon className="smallscreen"/>  <p className="smallscreen"> 040 5585 668</p>
<MailOutlineIcon className="smallscreen"/> <p className="smallscreen"> oceanduo@gmail.com</p>

</div>

   <div className="right">

   <div className="hamberger " onClick={()=>{props.setMenuOpen(!props.menuOpen)}}>
        <ul className="line first"></ul>
        <ul className="line second"></ul>
        <ul className="line third"></ul>
        </div>
   </div>
   

    
    
    </div>
  )
}
