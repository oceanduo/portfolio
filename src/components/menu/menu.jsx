import './menu.scss'

export default function menu(props) {


  return (
    <div className={'menu ' + ( !props.menuOpen && "close")} 
    onClick={()=> { props.setMenuOpen(!props.menuOpen)}}>
    <ul >

        <li>
            <a href='#about'> About Me </a>
        </li>

        <li>
           <a href='#portfolio'> Portfolio </a>
        </li>
        <li>
        <a href='#works'> Works </a>
        </li>
        <li>
        <a href='#contact'> Contact </a>
        </li>
    </ul>
    
    </div>
  )
}
