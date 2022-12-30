import "./portfoliolist.scss"

export default function PortfolioList(props) {
  return (
    <li className={ props.active ? " active" : ""} onClick ={()=>props.setSelected(props.id)}> {props.title}

    {/* {console.log(props.active)}
{ console.log(props.title)} */}
{/* 在这个时候用console可以帮助我们检查问题 */}
{/* 问题 当子component的状态因为click改变的时候，可以传输给她的母component吗 */}
    
     </li>
  )
}
